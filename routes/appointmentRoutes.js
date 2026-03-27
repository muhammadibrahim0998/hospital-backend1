import express from "express";
import {
  fetchAppointments,
  addAppointment,
  removeAppointment,
  editAppointment,
} from "../controllers/appointmentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all appointments (protected)
router.get("/", verifyToken, fetchAppointments);

// Add new appointment (protected)
router.post("/", verifyToken, addAppointment);

// Edit appointment (protected)
router.put("/:id", verifyToken, editAppointment);

// Delete appointment (protected)
router.delete("/:id", verifyToken, removeAppointment);

export default router;
