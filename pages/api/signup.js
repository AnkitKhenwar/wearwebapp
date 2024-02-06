// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "@/lib/db";

 async  function handler(req, res) {
   try{ if (req.method === "POST") {
        const client=await connectToDatabase();
        const {name,email,password}=req.body;
        const db = client.db();
        const result = await db.collection("userssignedup").insertOne({name:name,email:email,password:password});
        res.status(200).json(result);
      }
     } catch(error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } 
}

export default handler;
