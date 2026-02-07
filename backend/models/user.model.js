// 2. step

import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  education: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      links: { github: String, live: String },
    },
  ],
  work: [String],
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
