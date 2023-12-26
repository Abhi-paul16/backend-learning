import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" })); // setting a limit forn a json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // used for parsing the url %20 example
app.use(express.static("public")); // for serving static files
app.use(cookieParser());

export default app;
