### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/xSaboteur/RACING-F1.gitgit
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

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `start` | Starts a development instance of the app |

## Api_Test

All Model in project

| model      | description                          | api test                               |
| :--------- | :----------------------------------- | :------------------------------------- |
| Driver     | get ranking of drivers in every year | localhost:3000/driver/leaderboards     |
| Race       | get winner by race in every year     | localhost:3000/race/leaderboards       |
| FastestLap | get winner fastesLap in every year   | localhost:3000/fastestlap/leaderboards |
| Team       | get ranking of team in every year    | localhost:3000/team/leaderboards       |
