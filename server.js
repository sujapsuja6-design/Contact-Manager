import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;