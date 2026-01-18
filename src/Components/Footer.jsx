import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:24}}>
        <div>
          <h2 className="font-bold" style={{fontSize:20,marginBottom:8}}>Job Portal</h2>
          <p className="text-muted">Find your dream job and build your career with our portal.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-muted" style={{lineHeight:1.9,fontSize:14}}>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Job Categories</h4>
          <ul className="text-muted" style={{lineHeight:1.9,fontSize:14}}>
            <li>Telecommunications</li>
            <li>Financial Services</li>
            <li>Construction</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div style={{display:'flex',gap:8}}>
            <input type="email" placeholder="Email Address" className="input-field" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop:24,borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:18,textAlign:'center',color:'rgba(255,255,255,0.6)',fontSize:12}}>
        © Copyright Job Portal 2025. 
      </div>
    </footer>
  );
};

export default Footer;