from fastapi.testclient import TestClient
from main import app
from queries.plants import PlantQueries
from authenticator import authenticator

client = TestClient(app=app)


class MockPlantQueries:
    def get_all_plants(self, account_id):
        return [
            {
                "id": "##",
                "name": "bar",
                "species": "foo",
                "picture_url": "earl",
                "detail": "hello",
                "account_id": "##",
            }
        ]

    def create(self, plant_in, account_id):
        return {
            "id": "##",
            "name": "bar",
            "species": "foo",
            "picture_url": "earl",
            "detail": "hello",
            "account_id": "##",
        }


def mock_get_current_account_data():
    return {"id": "FAKE_ACCOUNT_ID"}


def test_get_all_plants():
    # Arrange
    app.dependency_overrides[PlantQueries] = MockPlantQueries
    app.dependency_overrides[authenticator.get_current_account_data] = (
        mock_get_current_account_data
    )
    # Act
    res = client.get("/api/mine/plants")
    # Assert
    assert res.status_code == 200
    assert res.json() == {
        "plants": [
            {
                "id": "##",
                "name": "bar",
                "species": "foo",
                "picture_url": "earl",
                "detail": "hello",
                "account_id": "##",
            }
        ]
    }


def test_create_plant():
    # Arrange
    app.dependency_overrides[PlantQueries] = MockPlantQueries
    app.dependency_overrides[authenticator.get_current_account_data] = (
        mock_get_current_account_data
    )
    # Act
    plant_in = {
        "name": "bar",
        "species": "foo",
        "picture_url": "earl",
        "detail": "hello",
    }
    res = client.post("/api/plants", json=plant_in)
    # Assert
    assert res.status_code == 200
    assert res.json() == {
        "id": "##",
        "name": "bar",
        "species": "foo",
        "picture_url": "earl",
        "detail": "hello",
        "account_id": "##",
    }
