from pydantic import BaseModel
from typing import List, Optional, Union
from models import PlantIn, Plant
from queries.client import MongoQueries
from bson.objectid import ObjectId
from bson.errors import InvalidId


class PlantQueries(MongoQueries):
    collection_name = "Plants"

    def create(self, plant_in: PlantIn, account_id: str):
        plant_dict = plant_in.dict()
        plant_dict["account_id"] = account_id
        self.collection.insert_one(plant_dict)
        plant_dict["id"] = str(plant_dict["_id"])

        return plant_dict

    def get_all_plants(self, account_id: str):
        result = []
        for plant in self.collection.find({"account_id": account_id}):
            plant["id"] = str(plant["_id"])
            result.append(plant)
        return result

    def get_plant(self, plant_id: str):
        try:
            query = self.collection.find_one({"_id": ObjectId(plant_id)})
        except InvalidId:
            query = None
        if query is not None:
            query["id"] = str(query["_id"])
        return query

    def delete_one(self, plant_id: str):
        result = self.collection.delete_one({"_id": ObjectId(plant_id)})
        return result.deleted_count > 0

    def update(self, plant_id: str, account_id: str, plant_in: PlantIn):
        query = {"_id": ObjectId(plant_id), "account_id": account_id}
        changes = plant_in.dict()
        result = self.collection.update_one(query, {"$set": changes})
        if result.matched_count >= 1:
            changes["id"] = plant_id
            changes["account_id"] = account_id
            return Plant(**changes)
