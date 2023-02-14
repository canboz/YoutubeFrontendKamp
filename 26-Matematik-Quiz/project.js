// STEP 1

// doğru cevapları bir dizide tut E E E E

//STEP 2

//Formu bir şekilde çekin içibdeki kullanıcının girdiği değerleri alın örneğin q1.value

//STEP 3

//İster form submit olduğunda eventi eklersiniz button a vlivk eventi eklersiniz

//STEP 4

// Doğru cevaplarla kullanıcının girdiği cevapları foreach yardımıyla kontrol edip her bir doğruu cevap için toplam puanı 25 25 arttırıcam

//STEP 5

//d-none class ını kaldırıcaz
//elde ettiğimiz score u html içerisine bastırıcaz

const correctAnswers = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove('d-none');
  result.querySelector('#percentage').textContent = `${score}%`;

  if (score === 100) {
    successMessage.classList.remove('d-none');
    button.setAttribute('disabled', '');
  }
});
