const UIimage = document.querySelectorAll('.carousel-image');
const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', function (e) {
  console.log([...UIimage]);

  e.preventDefault();
});
