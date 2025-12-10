import React from "react";
import "./Home.css";
import Jesus from "../../assets/images/Jesus.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <section id="landing-page-text" className="text-container">
        <h2>Followers of the Way</h2>
        <p>
          Jesus taught, "I am the way, the truth, and the life." Early
          Christians were known as followers of the way. This site presents
          visual narratives of key events in the lives of the early followers of
          Jesus, based on New Testament accounts. Explore the stories of the
          apostles and early believers as they spread the message of Jesus
          Christ. Consider how you can be a follower of the way in your own
          life.
        </p>
      </section>
      <section id="landing-page-image-container" className="image-container">
        <img id="landing-page-image" src={Jesus} alt="Landing Page Visual" />
      </section>
    </div>
  );
};

export default LandingPage;
