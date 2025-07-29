// bài 1
// let i;
// for( let i = 1; i <= 100 ; i = i +1){
//     console.log(i);
// if (i === 99)
//     alert("Đã hoàn thành vòng lặp");
// }

// bài 2
// let c = +prompt (' nhập nhiệt độ C');
// if ( c >= 100){
//     alert ( " bạn cần giảm nhiệt độ nha!!");
// }else if ( c <= 0){
//     alert ( " bạn cần tăng nhiệt độ lên nha!!");
// }else {
//     alert ( " nhiệt độ ổn rồi nha!!, ngủ thêm giấc nữa đi!!");
// }

//bài 3
// let a = 0;
// let b = 1;
// for (let i = 1; i<= 20; i++){
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

// bài 4
// let a = 0;
// let b = 1;
// while (true){
//     let c = a + b;
//     a = b;
//     b = c;

// if ( a % 5 === 0 ){
//     console.log("số chia hết cho 5 đầu tiên là: "+ a);
//     break;
// }}

// bài 5
// let a = 0;
// let b = 1;
// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//     sum = sum + a;               // Cộng số Fibonacci hiện tại vào tổng
//     let c = a + b;
//     a = b;
//     b = c;
// }

// console.log("Tổng 20 số Fibonacci đầu tiên là: " + sum);

// bài 6
// let a = 0;
// let count = 0;
// let sum = 0;
// while (count < 30) {
//      if ( a % 7 ===0){
//         sum = a + sum;
//         count = count + 1; 
//     }
//      a = a + 1; 
//     }
// console.log("Tổng 30 số chia hết cho 7 đầu tiên là: " + sum);

// bài 7
// let i ;
// for( i = 0 ; i <=100 ; i = i + 1){
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log(i +" "+ "FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " "+"Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i +" "+ "Buzz");
//     } else {
//         console.log(i);
//     }
 
// }

// bài 8
// let min = +prompt (" nhập số nhỏ nhất");
// let max = +prompt (" nhập số lớn nhất");
// let randum = Math.floor(Math.random() * (max - min + 1)) + min;
// let guess;
// while (true){
//     guess = +prompt("Nhập số bạn đoán (giữa " + min + " và " + max + "):");
//     if (guess < min || guess > max) {
//         alert("Số bạn nhập không hợp lệ. Vui lòng nhập lại.");
//     } else if (guess < randum) {
//         alert("Số bạn đoán quá nhỏ. Hãy thử lại.");
//     } else if (guess > randum) {
//         alert("Số bạn đoán quá lớn. Hãy thử lại.");
//     } else {
//         alert("Chúc mừng! Bạn đã đoán đúng số: " + randum);
//         break;
//     }

// }


// -------------------- luyện tập 2 ---------------------------
// bài 1
// let a = 0;
// let b = 1;
// for ( let i = 1; i <= 20; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

// bài 2
// let n = +prompt("Nhập một số nguyên dương:");
// let result = 1;
// for (i = 1; i <= n; i = i + 1){
//     result = result * i;
// }
// console.log("Giai thừa của " + n + " là: " + result);

// bài 3
// let h = 5;
// for (let i = 1; i <= h; i++) {
//   console.log("*".repeat(i));
// }

// for (let i = h; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// for (let i = 1; i <= h; i++) {
//   let space = " ".repeat(h - i);
//   let star = "*".repeat(i);
//   console.log(space + star);
// }

// for (let i = h; i >= 1; i--) {
//   let space = " ".repeat(h - i);
//   let star = "*".repeat(i);
//   console.log(space + star);
// }

// bài 4
// let rows = 5;
// let cols = 10;

// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= cols; j++) {
//     if (i === 1 || i === rows || j === 1 || j === cols) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// bài 5

// let tienGoc = +prompt("Nhập số tiền gốc:");
// let laiSuat = +prompt("Nhập lãi suất hàng năm ");
// let soThang = +prompt("Nhập số tháng gửi:");
// let tongTien = tienGoc * Math.pow((1 + laiSuat / 100 / 12), soThang);
// let lai = tongTien - tienGoc;
// console.log("Số tiền lãi sau " + soThang + " tháng là: " + lai.toFixed(2));
// console.log("Tổng số tiền sau " + soThang + " tháng là: " + tongTien.toFixed(2));