import connectDB from "../../../../db/connect";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
    const { admin_username, admin_password } = await request.json();
    const admin = await Admin.findOne({ admin_username, admin_password });
    if (admin) {
        return NextResponse.json({ "admin_id": admin._id, message: "Logged in successfully", success: true });
    } else {
        return NextResponse.json({ message: "Admin not found", success: false });
    }
}