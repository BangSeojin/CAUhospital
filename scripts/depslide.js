// 진료과 슬라이더
document.addEventListener("DOMContentLoaded", () => {
  initInfiniteSlide();
});

let sliderInitialized = false;
let autoTimer = null;

function initInfiniteSlide() {
  const slideInner = document.querySelector(".slideInner");
  const leftBtn = document.querySelector(".depR_leftBtn");
  const rightBtn = document.querySelector(".depR_rightBtn");

  if (!slideInner || slideInner.children.length === 0) return;

  // display:none -> block 직후 레이아웃 안정화
  requestAnimationFrame(() => {
    startSlider(slideInner, leftBtn, rightBtn);
  });
}

function startSlider(slideInner, leftBtn, rightBtn) {
  if (sliderInitialized) return;
  sliderInitialized = true;

  const originalItems = Array.from(slideInner.children);
  const ITEM_COUNT = originalItems.length;

  // 설정
  const AUTO_DELAY = 5000; // 대기 시간
  const AUTO_STEP = 3; // 자동 이동 개수
  const DURATION = 1500; // 이동 애니메이션 속도

  function getItemWidth() {
    const item = slideInner.children[0];
    const style = getComputedStyle(item);
    return item.offsetWidth + parseFloat(style.marginRight);
  }

  let itemWidth = getItemWidth();
  let index = ITEM_COUNT;
  let isMoving = false;

  // 복제
  const clonesBefore = originalItems.map((el) => el.cloneNode(true));
  const clonesAfter = originalItems.map((el) => el.cloneNode(true));

  clonesBefore.reverse().forEach((el) => slideInner.prepend(el));
  clonesAfter.forEach((el) => slideInner.append(el));

  slideInner.style.transition = "none";
  slideInner.style.transform = `translateX(${-itemWidth * index}px)`;

  function move(step) {
    if (isMoving) return;
    isMoving = true;

    index += step;
    slideInner.style.transition = `transform ${DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
    slideInner.style.transform = `translateX(${-itemWidth * index}px)`;

    slideInner.addEventListener("transitionend", function handler(e) {
      if (e.target !== slideInner) return;
      slideInner.removeEventListener("transitionend", handler);

      // 오른쪽 끝 보정
      if (index >= ITEM_COUNT * 2) {
        slideInner.style.transition = "none";
        index -= ITEM_COUNT;
        slideInner.style.transform = `translateX(${-itemWidth * index}px)`;
      }

      // 왼쪽 끝 보정
      if (index < ITEM_COUNT) {
        slideInner.style.transition = "none";
        index += ITEM_COUNT;
        slideInner.style.transform = `translateX(${-itemWidth * index}px)`;
      }

      isMoving = false;
    });
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      move(AUTO_STEP);
    }, AUTO_DELAY);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  rightBtn.addEventListener("click", () => {
    stopAuto();
    move(1);
    startAuto();
  });

  leftBtn.addEventListener("click", () => {
    stopAuto();
    move(-1);
    startAuto();
  });

  startAuto();
}

function destroyInfiniteSlide() {
  const slideInner = document.querySelector(".slideInner");
  if (!slideInner) return;

  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  slideInner.style.transition = "";
  slideInner.style.transform = "";

  // 복제 제거 (원본만 남김)
  const items = Array.from(slideInner.children);
  const originalCount = items.length / 3;

  items.forEach((el, i) => {
    if (i < originalCount || i >= originalCount * 2) {
      el.remove();
    }
  });

  sliderInitialized = false;
}

let wasHidden = false;

window.addEventListener("resize", () => {
  const slider = document.querySelector(".minitab_depR");
  if (!slider) return;

  const isHidden = getComputedStyle(slider).display === "none";

  // 숨겨졌다가 다시 나타났을 때만 재초기화
  if (wasHidden && !isHidden) {
    destroyInfiniteSlide();
    initInfiniteSlide();
  }

  wasHidden = isHidden;
});
