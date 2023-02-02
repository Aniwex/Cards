let [
  block__element1,
  block__element2,
  block__element3,
  block__element4,
  block__element1_1,
  block__element2_2,
  block__element3_3,
  block__element4_4,
] = [
  document.querySelector('.block__element1'),
  document.querySelector('.block__element2'),
  document.querySelector('.block__element3'),
  document.querySelector('.block__element4'),
  document.querySelector('.block__element1-1'),
  document.querySelector('.block__element2-2'),
  document.querySelector('.block__element3-3'),
  document.querySelector('.block__element4-4'),
];
block__element1.addEventListener('mouseover', (e) => {
  if (
    e.target &&
    e.relatedTarget &&
    e.target.closest('div') !== e.relatedTarget.closest('div') &&
    e
  ) {
    document.querySelector('.wrapper-frame2').classList.toggle('sheet1');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet1');
    e.target.closest('div').style.display = 'none';
    block__element1_1.style.display = 'block';
  }
});
block__element1_1.addEventListener('mouseout', (e) => {
  if (e.target && e.relatedTarget && e.target.closest('div') !== e.relatedTarget.closest('div')) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet1');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet1');
    block__element1.style.display = 'block';
  }
});

block__element2.addEventListener('mouseover', (e) => {
  if (
    e.target &&
    e.relatedTarget &&
    e.target.closest('div') !== e.relatedTarget.closest('div') &&
    e
  ) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet2');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet2');
    block__element2_2.style.display = 'block';
  }
});
block__element2_2.addEventListener('mouseout', (e) => {
  if (e.target && e.relatedTarget && e.target.closest('div') !== e.relatedTarget.closest('div')) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet2');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet2');
    block__element2.style.display = 'block';
  }
});

block__element3.addEventListener('mouseover', (e) => {
  if (
    e.target &&
    e.relatedTarget &&
    e.target.closest('div') !== e.relatedTarget.closest('div') &&
    e
  ) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet1');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet1');
    block__element3_3.style.display = 'block';
  }
});
block__element3_3.addEventListener('mouseout', (e) => {
  if (e.target && e.relatedTarget && e.target.closest('div') !== e.relatedTarget.closest('div')) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet1');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet1');
    block__element3.style.display = 'block';
  }
});

block__element4.addEventListener('mouseover', (e) => {
  if (
    e.target &&
    e.relatedTarget &&
    e.target.closest('div') !== e.relatedTarget.closest('div') &&
    e
  ) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet2');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet2');
    block__element4_4.style.display = 'block';
  }
});
block__element4_4.addEventListener('mouseout', (e) => {
  if (e.target && e.relatedTarget && e.target.closest('div') !== e.relatedTarget.closest('div')) {
    e.target.closest('div').style.display = 'none';
    document.querySelector('.wrapper-frame2').classList.toggle('sheet2');
    document.querySelector('.wrapper-frame5').classList.toggle('sheet2');
    block__element4.style.display = 'block';
  }
});
