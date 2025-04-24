document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('.tabs');
  const tabs = document.querySelectorAll('.tabs > div');
  const contents = document.querySelectorAll('.tabsContent > div');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentIndex = 0;
  const tabWidth = tabs[0].offsetWidth + 30; // عرض هر تب + گپ
  
  // مقداردهی اولیه
  function initSlider() {
      // تنظیم تب اول به عنوان فعال
      updateActiveTab(0);
      
      // مخفی کردن محتوای غیرفعال
      contents.forEach((content, index) => {
          if (index !== 0) {
              content.style.display = 'none';
              content.style.opacity = '0';
          }
      });
  }
  
  // به روزرسانی تب فعال
  function updateActiveTab(newIndex) {
      // محدود کردن اندیس به محدوده معتبر
      if (newIndex < 0) newIndex = tabs.length - 1;
      if (newIndex >= tabs.length) newIndex = 0;
      
      // به روزرسانی اندیس فعلی
      currentIndex = newIndex;
      
      // اسکرول به تب فعلی
      tabsContainer.scrollTo({
          left: currentIndex * tabWidth,
          behavior: 'smooth'
      });
      
      // به روزرسانی استایل تب‌ها
      tabs.forEach((tab, index) => {
          tab.classList.toggle('opacity-50', index !== currentIndex);
          tab.classList.toggle('active', index === currentIndex);
      });
      
      // به روزرسانی محتوا
      updateContent();
  }
  
  // به روزرسانی محتوای نمایش داده شده
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
  
  // رویداد کلیک برای تب‌ها
  tabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
          updateActiveTab(index);
      });
  });
  
  // رویداد کلیک برای دکمه قبلی
  prevBtn.addEventListener('click', function() {
      updateActiveTab(currentIndex - 1);
  });
  
  // رویداد کلیک برای دکمه بعدی
  nextBtn.addEventListener('click', function() {
      updateActiveTab(currentIndex + 1);
  });
  
  // مقداردهی اولیه اسلایدر
  initSlider();
});