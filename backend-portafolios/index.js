require("dotenv").config();
const serverExpress = require("./src/app");
const connectDB = require("./src/db");
connectDB();
serverExpress.listen(process.env.PORT, () => {
	console.log(`Funcionando en: ${process.env.PORT}`);
});