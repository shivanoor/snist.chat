import "./App.css";
import { GetStarted } from "./pages/GetStarted";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Chat/Home";
import { useContext } from "react";
import { AccountContext } from "./contexts/AccountProvider";

function App() {
	const { account } = useContext(AccountContext);

	const ProtectedRoute = ({ children }) => {
		if (!account) {
			return <Navigate to="/login" />;
		}
		return children;
	};
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path="/" index element={<GetStarted />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="home" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
