import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="home-container">
        <h1>Hello, I'm Shishir Kumar Regmi</h1>
        <p>
          I am a passionate Software Engineer with over 2 years of experience. I love coding, solving
          problems, and building creative solutions. Welcome to my portfolio website!
        </p>
        <div className="contact-info">
          <p>Location: 1651 Skyline Drive, Pittsburgh, PA</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
          <p>Phone: 412-728-5774</p>
          <p>Email: shishirregmi65@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
