gsap.registerPlugin(ScrollTrigger);

// Define animation for the boxes
const animateBoxes = (boxId) => {
  gsap.from(boxId, {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: boxId,
      start: "top 80%", // Trigger animation when 80% of the box is in view
      end: "bottom 20%", // Stop animation when 20% of the box is out of view
      scrub: true // Smoothly transitions the animation as the user scrolls
    }
  });
};

// Call the animation function for each box
animateBoxes("#box1");
animateBoxes("#box2");
animateBoxes("#box3");
