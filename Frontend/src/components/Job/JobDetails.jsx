import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";

const JobDetails = () => {
  const {id} = useParams();
  const {job,setJob} = useState({});
  const navigateTo = useNavigate();

  const {isAuthorised,user} = useContext(Context);
  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/job/${id}`,{withCredentials : true}).then((res)=>{
      setJob(res.data.job);
    }).catch((err) =>{
      console.log(err.response.data.json);
    });
  },[]);
  if(!isAuthorised)
    {
      navigateTo("/login");
    }
    return ( 
    <> 
    <div className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
          <p>
            Title : <span>{job.title}</span>
          </p>
          <p>
          Category : <span>{job.category}</span>
          </p>
          <p>
          Country : <span>{job.country}</span>
          </p>
          <p>
          City : <span>{job.city}</span>
          </p>
          <p>
          Location : <span>{job.location}</span>
          </p>
          <p>
          Description : <span>{job.description}</span>
          </p>
          <p>
            Job Posted On : <span>{job.jobPostedOn}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default JobDetails;