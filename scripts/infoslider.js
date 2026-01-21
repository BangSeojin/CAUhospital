// 건강/영양 정보 슬라이더
document.addEventListener('DOMContentLoaded', () => {
    const sliderList1 = document.querySelector('.healthslider_list');
    const items1 = document.querySelectorAll('.healthslider_item');
    const prevBtn1 = document.getElementById('health_slider_prev');
    const nextBtn1 = document.getElementById('health_slider_next');
    const dots1 = document.querySelectorAll('.slider_pagination1 .dot');

    const sliderList2 = document.querySelector('.nutrislider_list');
    const items2 = document.querySelectorAll('.nutrislider_item');
    const prevBtn2 = document.getElementById('nutri_slider_prev');
    const nextBtn2 = document.getElementById('nutri_slider_next');
    const dots2 = document.querySelectorAll('.slider_pagination2 .dot');

    const itemWidth = 17 * 16; // 17rem
    const gap = 16; // 1rem
    const itemsPerPage = 2;

    const totalPages1 = Math.ceil(items1.length / itemsPerPage);
    const totalPages2 = Math.ceil(items1.length / itemsPerPage);
    let currentPage1 = 0;
    let currentPage2 = 0;

    function updateSlider1() {
        const moveX =
            currentPage1 * (itemWidth * itemsPerPage + gap * itemsPerPage);

        sliderList1.style.transform = `translateX(-${moveX}px)`;

        dots1.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage1);
        });

        prevBtn1.disabled = currentPage1 === 0;
        nextBtn1.disabled = currentPage1 === totalPages1 - 1;
    }

    function updateSlider2() {
        const moveX =
            currentPage2 * (itemWidth * itemsPerPage + gap * itemsPerPage);

        sliderList2.style.transform = `translateX(-${moveX}px)`;

        dots2.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage2);
        });

        prevBtn2.disabled = currentPage2 === 0;
        nextBtn2.disabled = currentPage2 === totalPages2 - 1;
    }

    nextBtn1.addEventListener('click', () => {
        if (currentPage1 < totalPages1 - 1) {
            currentPage1++;
            updateSlider1();
        }
    });

    nextBtn2.addEventListener('click', () => {
        if (currentPage2 < totalPages2 - 1) {
            currentPage2++;
            updateSlider2();
        }
    });

    prevBtn1.addEventListener('click', () => {
        if (currentPage1 > 0) {
            currentPage1--;
            updateSlider1();
        }
    });

    prevBtn2.addEventListener('click', () => {
        if (currentPage2 > 0) {
            currentPage2--;
            updateSlider2();
        }
    });

    dots1.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentPage1 = index;
            updateSlider1();
        });
    });

    dots2.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentPage2 = index;
            updateSlider2();
        });
    });

    updateSlider1();
    updateSlider2();
});