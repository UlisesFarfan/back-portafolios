const { connect } = require("mongoose");

module.exports = connectDB = () => {
	try {
		connect(process.env.MONGODB_URI);
	} catch (e) {
		console.log(e);
	}
};
