import express from "express";
import db from "./connection/dbConnection.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Connection error.\n'));
db.once("open", () => {console.log('Database connection successful.')})

const app = express();
app.use(express.json());

routes(app);

export default app;