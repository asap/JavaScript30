let isShwifty = false;
let lastChecked;

const doTheThing = (e) => {
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkBoxes.forEach(checkbox => {
     if (checkbox === e.target || checkbox === lastChecked) {
       inBetween = !inBetween;
     } 
      if (inBetween) {
        checkbox.checked = 'true';
      }
    });
  }
  lastChecked = e.target;
};

const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
checkBoxes.forEach(box => box.addEventListener('click', doTheThing));
