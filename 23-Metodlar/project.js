// const points = [70, 75, 25, 35, 10, 80, 27];

// const studentsPassed = points.filter((point) => point > 50);

// console.log(studentsPassed);

// const students = [
//   { name: 'can', passed: true },
//   { name: 'tuba', passed: false },
//   { name: 'elif', passed: false },
//   { name: 'osman', passed: true },
// ];

// const passingStudents = students.filter((student) => {
//   return student.passed;
// });

// console.log(passingStudents);

// const points = [70, 75, 25, 35, 10, 80, 27];

// const newPoints = points.map((point) => {
//   return point + 10;
// });

// console.log(newPoints);

// const points = [70, 75, 25, 35, 10, 80, 27];

// const result = points.reduce((value, point) => {
//   if (point > 50) {
//     value++;
//   }
//   return value;
// }, 0);

// console.log(result);

// const points = [70, 75, 25, 95, 10, 100, 27];

// const highPoint = points.find((point) => {
//   return point > 80;
// });

// console.log(highPoint);

// const points = [70, 75, 25, 35, 10, 80, 27];

// points.push(90);

// console.log(points);

// points.pop();
// console.log(points);

// points.pop();
// console.log(points);

const points = [70, 75, 25, 35, 10, 80, 27];

const arrayIndex = points.findIndex((point) => point === 70);

console.log(arrayIndex);
