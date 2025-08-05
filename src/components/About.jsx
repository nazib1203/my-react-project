import React from 'react';
// import './About.css';
function About (){
    return(
        <section id="about" className="about">
            <div className="container">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
            <div className="about-text">
            <h3>About Basti Ki Pathshala Foundation</h3>
           <p>
            Basti Ki Pathshala Foundation is a Government-registered organization established under the Indian Societies Act of 1860. We are a grassroots organization dedicated to breaking the barriers of education in underserved communities. Founded with a mission to provide quality education to children living in slum areas, we strive to create a nurturing learning environment where every child has the opportunity to thrive. Through innovative teaching methods, community engagement, and partnerships, we empower children with the knowledge and skills they need to build a brighter future. Our commitment extends beyond the classroom as we work towards bridging the educational gap and fostering long-term sustainable change in the lives of marginalized families.
           </p>
            </div>
            <div className="about-image">
   
<div className="aboutus-image">
  <img src="/aboutus.png" alt="Indian volunteers helping children" />
</div>

            </div>
           </div>
            </div>
        </section>
    );
}
    export default About;