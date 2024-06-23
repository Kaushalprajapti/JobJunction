import React, { useContext, useState } from "react";
import {Context} from '../../main'
import { useNavigate, Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {GiHamburgerMenu} from 'react-icons/gi';


const Navbar = () => {
  const [show,setshow] = useState(false);
  const {isAuthorized,setIsAuthorized,user} = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async()=>{
    try{
      const response = await axios.get("http://localhost:4000/api/v1/user/logout",{ withCredentials : true});
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  }
    return ( 
    <> 
      <nav className= { isAuthorized ? "navbarShow" : "navbarHide" } >
        <div className="container">
          <div className="logo">
            <img src="JobZee-logos__white.png" alt="logo"/>
          </div>
          <ul className= {!show ? "menu" : "show-menu menu"}>
            <li>
              <Link to={"/"} onClick={() => setshow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/job/getall"} onClick={() => setshow(false)}>
                All Jobs
              </Link>
            </li>
            <li>
            <Link to={"/application/me"} onClick={() => setshow(false)}>
                {
                  user && user.role === "Employer" ? "APPLICANT'S APPLICATION" : "MY APPLICATION"
                }
              </Link>
            </li>
            {
              user && user.role === "Employer" ? (
                <>
                <li>
                  <Link to = {'/job/post'} onClick={() => setshow(false)}> POST NEW JOB </Link>
                </li> 
                <li>
                  <Link to = {'/job/me'} onClick={() => setshow(false)}> VIEW YOUR JOBS </Link>
                </li> 
                </>
              ) : (
                <>
                </>
              )
            }
            <button onClick={handleLogout}> LOGOUT </button>
          </ul>
          <div className = "hamburger">
            <GiHamburgerMenu onClick={() => setshow(!show)}/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;