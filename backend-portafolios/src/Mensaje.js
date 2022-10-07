const { Schema, model } = require("mongoose");

const schema = new Schema(
{
	name: {
		type: String,
		require: true
	},
	gmail: {
		type: String,
		require: true
	},
	msg: {
		type: String,
		require: true
	}
}
);

module.exports = model("Mensaje", schema);