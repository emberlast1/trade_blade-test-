'use strict';

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');

    item.classList.toggle('active');

    if (content.classList.contains('open')) {
      content.style.height = '0';
      content.classList.remove('open');
    } else {
      content.classList.add('open');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
