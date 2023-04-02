import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './../../utils/axios';
import  { BASE_URL }  from './../../utils/index';
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 console.log("Here at fetch records!!!");
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
    //  const response = await fetch(`${BASE_URL}/records`);
 
    //  if (!response.ok) {
    //    const message = `An error occurred: ${response.statusText}`;
    //    window.alert(message);
    //    return;
    //  }
 
    //  const records = await response.json();
    //  setRecords(records);


     const status_url = `${BASE_URL}/records`;
     const requestOptions = {
         method: "GET"
     };
     fetch(status_url, requestOptions)
     .then(async (response) => {
         const records = await response.json();
         setRecords(records);
     })
     .catch((error) => {
         console.error("Problem getting records!");
     });

   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 const onDelete = (id) => {

}

 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`${BASE_URL}/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}