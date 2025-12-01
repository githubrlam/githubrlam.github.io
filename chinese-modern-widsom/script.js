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
document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  // Toggle sidebar function
  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");

    if (sidebar.classList.contains("open")) {
      sidebarToggle.textContent = "✖"; // Change button to close icon
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      sidebarToggle.textContent = "☰"; // Change button back to menu icon
      document.body.style.overflow = ""; // Restore scrolling
    }
  };

  // Toggle on button click
  sidebarToggle.addEventListener("click", toggleSidebar);

  // Close sidebar when clicking overlay
  overlay.addEventListener("click", toggleSidebar);

  // Close sidebar when clicking a link (for better mobile UX)
  const sidebarLinks = sidebar.querySelectorAll("nav a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (sidebar.classList.contains("open")) {
        toggleSidebar();
      }
    });
  });

  // Close sidebar on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      toggleSidebar();
    }
  });
});
