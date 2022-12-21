import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV !== "production") {
	import("@/mocks")
		.then(() => console.log(`MSW Initiated`))
		.catch((err) => console.log(`Error: ${err.message}`));
}

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps}></Component>;
};

export default App;
