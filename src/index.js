import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./contexts/AccountProvider";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-svg-core/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const clientId =
	"458388411087-84588jla6p2jtoosui5m5r8qm9cf9c8u.apps.googleusercontent.com";
root.render(
	<GoogleOAuthProvider clientId={clientId}>
		<AccountProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</AccountProvider>
	</GoogleOAuthProvider>
);
