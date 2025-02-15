import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js"

if(!DB_URI) {
    throw new Error(`please define mongodb environment variable`)
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`database is connected in ${NODE_ENV} mode`)
    } catch (error) {
        console.log("Error while connecting to database: ", error)

        process.exit(1);
    }
}

export default connectToDatabase;