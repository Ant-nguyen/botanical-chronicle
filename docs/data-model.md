# Data Models

## Accounts

| name             | type     | unique | optional |
| ---------------- | -------- | ------ | -------- |
| account_id       | ObjectId | true   | false    |
| username         | string   | true   | false    |
| email            | string   | false  | false    |
| hashed_password  | string   | true   | false    |


## Plants

| name             | type     | unique | optional |
| ---------------- | -------  | ------ | -------- |
| plant_id         | ObjectId | true   | false    |
| name             | string   | false  | false    |
| species          | string   | false  | true     |
| picture_url      | string   | false  | true     |
| detail           | string   | true   | true     |
| account_id       | string   | false  | false    |

## Plant Logs

| name             | type     | unique | optional |
| ---------------- | -------  | ------ | -------- |
| plant_log_id     | ObjectId | true   | false    |
| watering         | string   | false  | true     |
| condition        | string   | false  | true     |
| date             | datetime | false  | false    |
| plant_id         | string   | false  | false    |
