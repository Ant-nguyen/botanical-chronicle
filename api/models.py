from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token
from typing import Optional
from datetime import datetime


class AccountIn(BaseModel):
    username: str
    password: str
    email: str


class AccountOut(BaseModel):
    id: str
    username: str
    email: str


class Account(AccountOut):
    hashed_password: str


class AccountToken(Token):
    account: AccountOut


class AccountForm(BaseModel):
    username: str
    password: str


class PlantIn(BaseModel):
    name: str
    species: Optional[str]
    picture_url: Optional[str]
    detail: Optional[str]


class Plant(PlantIn):
    account_id: str
    id: str


class PlantLogIn(BaseModel):
    watering: Optional[str]
    weather: Optional[str]
    condition: Optional[str]
    date: datetime


class PlantLog(PlantLogIn):
    plant_id: str


class DeleteStatus(BaseModel):
    success: bool
