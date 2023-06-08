import { Stack } from "react-bootstrap";
import Slideshow from "./Slideshow";
import Slogan from "./Slogan";
import SearchBar from "./SearchBar";

function HomePage() {
	return (
		<Stack>
			<Slideshow />
			<Slogan />
			<SearchBar />
			<div style={{ height: "500px" }}></div>
		</Stack>
	);
}

export default HomePage;
