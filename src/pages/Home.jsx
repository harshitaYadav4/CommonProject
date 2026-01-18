import React from 'react';
import Hero from '../Components/Hero';
import Stats from '../Components/Stats';
import CategoryCard from '../Components/CategoryCard';
import JobCard from '../Components/JobCard';

const Home = () => {
  const jobs = [
    { id: 1, title: 'Forward Security Director', company: 'Dauch Group', location: 'New York, USA', type: 'Full time', salary: '$40k-$42k' },
    { id: 2, title: 'Regional Creative Facilitator', company: 'Wisozk - Becker', location: 'Los Angeles, USA', type: 'Part time', salary: '$28k-$32k' },
  ];

  return (
    <main>
      <Hero />
      <div className="container">
        <section className="jobs-section">
          <div className="jobs-card">
            <div className="jobs-header">
              <div>
                <h2>Recent Jobs Available</h2>
                <p className="text-muted" style={{marginTop:6}}>Showing 1-2 of 2 results</p>
              </div>
              <div style={{display:'flex',gap:12,alignItems:'center'}}>
                <select className="sort-select">
                  <option>Sort by: Latest</option>
                  <option>Sort by: Oldest</option>
                </select>
                <button className="btn-primary">View All</button>
              </div>
            </div>

            <div className="jobs-list">
              {jobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </div>
        </section>

        <section style={{marginTop:48}}>
          <h2 className="center" style={{fontSize:26,fontWeight:800,color:'#fff',marginBottom:12}}>Browse by Category</h2>
          <p className="center text-muted" style={{maxWidth:760,margin:'0 auto 22px'}}>Explore popular job categories to find roles that match your skills. Click a category to view available positions.</p>
          <div className="category-grid">
            <CategoryCard icon="🚜" title="Agriculture" count="125 Jobs" />
            <CategoryCard icon="⚖️" title="Metal Production" count="204 Jobs" />
            <CategoryCard icon="🏢" title="Commerce" count="315 Jobs" />
            <CategoryCard icon="🏗️" title="Construction" count="440 Jobs" />
          </div>
        </section>
        
        <Stats />
      </div>
    </main>
  );
};

export default Home;