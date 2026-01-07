import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRouter from "./routes/postRoutes.js";
import authRouter from "./routes/authRoutes.js";
import contactRouter from "./routes/contactRouter.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "https://awaisjotablog.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/posts", postRouter);
app.use("/auth", authRouter);
app.use("/contact", contactRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
