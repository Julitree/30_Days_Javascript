'use strict';
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  //checking off item between two checked items
  let inBetween = false;
  //if user holds down shift key and one item is already checked then fire the if statement
  if(e.shiftKey && this.checked) {
    //looping through every item and switching "inBetween" variable to true for all items between the two checkced items.
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      //if "inBetween" is true for an item, it will programatically change its "checked" value to true.
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
});