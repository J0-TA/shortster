import express from "express";
import loader from "./loaders";
import config from "./config";
import Database from "./config/dbConnection";

const app = express();

// Initialize database connection
const db = new Database();
db.connect(config.DbUrl);

// Initialize app with dependencies and error handlers
loader.init(app);

export default app;
