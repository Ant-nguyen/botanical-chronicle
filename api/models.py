from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token


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


class Plant(BaseModel):
    pass
