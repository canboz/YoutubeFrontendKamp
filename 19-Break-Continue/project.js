const notlar = [15, 45, 32, 0, 100, 90, 7];

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] === 32) {
    continue;
  }
  console.log(notlar[i]);
  if (notlar[i] === 100) {
    console.log('Bravo! En yüksek notu sen aldın.');
    break;
  }
}
