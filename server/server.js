const express = require("express");
const cors = require("cors");

const app = express();

// MiddleWare
// app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  }));
app.use(express.json());

const universitiesRoutes = require("./src/universities/routes");
const usersRoutes = require("./src/users/routes");

app.use("/universities", universitiesRoutes);
app.use("/user", usersRoutes);

app.listen(PORT, () => {
  console.log("the server is on port " + 4000);
});
