from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from database import UserRegister, Database, Close
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    email : str
    full_name : str
    password : str

@app.on_event("startup")
async def startup():
    print("Starting up... creating pool")
    await Database()

@app.on_event("shutdown")
async def shutdown():
    print("Shutting down... closing pool")
    await Close()

@app.post("/register/")
async def register(user: User):
    print("Received user:", user.email, user.full_name, user.password)
    await UserRegister(user.email, user.full_name, user.password)
    return {"message": "User received successfully"}