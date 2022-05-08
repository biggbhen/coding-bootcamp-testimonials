const UIimage = document.querySelectorAll('.carousel-image');
const UItestimony = document.querySelectorAll('.testimony');
const nextBtn = document.querySelector('.next-btn');
const previousBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click', function (e) {
  // console.log('hey');
  let nextIndex;
  let imgArray = [...UIimage];
  let testimonyArr = [...UItestimony];
  // console.log(testimonyArr);
  testimonyArr.forEach((item, index) => {
    // checked the index of the item with the current class .

    if (item.classList.contains('current')) {
      nextIndex = index + 1;
    }
    // removed the class from the item
    item.classList.remove('current');
  });
  if (nextIndex > testimonyArr.length - 1) {
    nextIndex = 0;
  }
  testimonyArr[nextIndex].classList.add('current');

  imgArray.forEach((item, index) => {
    // checked the index of the item with the current class .

    if (item.classList.contains('current')) {
      nextIndex = index + 1;
    }
    // removed the class from the item
    item.classList.remove('current');
  });
  if (nextIndex > imgArray.length - 1) {
    nextIndex = 0;
  }
  imgArray[nextIndex].classList.add('current');

  // console.log(nextIndex);
  e.preventDefault();
});

// previousBtn arrow

previousBtn.addEventListener('click', function (e) {
  console.log('hello');
  let previousIndex;
  let imgArray = [...UIimage];
  let testimonyArr = [...UItestimony];
  console.log(testimonyArr);

  testimonyArr.forEach((item, index) => {
    // checked the index of the item with the current class .

    if (item.classList.contains('current')) {
      previousIndex = index - 1;
    }
    // removed the class from the item
    item.classList.remove('current');
  });
  if (previousIndex < 0) {
    previousIndex = testimonyArr.length - 1;
  }
  testimonyArr[previousIndex].classList.add('current');

  imgArray.forEach((item, index) => {
    // checked the index of the item with the current class .

    if (item.classList.contains('current')) {
      previousIndex = index - 1;
    }
    // removed the class from the item
    item.classList.remove('current');
  });
  if (previousIndex < 0) {
    previousIndex = imgArray.length - 1;
  }
  imgArray[previousIndex].classList.add('current');

  e.preventDefault();
});
