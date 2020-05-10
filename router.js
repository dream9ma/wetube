import express from "express";

export const useRouter = express.Router();

useRouter.get("/", (req, res) => res.send("user index"));
useRouter.get("/edit", (req, res) => res.send("user edit"));
useRouter.get("/password", (req, res) => res.send("user password"));
