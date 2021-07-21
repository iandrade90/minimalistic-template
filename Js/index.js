//FIXED NAVBAR

console.log('hola');

window.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

//COUNTER

const counters = document.querySelectorAll('.value');
const speed = 20000;

counters.forEach( counter => {
  const animate = () => {
    const value = +counter.getAttribute('akhi');
    const data = +counter.innerText;

    const time = value / speed;
    if(data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1); 
    } else {
      counter.innerText = value;
    }
  }

  animate();
});