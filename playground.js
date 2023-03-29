// let b = 6;
// b += 4;
// console.log(b);
// let c = 10;
// c -= 6;
// console.log(c);
// let d = 10;
// d *= 10;
// console.log(d);
// let e = 100;
// e /= 10;
// console.log(e);

// let x = 10;
// x++;
// console.log(x);

// for (let a = 1; a <= 20; a++) {
//   console.log(a);
// }

// for (let g = 20; g >= 1; g--) {
//   console.log(g);
// }

// for (let i = 1; i <= 19; i++) {
//   // afficher les nombres impairs
//   // est-ce que i est impair
//   // si oui => j'affiche i
//   // si non => j'affiche rien

//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// for (let a = 0; a <= 20; a++) {
//   // afficher les nombres pairs
//   // est-ce que  a est pair
//   // si oui => j'affiche a
//   // si non => j'affiche rien

//   if (a % 2 == 0) {
//     console.log(a);
//   }
// }

// for (let b = 0; b <= 20; b += 2) {
//   console.log(b);
// }
// 25 + 25 + 25 + 25 + 25 + 25 + 25 ... 25
// let res = 0;
// for (let c = 1; c <= 10; c++) {
//   res += 25;
// }

// console.log(res);
//boucle qui calcule le résultat d

let b = ["a", "b", "c"];
console.log(b.length);

console.log(b[0]);
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}

let u = "";
for (let i = 0; i < b.length; i++) {
  u += b[i];
}

console.log(u);
