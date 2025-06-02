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
  slidesPerView: 3,
  spaceBetween: 15,
   breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   reverseDirection: true,
  //   disableOnInteraction: false, // توقف نشود!
  // },
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
    navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
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
 autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var services = new Swiper(".services", {
  slidesPerView: 2,
  loop: true,
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ابتدا تابع showContent را به صورت جداگانه تعریف می‌کنیم
function showContent(id) {
  // ابتدا همه محتواها را مخفی کنید
  document.querySelectorAll('.services2Content').forEach(content => {
    content.classList.remove('active');
  });
  
  // سپس محتوای مربوط به اسلاید فعال را نمایش دهید
  const activeContent = document.querySelector(`.services2Content[data-id="${id}"]`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
}
// مقداردهی Swiper
var services2 = new Swiper(".services2", {
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
  slidesPerView: 1.2,
  loop: true,
  spaceBetween: 33,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function() {
      const activeSlide = this.slides[this.activeIndex];
      const activeId = activeSlide.querySelector('.tab2').getAttribute('data-id');
      showContent(activeId);
    },
    slideChange: function() {
      const activeSlide = this.slides[this.activeIndex];
      const activeId = activeSlide.querySelector('.tab2').getAttribute('data-id');
      showContent(activeId);
    }
  }
});
// مدیریت کلیک روی تب‌ها
document.querySelectorAll('.tab2').forEach((tab, index) => {
  tab.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    
    // فعال کردن اسلاید مربوطه در Swiper
    services2.slideTo(index); // این خط اسلاید مربوطه را فعال می‌کند
    
    // نمایش محتوای مرتبط
    showContent(id);
    
    // اضافه کردن استایل فعال به تب کلیک شده
    document.querySelectorAll('.tab2').forEach(t => {
      t.parentElement.classList.remove('swiper-slide-active'); // کلاس فرضی برای تب فعال
    });
    this.parentElement.classList.add('swiper-slide-active');
  });
});
// تابع برای نمایش محتوای مرتبط
function showContent2(id) {
  // مخفی کردن همه محتواها
  document.querySelectorAll('.services3Content').forEach(content => {
    content.classList.remove('active');
  });
  
  // نمایش محتوای مربوطه
  const activeContent = document.querySelector(`.services3Content[data-id="${id}"]`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
}
// مقداردهی Swiper
var services3 = new Swiper(".services3", {
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
  slidesPerView: 1.2,
  loop: true,
  spaceBetween: 33,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
    navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
  on: {
    init: function() {
      const activeSlide = this.slides[this.activeIndex];
      const activeId = activeSlide.querySelector('.tab3').getAttribute('data-id');
      showContent2(activeId);
    },
    slideChange: function() {
      const activeSlide = this.slides[this.activeIndex];
      const activeId = activeSlide.querySelector('.tab3').getAttribute('data-id');
      showContent2(activeId);
    }
  }
});
// مدیریت کلیک روی تب‌ها
document.querySelectorAll('.tab3').forEach((tab, index) => {
  tab.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    
    // فعال کردن اسلاید مربوطه در Swiper
    services3.slideTo(index); // این خط اسلاید مربوطه را فعال می‌کند
    
    // نمایش محتوای مرتبط
    showContent2(id);
    
    // اضافه کردن استایل فعال به تب کلیک شده
    document.querySelectorAll('.tab3').forEach(t => {
      t.parentElement.classList.remove('swiper-slide-active'); // کلاس فرضی برای تب فعال
    });
    this.parentElement.classList.add('swiper-slide-active');
  });
});
var portfollio = new Swiper(".portfollio", {
  slidesPerView: 1,
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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
   autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
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