import express from "express";
import dotenv from "dotenv";
import dbcon from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./route/userRoute.js";
import cors from "cors";

// Initialize dotenv before anything else
dotenv.config({ path: ".env" });

const app = express();

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Replace with the origin of your frontend
  credentials: true  // Allow cookies to be included in requests
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Initialize DB connection
dbcon();

// Use user routes
app.use("/api/v1/user", userRoute);

// Start the server after loading environment variables
const PORT = process.env.PORT || 8080;  // Changed `process.env.port` to `process.env.PORT`
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
