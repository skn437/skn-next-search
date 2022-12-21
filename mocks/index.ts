const initMSW = async () => {
	if (typeof window === "undefined") {
		const { server } = await import("@/mocks/server");
		server.listen({
			onUnhandledRequest: "warn",
		});
		server.printHandlers();
	} else {
		const { worker } = await import("@/mocks/worker");
		worker.start();
	}
};

initMSW();

export {};
