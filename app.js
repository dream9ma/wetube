import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { useRouter } from "./router";

const app = express();

const handleProfile = (req, res) => res.send("You are on my profile");

const handleHome = (req, res) => res.send("Hello from home");

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", useRouter);

app.get("/", handleProfile);

export default app;
