// const button = document.querySelector('button');
// const button = document.querySelector('.buttonClass');
// const button = document.querySelector('#buttonId');

// button.addEventListener('click', () => {
//   console.log('Tıklandı');
// });

// function add() {
//   console.log('Tıklandı');
// }

// console.log(button);

// const liElemanlari = document.querySelectorAll('li');

// liElemanlari.forEach((eleman) => {
//   eleman.addEventListener('click', (e) => {
//     e.target.style.color = 'blue';
//   });
// });
// console.log(liElemanlari);

// const ulElemanim = document.querySelector('ul');
// console.log(ulElemanim);
// ulElemanim.remove();

// liElemanlari.forEach((eleman) => {
//   eleman.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
console.log(liElemanim);

//append sona eleman ekler
//prepend başa ekler

const ulElemanim = document.querySelector('ul');
const button = document.getElementById('buttonId');

button.addEventListener('click', () => {
  const liElemanim = document.createElement('li');
  liElemanim.textContent = 'Javascript';
  ulElemanim.append(liElemanim);
});
