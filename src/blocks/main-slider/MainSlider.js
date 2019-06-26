import Swiper from 'swiper';

class MainSlider {
  constructor() {
    this.init();
  }

  init() {
    new Swiper('.swiper-conteiner', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
export default MainSlider;




































// class MainSlider {
//   constructor() {
//     this.sliderVertical = document.querySelector('.main-slider_hider');
//     this.swiper = null;
//     this.init();
//   }
//   init() {
//     this.swiper = new Swiper (this.sliderVertical, {
//       grabCursor: true,
//       loop: true,
//       direction: 'vertical',
//       breakpoints:{
//         768: {
//           direction: 'horizontal',
//         }
//       },
//       navigation: {
//         nextEl: this.sliderVertical.querySelector('.main-slider__arrow-right'),
//         nextEl: this.sliderVertical.querySelector('.main-slider__arrow-left'),
//       },
//       pagination: {
//         el: this.sliderVertical.querySelector('.slider-dots-wrapper'),
//         clickable: true,
//         bulletActiveClass: 'dots_active',
//         bulletClass: 'slider-dots'
//       },
//     });
//   }
// }

// export default MainSlider;