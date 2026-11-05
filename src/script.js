document.addEventListener("DOMContentLoaded", function () {
  console.log("vokzal landing ready");
});

// Анимация табло: подсвечиваем строки по очереди.
(function () {
  var lines = document.querySelectorAll(".board-line");
  if (!lines.length) return;

  var index = 0;
  setInterval(function () {
    lines.forEach(function (line) {
      line.classList.remove("is-active");
    });
    lines[index % lines.length].classList.add("is-active");
    index += 1;
  }, 4000);
})();
