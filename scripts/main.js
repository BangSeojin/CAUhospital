const megamenu_btn = document.querySelector('.megamenu_img');
const megamenu_panel = document.getElementById('megamenu_panel');

const megamenuForm = document.querySelector('.megamenu_head');
const megamenuInput = document.querySelector('.megamenu_search');
const megamenu_overlay = document.querySelector('.overlay_noheader');

const search_btn = document.querySelector('.search_img');
const search_panel = document.getElementById('search_panel');
const searchclose_btn = document.querySelector('.search_close');
const search_overlay = document.querySelector('.overlayBlack');

const searchForm = document.querySelector('.search_form');
const searchInput = document.querySelector('.search_input');

const videoBtn = document.getElementById("videoBtn");
const mainVideo = document.getElementById("mainVideo");

const dep_btn1 = document.querySelector('.depL_Btn1');
const dep_panel = document.getElementById('dep_panel');
const dep_overlay = document.querySelector('.overlay_dep');
const dep_closebtn = document.querySelector('.dep_close');
const toggleBtn1 = document.getElementById('depBtn_1');
const toggleBtn2 = document.getElementById('depBtn_2');
const toggleBtn3 = document.getElementById('depBtn_3');
const toggleBtn4 = document.getElementById('depBtn_4');
const toggleBtns = document.querySelectorAll('.depinner_btn');
const tabLists = document.querySelectorAll('.tab_list');

const newsBtn1 = document.getElementById('newsTab_1');
const newsBtn2 = document.getElementById('newsTab_2');
const newsBtn3 = document.getElementById('newsTab_3');
const newsBtn4 = document.getElementById('newsTab_4');
const newsBtns = document.querySelectorAll('.news_tabBtn');
const newsLists = document.querySelectorAll('.newslist');

const familysitebtn = document.querySelector('.familysite_btn');
const familysitemenu = document.querySelector('.familysite_menu');

// 메가메뉴 버튼
megamenu_btn.addEventListener('click', () => {
    const isOpen = megamenu_btn.getAttribute('aria-expanded') === 'true';
    setMegamenuState(!isOpen);
});

// 메가메뉴 오버레이
megamenu_overlay.addEventListener('click', () => {
    setMegamenuState(false);
});

// 메가메뉴 내부 검색
megamenuForm.addEventListener('submit', megamenuFormBtn);

// 검색버튼
search_btn.addEventListener('click', () => {
    const isOpen = search_btn.getAttribute('aria-expanded') === 'true';
    setSearchState(!isOpen);
});

// 검색창 내부 닫기버튼
searchclose_btn.addEventListener('click', () => {
    setSearchState(false);
});

// 검색창 오버레이
search_overlay.addEventListener('click', () => {
    setSearchState(false);
});

// 검색창 내부 검색
searchForm.addEventListener('submit', searchFormBtn);

// 비디오 버튼
videoBtn.addEventListener('click', setVideoBtn);

// 미니탭 진료과/센터 더보기 버튼
dep_btn1.addEventListener('click', () => {
    const isOpen = dep_btn1.getAttribute('aria-expanded') === 'true';
    setDepState1(!isOpen);
});

// 미니탭 진료과/센터 패널 오버레이
dep_overlay.addEventListener('click', () => {
    setDepState1(false);
});

// 진료과/센터 패널 닫기 버튼
dep_closebtn.addEventListener('click', () => {
    setDepState1(false);
});

// 진료과/센터 패널 버튼 선택
toggleBtn1.addEventListener('click', () => {
    clearActive(toggleBtns, toggleBtn1);
});
toggleBtn2.addEventListener('click', () => {
  clearActive(toggleBtns, toggleBtn2);
});
toggleBtn3.addEventListener('click', () => {
  clearActive(toggleBtns, toggleBtn3);
});
toggleBtn4.addEventListener('click', () => {
  clearActive(toggleBtns, toggleBtn4);
});

// 병원소식 버튼 선택
newsBtn1.addEventListener('click', () => {
    newsTabActive(newsBtns, newsBtn1);
});
newsBtn2.addEventListener('click', () => {
  newsTabActive(newsBtns, newsBtn2);
});
newsBtn3.addEventListener('click', () => {
  newsTabActive(newsBtns, newsBtn3);
});
newsBtn4.addEventListener('click', () => {
  newsTabActive(newsBtns, newsBtn4);
});

// 패밀리사이트 드롭다운
familysitebtn.addEventListener('click', () => {
  const isOpen = familysitemenu.classList.toggle('active');
  familysitebtn.setAttribute('aria-expanded', isOpen);
});

// 모바일
const mobile_btn = document.querySelector('.mobile_menubtn');
const mobile_panel = document.getElementById('mobile_menupanel');
const mobile_overlay = document.querySelector('.overlay_mobile');
const mobile_closebtn = document.querySelector('.mobilemenu_close');
const dep_btn2 = document.querySelector('.depL_Btn2');

// 패널 버튼
mobile_btn.addEventListener('click', () => {
    const isOpen = mobile_btn.getAttribute('aria-expanded') === 'true';
    setMobileState(!isOpen);
});

// 패널 오버레이
mobile_overlay.addEventListener('click', () => {
    setMobileState(false);
});

// 패널 닫기 버튼
mobile_closebtn.addEventListener('click', () => {
    setMobileState(false);
});

// 미니탭 진료과/센터 더보기 버튼
dep_btn2.addEventListener('click', () => {
    const isOpen = dep_btn2.getAttribute('aria-expanded') === 'true';
    setDepState2(!isOpen);
});

// 미니탭 진료과/센터 패널 오버레이
dep_overlay.addEventListener('click', () => {
    setDepState2(false);
});