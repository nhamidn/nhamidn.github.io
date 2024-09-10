const style = document.createElement('style');
style.innerHTML = `
  @keyframes flash {
    0%, 100% {
      fill: yellow; /* Primary color is yellow */
      border-color: yellow; /* Yellow border at start and end */
      box-shadow: 0px 0px 10px rgba(255, 255, 0, 0.7); /* Yellow glow at start and end */
    }
    50% {
      fill: red; /* Alternating fill color is red */
      border-color: red; /* Alternating border color is red */
      box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.7); /* Red glow in the middle */
    }
  }

  svg[aria-label="More options"] {
    border: 1px solid yellow; /* Initial yellow border */
    border-radius: 10px; /* Rounded border */
    padding: 5px; /* Add some padding inside the border */
    box-shadow: 0px 0px 10px rgba(255, 255, 0, 0.7); /* Initial yellow glow effect */
    animation: flash 1s infinite; /* Apply the flashing animation to the border and glow */
  }

  svg[aria-label="More options"] circle {
    animation: flash 1s infinite; /* Apply the same flashing animation to the circles */
  }
`;

// Append the style to the document head
document.head.appendChild(style);

// Apply the animation to all the <circle> elements inside the SVG
const svgCircles = document.querySelectorAll('svg[aria-label="More options"] circle');
svgCircles.forEach(circle => {
  circle.style.animation = "flash 1s infinite";
});

// Add a border to the SVG element itself
const svgElement = document.querySelector('svg[aria-label="More options"]');
svgElement.style.animation = "flash 1s infinite";  // Apply flashing animation to the border
