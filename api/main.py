from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from motor.motor_asyncio import AsyncIOMotorClient

from config import load_config
from routers.route import router

app = FastAPI()
config = load_config()

origins = [  # write here your domains
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(str(config.mongo_config))
    app.mongodb = app.mongodb_client[config.mongo_config.db_name]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()


app.include_router(
    router,
    prefix="/api",
    tags=["api"]
)

if __name__ == '__main__':
    uvicorn.run("main:app",
                host=config.fastapi_config.host,
                port=config.fastapi_config.port)
