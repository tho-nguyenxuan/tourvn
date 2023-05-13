import React, { useState, useEffect, createContext } from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import TourList from "./Pages/TourListPage/TourList";
import UserPage from "./Pages/UserPage/UserPage";
import LoginRegister from "./Pages/UserPage/LoginRegister";
import ContactPage from "./Pages/ContactPage/ContactPage";

export const AccountContext = createContext();
export const APIContext = createContext();

function App() {
	const [payload, setPayload] = useState([]);
	const [account, setAccount] = useState({
		username: "thovodanh",
		password: "some password",
		role: "customer",
		name: "Nguyen Xuan Tho",
		email: "tho.nguyenxuantho573@hcmut.edu.vn",
		phone: "0123456789",
		dob: "07-05-2003",
	});

	useEffect(() => {
		axios
			.get("https://tourvn-server.onrender.com")
			.then((res) => {
				setPayload(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		setAccount();
	}, []);

	return (
		<AccountContext.Provider value={{ account, setAccount }}>
			<APIContext.Provider value="https://tourvn-server.onrender.com">
				<BrowserRouter>
					<Routes>
						<Route path="" element={<NavBar />}>
							<Route path="/" element={<HomePage />} />
							<Route
								path="/tours/:searchKey"
								element={<TourList payload={payload} />}
							/>
							<Route path="/user" element={<UserPage />} />
							<Route path="/contact" element={<ContactPage />} />
						</Route>
						<Route path="/login" element={<LoginRegister />} />
					</Routes>
				</BrowserRouter>
			</APIContext.Provider>
		</AccountContext.Provider>
	);
}

export default App;
