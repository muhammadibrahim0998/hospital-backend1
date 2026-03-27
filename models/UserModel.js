import db from "../config/db.js";

// Create user in `users` table
export const createUser = async (data) => {
<<<<<<< HEAD
  const sql = "INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)";
=======
  const sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
>>>>>>> 931e1ee7d492884b6a6ae522f21133eab016e868
  return await db.query(sql, data);
};

// Find user by email in `users` table
export const findUserByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const [rows] = await db.query(sql, [email]);
  return rows;
};
<<<<<<< HEAD

export const updateUser = async (id, data) => {
  const sql = "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?";
  return await db.query(sql, [...data, id]);
};

export const deleteUser = async (id) => {
  const sql = "DELETE FROM users WHERE id = ?";
  return await db.query(sql, [id]);
};

=======
>>>>>>> 931e1ee7d492884b6a6ae522f21133eab016e868
