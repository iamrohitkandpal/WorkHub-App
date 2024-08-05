import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.route.js"
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http/localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions));

app.use("/api/v1/user", userRouter);

// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/users/login"
// "http://localhost:8000/api/v1/users/profile/updateProfile"

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on ${PORT}...`);
})