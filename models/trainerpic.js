import mongoose from "mongoose";

const trainerPicSchema = new mongoose.Schema({
    trainer_id: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const TrainerPic = mongoose.models.TrainerPic || mongoose.model('TrainerPic', trainerPicSchema);

export default TrainerPic;