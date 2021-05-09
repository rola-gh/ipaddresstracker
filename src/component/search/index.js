import arrow from "./../../assets/icon-arrow.svg"
function Search() {
	return (
		<>
			<form role="search" method="get" className="search-form" action="">
				<label>
					<input type="search" className="search-field" placeholder="Search for any IP address or domain" value="" name="search"
					       title=""/>
				</label>
				<button type="submit" style={{backgroundColor: "black"}} className="search-submit btn"><img src={arrow} alt="Submit"/></button>
			</form>
		</>
	);
}

export default Search;
