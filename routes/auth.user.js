import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.get('/:id',authorize, getUser)
userRouter.post('/:id', (req, res) => res.send({message: "post users"}))
userRouter.put('/:id', (req, res) => res.send({message: "put the user"}))
userRouter.delete('/:id', (req, res) => res.send({message: "delete the user"}))

export default userRouter;