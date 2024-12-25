import TrainerPic from "../../../../../../models/trainerpic";
import connectDB from "../../../../../../db/connect";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

connectDB();



export async function POST(request, { params }) {
    try {
        const { tid } = params;
        const data = await request.formData();
        const file = data.get("profilePicInput");
        if (!file) {
            return NextResponse.json({ message: "No files received.", success: false });
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = Date.now() + file.name.replaceAll(" ", "_");

        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
        );

        await TrainerPic.create({ trainer_id: tid, pic: filename });
        return NextResponse.json({ message: "Profile Picture Saved", success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error._message, success: false });
    }
}


export async function PUT(request, { params }) {
    try {
        const { tid } = params;
        const data = await request.formData();
        const file = data.get("profilePicInput");
        if (!file) {
            return NextResponse.json({ message: "No files received.", success: false });
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = Date.now() + file.name.replaceAll(" ", "_");

        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
        );
        const filter = { trainer_id: tid };
        const updateDocument = { pic: filename };
        await TrainerPic.updateOne(filter, updateDocument);
        return NextResponse.json({ message: "Profile Picture Updated", success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error._message, success: false });
    }
}