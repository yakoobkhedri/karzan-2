
document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('.vertical-tabs-container');
  const tabsSlider = document.querySelector('.vertical-tabs-slider');
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContents = document.querySelectorAll('.tab-content');

  // تنظیم عرض برای اولین و آخرین تب
  function setTabWidths() {
    tabItems.forEach((tab, index) => {
      // حذف کلاس‌های عرض موجود
      tab.classList.remove('max-w-[238px]', 'max-w-[332px]');
      
      // اگر اولین یا آخرین تب است
      if (index === 0 || index === tabItems.length - 1) {
        tab.classList.add('max-w-[238px]');
        tab.querySelector('div > h2:first-child').style.fontSize = '16px';
        tab.querySelector('div > h2:last-child').style.fontSize = '10px';
      } else {
        tab.classList.add('max-w-[332px]');
      }
    });
  }

  // فراخوانی اولیه
  setTabWidths();
  
  let currentTab = 0;
  let currentPosition = 0;
  const tabHeight = 120; // ارتفاع تقریبی هر تب
  const visibleTabs = 5; // تعداد تب‌های قابل مشاهده
  let isDragging = false;
  let startY, startPosition;
  let interval;

  // محاسبه ارتفاع کل اسلایدر
  tabsSlider.style.height = (tabItems.length * tabHeight) + 'px';

  // تابع برای تغییر تب
  function changeTab(index) {
    // غیرفعال کردن همه تب‌ها
    tabItems.forEach(tab => {
      tab.classList.remove('active');
      tab.style.opacity = '0.3';
    });
    
    // غیرفعال کردن همه محتواها
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
    });
    
    // فعال کردن تب و محتوای انتخاب شده
    tabItems[index].classList.add('active');
    tabItems[index].style.opacity = '1';
    tabContents[index].classList.add('active');
    tabContents[index].classList.remove('hidden');
    
    currentTab = index;
    adjustSliderPosition();
  }

  // تنظیم موقعیت اسلایدر با قابلیت اسکرول به بالا برای تب‌های آخر
  function adjustSliderPosition() {
    // اگر تب انتخاب شده جزو 4 تب آخر است
    if (currentTab >= tabItems.length - 4) {
      currentPosition = Math.max(0, tabItems.length - visibleTabs);
    } 
    // اگر تب انتخاب شده جزو 4 تب اول است
    else if (currentTab <= 3) {
      currentPosition = 0;
    }
    // در حالت عادی تب انتخاب شده در وسط باشد
    else {
      currentPosition = currentTab - 2;
    }
    
    // اعمال موقعیت جدید به اسلایدر
    tabsSlider.style.transform = `translateY(-${currentPosition * tabHeight}px)`;
  }

  // رویدادهای درگ
  tabsSlider.addEventListener('mousedown', function(e) {
    isDragging = true;
    startY = e.clientY;
    startPosition = currentPosition;
    tabsSlider.classList.add('grabbing');
    clearInterval(interval);
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    
    const y = e.clientY;
    const deltaY = y - startY;
    const deltaPosition = deltaY / tabHeight;
    
    currentPosition = startPosition - deltaPosition;
    
    // محدود کردن به محدوده مجاز
    const maxPosition = Math.max(0, tabItems.length - visibleTabs);
    currentPosition = Math.min(maxPosition, Math.max(0, currentPosition));
    
    tabsSlider.style.transition = 'none';
    tabsSlider.style.transform = `translateY(-${currentPosition * tabHeight}px)`;
  });

  document.addEventListener('mouseup', function() {
    if (!isDragging) return;
    isDragging = false;
    tabsSlider.classList.remove('grabbing');
    tabsSlider.style.transition = 'transform 0.3s ease';
    
    // پس از پایان درگ، موقعیت را تنظیم می‌کنیم
    const maxPosition = Math.max(0, tabItems.length - visibleTabs);
    currentPosition = Math.min(maxPosition, Math.max(0, currentPosition));
    tabsSlider.style.transform = `translateY(-${currentPosition * tabHeight}px)`;
    
    startSlider();
  });

  // شروع اسلایدر خودکار با اسکرول به بالا برای تب‌های آخر
  function startSlider() {
    clearInterval(interval);
    interval = setInterval(() => {
      currentTab = (currentTab + 1) % tabItems.length;
      
      // اگر به انتهای لیست رسیدیم، به بالا اسکرول کنیم
      if (currentTab === 0) {
        currentPosition = 0;
        tabsSlider.style.transform = `translateY(0)`;
      }
      
      changeTab(currentTab);
    }, 4000);
  }

  // رویداد کلیک برای تب‌ها
  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', function(e) {
      if (isDragging) {
        e.preventDefault();
        return;
      }
      
      clearInterval(interval);
      changeTab(index);
      startSlider();
    });
  });

  // شروع اولیه
  changeTab(0);
  startSlider();
});