import urllib.parse
from dataclasses import dataclass


@dataclass
class Connection:
    username: str
    password: str
    host: str
    port: int
    db_name: str = ''

    def __repr__(self):
        if self.username:
            return (f'mongodb://{self.username}:'
                    f'{urllib.parse.quote_plus(self.password)}'
                    f'@{self.host}:{self.port}/?'
                    f'directConnection=true&serverSelectionTimeoutMS='
                    f'2000&appName=mongosh+2.2.15')
        return (f'mongodb://{self.host}:{self.port}/?'
                f'directConnection=true&serverSelectionTimeoutMS='
                f'2000&appName=mongosh+2.2.15')
