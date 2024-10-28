const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// MiddleWare
// app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const universitiesRoutes = require("./src/universities/routes");

app.get("/", (req, res) => {
  res.status(200).json({ message: "message" });
});
app.use("/universities", universitiesRoutes);

app.listen(PORT, () => {
  console.log("the server is on port " + PORT);
});
