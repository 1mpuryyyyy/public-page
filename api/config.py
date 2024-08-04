from dataclasses import dataclass
from typing import Optional

from dotenv import load_dotenv
from os import getenv

from mongo_connection import Connection


@dataclass
class FastAPIConfig:
    host: str
    port: int


class Config:
    __instance = None

    mongo_config = None
    fastapi_config = None
    debug = None

    def __new__(cls, *args, **kwargs):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)

        return cls.__instance

    def create(self,
               mongo_config: Optional[Connection],
               fastapi_config: Optional[FastAPIConfig],
               debug: Optional[bool]):
        self.mongo_config = mongo_config
        self.fastapi_config = fastapi_config
        self.debug = (debug == 'True')


def load_config() -> Config:
    load_dotenv()
    conf = Config()
    conf.create(
        mongo_config=Connection(
            host=getenv('MONGO_HOST'),
            port=int(getenv('MONGO_PORT', '27017')),
            username=getenv('MONGO_USERNAME', ''),
            password=getenv('MONGO_PASSWORD', ''),
            db_name=getenv('MONGO_DBNAME', '')
        ),
        fastapi_config=FastAPIConfig(
            host=getenv('FASTAPI_HOST', ''),
            port=int(getenv('FASTAPI_PORT', '8000'))
        ),
        debug=getenv('DEBUG', False))
    return conf
