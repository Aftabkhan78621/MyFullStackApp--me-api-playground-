//3. step

import Profile from "../models/user.model.js"; // Note: ESM mein .js extension zaroori hai

export const getHealth = (req, res) => {
  res.status(200).json({ status: "UP", message: "Server is healthy" });
};

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const searchProjects = async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne();

    if (!profile) return res.status(404).json({ message: "No profile found" });
    if (!skill) return res.json(profile.projects);

    const filtered = profile.projects.filter((p) =>
      p.description.toLowerCase().includes(skill.toLowerCase()),
    );
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updated = await Profile.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
