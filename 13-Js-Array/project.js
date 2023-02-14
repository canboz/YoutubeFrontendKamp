let isimler = ['can','rıdvan','elif'];
// console.log(isimler[0]);

// isimler[1] = 'osman';
// console.log(isimler);



let yaslar = [43,5,6,30];
console.log(yaslar[3]);


let rastgele = ['can','boz',10,15];
console.log(rastgele);

//Dizimin eleman sayısı

console.log(rastgele.length);


let tireli = isimler.join('-');
console.log(tireli);

let virgullu = isimler.join(', ');
console.log(virgullu);

let sira = isimler.indexOf('elif');
console.log(sira);

//Concat Methodu
let eklenmis = isimler.concat(['osman','merve'])
console.log(eklenmis);
console.log(isimler);

isimler.push('Leyla');
console.log(isimler);

isimler.pop();
console.log(isimler);