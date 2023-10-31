import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
  // Middleware to log every request
  console.log("Request received at " + new Date());
  next();
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
