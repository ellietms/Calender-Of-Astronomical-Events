import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
// import DropDown from './components/DropDown';
import ObjectInfo from "./components/ObjectInfo";
import Calender from './components/Calender';

function App() {
  const [selectObjectData, setSelectObjectData] = useState(null);
  const [data, setData] = useState([]);
  // const [visibleObjects,setVisibleObjects]=useState();
  useEffect(() => {
    fetch("https://ssd-api.jpl.nasa.gov/cad.api")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
  let mainContent;
  if(selectObjectData === null){
    mainContent = (
      <div>
      <Navbar/>
      {/* <DropDown showVisibleObjects={(object) => setVisibleObjects(object)}/> */}
      <Calender data={data}
      showInfoPage = {(data) => setSelectObjectData(data)}
      />
      </div>
    )
  }
  else{
    mainContent = (
      <div>
        <Navbar/>
        {/* <DropDown showVisibleObjects={(object) => setVisibleObjects(object)}/> */}
        <ObjectInfo
          data={selectObjectData}
          backToMainPage={() => setSelectObjectData(null)}
        />
      </div>
    )
  }
  return (
    <div>
      {mainContent}
    </div>
  );
}

export default App;
