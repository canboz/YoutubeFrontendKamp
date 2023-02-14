// let email="cnboz@hotmail.com";
let email='cnboz@hotmail.com';
console.log(email);


//Birleştirme

let ad ="Zekeriya";
let soyad="Duranel HHHH";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[1]);


//Kaç Karaçter 
console.log(adSoyad.length);

//String Metodlar
console.log(adSoyad.toUpperCase());
let kucukAdSoyad=adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//Kaçıncı İndexte Bulunduğı
let index =adSoyad.indexOf('a');
let indexLast =adSoyad.lastIndexOf('a');
console.log(index);
console.log(indexLast);


//Slice Kullanımı
let ilkIsim = adSoyad.slice(0,8);
console.log(ilkIsim);

//Replace 
let yerdegistir = adSoyad.replace(" ","");
console.log(yerdegistir);

//ReplaceAll

let yerdegistirAll = adSoyad.replaceAll(" ","");
console.log(yerdegistirAll);

