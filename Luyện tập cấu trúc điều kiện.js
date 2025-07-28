//bài 1
// let a = +prompt(" nhập số a");
// let b = +prompt(" nhập số b");
// if ( a% b===0){
//     alert("a chia hết cho b");
// }else if (b===0){
//     alert("không thể chia cho 0");
// }else{
//     alert("a không chia hết cho b");
// }


//bài 2
// let age = +prompt("nhập tuổi của bạn");
// if ( age <15 ){
//     alert("bạn không đủ tuổi vào lớp 10");
// }else {
//     alert("bạn đã đủ tuổi vào lớp 10");
// }

//bài 3
// let number = +prompt(" nhâp số nguyên bất kỳ");
// if (number>0){
//     alert("số bạn nhập lớn hơn 0");
// }else if (number < 0){
//     alert(" số bạn nhập nhỏ hơn 0");
// }else{
//     alert("số bạn nhập là 0 đúng không!!");
// }

//bài 4
// let x = +prompt ("nhập số x bất kì");
// let y = +prompt ("nhập số y bất kì");
// let z = +prompt ('nhập số z bất kì');
// if( x>y && x>z){
//     alert("số lớn nhất là " + x);
// }else if ( y>x && y>z){
//     alert("số lớn nhất là " + y);
// }else if ( z>x && z>y){
//     alert(" số lớn nhất là " + z);
// }else if ( x===y || x===z ||y===z){
//     alert(" có ít nhất 2 số bằng nhau " );
// }else{
//     alert("không xác định")
// }

// bài 5
// let x = +prompt(" nhập điểm kiểm tra");
// let y = +prompt("nhập điểm kiểm tra giữa kì");
// let z = +prompt(" nhập điểm kiểm tra cuối kì");
// let average = (x + y*2 + z*3) / 6;
// if (average < 0 || average > 10){
//     alert("điểm không hợp lệ, vui lòng nhập lại");
// }else if (average < 5){
//     alert("bạn dốtttt lắm á!!");
// }else if (average < 6.5){
//     alert("bạn cần cố gắng hơn, rank hiện tại bạn trung bình");
// }else if (average < 8){
//     alert("bạn đạt rank hiệu khá, cố gắng hơn nữa bạn nha!!");
// }else if (average < 9){
//     alert("bạn đạt rank giỏi, chúc mừng bạn!!");
// }else if (average >= 9){
//     alert(`bạn đạt rank xuất sắc, quá giỏi luôn, xứng đáng làm bạn tớ ấy!
//         bạn đạt được học bổng từ nhà trường nha!!
//         chúc mừng cậu nhé Phạm Hoàng Hà!!!`);

// }else{
//     alert("không xác định");
// }

//-------------------------------- bài luyện tập số 2 -----------------------------------------------
//bài 1
// let c = +prompt("nhập nhiêt độ của bạn");
// let f = (c * 9/5) + 32;
// alert( f );

//bài 2
// let met = +prompt("nhập số mét bạn muốn đổi sang feet");
// let feet = met * 3.28084;
// alert(feet);    

// bài 3
// let a = +prompt(" nhập độ dài cạnh a của hình vuông");
// alert("diện tích hình vuông là " + a * a);

// bài 4
// let a = +prompt(" nhập cạnh a của hình chữ nhật");
// let b = +prompt(" nhập cạnh b của hình chữ nhật");
// alert("diện tích hình chữ nhật là " + a * b);

// bài 5
// let a = +prompt(" nhập cạnh kề của tam giác vuông");
// let b = +prompt("nhập cạnh kề còn lại của tam giác vuông");
// alert("diện tích tam giác vuông là:" + ((a*b)/2));

// bài 6
// let a = +prompt("nhập số a");
// let b = +prompt("nhập số b");
// if (a===0 && b===0){
//     alert("phương trình vô số nghiệm");
// }else if (a===0 && b!==0){
//     alert ("phương trình vô nghiệm");
// }else{
//     let x = -b/a;
//     alert("phương trình có nghiệm là: " + x);   
// }

//bài 7
// let a = +prompt("Nhập a:");
// let b = +prompt("Nhập b:");
// let c = +prompt("Nhập c:");
// let delta = b*b - 4*a*c;
// if ( a === 0){
//     alert(' đây không phải phương trình bậc 2');
// } else if (delta < 0) {
//     alert("Phương trình vô nghiệm");    
// }else if (delta === 0) {
//   alert( "x = "+ -b / (2*a));
// } else{
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
// }

//bài 8
// let age = +prompt("Nhập tuổi của bạn");
// if (age < 0 || age > 120) {
//     alert("Tuổi không hợp lệ, vui lòng nhập lại");
// }
// else{
//     alert("tuổi của bạn là " + age);
// }

// bài 9
// let a = +prompt("Nhập cạnh a:");
// let b = +prompt("Nhập cạnh b:");
// let c = +prompt("Nhập cạnh c:");

// if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
//   alert("a, b, c là 3 cạnh của một tam giác");
// } else {
//   alert("Không phải là tam giác");
// }