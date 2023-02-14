const yeniSifre = 'dasdada';

if (yeniSifre.length > 12) {
  console.log('Şifre Güçlü');
} else if (yeniSifre.length >= 8 && yeniSifre.length < 12) {
  console.log('Şifre yeterli');
} else {
  console.log('Şifre Güçlü Değil');
}
