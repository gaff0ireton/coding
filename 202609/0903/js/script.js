
const response = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await response.json();

console.log(data);

const img = document.querySelector('.dog-img img');

const btn = document.querySelector('.dog-btn');

img.src = data.message;

btn.addEventListener('click', async() => {
 const response = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await response.json();
img.src = data.message;

});