import React from "react";
import NavBar from "./NavBar/NavBar";

import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<div className="App" style={{ height: "1000px" }}></div>
		</>
	);
}

export default App;
