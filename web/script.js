// JavaScript for interactive elements

document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");

  // Example of adding interactivity
  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.style.transform = "scale(1.05)";
    videoContainer.style.transition = "transform 0.3s ease";
  });

  videoContainer.addEventListener("mouseleave", () => {
    videoContainer.style.transform = "scale(1)";
  });
});
