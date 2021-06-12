function Info() {
	return (
		<div>
			<div className="address-card">
				<div className="col">
					<h2>IP ADDRESS</h2>
					<p className="detail" id="detailIp"/>
				</div>
				<div className="col">
					<h2>LOCATION</h2>
					<p className="detail" id="detailLocation"/>
				</div>
				<div className="col">
					<h2>TIMEZONE</h2>
					<p className="detail" id="detailTimezone"/>
				</div>
				<div className="col">
					<h2>ISP</h2>
					<p className="detail" id="detailIsp"/>
				</div>
			</div>
		</div>
	);
}

export default Info;

