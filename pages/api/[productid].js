// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "@/lib/db";

 async  function handler(req, res) {
   try{ if (req.method === "GET") {
    const {productid}=req.query;
    console.log(productid + "node")
        const client=await connectToDatabase();
        const db = client.db();
        const result = await db.collection("tshirts").findOne({description:productid});
        console.log(result)
        res.status(200).json(result);
      }
     } catch(error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } 
}

export default handler;
