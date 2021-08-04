//FIXED NAVBAR

window.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

//SCROLLBTN

document.addEventListener('scroll', handleScroll);

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
})


function handleScroll(){
  let btn = document.querySelector('.btn-container');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.15;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}


//SEGMENT ONE ANIMATION

document.addEventListener('scroll', handleScrollOne);

function handleScrollOne(){
  let section = document.querySelector('.segment-one');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.08;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('segment-one-show');
  }
}

//SEGMENT TWO ANIMATION

document.addEventListener('scroll', handleScrollFirst);
document.addEventListener('scroll', handleScrollSecond);
document.addEventListener('scroll', handleScrollThird);
document.addEventListener('scroll', handleScrollFourth);

function handleScrollFirst(){
  let section = document.querySelector('.segment-two-item.one');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.18;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}

function handleScrollSecond(){
  let section = document.querySelector('.segment-two-item.two');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.30;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}

function handleScrollThird(){
  let section = document.querySelector('.segment-two-item.three');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.42;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}

function handleScrollFourth(){
  let section = document.querySelector('.segment-two-item.four');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.52;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}

//SEGMENT THREE ANIMATION

document.addEventListener('scroll', handleScrollThree);

function handleScrollThree(){
  let section = document.querySelector('.segment-three');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.65;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}

//SEGMENT FOUR ANIMATION

document.addEventListener('scroll', handleScrollfour);

function handleScrollfour(){
  let section = document.querySelector('.segment-four');
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.75;

  if((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO){
    section.classList.add('show');
  }
}
