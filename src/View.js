import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link} from "react-router-dom";
function View() {
  const [data, Setdata] = useState([]);
  var amo = 0;

  const { id }=useParams();

  useEffect(() => {
    loadDetails();
  }, []);
 
  const loadDetails =async()=>
  {
     const result =await  axios
     .get("http://localhost:8080/getdetails");
     Setdata(result.data);
  }

  const DeleteDetail = async(id) =>
  {
   
   await  axios.delete(`http://localhost:8080/product/${id}`);
   loadDetails();
  };

  return (
    <div className="donardetails">
      <center>
        <div className="con">
          <table className="table table-bordered s">
            <thead>
              <tr>
                <th>id</th>

                <th>Product Name</th>

                <th>Quantity</th>

                <th>amount</th>

                <th>Quality</th>

                <th>Edit</th>

                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((details) => (
                <tr key={details.Id}>
                  <td scope="row">{details.id}</td>

                  <td>{details.name}</td>

                  <td>{details.quantity}</td>

                  <td>{details.amount}</td>

                  <td>{details.quality}</td>

                  <td><Link to={`/Edit/${details.id}`}>Edit</Link></td>

                 <td> <button onClick={()=>DeleteDetail(details.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default View;
