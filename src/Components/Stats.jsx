import React from 'react';

const Stats = () => {
  const statsData = [
    { label: "Client worldwide", value: "12k+", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus." },
    { label: "Active resume", value: "20k+", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus." },
    { label: "Companies", value: "18k+", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus." }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div key={index} className="stats-card">
              <div className="stats-number">{item.value}</div>
              <div className="stats-body">
                <h4 className="stats-title">{item.label}</h4>
                <p className="stats-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;