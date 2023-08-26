function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
  



const btnEl = document.querySelector('.change-color');
const spanNameColor = document.querySelector('.color');
const bodyEl = document.body;

btnEl.addEventListener('click', chengColor);

function chengColor(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanNameColor.textContent = randomColor;

}




//при кли

// .body = {
//   background-color:
// }

// spanNameColor.textContent('${background-color}')