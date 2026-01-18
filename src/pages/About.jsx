import React, { useState } from 'react';
import './About.css';

const StepCard = ({ icon, title, desc }) => (
  <article className="step-card">
    <div className="step-icon" aria-hidden>{icon}</div>
    <h4>{title}</h4>
    <p className="small muted">{desc}</p>
  </article>
);

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-toggle" aria-hidden>{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a" style={{display: open ? 'block' : 'none'}}>
        <p className="muted">{a}</p>
      </div>
    </div>
  );
};

const BlogCard = ({ tag, date, title }) => (
  <article className="blog-card">
    <div className="blog-thumb" aria-hidden />
    <div className="blog-body">
      <span className="badge">{tag}</span>
      <time className="small muted" dateTime={date}>{date}</time>
      <h4>{title}</h4>
      <a className="read-link" href="#">Read more →</a>
    </div>
  </article>
);

export default function About() {
  return (
    <main className="about-page">
      {/* 1. HEADER */}
      <header className="about-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </header>

      {/* 2. INTRO */}
      <section className="intro container">
        <div className="intro-grid">
          <div className="intro-left">
            <h2>We connect talent with opportunity</h2>
            <p className="muted">Our mission is to make job search and hiring simple, fair and effective. We design tools that give candidates clarity and employers confidence.</p>
          </div>
          <div className="intro-right">
            <p className="muted">Built by recruiters, engineers, and designers, our platform focuses on meaningful matches, transparency, and human-centered workflows.</p>
          </div>
        </div>

        <div className="intro-banner" aria-hidden />
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="how container">
        <h2 className="center">How it works</h2>
        <p className="muted center" style={{maxWidth:760,margin:'8px auto 20px'}}>Quick steps to get you from signup to hired.</p>

        <div className="steps-grid">
          <StepCard icon="👤" title="Create Account" desc="Set up your profile and preferences in minutes." />
          <StepCard icon="📄" title="Upload Resume" desc="Share your skills and experience with employers." />
          <StepCard icon="🔍" title="Find Jobs" desc="Search curated listings that match your goals." />
          <StepCard icon="✅" title="Apply Job" desc="Apply confidently with tailored applications." />
        </div>
      </section>

      {/* 4. VIDEO / PROMO */}
      <section className="promo">
        <div className="promo-bg">
          <div className="promo-overlay" />
          <div className="promo-inner container">
            <button className="play-btn" aria-label="Play promo">▶</button>
            <h3>Good Life Begins With A Good Company</h3>
            <div className="promo-steps">
              <div><strong>01</strong><span>Sign up</span></div>
              <div><strong>02</strong><span>Explore</span></div>
              <div><strong>03</strong><span>Apply</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="faq container">
        <h2 className="center">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <FAQItem q="How do I create an account?" a="Click Sign Up, fill basic info, and verify your email." defaultOpen />
          <FAQItem q="Can I edit my resume later?" a="Yes — you can update your resume and profile at any time." />
          <FAQItem q="How do employers contact candidates?" a="Employers use our messaging or external contact info you provide." />
        </div>
      </section>

      {/* 6. TRUST */}
      <section className="trust container">
        <div className="trust-grid">
          <div className="trust-images">
            <div className="stack-img img-lg" aria-hidden />
            <div className="stack-img img-sm" aria-hidden />
          </div>
          <div className="trust-copy">
            <h3>We’re Only Working With The Best</h3>
            <p className="muted">We partner with top organizations and curate opportunities to make sure every match is high-quality and long-lasting.</p>
            <ul className="trust-list">
              <li>Quality Job</li>
              <li>Resume Builder</li>
              <li>Top Companies</li>
              <li>Top Talents</li>
            </ul>

            <div className="trust-logos" aria-hidden>
              <div className="logo-pill">Acme</div>
              <div className="logo-pill">Globex</div>
              <div className="logo-pill">Innotech</div>
              <div className="logo-pill">BlueCore</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & BLOG */}
      <section className="news container">
        <h2 className="center">News and Blog</h2>
        <div className="blog-grid">
          <BlogCard tag="News" date="2026-01-10" title="How to prepare for interviews in 2026" />
          <BlogCard tag="Blog" date="2026-01-03" title="Resume tips that actually work" />
        </div>
      </section>
    </main>
  );
}