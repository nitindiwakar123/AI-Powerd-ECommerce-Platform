import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is a required field!"],
        minLength: [3, "name should be contain atleast 3 characters!"],
        maxLength: [20, "name should not be larger than 20 characters!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is a required field!"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please enter a valid email!"],
        trim: true
    },
    password: {
        type: String,
        required: function () { return this.authStrategy === 'local'; }
    }
},
    {
        strict: "throw",
        timestamps: true
    }
);

const User = model("User", userSchema);

export default User;