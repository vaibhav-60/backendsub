import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({message: "Get all subscription"}))

subscriptionRouter.get('/:id', (req, res) => res.send({message: "Get subscriptions details"}))

subscriptionRouter.post('/', (req, res) => res.send({message: "Create subscriptions"}))

subscriptionRouter.put('/:id', (req, res) => res.send({message: "Update subscriptions details"}))

subscriptionRouter.delete('/', (req, res) => res.send({message: "delete subscription details"}))

subscriptionRouter.get('/users/:id', (req, res) => res.send({message: "Get all users subscriptions"}))

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({message: "CANCEL subscriptions"}))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({message: "Get upcoming renewals"}))

subscriptionRouter.get('/', (req, res) => res.send({message: "Get all subscription"}))

export default subscriptionRouter;