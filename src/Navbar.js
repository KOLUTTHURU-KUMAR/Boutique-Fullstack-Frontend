import React from 'react'
import {Link} from 'react-router-dom'

 const Navbar = () => {
  return (
    <div>
        <ul>
           <link to="/"><li>Home</li></link>
           <link to="/Dashboard"><li>Dashboard</li></link>
           <link to="/about"><li>About</li></link>
           <Link to="/Signin"><li>Signin</li></Link>
        </ul>
    </div>
  )
}
export default Navbar;