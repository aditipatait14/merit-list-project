import { useState, useEffect } from 'react';
import './App.css'
import ButtonsComponent from './components/ButtonsComponent';
import HeadingComponent from './components/HeadingComponent';
import TableComponent from './components/TableComponent';

function App() {
  const [students, setStudents] = useState([]);
   const [selectedRank, setSelectedRank] = useState("allIndia");

  const fetchStudents = (type = "allIndia") => {
    setSelectedRank(type);
    fetch(`http://localhost:8000/meritlist/${type}`)
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  };

   useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container-fluid">
        <div className="container-fluid">
            <div className="container-fluid">

    <HeadingComponent></HeadingComponent>
    <ButtonsComponent onFilter={fetchStudents} activeRank={selectedRank}></ButtonsComponent>
    <TableComponent students={students} rankTitle={selectedRank}></TableComponent>
    </div>
    </div>
    </div>
  );
}

export default App;
