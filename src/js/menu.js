// menu

let btn = Array.from(document.querySelectorAll('.viza'));
let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
let hamIcon = document.getElementById('hamIcon');


dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})


hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
  document.querySelector('header').classList.toggle('active');
})