import express from "express";
<<<<<<< HEAD
import { addReport, fetchReports, performLabTest, giveMedicationToPatient, fetchPublicReports, fetchAppointmentReport } from "../controllers/LabResultController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public check (No token needed)
router.get("/public/check-result/:cnic", fetchPublicReports);
router.get("/public/appointment-report/:appointmentId", fetchAppointmentReport);

// Get all test reports (filtered by role)
router.get("/reports", verifyToken, fetchReports);
router.get("/tests", verifyToken, fetchReports); // Aliasing for frontend context

// Add a new lab test (doctor or admin orders it)
router.post("/reports", verifyToken, authorizeRoles("admin", "doctor", "hospital_admin"), addReport);
router.post("/tests", verifyToken, authorizeRoles("admin", "doctor", "hospital_admin"), addReport);

// Perform test (enter result) — lab_technician, admin, doctor can all do this
router.put("/tests/:id/perform", verifyToken, authorizeRoles("admin", "doctor", "lab_technician", "hospital_admin"), performLabTest);

// Give medication
router.put("/tests/:id/medication", verifyToken, authorizeRoles("admin", "doctor", "lab_technician"), giveMedicationToPatient);
=======
import {
  getTests,
  createTest,
  performLabTest,
  addMedication,
} from "../controllers/labController.js";

const router = express.Router();

router.get("/tests", getTests); // GET all or by CNIC
router.post("/tests", createTest); // CREATE test
router.put("/tests/:id/perform", performLabTest); // UPDATE result
router.put("/tests/:id/medication", addMedication); // UPDATE medication
>>>>>>> 931e1ee7d492884b6a6ae522f21133eab016e868

export default router;
