const panels = document.querySelectorAll('.panel');
function toggleOpen () {
  this.classList.toggle('open'); 
};

const toggleActive = (evt) => {
  if(evt.propertyName.includes('flex')) {
    evt.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
