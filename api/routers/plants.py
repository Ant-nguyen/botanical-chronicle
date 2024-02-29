from fastapi import APIRouter, Depends, HTTPException
from models import PlantIn, Plant, DeleteStatus, PlantLogIn, PlantLog
from queries.plants import PlantQueries
from authenticator import authenticator
from typing import List

router = APIRouter()


@router.post("/api/plants", response_model=Plant)
def create_plant(
    plant_in: PlantIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    return queries.create(plant_in=plant_in, account_id=account_data["id"])


@router.get("/api/mine/plants", response_model=List[Plant])
def get_all_plants(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    return queries.get_all_plants(account_id=account_data["id"])


@router.get("/api/plants/{plant_id}", response_model=Plant)
def get_plant(plant_id: str, queries: PlantQueries = Depends()):
    plant = queries.get_plant(plant_id)
    if plant is None:
        raise HTTPException(status_code=404, detail="Plant not found")
    return plant


@router.delete("/api/plants/{plant_id}", response_model=DeleteStatus)
def delete_plant(plant_id: str, queries: PlantQueries = Depends()):
    return {"success": queries.delete_one(plant_id)}


@router.put("/api/plants/{plant_id}", response_model=Plant)
def update_plant(
    plant_id: str,
    plant_in: PlantIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantQueries = Depends(),
):
    return queries.update(
        plant_id=plant_id, account_id=account_data["id"], plant_in=plant_in
    )
