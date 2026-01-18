import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div style={{textAlign:'center',marginBottom:24}}>
        <h1 style={{fontSize:32,fontWeight:800,color:'#fff',marginBottom:8}}>Contact Us</h1>
        <p className="text-muted">You Will Grow, You Will Succeed. We Promise That</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:24}}>
        <div>
          <h2 style={{fontSize:20,fontWeight:800,marginBottom:12,color:'#fff'}}>Get In Touch</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div>
              <div style={{color:'var(--accent)',fontWeight:700}}>Call for inquiry</div>
              <div className="text-muted">+257 388-6895</div>
            </div>
            <div>
              <div style={{color:'var(--accent)',fontWeight:700}}>Send us email</div>
              <div className="text-muted">kramulous@sbcglobal.net</div>
            </div>
          </div>
        </div>

        <div className="muted-card">
          <h3 className="font-bold center">Contact Info</h3>
          <form style={{marginTop:12}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
              <input type="text" placeholder="First Name" className="input-field" />
              <input type="text" placeholder="Last Name" className="input-field" />
            </div>
            <input type="email" placeholder="Email Address" className="input-field" style={{marginTop:8}} />
            <textarea placeholder="Message" rows="4" className="input-field" style={{marginTop:8}}></textarea>
            <button className="btn-primary" style={{width:'100%',marginTop:12}}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;