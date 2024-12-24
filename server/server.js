const express = require("express");
const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const fs = require('fs')
// const { fileURLToPath } = require("url");

const app = express();
const PORT = 4000;

// const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');
// const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

// // Configure multer for disk storage
// const storage = multer.diskStorage({
//   destination: UPLOAD_DIR,
//   filename: (req, file, cb) => {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
//     cb(null, `${uniqueSuffix}-${file.originalname}`);
//   }
// });

// const upload = multer({ 
//   storage,
//   limits: { fileSize: MAX_FILE_SIZE }
// });

// MiddleWare
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const universitiesRoutes = require("./src/university/routes");

// app.post('/api/upload', upload.single("file"), (req, res) => {
//   const length = req.file.originalname.split('.').length;
//   const extention = req.file.originalname.split('.')[length - 1]

//   if(!req.file){
//     return res.status(400).json({ error: 'No file uploaded'});
//   } else if(extention !== 'pdf'){
//     return res.status(400).json({ error: "This file is not pdf" })
//   }
//   console.log(extention);
//   console.log(req.file);
//   res.send('done')
// })

app.get("/", (req, res) => {
  res.status(200).json({ message: "message" });
});
app.use("/university", universitiesRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    message: `The route ${req.originalUrl} does not exist on this server.`,
  });
});

// Centralized error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
});

app.listen(PORT, () => {
  console.log("the server is on port " + PORT);
});
