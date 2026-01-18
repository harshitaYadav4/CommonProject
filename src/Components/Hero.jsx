import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-inner">
        <div style={{width: '100%', textAlign: 'center'}}>
          <h1>Find Your Dream Job Today!</h1>
          <p style={{color: 'rgba(255,255,255,0.85)', marginTop:12}}>Connecting you to the best opportunities across the globe.</p>

          <div className="search-row card" style={{marginTop:24}}>
            <input type="text" placeholder="Job Title or Company" />
            <select>
              <option>Choose Location</option>
            </select>
            <select>
              <option>Job Category</option>
            </select>
            <button className="btn-primary">Search Job</button>
          </div>

          <div className="hero-stats">
            <div>👤 25.5k+ Candidates</div>
            <div>🏢 18.2k+ Companies</div>
            <div>📝 10.1k+ Posted Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;