import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=54.608516&lng=20.228902&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
