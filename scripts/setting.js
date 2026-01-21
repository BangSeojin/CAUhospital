// 메가메뉴 패널 작동
function setMegamenuState(open) {
    megamenu_btn.setAttribute('aria-expanded', open);
    megamenu_panel.hidden = !open;

    megamenu_btn.classList.toggle('active', open);

    megamenuInput.value = '';
}

// 메가메뉴 패널 내 검색
function megamenuFormBtn(event) {
    event.preventDefault();
    console.log(megamenuInput.value);
    megamenuInput.value = '';
}

// 메인 서치 패널 작동
function setSearchState(open) {
    search_btn.setAttribute('aria-expanded', open);
    search_panel.hidden = !open;
    searchInput.value = '';
}

// 메인 서치패널 내부
function searchFormBtn(event) {
    event.preventDefault();
    console.log(searchInput.value);
    searchInput.value = '';
}

// 메인홈 비디오 재생/정지 버튼
function setVideoBtn() {
    videoBtn.classList.toggle('active');

    if (videoBtn.classList.contains('active')) {
        mainVideo.pause();
    } else {
        mainVideo.play();
    }
}

// 진료과 패널 작동
function setDepState1(open) {
    dep_btn1.setAttribute('aria-expanded', open);
    dep_panel.hidden = !open;
}

// 병원소식 탭 active 초기화
function clearActive(toggleBtns, clickBtn) {
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    clickBtn.classList.add('active');

    tabLists.forEach(tab => {
        tab.classList.remove('active');
    });

    const targetId = clickBtn.dataset.target;
    const targetTabList = document.getElementById(targetId);

    targetTabList.classList.add('active');
}

// 병원소식 탭 active 작동
function newsTabActive(newsBtns, clickBtn) {
    newsBtns.forEach(btn => btn.classList.remove('active'));
    clickBtn.classList.add('active');

    newsLists.forEach(tab => {
        tab.classList.remove('active');
    });

    const targetId = clickBtn.dataset.target;
    const targetTabList = document.getElementById(targetId);

    targetTabList.classList.add('active');
}

// 모바일
// 메뉴패널 작동
function setMobileState(open) {
    mobile_btn.setAttribute('aria-expanded', open);
    mobile_panel.hidden = !open;
}

// 진료과 패널 작동
function setDepState2(open) {
    dep_btn2.setAttribute('aria-expanded', open);
    dep_panel.hidden = !open;
}