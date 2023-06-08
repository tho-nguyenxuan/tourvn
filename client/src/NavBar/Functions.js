import Places from "./Places";
import { Navbar, Offcanvas } from "react-bootstrap";
import MiniSearch from "./MiniSearch";
import User from "./User";
import Language from "./Language";
import Wishlist from "./Wishlist";

function Functions({ expand }) {
	// let places = ["Miền Bắc", "Miền Trung", "Miền Nam"];

	return (
		<>
			<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

			<Navbar.Offcanvas
				aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
				placement="end"
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title />
				</Offcanvas.Header>

				<Offcanvas.Body
					className={`d-flex flex-column-reverse justify-content-end flex-${expand}-row align-items-${expand}-center`}
				>
					<Places expand={expand} />

					<MiniSearch />

					<Language />

					<Wishlist />
					<User />
				</Offcanvas.Body>
			</Navbar.Offcanvas>
		</>
	);
}

export default Functions;
