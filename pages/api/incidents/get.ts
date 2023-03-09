// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      //   console.log(time.title);
      const data = await prisma.incident.findMany({
        include: {
          argument: true,
          intensity: true,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching incidents" });
    }
  }
}
