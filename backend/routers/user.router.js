import express from "express";
import {
  getHealth,
  getProfile,
  searchProjects,
  updateProfile,
} from "../controllers/user.controller.js";

const routers = express.Router();
routers.route("/health").get(getHealth);
routers.route("/profile").get(getProfile);
routers.route("/projects").get(searchProjects);
routers.route("/updateProfile").put(updateProfile);

export default routers;
