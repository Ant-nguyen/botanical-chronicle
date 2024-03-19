# APIs

## Auth

-   **Method**: `GET`, `POST`, `DELETE`, `POST`
-   **Path**: `/token`,`/api/accounts`

Output:
`/token` `GET`

```json
{
    "access_token": "string",
    "token_type": "Bearer",
    "account": {
        "id": "string",
        "username": "string",
        "email": "string"
    }
}
```

`/token` `POST`

```json
{
    {
  "access_token": "string",
  "token_type": "Bearer"
}
}
```

`/token` `DELETE`

```json
{
    true
}
```

`/api/accounts` `POST`

```json
{
    "access_token": "string",
    "token_type": "Bearer",
    "account": {
        "id": "string",
        "username": "string",
        "email": "string"
    }
}
```

Inputs:
`/tokens` `POST`

```json
{
    "username": "string",
    "password": "string"
}
```

`/api/accounts` `POST`

```json
{
    "username": "string",
    "password": "string",
    "email": "string"
}
```

All the endpoints needed to handle: logging in, logging out, create an account. Logging in puts a token that is put in your cookies and logging out removes it from your cookies.

## Plants

-   **Method** `POST`, `GET`, `GET`, `PUT`, `DELETE`
-   **Path**: `/api/plants`, `/api/mine/plants`, `/api/plants/{plant_id}`

Output:
`/api/plants` `POST`

```json
{
    "name": "string",
    "species": "string",
    "picture_url": "string",
    "detail": "string",
    "account_id": "string",
    "id": "string"
}
```

`/api/mine/plants` `GET`

```json
{
    "plants": [
        {
            "name": "string",
            "species": "string",
            "picture_url": "string",
            "detail": "string",
            "account_id": "string",
            "id": "string"
        }
    ]
}
```

`/api/plants/{plant_id}` `GET`

```json
{
    "name": "string",
    "species": "string",
    "picture_url": "string",
    "detail": "string",
    "account_id": "string",
    "id": "string"
}
```

`api/plants/{plant_id}` `PUT`

```json
{
    "name": "string",
    "species": "string",
    "picture_url": "string",
    "detail": "string",
    "account_id": "string",
    "id": "string"
}
```

`api/plants/{plant_id}` `DELETE`

```json
{
    "success": boolean
}
```

Inputs:
`/api/plants` `POST`

```json
{
    "name": "string",
    "species": "string",
    "picture_url": "string",
    "detail": "string"
}
```

`/api/plants/{plant_id}` `PUT`

```json
{
    "name": "string",
    "species": "string",
    "picture_url": "string",
    "detail": "string"
}
```

All endpoints that are you used to handle: creating a plant, getting the list of all the plants, get an individual plant, update an individual plant, and delete and individual plant.

## Plant Logs

-   **Method** `GET`, `POST`, `GET`, `PUT`, `DELETE`
-   **Path**: `/api/plants/{plant_id}/plant-logs`, `/api/plants/plant-logs/{plant_log_id}`, `/api/plants/{plant_id}/plant-logs/{plant_log_id}`

Output:
`/api/plants/{plant_id}/plant-logs` `GET`

```json
{
    "plant_logs": [
        {
            "watering": "string",
            "weather": "string",
            "condition": "string",
            "date": "YYYY-MM-DDTHH:mm:ss.sssZ",
            "plant_id": "string",
            "id": "string"
        }
    ]
}
```

`/api/plants/{plant_id}/plant-logs` `POST`

```json
{
    "watering": "string",
    "weather": "string",
    "condition": "string",
    "date": "YYYY-MM-DDTHH:mm:ss.sssZ",
    "plant_id": "string",
    "id": "string"
}
```

`/api/plants/plant-logs/{plant_log_id}` `GET`

```json
{
    "watering": "string",
    "weather": "string",
    "condition": "string",
    "date": "YYYY-MM-DDTHH:mm:ss.sssZ",
    "plant_id": "string",
    "id": "string"
}
```

`/api/plants/{plant_id}/plant-logs/{plant_log_id}` `PUT`

```json
{
    "watering": "string",
    "weather": "string",
    "condition": "string",
    "date": "YYYY-MM-DDTHH:mm:ss.sssZ"
}
```

`/api/plants/{plant_id}/plant-logs/{plant_log_id}` `DELETE`

```json
{
  "success": boolean
}
```

Input:

`/api/plants/{plant_id}/plant-logs` `POST`

```json
{
    "watering": "string",
    "weather": "string",
    "condition": "string",
    "date": "YYYY-MM-DDTHH:mm:ss.sssZ"
}
```

`/api/plants/{plant_id}/plant-logs/{plant_log_id}` `PUT`

```json
{
    "watering": "string",
    "weather": "string",
    "condition": "string",
    "date": "YYYY-MM-DDTHH:mm:ss.sssZ"
}
```

Plant logs are associated with each individual plants. You can update, delete, or create a plant log multiple times.
