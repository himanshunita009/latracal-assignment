import  "./attendencestatus.css";
const AttendenceStatus = ({records}) => {
    return ( 
        <div className="attendence-status">
            <table className="border">
                <caption>Students Record</caption>
                <thead>
                <tr className="border">
                    <th className="border">Sr. No.</th>
                    <th className="border">Name</th>
                    <th className="border">Roll No.</th>
                    <th className="border">Check-In Time</th>
                    <th className="border">Check-Out Time</th>
                </tr>
                </thead>
                <tbody>
                {records.map((record,index) => (
                    <tr key={index}>
                        <td className="border">{index+1}</td>
                        <td className="border">{record.name}</td>
                        <td className="border">{record.rollNo}</td>
                        <td className="border">{record.checkinTime}</td>
                        <td className="border">{record.checkoutTime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default AttendenceStatus;