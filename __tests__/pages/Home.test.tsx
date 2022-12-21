import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { server } from "@/mocks/server";
import { mockedData } from "@/mocks/handlers";
import { rest } from "msw";

// beforeAll(() => server.listen());

// afterEach(() => server.resetHandlers());

// afterAll(() => server.close());

// beforeEach(() => {
// 	render(<Home contacts={[]}></Home>);
// });

describe("Home", () => {
	// it("renders a heading", () => {
	// 	const heading = screen.getByRole("heading", {
	// 		name: /welcome to next\.js!/i,
	// 	});

	// 	expect(heading).toBeInTheDocument();
	// });

	it("should ", async () => {
		server.use(
			rest.get("http://localhost:3000/api/contacts", async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(mockedData));
			})
		);
		await waitFor(() => render(<Home contacts={[]}></Home>));
		//const hell = await waitFor(() => screen.getByTestId(/first-0/i));
		const hell = await screen.findByTestId(/first-0/i);
		expect(hell.textContent).toBe("56");
	});
});
