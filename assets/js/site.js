// 紹介ページ・プレスキット・サポートの共通の動き。
// 動きは「静か」に留める（アプリと同じ方針）。動きを減らす設定の人には何もしない。
// JS が動かなくても全部見えるように、隠すのは html に .js が付いたときだけ（site.css）。
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  // 上の帯: 少しスクロールしたら影を落とす（本文の上に浮いていることが分かるように）
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // 画面に入った要素を、下からふわっと出す
  var targets = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });
})();
