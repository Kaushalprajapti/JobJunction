import React from "react";
import {FaUserPlus} from 'react-icons/fa';
import {MdFindInPage} from 'react-icons/md';
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
    return ( 
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias molestiae natus, pariatur enim at, velit aliquam quam quisquam reiciendis, similique suscipit doloribus corporis illum incidunt earum temporibus magnam? Fugiat!
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias molestiae natus, pariatur enim at, velit aliquam quam quisquam reiciendis, similique suscipit doloribus corporis illum incidunt earum temporibus magnam? Fugiat!
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Find a Job/Post a Job</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias molestiae natus, pariatur enim at, velit aliquam quam quisquam reiciendis, similique suscipit doloribus corporis illum incidunt earum temporibus magnam? Fugiat!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;