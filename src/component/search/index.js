import arrow from "./../../assets/icon-arrow.svg";
import "./style.css";

function Search() {
	return (
		<div className="search">
			<form role="search" method="get" className="search-form" action="">
				<label>
					<input type="search"
					       className="search-input"
					       placeholder="Search for any IP address or domain"
					       value=""
					       name="search"
					       title=""/>
				</label>
				<button type="submit" className="search-submit btn"><img src={arrow} alt="Submit"/></button>
			</form>
		</div>
	);
}

export default Search;
