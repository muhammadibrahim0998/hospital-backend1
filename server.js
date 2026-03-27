import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import db from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import superAdminRoutes from "./routes/superAdminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import labRoutes from "./routes/labRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/healthz", (_req, res) => res.send("OK"));

// Static uploads
app.use("/uploads", express.static("uploads"));

// Auth routes
app.use("/api/auth", authRoutes);

// Super Admin routes
app.use("/api/super-admin", superAdminRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

// Other resource routes
app.use("/api/doctor", doctorRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/lab", labRoutes);
app.use("/api/messages", messageRoutes);

// Reports endpoint
app.get("/api/reports", async (req, res) => {
  const query = "SELECT * FROM reports ORDER BY id DESC";
  try {
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Backend working" });
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
