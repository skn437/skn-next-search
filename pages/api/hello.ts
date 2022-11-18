// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	message: string;
};

const Hello = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (req.method === "GET") {
		res.status(200).json({
			message: "Hello There!",
		});
		res.end();
	}
};

export default Hello;
