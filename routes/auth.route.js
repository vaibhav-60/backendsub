import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => res.send({message: "signed up"}))
authRouter.post("/sign-in", (req, res) => res.send({ message: "signed-in"}))
authRouter.post("/sign-out", (req, res) => res.send({ message: "sign-out"}))

export default authRouter;