# Botanical Chronicle

-   James Morris
-   Anthony Nguyen
-   Chris Sleeger
-   Lyle Toledo

Botanical Chronicle - Plant memories one entry at a time

# Design

-   [Wireframe](docs/BotanicalChronicleWireframe.png)
-   [Data model](docs/data-model.md)
-   [API designs](docs/apis.md)

## Intended market

We are targeting people who are passionate about growing their plants and want to keep records of their plants.

## Functionality

-   Create an account
    -   Only user who signed up can access the webpage
    -   Have access to your own virtual garden
-   Plants
    -   Name your plant
    -   Record the species of your plant
    -   Post a picture of your plant by providing a URL
    -   Write a brief description or your history with your plant
-   Plant Logs
    -   Insert the date you wrote your entry
    -   Enter the amount of water you gave your plant (if any)
    -   State the weather it was on that date
    -   Give a brief description of the condition of your plant

## Tech Stack

-   MongoDB
-   React + Redux
-   FastAPI
-   Docker
-   Bootstrap

## Project Initialization

1. Clone the forked repository onto your local computer:
   git clone <https://gitlab.com/botanyboys/botanical-chronicle>

2. In the same directory level as the docker-compose.yaml file, create a new file titled .env.
3. Generate an environment signing key and input it into the .env file.

    Example:

    `ENV_SIGNING_KEY = 6d8f2c1a9c3e7f5b1e3d6c8a7f9b2d4e1c5a6d3f7b9e2c4a1d6f8b3c5e7a9d`

4. Build and run the project using Docker with these commands:

```
docker volume create mongo-db
docker-compose build
docker-compose up
```

5. After running these commands, make sure all of your Docker containers are running

6. View Botanical Chronicle in the browser: http://localhost:5173/

## User Story

```
Feature: Add a plant to my garden
As a plant enthusiast
I want to track the status of my plants
So that I can ensure they receive the proper care and maintain their health
Scenario: Add a new plant to "My Garden"
Given I am logged in to Botanical Chronicle
And I am on the "My Garden" page
When I tap on the "Add New Plant" button
Then I should see a form to enter plant details
When I enter the following details:
| Field | Value |
| Plant Name | Monty |
| Species | Monstera |
| Picture | https://example.com/ficus-benjamina.jpg |
| Description | A beautiful indoor plant with glossy leaves |
And I tap on the "Create" button
Then the plant should be added to "My Garden"
And I should be redirected to the "My Garden" page
```

## Stretch Goals

-   Watering Notification
-   Plant Third-Party API to populate species info
-   Calendar integration
-   Plant Memory Forest
    -   A separate group of plants that are no longer there
-   Public Garden
