import connectDB from "../../../../../db/connect";
import User from "../../../../../models/user";
import UserPic from "../../../../../models/userpic";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();
export async function GET(request, { params }) {
    try {
        const { uid } = params;
        const user = await User.find({ _id: uid });
        const userPic = await UserPic.find({ user_id: uid });
        return NextResponse.json({ user, userPic, success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}

export async function PUT(request, { params }) {
    try {
        const { uid } = params;
        const { name, email, mobile_no, password, cpassword, bio } = await request.json();
        if (password !== cpassword) {
            return NextResponse.json({ message: "Password and Conform Password do not match", success: false });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const filter = { _id: uid };
        const updateDocument = { name, email, mobile_no, password: hashPassword, bio };
        await User.findOneAndUpdate(filter, updateDocument);
        return NextResponse.json({ message: "Profile Updated. Login again.", success: true });
    } catch (error) {
        return NextResponse.json({ message: error._message, success: false });
    }
}