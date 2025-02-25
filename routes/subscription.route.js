import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUsersSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({message: "Get all subscription"}))

subscriptionRouter.get('/:id', (req, res) => res.send({message: "Get subscriptions details"}))

subscriptionRouter.post('/',authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res) => res.send({message: "Update subscriptions details"}))

subscriptionRouter.delete('/', (req, res) => res.send({message: "delete subscription details"}))

subscriptionRouter.get('/user/:id', authorize, getUsersSubscription)

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({message: "CANCEL subscriptions"}))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({message: "Get upcoming renewals"}))



export default subscriptionRouter;