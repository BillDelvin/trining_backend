const express = require("express")
const router = express.Router()
const filmController = require("../controllers/FilmControllers")

router.post("/createMovie", filmController.createMovie)
router.get("/getMovie", filmController.getAllData)

module.exports = router
