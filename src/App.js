import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ObjectInfo from "./components/ObjectInfo";
import Calender from './components/Calender';

function App() {
  const [selectObjectData, setSelectObjectData] = useState(null);
  const [data, setData] = useState([]);
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
