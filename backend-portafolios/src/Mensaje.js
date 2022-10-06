const { Schema, model } = require("mongoose");

const schema = new Schema(
{
	from: {
		type: String,
		require: true
	},
	asunto: {
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