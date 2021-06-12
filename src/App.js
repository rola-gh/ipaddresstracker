import './App.css';
import Header from "./component/header"
import Info from "./component/info";
import Map from "./component/map";
function App() {
  return (
    <div className="App">
        <Header header="IP Address Tracker"/>
        {/*<Info />*/}
        <Map />

    </div>
  );
}

export default App;
