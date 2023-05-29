import React from "react";
import { useState } from "react";
import axios from "axios";


const Form = () => {
  
  const [data, setData] = useState({
    name: "",
    quantity: "", 
    amount: "",
    quality: "", 
    mandate: "",
    discount: "",
  });
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
   alert("You Product Successfully ordered")
    
   axios.post("http://localhost:8080/product",data).then(
    (res)=>console.log(res.data)
   ).catch(
    (ex)=>console.log(ex)
   )

  };
  return (
    <div>
      <center>
        <h1 className="fg">Add to Cart</h1>
      </center>

      <form className="form1" onSubmit={submithandler} >
        <center>
          <p >Product Details</p>

          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="product name"
            onChange={changehandler} required
          />
          <br/> <br/>
          <p>Quantity</p>
          <input
            type="text"
            name="quantity" 
            onChange={changehandler}
          />
            <br/>  <br/>
          
          {/* <p className="Product">Product Details</p> */}

          <p> Amount</p>
          <input type="number" name="amount" onChange={changehandler} required/>
          <br/>  <br/>
          <p>Quality</p>
          <input
            type="text"
            name="quality" 
            onChange={changehandler}
          />
            <br/>  <br/>
           <p>Manufacture Date</p>
          <input type="date" name="mandate" onChange={changehandler} required /> <br/> <br/>
          <p>Discount</p>
          <input type="number" name="discount" onChange={changehandler} required style={{width:"200px"}}/> <br/> <br/>
          <div className="primary">
            <input className="primary" type="submit"  />
          </div>
         <hr style={{color:"white"}}/>
        </center>
      </form>
    </div>
  );
};

export default Form;
