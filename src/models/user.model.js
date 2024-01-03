import mongoose, { Schema } from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      reuired: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      reuired: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      reuired: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudnary url
      reuired: true,
    },
    coverImage: {
      type: String, // cloudnary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refershToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); 
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);

// bcrypt lib is used to hash the passwords
