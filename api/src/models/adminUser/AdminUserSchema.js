import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },

    role: {
      type: String,
      required: true,
      default:"Admin",
    },

    fName: {
      type: String,
      required: true,
      maxlength: 50,
    },

    lName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    Dob: {
      type: Date,
      default: null,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      maxlength: 500,
    },
    address: {
      type: String,

      maxlength: 50,
    },
     verificationCode: {
      type: String,

      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin_user",AdminSchema)