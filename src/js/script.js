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


var courses = new Swiper(".courses", {
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 22,
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4.5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var courses2 = new Swiper(".courses2", {
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 22,
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4.5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
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