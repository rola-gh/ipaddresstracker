import {Component} from 'react'
import {MapContainer , TileLayer, Marker , Popup} from "react-leaflet"
import {geolocated} from 'react-geolocated';
import "./style.css"

const DEFAULT_LONGITUDE=51.505;
const DEFAULT_LATITUDE= -0.09;


class Map extends Component{
	render(){
		const longitude = this.props.coords ? this.props.coords.longitude  :DEFAULT_LONGITUDE;
		const latitude = this.props.coords ? this.props.coords.latitude  :DEFAULT_LATITUDE;
		console.log(latitude,longitude )
		return (
			<div className="map">
					{
						!this.props.coords?
							<div className={"loading"}>Loading</div>
							:
							<MapContainer center={[ latitude , longitude]} zoom={13} scrollWheelZoom={false}>
								<TileLayer
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
							<Marker position={[ latitude, longitude]}>
								<Popup>
									You are here!
								</Popup>
							</Marker>
							</MapContainer>
					}

				<div className="attribution">
					Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
					Coded by <a href="#">Rola Ghanima</a>.
				</div>
			</div>
		);
	}

}
export default geolocated({
		positionOptions:{
			enableHighAccuracy: false
		},
		userDecisionTimeout:20000
	})(Map)
// export default Map;
