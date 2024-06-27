// 4-oy 11-dars vazifa
// 1-masala
// const str = "assalomu alekum";
// function aharfinisanash(str) {
//   let res = str.split("");
//   let result = res.filter(function (value) {
//     return value == "a";
//   });

//   return result.length;
// }
// console.log(aharfinisanash(str));

// 2-masala
// function justsonlarmassivi(n) {
//   let result = [];
//   for (let i = 1; i < n; i++) {
//     if (i % 2 == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(justsonlarmassivi(10));

// 3-masala
// function boshjoylarniolish(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result += str[i];
//     }
//   }
//   return result;
// }
// const str = "s a l o m ";
// console.log(boshjoylarniolish(str));

// 4-masala
// function elementochirish(str) {
//   let res = str.slice(1, 5);
//   return res;
// }
// const str = "salom";
// console.log(elementochirish(str));

// // 5-masala
// const son = [21, 833, 111, 14, 53, 456];
// function engkichikelement(son) {
//   let res = son[0];
//   for (let i = 1; i < son.length; i++) {
//     if (son[i] < res) {
//       res = i;
//     }
//   }
//   return res;
// }
// console.log(engkichikelement(son));

// 6-masala
// let str = "hello";
// function kattaharflar(str) {
//   let result = str.split(" ");
//   let res = result.map(function (value) {
//     return value.toUpperCase();
//   });
//   return res.join(" ");
// }
// console.log(kattaharflar(str));

// 7-masala
// const son = [3, 11, 1, 5, 6];
// function engkichikelement(son) {
//   let res = 0;
//   for (let i = 0; i < son.length; i++) {
//     res += son[i];
//   }
//   return res;
// }
// console.log(engkichikelement(son));

// 8-masala
// let str = "bolalar basketbolga boradi";
// function bharfisansh(str) {
//   let result = str.split("");
//   let res = result.filter(function (value) {
//     return value == "b";
//   });
//   return res.join("").length;
// }
// console.log(bharfisansh(str));

// 9-masala
// function kvadratlar(n) {
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     res.push(i ** 2);
//   }
//   return res;
// }
// console.log(kvadratlar(5));

// 10-masala
// function oxirgixarfiniochirish(str) {
//   let res = str.split("");
//   res.pop();
//   return res.join("");
// }
// const str = "assaslomm";
// console.log(oxirgixarfiniochirish(str));

// 11-masala
// let butunsonlar = [12, -3, 54, 456, -653, 32, -8];
// function manfiyniochirish(butunsonlar) {
//   let result = [];
//   for (let i = 0; i < butunsonlar.length; i++) {
//     if (butunsonlar[i] > 0) {
//       result.push(butunsonlar[i]);
//     }
//   }
//   return result;
// }
// console.log(manfiyniochirish(butunsonlar));

// 12-masala
// let str = "q1a3l3ay35iz";
// function sonlarniochirish(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= 0 && str[i] <= 9)) {
//       result.push(str[i]);
//     }
//   }
//   return result.join("");
// }
// console.log(sonlarniochirish(str));

// 13-masala
// const str = "salom yaxshimisan qalaysan";
// function teskaritartibdayozish(str) {
//   let res = str.split("");
//   return res.reverse().join("");
// }
// console.log(teskaritartibdayozish(str));

// 14-masala
// const son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 564];
// function saonlar2ga(son) {
//   let result = [];
//   for (let i = 0; i < son.length; i++) {
//     result.push(son[i] * 2);
//   }
//   return result;
// }
// console.log(saonlar2ga(son));

// 15-maktab
// const son = [12, 23, 45, 325, 34, 21, 67, 53, 4];
// function oxirgibilanboshinialmashtirish(son) {
//   let res = son[0];
//   let result = son[son.length - 1];
//   son[0] = result;
//   son[son.length - 1] = res;
//   return son;
// }
// console.log(oxirgibilanboshinialmashtirish(son));

// 16-masala
// const son = [12, 23, 45, 325, 8, 21, 67, 53, 4];
// function juftlarining_yigindisi(son) {
//   let res = 0;
//   for (let i = 0; i < son.length; i++) {
//     if (son[i] % 2 == 0) {
//       res += son[i];
//     }
//   }
//   return res;
// }
// console.log(juftlarining_yigindisi(son));

// 17-masala
// let str = "salom";
// function katta_harfgaAylantirish(str) {
//   let res = str.split("").map(function (value) {
//     return value.toUpperCase();
//   });
//   return res.join("");
// }
// console.log(katta_harfgaAylantirish(str));
// 18-masala
// const son = [1, 2, 5, 9, "tort", "olti", "yetti", 3, 8];
// function tartiblash(son) {
//   son.sort();
//   return son;
// }
// console.log(tartiblash(son));
// 19-masala
// const str = "axvollaringiz yaxshimu";
// function kattaharf(str) {
//   let res = str.split(" ").map(function (value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(kattaharf(str));

// 20-masala
const son = [12, 23, 45, 325, 8, 21, 67, 53, 4];
function juftlarining_yigindisi(son) {
  let res = [];
  for (let i = 0; i < son.length; i++) {
    if (son[i] % 2 !== 1) {
      res.push(son[i]);
    }
  }
  return res;
}
console.log(juftlarining_yigindisi(son));
