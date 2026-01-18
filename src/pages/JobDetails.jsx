import React from 'react';

const JobDetails = () => {
  return (
    <div className="">
      <div className="page-title">
        <h1>Job Details</h1>
      </div>

      <div className="container layout">
        <div className="">
          <div className="card">
            <h2 className="font-bold" style={{fontSize:20,marginBottom:8}}>Job Description</h2>
            <p className="text-muted" style={{marginBottom:12}}>
              Nunc sed nisl purus. Nibis dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in...
            </p>

            <h3 className="font-bold" style={{fontSize:18,marginBottom:8}}>Key Responsibilities</h3>
            <ul className="text-muted" style={{marginLeft:18,lineHeight:1.8}}>
              <li>Et nunc ut tempus duis nisl sed massa.</li>
              <li>Cras facilisis dignissim augue lorem amet.</li>
              <li>Tortor amet porta proin.</li>
            </ul>
          </div>
        </div>

        <aside className="job-overview">
          <div className="card">
            <h3 className="font-bold">Job Overview</h3>
            <div style={{marginTop:12}}>
              <div style={{display:'flex',justifyContent:'space-between'}}><span className="text-muted">Job Title</span><strong>Solution Executive</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}><span className="text-muted">Experience</span><strong>5 Years</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}><span className="text-muted">Location</span><strong>New York, USA</strong></div>
            </div>
            <button className="btn-primary" style={{width:'100%',marginTop:16}}>Apply Job</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobDetails;