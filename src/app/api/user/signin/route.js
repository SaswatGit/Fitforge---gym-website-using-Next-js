import connectDB from "../../../../../db/connect";
import User from "../../../../../models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();


export async function POST(request) {
    try {
        const { email, password } = await request.json();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "Wrong Email or Password", success: false });
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: "Wrong Email or Password", success: false });
        }
        return NextResponse.json({ "user_id": user._id, message: "Logged in successfully", success: true });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong.", success: false });
    }
}