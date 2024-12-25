import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Trainer = mongoose.models.Trainer || mongoose.model('Trainer', trainerSchema);

export default Trainer;