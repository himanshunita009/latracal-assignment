import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import AttendenceInput from './Component/AttendenceInput';
import AttendenceStatus from './Component/AttendenceStatus';

function App() {
  const [records,setRecords] = useState([]);
  const handleSubmit = (data) => {
    let res = records;
    res.push(data);
    setRecords(res);
  }
  
  return (
    <Router>
    <div className='App'>
          <h2>
            Student Attendence System
          </h2>
        <Routes >
          <Route exact path='/' element={
            <div className='home-page'> 
              <Link to='/input'>Give your Attendence</Link>
              <Link to='/status'>Check Attendence Record </Link>
            </div>} 
          />
          <Route exact path='/input' element={<AttendenceInput handleSubmit={handleSubmit} records={records} />} />
          <Route exact path='/status' element={<AttendenceStatus records={records} />} />
        </Routes>
    </div>
    </Router>     
  );
}

export default App;
