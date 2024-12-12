// State to store the screen width
const screenSize = window.innerWidth;

// Function to calculate font size based on screen size
export const calculateFontSize = () => {
  if (screenSize < 600) {
    return "2.5rem"; // Small screen: font size 3rem
  } else if (screenSize < 768) {
    return "3rem"; // Medium screen: font size 4rem
  } else {
    return "4rem"; // Large screen: font size 7rem
  }
};