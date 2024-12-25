import mongoose from "mongoose";

const userPicSchema = new mongoose.Schema({
    user_id: {
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

const UserPic = mongoose.models.UserPic || mongoose.model('UserPic', userPicSchema);

export default UserPic;