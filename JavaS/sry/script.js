let currentPage = 1;
const totalPages = 9;

// 初始化
document.addEventListener("DOMContentLoaded", function () {
  showPage(1);
  updateProgress();
  updatePageIndicator();
});

// 顯示指定頁面
function showPage(pageNumber) {
  // 隱藏所有頁面
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  // 顯示指定頁面
  const targetPage = document.getElementById(`page${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  currentPage = pageNumber;
  updateProgress();
  updatePageIndicator();
}

// 下一頁
function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);

    // 添加頁面切換音效（如果有的話）
    playTransitionEffect();
  }
}

// 顯示原諒頁面
function showForgiveness() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  document.getElementById("forgiveness").classList.add("active");

  // 創建愛心飄落效果
  createHeartRain();

  // 隱藏進度條和頁面指示器
  document.querySelector(".progress-bar").style.display = "none";
  document.querySelector(".page-indicator").style.display = "none";

  // 播放慶祝音效
  playCelebrationEffect();
}

// 顯示難過頁面
function showSadness() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  document.getElementById("sadness").classList.add("active");

  // 隱藏進度條和頁面指示器
  document.querySelector(".progress-bar").style.display = "none";
  document.querySelector(".page-indicator").style.display = "none";
}

// 重新開始
function restart() {
  // 顯示進度條和頁面指示器
  document.querySelector(".progress-bar").style.display = "block";
  document.querySelector(".page-indicator").style.display = "block";

  // 清除愛心雨效果
  clearHeartRain();

  // 回到第一頁
  showPage(1);
}

// 更新進度條
function updateProgress() {
  const progress = document.getElementById("progress");
  const percentage = (currentPage / totalPages) * 100;
  progress.style.width = percentage + "%";
}

// 更新頁面指示器
function updatePageIndicator() {
  const indicator = document.getElementById("pageIndicator");
  indicator.textContent = `${currentPage} / ${totalPages}`;
}

// 頁面切換效果
function playTransitionEffect() {
  // 這裡可以添加音效或其他效果
  // 例如：創建短暫的粒子效果
  createSparkles();
}

// 創建閃光效果
function createSparkles() {
  const sparkleCount = 6;

  for (let i = 0; i < sparkleCount; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.innerHTML = "✨";
      sparkle.style.position = "fixed";
      sparkle.style.fontSize = "20px";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "9999";
      sparkle.style.left = Math.random() * window.innerWidth + "px";
      sparkle.style.top = Math.random() * window.innerHeight + "px";
      sparkle.style.animation = "sparkleFloat 2s ease-out forwards";

      document.body.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 2000);
    }, i * 100);
  }
}

// 添加閃光動畫 CSS
const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-50px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// 創建愛心雨效果
function createHeartRain() {
  const heartEmojis = ["❤️", "💖", "💕", "💗", "💓", "💝", "🌹", "🎀"];
  const heartCount = 30;

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.className = "falling-heart";
      heart.style.position = "fixed";
      heart.style.top = "-50px";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.animation = `heartFall ${
        Math.random() * 3 + 4
      }s linear forwards`;

      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 7000);
    }, i * 200);
  }
}

// 清除愛心雨效果
function clearHeartRain() {
  const fallingHearts = document.querySelectorAll(".falling-heart");
  fallingHearts.forEach((heart) => {
    if (heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  });
}

// 添加愛心雨動畫 CSS
const heartRainStyle = document.createElement("style");
heartRainStyle.textContent = `
    @keyframes heartFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartRainStyle);

// 慶祝音效效果（視覺）
function playCelebrationEffect() {
  // 創建更多的慶祝效果
  setTimeout(() => createSparkles(), 500);
  setTimeout(() => createSparkles(), 1000);
  setTimeout(() => createSparkles(), 1500);
}

// 鍵盤事件支持
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
    case " ":
    case "Enter":
      if (currentPage < totalPages) {
        nextPage();
      }
      break;
    case "ArrowLeft":
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
      break;
    case "Home":
      showPage(1);
      break;
    case "End":
      showPage(totalPages);
      break;
  }
});

// 觸摸支持（移動設備）
let startX = 0;
let startY = 0;

document.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

document.addEventListener("touchend", function (event) {
  const endX = event.changedTouches[0].clientX;
  const endY = event.changedTouches[0].clientY;
  const deltaX = startX - endX;
  const deltaY = startY - endY;

  // 確保是水平滑動而不是垂直滑動
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0 && currentPage < totalPages) {
      // 向左滑動，下一頁
      nextPage();
    } else if (deltaX < 0 && currentPage > 1) {
      // 向右滑動，上一頁
      showPage(currentPage - 1);
    }
  }
});

// 防止頁面被意外刷新
window.addEventListener("beforeunload", function (event) {
  if (currentPage > 1) {
    event.preventDefault();
    event.returnValue = "你確定要離開嗎？你的道歉還沒完成...";
    return "你確定要離開嗎？你的道歉還沒完成...";
  }
});

// 添加一些互動性
document.addEventListener("click", function (event) {
  // 點擊愛心時的特效
  if (event.target.classList.contains("heart")) {
    createSparkles();
  }
});

// 讓頁面更生動的隨機效果
setInterval(() => {
  if (Math.random() < 0.1 && document.querySelector(".page.active")) {
    // 隨機創建小的閃光效果
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.fontSize = "12px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animation = "twinkle 2s ease-out forwards";

    const activePageContent = document.querySelector(".page.active .content");
    if (activePageContent) {
      activePageContent.style.position = "relative";
      activePageContent.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 2000);
    }
  }
}, 3000);

// 添加閃爍動畫
const twinkleStyle = document.createElement("style");
twinkleStyle.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(twinkleStyle);
