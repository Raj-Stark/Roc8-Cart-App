import React from "react";

const styles = {
  root: {
    backgroundColor: "#f5f5f5",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "4px",
  },
};

const AboutMe = () => {
  return (
    <div style={styles.root}>
      <div style={styles.title}>About Me</div>
      <div style={styles.text}>
        This app was built by me on March 23, 2023 for the Roc8 Careers Frontend
        Test using MUI 5 and React Js.
      </div>
      <div style={styles.text}>
        I am a passionate developer who loves building web applications with
        React and other modern tools. With several years of experience in the
        industry, I have developed a deep understanding of best practices and a
        keen eye for design and usability.
      </div>
      <div style={styles.text}>
        I hope you enjoy using this app and appreciate the effort I put into
        creating it!
      </div>
    </div>
  );
};

export default AboutMe;
