from models import PlantLogIn, PlantLog, PlantLogList, DeleteStatus
from fastapi import APIRouter, Depends, HTTPException
from queries.plant_logs import PlantLogQueries
from authenticator import authenticator
from queries.plants import PlantQueries

router = APIRouter()


@router.post("/api/plants/{plant_id}/plant-logs", response_model=PlantLog)
def create_plant_log(
    plant_id: str,
    plant_log_in: PlantLogIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantLogQueries = Depends(),
    plant_queries: PlantQueries = Depends(),
):
    plant = plant_queries.get_plant(plant_id)
    if plant is None:
        raise HTTPException(status_code=404, detail="Plant not found")
    if plant["account_id"] != account_data["id"]:
        raise HTTPException(
            status_code=403,
            detail="Logged in user does not match plant account id",
        )
    return queries.create(plant_id=plant_id, plant_log_in=plant_log_in)


# This function gets all plant logs associated with one plant
@router.get("/api/plants/{plant_id}/plant-logs", response_model=PlantLogList)
def get_all_plant_logs(
    plant_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantLogQueries = Depends(),
):
    result = queries.get_all_plant_logs(plant_id=plant_id)
    return {"plant_logs": result}


@router.get("/api/plants/plant-logs/{plant_log_id}", response_model=PlantLog)
def get_plant_log(
    plant_log_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantLogQueries = Depends(),
):
    plant_log = queries.get_plant_log(plant_log_id=plant_log_id)
    if plant_log is None:
        raise HTTPException(status_code=404, detail="Plant log not found")
    return plant_log


@router.put(
    "/api/plants/{plant_id}/plants-logs/{plant_log_id}",
    response_model=PlantLog,
)
def update_plant_log(
    plant_log_id: str,
    plant_id: str,
    plant_log_in: PlantLogIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantLogQueries = Depends(),
    plant_queries: PlantQueries = Depends(),
):
    plant = plant_queries.get_plant(plant_id)
    if plant["account_id"] != account_data["id"]:
        raise HTTPException(
            status_code=403,
            detail="Logged in user does not match plant account id",
        )

    return queries.update_plant_log(
        plant_log_id=plant_log_id, plant_log_in=plant_log_in
    )


@router.delete(
    "/api/plants/{plant_id}/plants-logs/{plant_log_id}",
    response_model=DeleteStatus,
)
def delete_plant_log(
    plant_log_id: str,
    plant_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PlantLogQueries = Depends(),
    plant_queries: PlantQueries = Depends(),
):
    plant = plant_queries.get_plant(plant_id)
    if plant["account_id"] != account_data["id"]:
        raise HTTPException(
            status_code=403,
            detail="Logged in user does not match plant account id",
        )

    return {"success": queries.delete_plant_log(plant_log_id)}
