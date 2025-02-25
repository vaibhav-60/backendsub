import Subscription from "../models/subscriptions.models.js"

export const createSubscription = async  (req, res, next) => {
    try {
        const subscription = await Subscription.create( {
            ...req.body,
            user: req.user._id
        });

        res.status(201).json({success: true, data: subscription})
    }   catch (error) {
        next(error);
    }

}
 
export const getUsersSubscription = async (req, res, next) => {
    try {
        if(req.user.id != req.params.id) {
            const error = new Error("you are not the righful owner of this lovely account");
            error.status(401);
            throw error;
        }

        const usersSubscription = await Subscription.find({user: req.params.id});

        res.status(201).json({
            success: true,
            data: usersSubscription
        })
    } catch (e) {
        next(e);
    }
}