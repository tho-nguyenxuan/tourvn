import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import TourList from "./Pages/TourListPage/TourList";

function App() {
	const [payload, setPayload] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000")
			.then((res) => {
				setPayload(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavBar />}>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/tours/:searchKey"
						element={<TourList payload={payload} />}
					/>
					{/* <Route path="blogs" element={<Blogs />} /> */}
					{/* <Route path="contact" element={<Contact />} /> */}
					{/* <Route path="*" element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
