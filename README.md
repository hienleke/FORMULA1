### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/xSaboteur/RACING-F1.git
```

### Install packages

```shell
npm i
```

### Start the app

```shell
npm start
```

## Available commands

Running commands with npm `npm [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `start` | Starts a development instance of the app |

## Api_Test

All Model in project

| model      | description                          | api test                                                      |
| :--------- | :----------------------------------- | :------------------------------------------------------------ |
| Driver     | get ranking of drivers in every year | localhost:3000/driver/leaderboards                            |
| Race       | get winner by race in every year     | localhost:3000/race/leaderboards                              |
| FastestLap | get winner fastestLap in every year  | localhost:3000/fastestlap/leaderboards                        |
| Team       | get ranking of team by year          | localhost:3000/team/leaderboards/?team=<teamname>&year=<year> |

Demo :
localhost:3000/driver/leaderboards
<img width="878" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/75db79fd-c706-43c1-b6c2-e0e86d5c377f">
localhost:3000/race/leaderboards
<img width="884" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/0fa978fe-214b-449f-ad61-4647296a5eae">
localhost:3000/fastestlap/leaderboards
<img width="901" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/f511ec18-848f-46b8-afcb-ac9fcc229dd7">
localhost:3000/team/leaderboards/?team=Ferrari&year=2005 <- this is get ranking of ferrari team in 2005
<img width="877" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/af914877-f00e-4690-886b-c2e8fc0cef1b">
localhost:3000/team/leaderboards/?team=Ferrari <- this is get ranking of ferrai in every year
<img width="877" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/570604bd-6ee5-4814-a52c-2f165321e098">
localhost:3000/team/leaderboards/?year=2001 <- this is get leaderboard team in 2001
<img width="877" alt="image" src="https://github.com/xSaboteur/FORMULA1/assets/40647637/cd02f8fc-9dc9-4f64-9f05-fe32b0f57f18">

## Solution

step1: using cheerio to craw data table from html

step2: save crawled data json into data folder to manage and then gereral 4 file drives.json , fasttest-laps.json, races.json, team.json and using compass tool import data to mongo Cloud database with 4 json file

step3 : create API

More : + Want to do some code that can cache and auto update data by time in day

## note

-    crawdata.js is the file crawled into data Folder
-    createJsonfile2importMongo.js is the file general 4 json file that can import into mongo
