
const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(item => {
  const dropdown = item.querySelector('.dropdown-items');

  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });

});