import express from "express";
import {
  fetchAppointments,
  addAppointment,
  removeAppointment,
<<<<<<< HEAD
  editAppointment,
} from "../controllers/appointmentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, fetchAppointments);
router.post("/", verifyToken, addAppointment);
router.put("/:id", verifyToken, editAppointment);
router.delete("/:id", verifyToken, removeAppointment);
=======
} from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/", fetchAppointments);
router.post("/", addAppointment);
router.delete("/:id", removeAppointment);
>>>>>>> 931e1ee7d492884b6a6ae522f21133eab016e868

export default router;
