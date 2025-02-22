import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLength: 3,
        maxLength: 55,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowecase: true,
        trim: true,
        //match: ['^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minLength: 6,

    }
}, {Timestamp: true})

const User = mongoose.model("User", userSchema);

export default User;