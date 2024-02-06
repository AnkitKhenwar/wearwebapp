// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "@/lib/db";
import { sign } from "jsonwebtoken";
async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const client = await connectToDatabase();
      const { email, password } = req.body;
      const db = client.db();
      const result = await db.collection("userssignedup").findOne({ email: email, password: password });

      if (!result) {
        res.status(200).json("User Not Found!");
        return;
      } else if (result) {
        // User found, create JWT token
        const token = sign({ email: result.email, userId: result._id }, 'Ankit', { expiresIn: '1h' });

        // Return the token in the response
        
        res.status(200).json({ token, message: "LoggedIn Successfully!" });
        return;
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default handler;
