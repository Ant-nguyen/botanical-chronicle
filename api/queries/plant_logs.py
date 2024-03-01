from pydantic import BaseModel
from typing import List, Optional, Union
from models import PlantIn, Plant, PlantLogIn, PlantLog
from queries.client import MongoQueries
from bson.objectid import ObjectId
from bson.errors import InvalidId


class PlantLogQueries(MongoQueries):
    collection_name = "Plant Logs"

    def create(self, plant_log_in: PlantLogIn, plant_id: str):
        plant_log_dict = plant_log_in.dict()
        plant_log_dict["plant_id"] = plant_id
        self.collection.insert_one(plant_log_dict)
        plant_log_dict["id"] = str(plant_log_dict["_id"])

        return plant_log_dict

    def get_all_plant_logs(self, plant_id: str):
        result = []
        for plant_log in self.collection.find({"plant_id": plant_id}):
            plant_log["id"] = str(plant_log["_id"])
            result.append(plant_log)
        return result

    def get_plant_log(self, plant_log_id: str):
        try:
            query = self.collection.find_one({"_id": ObjectId(plant_log_id)})
        except InvalidId:
            query = None
        if query is not None:
            query["id"] = str(query["_id"])
        return query

    def update_plant_log(self, plant_log_id: str, plant_log_in: PlantLogIn):
        query = {"_id": ObjectId(plant_log_id)}
        changes = plant_log_in.dict()
        result = self.collection.update_one(query, {"$set": changes})
        if result.matched_count >= 1:
            output = self.collection.find_one(
                {"_id": ObjectId(plant_log_id)}
            )
            output["id"] = str(output["_id"])
            return output

    def delete_plant_log(self, plant_log_id: str):
        result = self.collection.delete_one({"_id": ObjectId(plant_log_id)})
        return result.deleted_count > 0

# class PlantQueries(MongoQueries):
#     collection_name = "Plants"

#     def create(self, plant_in: PlantIn, account_id: str):
#         plant_dict = plant_in.dict()
#         plant_dict["account_id"] = account_id
#         self.collection.insert_one(plant_dict)
#         plant_dict["id"] = str(plant_dict["_id"])

#         return plant_dict

#     def get_all_plants(self, account_id: str):
#         result = []
#         for plant in self.collection.find({"account_id": account_id}):
#             plant["id"] = str(plant["_id"])
#             result.append(plant)
#         return result

#     def get_plant(self, plant_id: str):
#         try:
#             query = self.collection.find_one({"_id": ObjectId(plant_id)})
#         except InvalidId:
#             query = None
#         if query is not None:
#             query["id"] = str(query["_id"])
#         return query

#     def delete_one(self, plant_id: str):
#         result = self.collection.delete_one({"_id": ObjectId(plant_id)})
#         return result.deleted_count > 0

#     def update(self, plant_id: str, account_id: str, plant_in: PlantIn):
#         query = {"_id": ObjectId(plant_id), "account_id": account_id}
#         changes = plant_in.dict()
#         result = self.collection.update_one(query, {"$set": changes})
#         if result.matched_count >= 1:
#             changes["id"] = plant_id
#             changes["account_id"] = account_id
#             return Plant(**changes)
