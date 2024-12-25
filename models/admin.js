import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    admin_username: {
        type: String,
        required: true
    },
    admin_password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}); 

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;