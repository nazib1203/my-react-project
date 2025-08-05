import React from 'react';
// import './Hero.css';
function Hero(){
    return(
    <section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Making a Difference Together</h1>
                <p>Join us in our mission to create positive change in communities around the world.</p>
                <a href="#volunteer" className="btn">Become a volunteer</a>
                <a href="#about" className="btn-outline">Learn More</a>
            </div>
        </div>
    </section>
    );
}
export default Hero;