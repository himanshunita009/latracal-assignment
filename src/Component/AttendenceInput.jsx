import { useState } from "react";
import  './attendenceInput.css'
const AttendenceInput = ({handleSubmit,records}) => {
    const [name,setName] = useState('');
    const [rollNo,setRollNo] = useState('');
    const [checkinTime,setCheckInTime] = useState('');
    const [checkoutTime,setCheckOutTime] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        const temp = records.filter((record) => record.rollNo !== rollNo);
        if(name.trim().length < 3 || rollNo <= 0 || checkinTime >= checkoutTime || temp.length !== records.length){
            if(success.length > 0)
                setSuccess('');
            if(name.trim().length < 3)
                setError('Please Enter valid Name !');
            else if(rollNo <= 0)
                setError('Please Enter valid Roll No. !');
            else if(checkinTime >= checkoutTime)
                setError('Please Entre valid Time !');
            else 
                setError(`Roll No. ${rollNo} is already present !`);
        }
        else {
            handleSubmit({name,rollNo,checkinTime,checkoutTime});
                    setName('');
                    setRollNo('');
                    setCheckInTime('');
                    setCheckOutTime('');
                    if(error.length > 0)
                        setError('');
                    setSuccess('Record Saved Successfully !');
        }
        
    }  
    return ( 
        <div className="input-back">
            <form id="input-form">
                <table>
                    <thead>
                        <tr className="input-section">
                            <th colSpan={2}>Enter Your Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="input-section">
                                <td><label>Enter Name : </label></td>
                                <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></td>
                        </tr>
                        <tr className="input-section">
                            
                                <td> <label>Enter Roll No. :</label></td>
                                <td><input type='number' value={rollNo} onChange={(e) => setRollNo(e.target.value)} /></td>
                            
                        </tr>
                        <tr className="input-section">
                            
                                <td><label>Enter CheckIn Time :</label></td><td><input type='time' value={checkinTime} onChange={(e) => setCheckInTime(e.target.value)} /></td>
                            
                        </tr>
                        <tr className="input-section">
                            
                                <td><label>Enter CheckOut Time : </label></td><td><input type='time' value={checkoutTime} onChange={(e) => setCheckOutTime(e.target.value)} /></td>
                            
                        </tr>
                        <tr className="input-section" >
                            <td colSpan={2}><button onClick={(e) => {handleClick(e);}}>Submit</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            {error &&  <td className="error">{error}</td>}
                            {success && <td className="success">{success}</td>}
                        </tr>
                    </tfoot>
                </table>
                </form>
        </div>
     );
}
 
export default AttendenceInput;