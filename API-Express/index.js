import express from "express";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log("All request");
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
