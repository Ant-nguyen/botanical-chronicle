import os
from pymongo import MongoClient

client = MongoClient(os.environ.get("DATABASE_URL", ""))
db = client["BC-database"]


class MongoQueries:
    @property
    def collection(self):
        return db[self.collection_name]
