/* Burger */

const burgerMenu = document.querySelector('.burger_menu_flex');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const nav = document.querySelectorAll('.underline')

burgerMenu.addEventListener('click', () => {
  header.classList.toggle('open');
  body.classList.toggle('scroll_none');
})

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth <= 768) {
    header.classList.remove('open');
    nav.forEach(item => {
      item.addEventListener('click', () => {
        header.classList.toggle('open');
        body.classList.toggle('scroll_none');
      })
    })
  }
})

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 768) {
   body.classList.remove('scroll_none');
  }
})




/* SLider */

const images = document.querySelectorAll('.img_slider');
const rowSlider = document.querySelector('.row-slider');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
const controls = document.querySelectorAll('.control_non-active1');
const controlActive = document.querySelector('.control-active');
const sliderWrapper = document.querySelector('.slider_wrapper');
let count = 0;
let width;

function init() {
  width = sliderWrapper.offsetWidth;
  rowSlider.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
  })
  rollSlider();
}

window.addEventListener('resize', init);
init();

sliderPrev.addEventListener('click', () => {
  clearInterval(stopInterval);
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
  stopInterval = setInterval(interval, 6000);
})

sliderNext.addEventListener('click', () => {
  clearInterval(stopInterval);
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
  stopInterval = setInterval(interval, 6000);
})

function rollSlider() {
  rowSlider.style.transform = 'translate(-' + count * width + 'px)';
  controls[count].classList.add('control-active');
  if (count === 0) {
    controls[1].classList.remove('control-active');
    controls[2].classList.remove('control-active');
  }
  if (count === 1) {
    controls[0].classList.remove('control-active');
    controls[2].classList.remove('control-active');
  }
  if (count === 2) {
    controls[0].classList.remove('control-active');
    controls[1].classList.remove('control-active');
  }
}

function interval() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
}

let stopInterval = setInterval(interval, 6000);

/* Swipe */

let x1 = 0;
let x2 = 0;

function checkDirection() {
  if (x1 > x2) {
      clearInterval(stopInterval);
    count++;
    if (count >= images.length) {
      count = 0;
    }
    rollSlider();
    stopInterval = setInterval(interval, 6000);
  }
  if (x1 < x2) {
    clearInterval(stopInterval);
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSlider();
    stopInterval = setInterval(interval, 6000);
  }
}

sliderWrapper.addEventListener('touchstart', (event) => {
  x1 = event.changedTouches[0].screenX;
})

sliderWrapper.addEventListener('touchend', (event) => {
  x2 = event.changedTouches[0].screenX;
  checkDirection();
})


