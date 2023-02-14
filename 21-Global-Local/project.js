let yas = 31;

if (true) {
  let yas = 60;
  console.log('İçerideki yas:', yas);
  if (true) {
    let yas = 50;
    console.log('İçeridekinin içerisibdeki yas:', yas);
  }
}

console.log('En dıştaki yas:', yas);
