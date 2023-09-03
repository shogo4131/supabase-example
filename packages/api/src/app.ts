import express from "express";

import authRouters from "./routes/auth";
import postRouters from "./routes/post";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouters);
app.use("/api/posts", postRouters);

export default app;
