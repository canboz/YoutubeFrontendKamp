function hello() {
  console.log('Hello');
}

hello();
hello();
hello();

const nameSurname = function (ad = 'Can', soyad = 'Boz') {
  console.log(`Ad soyad ${ad} ${soyad}`);
};

nameSurname('Kemal', 'Bozzz');
nameSurname();

// const karealani = function (kenar) {
//   return kenar * kenar;
// };

// let sonuc = karealani(5);
// console.log(sonuc);

// const karealani = (kenar) => {
//   return kenar * kenar;
// };

// const karealani = (kenar) => {
//   return kenar * kenar;
// };

const karealani = (kenar) => kenar * kenar;

let sonuc = karealani(5);
console.log(sonuc);

// const donus = () => {
//   return 'Can';
// };

const donus = () => 'Can';

console.log(donus());

//Uygulama
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

// const urunSatis = function (urunler, vergi) {
//   let toplam = 0;
//   for (let i = 0; i < urunler.length; i++) {
//     toplam += urunler[i] + urunler[i] * vergi;
//   }
//   return toplam;
// };

// console.log(urunSatis([10, 20, 30], 0.25));

const urunSatis = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));
