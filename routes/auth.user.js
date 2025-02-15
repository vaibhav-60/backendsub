import { Router } from "express";

const userRouter = Router();

userRouter.get('/users', (req, res) => res.send({message: "fetch all users"}))
userRouter.get('/:id', (req, res) => res.send({message: "fetch  user"}))
userRouter.post('/:id', (req, res) => res.send({message: "post users"}))
userRouter.put('/:id', (req, res) => res.send({message: "put the user"}))
userRouter.delete('/:id', (req, res) => res.send({message: "delete the user"}))

export default userRouter;