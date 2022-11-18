import type { NextApiRequest, NextApiResponse } from "next";
import contacts from "@/db/contacts.json";

interface ContactsType {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
}

const contactHandler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		res.status(200).json(contacts);
		res.end();
	}
};

export default contactHandler;
export type { ContactsType };
