import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import DiseasesAndConditions from "./components/HealthLibrary/DiseasesAndConditions.jsx";
import Services from "./components/Services/Services.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/diseases" element={<DiseasesAndConditions />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
