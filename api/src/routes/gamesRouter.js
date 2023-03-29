const { Router } = require("express");

const gamesRouter = Router();

const { 
    getVideoGamesHandler, 
    getGamesHandler, 
    getIdHandler, 
    createGameHandler } = require("../handlers/gamesHandlers")






gamesRouter.get("/videogames", getVideoGamesHandler);

gamesRouter.get("/", getGamesHandler);

gamesRouter.get("/:id",  getIdHandler);

gamesRouter.post("/", createGameHandler);




module.exports = gamesRouter;