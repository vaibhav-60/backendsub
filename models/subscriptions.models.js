import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "subscription is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, "subscription cost is required"],
        min: [0, "price must be greater than 0"]
    },
    currency: {
        type: String,
        enum: ["USD", "INR", "GDB"],
        default: 'INR'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
        
    },
    category: {
        type: String,
        enum: ["sports", "entertainment", "lifestyle", "technology", "finance", "politics", "other"],


    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in past"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate
            },
             message: "renewal date must be after the start date"
            
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, {Timestamp: true})


//Below function is a middleware function in mongoose which excute before saving a document to the database.
// it allows to perform validation or operation on the data beign saved
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        // renewal date calculation if this.renewalDate is not provided it will calculate it with the help of 
        // start date and frequency, it uses renewalPeriods to determine how many dates to add to the 
        // startDate to get this.renewalDate.
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
// it checks that if renewalDate is in the past. if true then this.status sets to expired.
    if(this.renewalDate < new Date()) {
        this.status = 'expired'
    }

    next();
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;

