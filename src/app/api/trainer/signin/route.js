import connectDB from "../../../../../db/connect";
import Trainer from "../../../../../models/trainer";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();


export async function POST(request) {
    try {
        const { email, password } = await request.json();
        const trainer = await Trainer.findOne({ email });

        if (!trainer) {
            return NextResponse.json({ message: "Wrong Email or Password", success: false });
        }
        const isPasswordCorrect = await bcryptjs.compare(password, trainer.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: "Wrong Email or Password", success: false });
        }
        return NextResponse.json({ "trainer_id": trainer._id, message: "Logged in successfully", success: true });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong.", success: false });
    }
}