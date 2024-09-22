import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/privacy.png" // Updated image for tech theme
            alt="Privacy Policy"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>Privacy Policy</h2>
          <p>
            At Gear, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website and services.
          </p>
          <h4>Information Collection</h4>
          <p>
            We collect information such as your name, email address, and payment details to process orders and improve your shopping experience.
          </p>
          <h4>Use of Information</h4>
          <p>
            The information we collect is used to process transactions, provide customer support, and enhance your interaction with our platform.
          </p>
          <h4>Data Security</h4>
          <p>
            We employ advanced security measures to protect your personal information from unauthorized access, ensuring a secure shopping experience.
          </p>

         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
