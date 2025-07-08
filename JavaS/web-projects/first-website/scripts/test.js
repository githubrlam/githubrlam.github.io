const listItems = document.querySelectorAll("li");
// 這行選取頁面上所有的 `<li>` 元素，並存成一個 NodeList（類似陣列）。

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

// 這個函式 `toggleDone` 會在點擊 `<li>` 時執行。
// - 如果被點擊的 `<li>` 沒有 class，則加上 `"done"`。
// - 如果已經有 class（即 `"done"`），則移除 class。

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

// 這段程式碼為每個 `<li>` 元素加上一個點擊事件監聽器。
// 當你點擊某個 `<li>`，就會呼叫 `toggleDone`，切換該項目的 class。

// **用途說明：**
// 這種寫法常用於待辦清單（To-Do List），點擊項目時可以加上或移除「完成」的樣式（例如加刪除線）。
// 你可以在 CSS 裡加上：
