const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();
//shoaibqu7714_db_user
//D0yBEDw05nSTz3ul
//mongodb+srv://shoaibqu7714_db_user:D0yBEDw05nSTz3ul@cluster0.o7ztiwa.mongodb.net/
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
