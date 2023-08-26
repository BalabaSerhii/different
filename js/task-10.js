const boxEl = document.querySelector('#boxes')
const formEl = document.querySelector('#controls')
const createBtn = document.querySelector('[data-create]')
const deletBtn = document.querySelector('[data-destroy]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


formEl.addEventListener('sumbit', test) 

function test(event) {
  console.log("~  event:", event)
  return eventData = event.currentTarget.value;
 
}




createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  
}


deletBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {

}
