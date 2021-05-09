import Search from "./../search"
import "./style.css";

function Header({header}) {
	return (
		<div className="container">
			<h1>{header}</h1>
			<Search />
		</div>
	);
}

export default Header;
