// tab

let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
tab.forEach((item) => {
  item.addEventListener('click', function() {
    tab.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
      })
  })
})

// swiper

var solutions = new Swiper(".solutions", {
  grid:{
    fill: 'row',
    rows : 2
  },
  slidesPerView: 2,
  loop:true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid:{
        fill: 'col',
        rows : 1
      },
    },
    1100: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var skills = new Swiper(".skills", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var services = new Swiper(".services", {
  slidesPerView: 2,
  loop:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var portfollio = new Swiper(".portfollio", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});

var costumer = new Swiper(".costumer", {
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 45,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1200: {
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

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})