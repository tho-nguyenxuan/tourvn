import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import TourList from "./Pages/TourListPage/TourList";
import UserPage from "./Pages/UserPage/UserPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import Footer from "./Footer/Footer";
import { ScrollButton } from "./utils";
import RegisterForm from "./Pages/UserPage/Register";
import LoginForm from "./Pages/UserPage/Login";

export const AccountContext = createContext();
export const APIContext = createContext();
export const LanguageContext = createContext();

function App() {
	const [payload, setPayload] = useState([]);
	const [language, setLanguage] = useState("eng");
	const [account, setAccount] = useState({
		username: "thovodanh",
		role: "customer",
		name: "Nguyen Xuan Tho",
		email: "tho.nguyenxuantho573@hcmut.edu.vn",
		phone: "0123456789",
		dob: "07-05-2003",
	});
	const api = {
		development: "http://localhost:5000",
		production: "https://tourvn-server.onrender.com",
	};

	useEffect(() => {
		axios
			.get(api[process.env.NODE_ENV])
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
			<APIContext.Provider value={api[process.env.NODE_ENV]}>
				<LanguageContext.Provider value={{ language, setLanguage }}>
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route exact path="/" element={<HomePage />} />

							<Route
								path="/tours/:searchKey/:date"
								element={<TourList payload={payload} />}
							/>

							<Route
								path="/tours/:searchKey"
								element={<TourList payload={payload} />}
							/>

							<Route path="/user" element={<UserPage />} />

							<Route path="/contact" element={<ContactPage />} />

							<Route
								path="/wishlist"
								element={
									<WishlistPage
										username={
											account ? account.username : null
										}
									/>
								}
							/>

							<Route path="/login" element={<LoginForm />} />

							<Route
								path="/register"
								element={<RegisterForm />}
							/>
						</Routes>
						<ScrollButton />
						<Footer />
					</BrowserRouter>
				</LanguageContext.Provider>
			</APIContext.Provider>
		</AccountContext.Provider>
	);
}

export default App;
