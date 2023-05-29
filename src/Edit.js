

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


 function Edit() {
  let navigate = useNavigate();


  const { id } = useParams();


  const [user, setUser] = useState({
    name: "",
    quantity: "",
    amount: "",
    quality: "",
  });


  const { name,quantity,amount,quality} = user;


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadUser();
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/product/${id}`, user);
    navigate("/View");
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setUser(result.data);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>


          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Product Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Enter the Product name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Quantity  "
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                amount
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the amount"
                name="amount"
                value={amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quality
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Quality"
                name="quality"
                value={quality}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
           <hr/>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Edit;
