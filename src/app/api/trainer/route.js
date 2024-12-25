import connectDB from "../../../../db/connect";
import Trainer from "../../../../models/trainer";
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

        const trainer = await Trainer.findOne({ email });
        if (trainer) {
            return NextResponse.json({ message: "Trainer already exists", success: false });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newTrainer = new Trainer({
            name,
            email,
            mobile_no,
            password: hashPassword,
            bio
        });

        const savedTrainer = await newTrainer.save();
        return NextResponse.json({ message: "Trainer created successfully", success: true });

    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}

export async function GET(request) {
    try {
        const trainers = await Trainer.find({});
        return NextResponse.json({ trainers, success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}