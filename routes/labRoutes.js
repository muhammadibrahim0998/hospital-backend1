import express from "express";
import {
  addReport,
  fetchReports,
  performLabTest,
  giveMedicationToPatient,
  fetchPublicReports,
  fetchAppointmentReport,
} from "../controllers/LabResultController.js";

import { getTests, createTest } from "../controllers/labController.js";

import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public endpoints
router.get("/public/check-result/:cnic", fetchPublicReports);
router.get("/public/appointment-report/:appointmentId", fetchAppointmentReport);

// Reports endpoints (role-based)
router.get("/reports", verifyToken, fetchReports);
router.get("/tests", verifyToken, fetchReports); // Aliasing for frontend

router.post(
  "/reports",
  verifyToken,
  authorizeRoles("admin", "doctor", "hospital_admin"),
  addReport,
);

router.post(
  "/tests",
  verifyToken,
  authorizeRoles("admin", "doctor", "hospital_admin"),
  addReport,
);

// Perform lab test
router.put(
  "/tests/:id/perform",
  verifyToken,
  authorizeRoles("admin", "doctor", "lab_technician", "hospital_admin"),
  performLabTest,
);

// Give medication
router.put(
  "/tests/:id/medication",
  verifyToken,
  authorizeRoles("admin", "doctor", "lab_technician"),
  giveMedicationToPatient,
);

// LabController endpoints
router.get("/tests", getTests);
router.post("/tests", createTest);

export default router;
