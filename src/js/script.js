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
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
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

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})