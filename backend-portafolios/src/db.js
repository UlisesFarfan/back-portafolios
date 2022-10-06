const { connect } = require("mongoose");

module.exports = connectDB = () => {
	try {
		connect(process.env.MONGODB_URI);
		console.log("☆*: .｡. o .｡.:*☆");
		console.log("%s database connection established");
	} catch (e) {
		console.log(e);
	}
};