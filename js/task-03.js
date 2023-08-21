const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery')

// const makeProdycts = ({ url, alt }) => {

//   const srcEl = document.createElement('li');
//   srcEl.classList.add('styleLi')
//   const imgEl = document.createElement('img')
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.classList.add('styleImg')
//   srcEl.appendChild(imgEl);

//   return srcEl;
// }

// const img = images.map(makeProdycts);

// gallery.append("beforeend", ...img)

let test = '';


images.forEach(image => {
  test+=`<li><img src="${image.url}"></li>`
})

gallery.insertAdjacentHTML('beforeend', test)