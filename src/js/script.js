// tab

let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tabContent'));
tab.forEach((item) => {
  item.addEventListener('click', function () {
    tab.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
    let tabId = item.dataset.id;
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
})

// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    reverseDirection: true
  },
  spaceBetween: 20,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  
  // اضافه کردن رویداد slideChange
  on: {
    slideChange: function() {
      // پیدا کردن اسلاید فعال
      const activeSlide = this.slides[this.activeIndex];
      const dataId = activeSlide.getAttribute('data-id');
      
      // حذف کلاس active از همه تب‌های محتوا
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // اضافه کردن کلاس active به تب محتوای مربوطه
      const activeTab = document.querySelector(`.tab-content[data-id="${dataId}"]`);
      if(activeTab) {
        activeTab.classList.add('active');
      }
    },
    // اجرای کد هنگام مقداردهی اولیه
    init: function() {
      this.emit('slideChange'); // برای فعال کردن تب اول هنگام لود صفحه
    }
  }
});

var solutions = new Swiper(".solutions", {
  // تنظیمات پایه
  loop: true,
  spaceBetween: 30,

  // تنظیمات پیش‌فرض برای موبایل (زیر 768px)
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2 // دو ردیف در موبایل
  },

  // تنظیمات breakpoint
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1 // فقط یک ردیف در دسکتاپ
      }
    },
    1100: {
      slidesPerView: 3,
      grid: {
        rows: 1
      }
    },
    1400: {
      slidesPerView: 4,
      grid: {
        rows: 1
      }
    }
  },

  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  }
});
var skills = new Swiper(".skills", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var services = new Swiper(".services", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var portfollio = new Swiper(".portfollio", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var costumer = new Swiper(".costumer", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 45,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next2', // دکمه بعدی
    prevEl: '.swiper-button-prev2', // دکمه قبلی
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
var costumer2 = new Swiper(".costumer2", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next2', // دکمه بعدی
    prevEl: '.swiper-button-prev2', // دکمه قبلی
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
var customer3 = new Swiper(".customer3", {
  effect: "coverflow",
  loop: true,
  autoplay: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next2', // دکمه بعدی
    prevEl: '.swiper-button-prev2', // دکمه قبلی
  },
});
var team = new Swiper(".team", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 33,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 44,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var roadmap = new Swiper(".roadmap", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 5,
  direction: "vertical",
});
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})