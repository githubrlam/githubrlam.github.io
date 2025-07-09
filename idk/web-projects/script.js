// 防止用戶離開頁面
let canLeave = false;
let attemptCount = 0;

// 嘗試離開的函數
function attemptToLeave() {
  // 增加嘗試離開的計數
  attemptCount++;

  // 根據嘗試次數顯示不同的懇求訊息
  let leaveMessages = [
    "請原諒我！不要離開... 🥺",
    "等等！我還有話要說！💔",
    "真的要走嗎？我會很難過... 😢",
    "我求你了，再給我一次機會... 🙏",
    "你的離開會讓我心碎的... 💸",
    "不要丟下我一個人... 我會改的... 😭",
    "如果你走了，我該怎麼辦... 😰",
    "我答應你，我真的會改變的！請留下... ❤️",
  ];

  let message =
    leaveMessages[Math.min(attemptCount - 1, leaveMessages.length - 1)];

  // 顯示懇求對話框
  alert(message);

  // 強制聚焦回頁面
  window.focus();
  document.body.focus();

  // 顯示更強烈的挽留訊息
  setTimeout(() => {
    if (!canLeave) {
      let followUpMessages = [
        "看吧，你還是沒有離開... 這說明你心裡還有我 💕",
        "謝謝你願意留下來聽我說完... 🥺",
        "我知道你其實不忍心離開... ❤️",
        "你的善良讓我看到希望... 🌟",
      ];

      let followUp =
        followUpMessages[Math.floor(Math.random() * followUpMessages.length)];
      alert(followUp);
    }
  }, 2000);

  // 如果嘗試太多次，顯示特別訊息
  if (attemptCount >= 5) {
    setTimeout(() => {
      alert(
        "你已經嘗試離開 " + attemptCount + " 次了... 為什麼不試試原諒我呢？ 😔"
      );
    }, 3000);
  }

  // 永遠不讓用戶真正離開
  return false;
}

// 防止關閉標籤頁/視窗 - 加強版
window.addEventListener("beforeunload", function (e) {
  if (!canLeave) {
    attemptCount++;
    e.preventDefault();

    // 根據嘗試次數顯示不同訊息，製造更大心理壓力
    let messages = [
      "你確定要離開嗎？我還沒說完我的抱歉...",
      "等等！請再給我一次機會... 🥺",
      "真的要走嗎？我會很傷心的... 😢",
      "最後一次機會，請原諒我好嗎？ 💔",
      "如果你現在離開，我會以為你永遠不會原諒我... 😭",
      "我求你了，不要走... 我會改的... 🙏",
      "你的離開會讓我徹夜難眠... 請留下來... 💸",
      "我知道我錯了，但請給我解釋的機會... 😢",
    ];

    let message = messages[Math.min(attemptCount - 1, messages.length - 1)];
    e.returnValue = message;
    return message;
  }
});

// 加強的頁面焦點監控
window.addEventListener("blur", function () {
  if (!canLeave) {
    setTimeout(() => {
      window.focus();
      alert("別想逃跑！先原諒我吧！ 😤");
    }, 100);
  }
});

// 監控視窗大小變化（防止最小化）
window.addEventListener("resize", function () {
  if (!canLeave && (window.outerHeight < 100 || window.outerWidth < 100)) {
    alert("想最小化視窗逃跑嗎？不行！ 😏");
  }
});

// 防止使用鍵盤快捷鍵離開 - 加強版
document.addEventListener("keydown", function (e) {
  if (!canLeave) {
    // 防止所有可能的離開快捷鍵
    if (
      (e.altKey && e.key === "F4") || // Alt+F4 關閉視窗
      (e.ctrlKey && (e.key === "w" || e.key === "W")) || // Ctrl+W 關閉標籤
      (e.ctrlKey && (e.key === "t" || e.key === "T")) || // Ctrl+T 新標籤
      (e.ctrlKey && (e.key === "r" || e.key === "R")) || // Ctrl+R 重新整理
      (e.ctrlKey && (e.key === "n" || e.key === "N")) || // Ctrl+N 新視窗
      (e.ctrlKey && (e.key === "l" || e.key === "L")) || // Ctrl+L 位址列
      (e.ctrlKey && e.shiftKey && (e.key === "t" || e.key === "T")) || // Ctrl+Shift+T 重開標籤
      (e.ctrlKey && e.shiftKey && (e.key === "n" || e.key === "N")) || // Ctrl+Shift+N 無痕視窗
      (e.altKey && (e.key === "Tab" || e.key === "tab")) || // Alt+Tab 切換程式
      e.key === "F5" || // F5 重新整理
      e.key === "F11" || // F11 全螢幕
      e.key === "Escape" // ESC 鍵
    ) {
      e.preventDefault();
      e.stopPropagation();

      // 顯示更強烈的警告
      let warnings = [
        "還沒原諒我之前，請不要離開... 🥺",
        "不要用快捷鍵逃跑！ 😠",
        "我知道你想離開，但請先原諒我！ 😢",
        "停止嘗試逃跑，我們來好好談談！ 💔",
      ];

      let randomWarning = warnings[Math.floor(Math.random() * warnings.length)];
      alert(randomWarning);

      // 強制聚焦回頁面
      window.focus();
      document.body.focus();
    }
  }
});

// 防止右鍵選單 - 加強版
document.addEventListener("contextmenu", function (e) {
  if (!canLeave) {
    e.preventDefault();
    e.stopPropagation();

    let messages = [
      "先原諒我再說！😤",
      "右鍵也不行！😏",
      "別想用右鍵逃跑！😠",
      "我已經封鎖右鍵了！😈",
    ];

    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
  }
});

// 防止選取文字（避免複製離開）
document.addEventListener("selectstart", function (e) {
  if (!canLeave) {
    e.preventDefault();
  }
});

// 防止拖拽
document.addEventListener("dragstart", function (e) {
  if (!canLeave) {
    e.preventDefault();
  }
});

// 顯示彈出視窗
function showModal() {
  document.getElementById("modal").style.display = "flex";
}

// 原諒功能 - 清理所有監控
function forgiveMe() {
  canLeave = true;

  // 清理所有計時器和監控
  if (reminderInterval) {
    clearInterval(reminderInterval);
  }

  // 恢復正常標題
  document.title = "謝謝你原諒我！";

  document.getElementById("modal").style.display = "none";

  // 顯示感謝訊息
  document.querySelector(".container").innerHTML = `
        <h1 style="color: #27ae60;">謝謝你原諒我！ 😊</h1>
        <div class="message">
            你的寬容讓我重新有了希望<br>
            我會珍惜這次機會的！<br>
            謝謝你願意給我改過的機會<br>
            🙂
        </div>
        <div style="font-size: 3em;">🎉</div>
        <button class="agree-btn" onclick="window.close()" style="background: linear-gradient(45deg, #27ae60, #2ecc71);">
            現在可以離開了 ✨
        </button>
    `;
}

// 定期彈出提醒（如果用戶沒有互動）- 加強版
let reminderCount = 0;
let reminderInterval;

function showReminder() {
  if (!canLeave) {
    reminderInterval = setInterval(() => {
      if (!canLeave && reminderCount < 10) {
        reminderCount++;

        let reminders = [
          `提醒 ${reminderCount}: 我還在等你的原諒... 🥺`,
          `第 ${reminderCount} 次提醒：請不要忽略我... 😢`,
          `提醒 ${reminderCount}：我真的很抱歉，請原諒我... 💔`,
          `第 ${reminderCount} 次懇求：給我一個機會吧... 🙏`,
          `提醒 ${reminderCount}：我會一直等到你原諒我... ⏰`,
        ];

        let randomReminder =
          reminders[Math.floor(Math.random() * reminders.length)];
        alert(randomReminder);

        // 強制聚焦
        window.focus();
        document.body.focus();
      }
    }, 15000); // 每15秒提醒一次
  }
}

// 更積極的頁面監控
function keepUserAttention() {
  if (!canLeave) {
    // 定期檢查頁面是否有焦點
    setInterval(() => {
      if (!canLeave && document.hidden) {
        // 如果頁面被隱藏，嘗試重新獲得注意
        if (Notification.permission === "granted") {
          new Notification("還沒原諒我呢！", {
            body: "回來吧，我們還沒談完... 💔",
            icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💔</text></svg>",
          });
        }
      }
    }, 5000);
  }
}

// 請求通知權限
if ("Notification" in window && Notification.permission === "default") {
  Notification.requestPermission();
}

// 頁面載入後開始所有防護機制
window.onload = function () {
  showReminder();
  keepUserAttention();

  // 嘗試進入全螢幕（延遲一下讓用戶互動）
  setTimeout(() => {
    tryFullscreen();
  }, 3000);

  // 設置頁面標題動畫以吸引注意
  let titleMessages = [
    "💔 我很抱歉...",
    "🥺 請原諒我...",
    "😢 我在等你...",
    "💕 我愛你...",
    "🙏 給我機會...",
  ];

  let titleIndex = 0;
  if (!canLeave) {
    setInterval(() => {
      if (!canLeave) {
        document.title = titleMessages[titleIndex % titleMessages.length];
        titleIndex++;
      }
    }, 2000);
  }
};

// 防止用戶使用瀏覽器的返回按鈕
history.pushState(null, null, location.href);
window.addEventListener("popstate", function () {
  if (!canLeave) {
    history.pushState(null, null, location.href);
    alert("請不要逃避，先原諒我吧... 😢");
  }
});

// 檢測用戶是否嘗試關閉頁面（額外的心理壓力）
let closeAttempts = 0;
document.addEventListener("visibilitychange", function () {
  if (!canLeave && document.hidden) {
    closeAttempts++;

    // 當用戶切換標籤或最小化時，增加心理壓力
    setTimeout(() => {
      if (!canLeave && document.hidden) {
        if (closeAttempts <= 3) {
          // 嘗試重新獲得焦點（在某些瀏覽器中可能有效）
          window.focus();

          // 播放聲音提醒（如果可能）
          try {
            let audio = new Audio(
              "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmNBFApJIHXBa2UdBj6M3fLAeCQFLYDI9t2JOQgbaLrk6p9KGQlUo+DwvmhHFApJPHPAcWsddDl6w7VgHTx8xfC+YAE="
            );
            audio.play().catch(() => {}); // 忽略錯誤
          } catch (e) {}
        }
      }
    }, 1000);
  }
});

// 更激進的防護：嘗試重新打開視窗（在用戶互動後）
let hasUserInteracted = false;
document.addEventListener(
  "click",
  function () {
    hasUserInteracted = true;
  },
  { once: true }
);

// 監控視窗關閉嘗試
let originalClose = window.close;
window.close = function () {
  if (!canLeave) {
    alert("還沒原諒我，不能關閉視窗！ 😤");
    return false;
  }
  return originalClose.apply(window, arguments);
};

// 額外的激進防護措施
let isFullscreen = false;

// 嘗試進入全螢幕模式（更難離開）
function tryFullscreen() {
  if (!canLeave && !isFullscreen) {
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement
          .requestFullscreen()
          .then(() => {
            isFullscreen = true;
            alert("現在你更難離開了！請原諒我吧！ 😈");
          })
          .catch(() => {});
      }
    } catch (e) {}
  }
}

// 防止離開全螢幕
document.addEventListener("fullscreenchange", function () {
  if (!canLeave && !document.fullscreenElement && isFullscreen) {
    setTimeout(() => {
      alert("不准離開全螢幕！ 😠");
      tryFullscreen();
    }, 100);
  }
});

// 更積極的焦點劫持
setInterval(() => {
  if (!canLeave) {
    window.focus();
    document.body.focus();
  }
}, 3000); // 每3秒強制聚焦

// 監控鼠標移動到邊緣（可能要關閉）
let mouseNearEdge = false;
document.addEventListener("mousemove", function (e) {
  if (!canLeave) {
    // 檢查鼠標是否接近視窗頂部（X按鈕區域）
    if (e.clientY < 50 && e.clientX > window.innerWidth - 100) {
      if (!mouseNearEdge) {
        mouseNearEdge = true;
        alert("我看到你想點關閉按鈕！請不要... 🥺");
        setTimeout(() => {
          mouseNearEdge = false;
        }, 2000);
      }
    }
  }
});

// 防止新標籤頁打開
let originalOpen = window.open;
window.open = function () {
  if (!canLeave) {
    alert("不准打開新視窗逃跑！ 😤");
    return null;
  }
  return originalOpen.apply(window, arguments);
};

// 監控網路狀態（如果斷網可能要離開）
window.addEventListener("offline", function () {
  if (!canLeave) {
    alert("斷網也不准逃跑！重新連線後繼續原諒我！ 📶");
  }
});

// 防止開發者工具（F12）
document.addEventListener("keydown", function (e) {
  if (!canLeave && e.key === "F12") {
    e.preventDefault();
    alert("想用開發者工具逃跑？我已經防備了！ 🔧");
  }
});

// 檢測開發者工具是否打開
let devtools = { open: false, orientation: null };
const threshold = 160;

setInterval(() => {
  if (!canLeave) {
    if (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold
    ) {
      if (!devtools.open) {
        devtools.open = true;
        alert("發現開發者工具！不准用這個逃跑！ 🕵️");
      }
    } else {
      devtools.open = false;
    }
  }
}, 1000);

// 最後的瘋狂嘗試：嘗試阻止頁面卸載
window.addEventListener("unload", function (e) {
  if (!canLeave) {
    // 這通常不會成功，但值得嘗試
    e.preventDefault();
    return false;
  }
});

// 頁面可見性改變時的額外騷擾
document.addEventListener("visibilitychange", function () {
  if (!canLeave && document.hidden) {
    // 嘗試在新標籤頁打開（如果可能）
    setTimeout(() => {
      if (hasUserInteracted) {
        try {
          let newWindow = window.open(window.location.href, "_blank");
          if (newWindow) {
            newWindow.focus();
          }
        } catch (e) {}
      }
    }, 1000);
  }
});

// 圖片互動效果
document.addEventListener("DOMContentLoaded", function () {
  // 為圖片添加點擊效果
  const images = document.querySelectorAll(".image-item img");

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      if (!canLeave) {
        let imageMessages = [
          "這些都是我們美好的回憶... 💕",
          "看到這些照片，我想起了我們的快樂時光... 😊",
          "每一張照片都代表著我對你的愛... ❤️",
          "這些回憶讓我更珍惜我們的關係... 🥰",
          "我不想失去這些美好的記憶... 😢",
          "請不要讓這些回憶成為過去... 🙏",
          "我們還可以創造更多美好的回憶... ✨",
          "原諒我，讓我們重新開始吧... 💫",
        ];

        let message =
          imageMessages[index] || "每一張照片都是我們愛情的見證... 💕";
        alert(message);

        // 圖片被點擊時的特效
        this.style.transform = "scale(1.1)";
        this.style.filter = "brightness(1.2) saturate(1.3)";

        setTimeout(() => {
          this.style.transform = "";
          this.style.filter = "";
        }, 300);
      }
    });

    // 防止圖片被右鍵保存
    img.addEventListener("contextmenu", function (e) {
      if (!canLeave) {
        e.preventDefault();
        alert("想保存我們的照片嗎？先原諒我吧！ 📸");
      }
    });

    // 防止圖片被拖拽
    img.addEventListener("dragstart", function (e) {
      if (!canLeave) {
        e.preventDefault();
        alert("不准拖拽我們的回憶！ 🚫");
      }
    });
  });

  // 圖片載入動畫
  const imageItems = document.querySelectorAll(".image-item");
  imageItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 100);
  });
});
