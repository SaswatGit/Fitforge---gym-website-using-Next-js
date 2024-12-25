import connectDB from "../../../../db/connect";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, email, mobile_no, password, cpassword, bio } = reqBody;
        if (password !== cpassword) {
            return NextResponse.json({ message: "Password do not match", success: false });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists", success: false });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            email,
            mobile_no,
            password: hashPassword,
            bio
        });

        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User created successfully", success: true });

    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}

export async function GET(request) {
    try {
        const users = await User.find({});
        return NextResponse.json({ users, success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}