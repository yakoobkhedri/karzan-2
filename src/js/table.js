window.addEventListener('load', function() {
  const editorSection = document.querySelector('.editor-section');
  const tables = editorSection.querySelectorAll('table');
  
  tables.forEach(table => {
    // ایجاد div والد اصلی با کلاس‌های مورد نظر
    const outerDiv = document.createElement("div");
    outerDiv.classList.add('mt-6', 'rounded-[15px]', 'sm:rounded-[30px]', 'bg-[#E8EDF3]', 'pb-[30px]');
    
    // ایجاد div داخلی برای جدول
    const innerDiv = document.createElement("div");
    innerDiv.classList.add('overflow-x-auto', 'shadow-13', 'rounded-[24px]', 'px-6');
    
    // جایگزینی جدول با ساختار جدید
    table.parentNode.insertBefore(outerDiv, table);
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(table);
  });
});