import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card visual-card">
      <div className="job-pill">10 min ago</div>
      <div className="bookmark">🔖</div>

      <div className="left">
        <div className="logo">{job.company[0]}</div>
        <div>
          <h3>{job.title}</h3>
          <p className="text-muted">{job.company} • {job.location}</p>
          <p className="job-excerpt">We are looking for a passionate professional to join our team and drive impactful projects. Strong communication and problem-solving skills required.</p>
          <div className="job-meta">
            <span className="tag">{job.type}</span>
            <span className="salary">{job.salary}</span>
          </div>
        </div>
      </div>

      <div className="cta-group">
        <Link to={`/job/${job.id}`} className="btn-primary">Apply Job</Link>
        <Link to={`/job/${job.id}`} className="btn-secondary" style={{marginTop:8}}>Details</Link>
      </div>
    </div>
  );
};

export default JobCard;