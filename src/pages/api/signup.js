// pages/api/signup.js
import { createUser, getUserByEmail } from "@/lib/fakeDB";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = createUser({ name, email, password });
    return res.status(201).json(newUser);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
