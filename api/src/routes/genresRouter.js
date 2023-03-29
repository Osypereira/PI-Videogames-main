const { Router } = require("express");

const genresRouter = Router();

const { genresHandler } = require("../handlers/genresHandlers")


genresRouter.get("/", genresHandler);



module.exports = genresRouter;