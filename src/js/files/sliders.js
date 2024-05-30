/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".df1234342")) {
    new Swiper(".df12324234", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      // lazyPreloaderClass: 'preloader',

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }

  if (document.querySelector(".clients__items")) {
    new Swiper(".clients__items", {
      modules: [Autoplay],
      observer: true,
      observeParents: true,

      speed: 1500,
      loop: true,
      // loopAdditionalSlides: 5,
      allowTouchMove: false,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 7.5,
          spaceBetween: 10,
        },
      },
    })
  }
  if (document.querySelector(".reviews__slider")) {
    new Swiper(".reviews__slider", {
      modules: [Pagination],
      observer: true,
      observeParents: true,

      speed: 500,
      loop: true,

      pagination: {
        el: ".reviews__slider .pagination",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true,
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          autoHeight: false,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 32,
          autoHeight: false,
        },
      },
    })
  }

  for (const mobileSlider of document.querySelectorAll(".products__items")) {
    if (mobileSlider) {
      ;(function () {
        "use strict"

        const breakpoint = window.matchMedia("(min-width:768px)")
        let slider

        const enableSwiper = function () {
          slider = new Swiper(mobileSlider, {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            speed: 300,
            loop: true,
            lazyPreloaderClass: "preloader",

            navigation: {
              prevEl: ".products__navigation .button-prev",
              nextEl: ".products__navigation .button-next",
            },

            breakpoints: {
              320: {
                slidesPerView: 1.25,
                spaceBetween: 15,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
          })
        }

        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (slider !== undefined) slider.destroy(true, true)

            return
          } else if (breakpoint.matches === false) {
            return enableSwiper()
          }
        }

        breakpoint.addListener(breakpointChecker)
        breakpointChecker()
      })()
    }
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
