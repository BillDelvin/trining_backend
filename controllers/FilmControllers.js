const filmModel = require("../models/FilmSchema")

module.exports = {
  createMovie: (req, res, next) => {
    filmModel
      .create({
        title: req.body.title,
        release: req.body.release,
        playing: req.body.playing,
        genre: req.body.genre,
      })
      .then((response) => res.json(response))
      .catch((err) => res.josn(err))
  },
  getAllData: (req, res) => {
    filmModel
      .find({})
      .then((response) => {
        res.json(response)
      })
      .catch((err) => {
        res.json(err)
      })
  },
}
