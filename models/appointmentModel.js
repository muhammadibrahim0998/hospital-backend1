import db from "../config/db.js";

// ================= GET ALL APPOINTMENTS =================
export const getAllAppointments = async () => {
  const [rows] = await db.query("SELECT * FROM appointments ORDER BY id ASC");
  return rows;
};

// ================= GET APPOINTMENTS BY DOCTOR =================
export const getDoctorAppointments = async (doctorId) => {
  const [rows] = await db.query(
    "SELECT * FROM appointments WHERE doctor_id = ? ORDER BY id ASC",
    [doctorId]
  );
  return rows;
};

// ================= GET APPOINTMENTS BY PATIENT =================
export const getPatientAppointments = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM appointments WHERE user_id = ? ORDER BY id ASC",
    [userId]
  );
  return rows;
};

// ================= CREATE APPOINTMENT =================
export const createAppointment = async (data) => {
  const { Patient, Doctor, CNIC, Date, Time, Phone, Fee, doctor_id, user_id } = data;

  const [result] = await db.query(
    `INSERT INTO appointments 
     (Patient, Doctor, CNIC, Date, Time, Phone, Fee, doctor_id, user_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [Patient, Doctor, CNIC, Date, Time, Phone, Fee, doctor_id || null, user_id || null]
  );

  return {
    id: result.insertId,
    Patient,
    Doctor,
    CNIC,
    Date,
    Time,
    Phone,
    Fee,
  };
};

// ================= UPDATE APPOINTMENT =================
export const updateAppointment = async (id, data) => {
  const { Patient, Doctor, CNIC, Date, Time, Phone, Fee } = data;
  await db.query(
    `UPDATE appointments 
     SET Patient = ?, Doctor = ?, CNIC = ?, Date = ?, Time = ?, Phone = ?, Fee = ?
     WHERE id = ?`,
    [Patient, Doctor, CNIC, Date, Time, Phone, Fee, id]
  );
};

// ================= UPDATE APPOINTMENT STATUS =================
export const updateAppointmentStatus = async (id, status) => {
  await db.query("UPDATE appointments SET status = ? WHERE id = ?", [status, id]);
};

// ================= DELETE =================
export const deleteAppointment = async (id) => {
  await db.query("DELETE FROM appointments WHERE id=?", [id]);
};
