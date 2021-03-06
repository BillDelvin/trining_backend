const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmTable = new Schema({
	title: {
		type: String,
		required: true,
	},
	release: {
		type: String,
		required: true,
	},
	playing: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model("film", filmTable)
