document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer2 = document.querySelector('.tabs2');
  const tabs2 = document.querySelectorAll('.tab2');
  const contents2 = document.querySelectorAll('.tabsContent2 > div');
  const prevBtn2 = document.querySelector('.slider-prev2');
  const nextBtn2 = document.querySelector('.slider-next2');
  const paginationContainer2 = document.querySelector('.tabs-pagination2');
  let currentIndex2 = 0;
  let isDragging2 = false;
  let startPos2 = 0;
  let currentTranslate2 = 0;
  let prevTranslate2 = 0;

  // ایجاد pagination dots
  function createPagination2() {
      paginationContainer2.innerHTML = '';
      tabs2.forEach((_, index) => {
          const dot2 = document.createElement('div');
          dot2.classList.add('pagination-dot2');
          if (index === currentIndex2) {
              dot2.classList.add('active');
          }
          dot2.addEventListener('click', () => {
              scrollToTab2(index);
          });
          paginationContainer2.appendChild(dot2);
      });
  }

  // به‌روزرسانی pagination

function updatePagination2() {
  const dots2 = document.querySelectorAll('.pagination-dot2');
  dots2.forEach((dot2, index) => {
      // فقط کلاس active را تغییر دهید بدون هیچ افکتی
      dot2.classList.toggle('active', index === currentIndex2);
      
      // مستقیماً opacity را تنظیم کنید (اختیاری)
      dot2.style.opacity = '1';
      dot2.style.transition = 'none'; // غیرفعال کردن transition
  });
  
  // بعد از به‌روزرسانی، transition را برگردانید
  setTimeout(() => {
      const dots2 = document.querySelectorAll('.pagination-dot2');
      dots2.forEach(dot2 => {
          dot2.style.transition = 'background-color 0.2s ease';
      });
  }, 10);
}
  // تنظیم عرض تب‌ها
  function setupTabSizes2() {
      const containerWidth2 = tabsContainer2.offsetWidth;
      
      if (window.innerWidth >= 1300) {
          tabs2.forEach(tab2 => {
              tab2.style.width = `calc(${containerWidth2}px / 4 - 22.5px)`;
          });
      } 
      else if (window.innerWidth >= 992) {
          tabs2.forEach(tab2 => {
              tab2.style.width = `calc(${containerWidth2}px / 3 - 20px)`;
          });
      }
      else if (window.innerWidth >= 768) {
          tabs2.forEach(tab2 => {
              tab2.style.width = `calc(${containerWidth2}px / 2 - 15px)`;
          });
      }
      else {
          tabs2.forEach(tab2 => {
              tab2.style.width = `${containerWidth2}px`;
          });
      }
  }

  // اسکرول به تب مورد نظر
  function scrollToTab2(index) {
      if (index < 0) index = tabs2.length - 1;
      if (index >= tabs2.length) index = 0;
      
      currentIndex2 = index;
      const tab2 = tabs2[index];
      const containerWidth2 = tabsContainer2.offsetWidth;
      const tabLeft2 = tab2.offsetLeft;
      const tabWidth2 = tab2.offsetWidth;
      
      tabsContainer2.scrollTo({
          left: tabLeft2 - (containerWidth2 - tabWidth2) / 2,
          behavior: 'smooth'
      });
      
      updateActiveTab2(index);
      updatePagination2();
  }

  // به‌روزرسانی تب فعال
  function updateActiveTab2(index) {
      currentIndex2 = index;
      
      tabs2.forEach((tab2, i) => {
          tab2.classList.toggle('active', i === currentIndex2);
          tab2.classList.toggle('opacity-50', i !== currentIndex2);
      });

      updateContent2();
  }

  // به‌روزرسانی محتوا
  function updateContent2() {
      const activeTabId2 = tabs2[currentIndex2].getAttribute('data-id');
      
      contents2.forEach(content2 => {
          if (content2.getAttribute('data-id') === activeTabId2) {
              content2.style.display = 'grid';
              setTimeout(() => {
                  content2.style.opacity = '1';
              }, 10);
          } else {
              content2.style.opacity = '0';
              setTimeout(() => {
                  content2.style.display = 'none';
              }, 300);
          }
      });
  }

  // رویدادهای تاچ
  tabsContainer2.addEventListener('touchstart', (e) => {
      isDragging2 = true;
      startPos2 = e.touches[0].clientX;
      prevTranslate2 = tabsContainer2.scrollLeft;
  });

  tabsContainer2.addEventListener('touchmove', (e) => {
      if (!isDragging2) return;
      const currentPos2 = e.touches[0].clientX;
      const diff2 = currentPos2 - startPos2;
      tabsContainer2.scrollLeft = prevTranslate2 - diff2;
  });

  tabsContainer2.addEventListener('touchend', () => {
      isDragging2 = false;
      const containerWidth2 = tabsContainer2.offsetWidth;
      const scrollPos2 = tabsContainer2.scrollLeft + containerWidth2 / 2;
      
      for (let i = 0; i < tabs2.length; i++) {
          const tab2 = tabs2[i];
          const tabLeft2 = tab2.offsetLeft;
          const tabRight2 = tabLeft2 + tab2.offsetWidth;
          
          if (scrollPos2 >= tabLeft2 && scrollPos2 < tabRight2) {
              scrollToTab2(i);
              break;
          }
      }
  });

  // رویدادهای کلیک
  tabs2.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          scrollToTab2(index);
      });
  });

//   prevBtn2.addEventListener('click', () => {
//       scrollToTab2(currentIndex2 - 1);
//   });

//   nextBtn2.addEventListener('click', () => {
//       scrollToTab2(currentIndex2 + 1);
//   });

  // رویداد تغییر سایز
  window.addEventListener('resize', () => {
      setupTabSizes2();
      scrollToTab2(currentIndex2);
  });

  // مقداردهی اولیه
  setupTabSizes2();
  createPagination2();
  updateActiveTab2(0);
});