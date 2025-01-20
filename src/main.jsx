import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import DiseasesAndConditions from "./components/HealthLibrary/DiseasesAndConditions.jsx";
import Services from "./components/Services/Services.jsx";
import Doctors from "./components/Highlights/Doctors.jsx";
import About from "./components/About/About.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/diseases" element={<DiseasesAndConditions />} />
				<Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
