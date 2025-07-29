let luachon;
let name;
let age;
let number;
let number2;
let number3;
let number4;
let result;
let input;
let chuoi;
let dora = "dora";
let menu = `
===== MENU CHƯƠNG TRÌNH =====
1. Nhập tên người dùng
2. Nhập tuổi người dùng
3. In tên và tuổi
4. In bảng cửu chương
5. Kiểm tra chẵn/lẻ
6. Tính tổng từ 1 đến N
7. Nhập & in dãy số
8. Kiểm tra số nguyên tố
9. Đảo ngược chuỗi
10. Thoát chương trình
============================
Nhập lựa chọn của bạn (1-10):`;
while (dora === "dora") {
  luachon = +prompt(menu);
  switch (luachon) {
    case 1:
      name = prompt(" nhập tên người dùng");
      break;
    case 2:
      age = +prompt(" nhập tuổi người dùng");
      break;
    case 3:
      console.log(
        " tên người dùng là: " + name + " và tuổi người dùng là: " + age
      );
      break;
    case 4:
      number = +prompt(" nhập số bạn muốn in bảng cửu chương");
      for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
      }
      break;
    case 5:
      number2 = +prompt(" kiểm tra số này là chẵn hay lẻ");
      if (number2 % 2 === 0) {
        console.log("số " + number2 + " là số chẵn");
      } else if (number2 % 2 !== 0) {
        console.log("số" + number2 + " là số lẻ");
      } else if (number2 === 0) {
        console.log(" số này là số 0");
      } else {
        console.log("số này không phải số nguyên, hoặc không tồn tại!!");
      }
      break;
    case 6:
      number3 = +prompt("Tính tổng từ 1 đến N:");
      result = 0;
      for (let j = 1; j <= number3; j++) {
        result += j;
      }
      console.log(`Tổng từ 1 đến ${number3} là: ${result}`);
      break;
    case 7:
      input = prompt("Nhập dãy số cách nhau bằng dấu phẩy (VD: 3,5,7,9):");
      let arr = input.split(",").map(Number); // Chuyển thành mảng số

      console.log("Các số bạn đã nhập:");
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 8:
      number4 = +prompt("Nhập một số nguyên dương:");

      if (number4 < 2) {
        alert(number4 + " không phải là số nguyên tố.");
      } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number4); i++) {
          if (number4 % i === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          alert(number4 + " là số nguyên tố.");
        } else {
          alert(number4 + " không phải là số nguyên tố.");
        }
      }
      break;
    case 9:
      chuoi = prompt("Nhập một chuỗi bất kỳ:");
      let daoNguoc = chuoi.split("").reverse().join("");
      alert("Chuỗi đảo ngược là: " + daoNguoc);
      break;
    case 10:
      alert("tạm biệt");
      dora = " bánh rán";
      break;
  }
}
