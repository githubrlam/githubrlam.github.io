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

// Handle video player error to show backup link
const videoPlayer = document.getElementById("video-player");
const backupLink = document.getElementById("backup-link");

if (videoPlayer) {
  videoPlayer.addEventListener("error", () => {
    if (backupLink) {
      backupLink.style.display = "block";
    }
  });
}

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            sidebarToggle.textContent = '✖'; // Change button to close icon
        } else {
            sidebarToggle.textContent = '☰'; // Change button back to menu icon
        }
    });
});
