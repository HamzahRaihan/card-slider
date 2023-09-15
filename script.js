const carousel = document.querySelector('.carousel');
const arrowButtons = document.querySelectorAll('svg');
const firstCard = carousel.querySelector('.card').offsetWidth;

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    carousel.scrollLeft += button.id === 'left' ? -firstCard : firstCard;
  });
});
