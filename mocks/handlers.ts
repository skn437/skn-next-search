import { ContactsType } from "@/pages/api/contacts";
import { rest } from "msw";

export const mockedData: ContactsType[] = [
	{
		id: 69,
		first_name: "SKN",
		last_name: "Hell",
		email: "No",
		phone: "Bull",
	},
];

const handlers = [
	rest.get("http://localhost:3000/api/contacts", async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedData));
	}),
];

export { handlers };
