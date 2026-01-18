import React from 'react';

const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="category-card">
      <div className="cat-icon"><span style={{fontSize:20}}>{icon}</span></div>
      <h3>{title}</h3>
      <div className="category-count">{count}</div>
    </div>
  );
};

export default CategoryCard;