import connectDB from "../../../../../db/connect";
import Trainer from "../../../../../models/trainer";
import TrainerPic from "../../../../../models/trainerpic";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();
export async function GET(request, { params }) {
    try {
        const { tid } = params;
        const trainer = await Trainer.find({ _id: tid });
        const trainerPic = await TrainerPic.find({ trainer_id: tid });
        return NextResponse.json({ trainer, trainerPic, success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}

export async function PUT(request, { params }) {
    try {
        const { tid } = params;
        const { name, email, mobile_no, password, cpassword, bio } = await request.json();
        if (password !== cpassword) {
            return NextResponse.json({ message: "Password and Conform Password do not match", success: false });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const filter = { _id: tid };
        const updateDocument = { name, email, mobile_no, password: hashPassword, bio };
        await Trainer.findOneAndUpdate(filter, updateDocument);
        return NextResponse.json({ message: "Profile Updated. Login again using your updated email and password.", success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}