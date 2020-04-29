var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")
const filmRouter = require("./routes/FileRouter")

var app = express()

mongoose.connect("mongodb://localhost/film", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/movie", filmRouter)

module.exports = app
