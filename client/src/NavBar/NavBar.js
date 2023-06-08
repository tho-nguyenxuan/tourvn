import { Outlet } from "react-router-dom";
import { Navbar, Stack } from "react-bootstrap";
import HomeLogo from "./HomeLogo";
import Functions from "./Functions";
import "./NavBar.css";

function NavBar() {
	var temp = [false, "sm", "md", "lg", "xl", "xxl"];
	var expand = temp[3];
	return (
		<>
			<Navbar
				bg="light"
				expand={expand}
				className="mb-3 position-fixed top-0 w-100"
			>
				<Stack bsPrefix="d-flex justify-content-between w-100 mx-auto align-items-center px-5">
					<HomeLogo />
					<Functions expand={expand} />
				</Stack>
			</Navbar>
			<div
				style={{
					marginTop: "var(--navbar__height)",
					position: "relative",
				}}
			>
				<Outlet />
			</div>
		</>
	);
}

export default NavBar;
