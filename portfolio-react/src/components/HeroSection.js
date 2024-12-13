import React from 'react'
import '../styles/main.css';
import HeroImage from '../assets/20282.JPG';

function HeroSection() {
  return (
    <section className="hero section" id="HeroSection">
    <img src={HeroImage} alt="hero image" />
    <div className="hero-text" data-aos="fade-up" data-aos-delay={100}>
      <h2>I am Sami Yaseen</h2>
      <p>
        <span>Full Stack Developer</span>
      </p>
    </div>
  </section>

  )
}

export default HeroSection



