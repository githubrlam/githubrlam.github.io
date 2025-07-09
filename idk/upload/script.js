// 簡化版本 - 移除惡意防護功能
let canLeave = false;
let attemptCount = 0;

// 嘗試離開的函數（簡化版）
function attemptToLeave() {
  attemptCount++;

  let leaveMessages = [
    "請原諒我！不要離開... 🥺",
    "等等！我還有話要說！💔",
    "真的要走嗎？我會很難過... 😢",
    "我求你了，再給我一次機會... 🙏",
    "你的離開會讓我心碎的... 💔",
    "不要丟下我一個人... 我會改的... 😭",
    "如果你走了，我該怎麼辦... 😰",
    "我答應你，我真的會改變的！請留下... 🤝",
  ];

  let message =
    leaveMessages[Math.min(attemptCount - 1, leaveMessages.length - 1)];

  // 只顯示訊息，不強制阻止
  alert(message);

  // 如果嘗試太多次，顯示特別訊息
  if (attemptCount >= 5) {
    setTimeout(() => {
      alert(
        "你已經嘗試離開 " + attemptCount + " 次了... 為什麼不試試原諒我呢？ 😔"
      );
    }, 1000);
  }

  return false;
}

// 溫和的頁面離開提醒（不強制）
window.addEventListener("beforeunload", function (e) {
  if (!canLeave) {
    // 簡單的確認訊息（不強制）
    let message = "你確定要離開嗎？我還沒說完我的抱歉...";
    e.returnValue = message;
    return message;
  }
});

// 顯示彈出視窗
function showModal() {
  document.getElementById("modal").style.display = "flex";
}

// 原諒功能
function forgiveMe() {
  canLeave = true;

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
        <button class="agree-btn" onclick="closeWindow()" style="background: linear-gradient(45deg, #27ae60, #2ecc71);">
            現在可以離開了 ✨
        </button>
    `;
}

// 安全的關閉函數
function closeWindow() {
  // 嘗試關閉視窗，如果失敗就顯示訊息
  try {
    window.close();
  } catch (e) {
    alert("請手動關閉此頁面，謝謝！ 😊");
  }
}

// 簡化的提醒功能（不強制）
let reminderCount = 0;
let reminderInterval;

function showReminder() {
  if (!canLeave) {
    reminderInterval = setInterval(() => {
      if (!canLeave && reminderCount < 3) {
        // 減少到3次
        reminderCount++;

        let reminders = [
          `溫馨提醒 ${reminderCount}: 我還在等你的原諒... 🥺`,
          `第 ${reminderCount} 次提醒：請不要忽略我... 😢`,
          `提醒 ${reminderCount}：我真的很抱歉，請原諒我... 💔`,
        ];

        let randomReminder =
          reminders[Math.floor(Math.random() * reminders.length)];
        alert(randomReminder);
      }
    }, 30000); // 改為30秒一次，更溫和
  }
}

// 圖片互動效果
document.addEventListener("DOMContentLoaded", function () {
  // 為圖片添加點擊效果
  const images = document.querySelectorAll(".image-item img");

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      let imageMessages = [
        "這些都是我們美好的回憶... 💭",
        "看到這些照片，我想起了我們的快樂時光... 😊",
        "每一張照片都代表著我們的友誼... 🤝",
        "這些回憶讓我更珍惜我們的關係... 🥰",
        "我不想失去這些美好的記憶... 😢",
        "請不要讓這些回憶成為過去... 🙏",
        "我們還可以創造更多美好的回憶... ✨",
        "原諒我，讓我們重新開始吧... 💫",
      ];

      let message =
        imageMessages[index] || "每一張照片都是我們友誼的見證... 📸";
      alert(message);

      // 圖片被點擊時的溫和特效
      this.style.transform = "scale(1.05)";
      this.style.filter = "brightness(1.1)";

      setTimeout(() => {
        this.style.transform = "";
        this.style.filter = "";
      }, 300);
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

// 頁面載入後開始溫和的功能
window.onload = function () {
  showReminder();

  // 溫和的頁面標題動畫
  let titleMessages = [
    "💔 我很抱歉...",
    "🥺 請原諒我...",
    "😢 我在等你...",
    "🙏 給我機會...",
    "😔 我錯了...",
  ];

  let titleIndex = 0;
  if (!canLeave) {
    setInterval(() => {
      if (!canLeave) {
        document.title = titleMessages[titleIndex % titleMessages.length];
        titleIndex++;
      }
    }, 3000); // 改為3秒一次
  }
};
