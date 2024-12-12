import React from 'react';
import '../CSS files/Glitch.css'; // Import the CSS file

function  GlitchText (props) {
  
  const dynamicStyle = {
    fontSize: props.size, // Pass the size directly (e.g., '2rem', '3em', '40px')
  };

  return (
    <h1 className={`glitch  text-gray-300`} style={dynamicStyle} >
      {props.heading}
    </h1>
  );
};

export default GlitchText;
