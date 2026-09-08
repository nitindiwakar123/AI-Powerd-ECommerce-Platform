import mongoose from "mongoose";
import {env} from "./env.js";

export async function connectDB() {
    const url = env.dbUrl;
    if(typeof url != "string") {
        console.log("Database Url is not valid: ", url);
        return;
    }
    console.log({url});
    try {
        await mongoose.connect(url);
        console.log("Database Connected!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log("Database Disconnected!");
    process.exit();
});