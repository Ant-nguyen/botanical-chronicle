from fastapi import APIRouter, Depends, HTTPException
from models import PlantIn, Plant, DeleteStatus, PlantList
from queries.plants import PlantQueries
from authenticator import authenticator
from typing import List
from queries.plant_logs import PlantLogQueries

router = APIRouter()


@router.post("/api/plants", response_model=Plant)
def create_plant(
    plant_in: PlantIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    return queries.create(plant_in=plant_in, account_id=account_data["id"])


@router.get("/api/mine/plants", response_model=PlantList)
def get_all_plants(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    result = queries.get_all_plants(account_id=account_data["id"])
    return {"plants": result}


@router.get("/api/plants/{plant_id}", response_model=Plant)
def get_plant(
    plant_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    plant = queries.get_plant(plant_id)
    if plant is None:
        raise HTTPException(status_code=404, detail="Plant not found")
    return plant


@router.delete("/api/plants/{plant_id}", response_model=DeleteStatus)
def delete_plant(
    plant_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
    plant_log_queries: PlantLogQueries = Depends(),
):
    plant = queries.get_plant(plant_id)
    if plant["account_id"] != account_data["id"]:
        raise HTTPException(
            status_code=403,
            detail="Logged in user does not match plant account id",
        )
    deleted = queries.delete_one(plant_id)
    if deleted:
        log_deleted = plant_log_queries.cascade_delete(plant_id)

    return {"success": log_deleted}


@router.put("/api/plants/{plant_id}", response_model=Plant)
def update_plant(
    plant_id: str,
    plant_in: PlantIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    plant = queries.get_plant(plant_id)
    if plant["account_id"] != account_data["id"]:
        raise HTTPException(
            status_code=403,
            detail="Logged in user does not match plant account id",
        )
    return queries.update(
        plant_id=plant_id, account_id=account_data["id"], plant_in=plant_in
    )
