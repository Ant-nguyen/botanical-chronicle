from models import PlantLogIn
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
        # Sorting list by date from most recent
        result.sort(key=lambda x:x["date"])
        return result[::-1]

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
            output = self.collection.find_one({"_id": ObjectId(plant_log_id)})
            output["id"] = str(output["_id"])
            return output

    def delete_plant_log(self, plant_log_id: str):
        result = self.collection.delete_one({"_id": ObjectId(plant_log_id)})
        return result.deleted_count > 0

    def cascade_delete(self, plant_id: str):
        result = self.collection.delete_many({"plant_id": plant_id})
        return result.deleted_count > 0
