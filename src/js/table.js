window.addEventListener('load',function () {
  const table= document.querySelector('.editor-section').querySelector('table');
  const newDiv = document.createElement("div");
  table.parentNode.insertBefore(newDiv,table);
  newDiv.appendChild(table);
  newDiv.classList.add('overflow-x-auto');
  newDiv.classList.add('shadow-13');
  newDiv.classList.add('rounded-[24px]');
  newDiv.classList.add('px-6');
})