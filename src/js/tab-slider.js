document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('.tabs');
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tabsContent > div');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const paginationContainer = document.querySelector('.tabs-pagination');
  let currentIndex = 0;
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // ایجاد pagination dots
  function createPagination() {
      paginationContainer.innerHTML = '';
      tabs.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('pagination-dot');
          if (index === currentIndex) {
              dot.classList.add('active');
          }
          dot.addEventListener('click', () => {
              scrollToTab(index);
          });
          paginationContainer.appendChild(dot);
      });
  }

  // به‌روزرسانی pagination

function updatePagination() {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach((dot, index) => {
      // فقط کلاس active را تغییر دهید بدون هیچ افکتی
      dot.classList.toggle('active', index === currentIndex);
      
      // مستقیماً opacity را تنظیم کنید (اختیاری)
      dot.style.opacity = '1';
      dot.style.transition = 'none'; // غیرفعال کردن transition
  });
  
  // بعد از به‌روزرسانی، transition را برگردانید
  setTimeout(() => {
      const dots = document.querySelectorAll('.pagination-dot');
      dots.forEach(dot => {
          dot.style.transition = 'background-color 0.2s ease';
      });
  }, 10);
}
  // تنظیم عرض تب‌ها
  function setupTabSizes() {
      const containerWidth = tabsContainer.offsetWidth;
      
      if (window.innerWidth >= 1300) {
          tabs.forEach(tab => {
              tab.style.width = `calc(${containerWidth}px / 4 - 22.5px)`;
          });
      } 
      else if (window.innerWidth >= 992) {
          tabs.forEach(tab => {
              tab.style.width = `calc(${containerWidth}px / 3 - 20px)`;
          });
      }
      else if (window.innerWidth >= 768) {
          tabs.forEach(tab => {
              tab.style.width = `calc(${containerWidth}px / 2 - 15px)`;
          });
      }
      else {
          tabs.forEach(tab => {
              tab.style.width = `${containerWidth}px`;
          });
      }
  }

  // اسکرول به تب مورد نظر
  function scrollToTab(index) {
      if (index < 0) index = tabs.length - 1;
      if (index >= tabs.length) index = 0;
      
      currentIndex = index;
      const tab = tabs[index];
      const containerWidth = tabsContainer.offsetWidth;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      
      tabsContainer.scrollTo({
          left: tabLeft - (containerWidth - tabWidth) / 2,
          behavior: 'smooth'
      });
      
      updateActiveTab(index);
      updatePagination();
  }

  // به‌روزرسانی تب فعال
  function updateActiveTab(index) {
      currentIndex = index;
      
      tabs.forEach((tab, i) => {
          tab.classList.toggle('active', i === currentIndex);
          tab.classList.toggle('opacity-50', i !== currentIndex);
      });

      updateContent();
  }

  // به‌روزرسانی محتوا
  function updateContent() {
      const activeTabId = tabs[currentIndex].getAttribute('data-id');
      
      contents.forEach(content => {
          if (content.getAttribute('data-id') === activeTabId) {
              content.style.display = 'block';
              setTimeout(() => {
                  content.style.opacity = '1';
              }, 10);
          } else {
              content.style.opacity = '0';
              setTimeout(() => {
                  content.style.display = 'none';
              }, 300);
          }
      });
  }

  // رویدادهای تاچ
  tabsContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      startPos = e.touches[0].clientX;
      prevTranslate = tabsContainer.scrollLeft;
  });

  tabsContainer.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentPos = e.touches[0].clientX;
      const diff = currentPos - startPos;
      tabsContainer.scrollLeft = prevTranslate - diff;
  });

  tabsContainer.addEventListener('touchend', () => {
      isDragging = false;
      const containerWidth = tabsContainer.offsetWidth;
      const scrollPos = tabsContainer.scrollLeft + containerWidth / 2;
      
      for (let i = 0; i < tabs.length; i++) {
          const tab = tabs[i];
          const tabLeft = tab.offsetLeft;
          const tabRight = tabLeft + tab.offsetWidth;
          
          if (scrollPos >= tabLeft && scrollPos < tabRight) {
              scrollToTab(i);
              break;
          }
      }
  });

  // رویدادهای کلیک
  tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          scrollToTab(index);
      });
  });

  prevBtn.addEventListener('click', () => {
      scrollToTab(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
      scrollToTab(currentIndex + 1);
  });

  // رویداد تغییر سایز
  window.addEventListener('resize', () => {
      setupTabSizes();
      scrollToTab(currentIndex);
  });

  // مقداردهی اولیه
  setupTabSizes();
  createPagination();
  updateActiveTab(0);
});