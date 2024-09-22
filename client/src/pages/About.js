import React from "react";
import Layout from "./../components/Layout/Layout";
import "./../styles/About.css"; // Import your CSS file for custom styles

const About = () => {
  return (
    <Layout title={"About Gear - Tech Ecommerce"}>
      <div className="about-page-tech">

        <div className="about-content-tech">
          <h2 className="tech-heading">Welcome to Gear</h2>
          <p className="tech-description">
            At Gear, we are dedicated to bringing you the latest and greatest in
            technology. Whether you're looking for the most advanced gadgets or reliable accessories, 
            we've got you covered. Join us as we innovate, create, and help you gear up for the future.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
