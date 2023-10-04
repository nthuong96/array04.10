
//Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)}
// let a=0
// for(let i=0;i<arrayNumbers.length;i++){
//     if(arrayNumbers[i]>=10){a++}
// }document.write(a+ " là tổng số nguyên lớn hơn 10")

// Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)}
// let position = 0;
// let max = arrayNumbers[0]
// for (let i=1;i<arrayNumbers.length;i++) {
//     if (arrayNumbers[i]>=max)
//     {max=arrayNumbers[i]; position=i}
// }document.write(max+" tại vị trí "+ position)

// Bài 3- Viết chương trình khởi tạo mảng số nguyên.
//     Hiển hiện giá trị lớn nhất trong mảng đó.
//     In ra giá trị trung bình của các phần tử trong mảng
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)}
// let max = arrayNumbers[0]
// for (let i=1;i<arrayNumbers.length;i++) {
//     if (arrayNumbers[i]>=max)
//     {max=arrayNumbers[i]}
// }document.write(max)
// let average=0
// for (let i=0; i<arrayNumbers.length; i++){
//     average+=arrayNumbers[i]
//     }  average=average/(arrayNumbers.length)
// document.write(average)


// Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và
// đảo ngược các phần tử trong mảng đó.
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)}
// arrayNumbers.reverse()
// document.write (arrayNumbers)

// Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi
// let x=+prompt("nhap vào so luong so muon tạo trong mảng")
// let arrayNumbers=[];
// let count=0
// for(count=0;count<x;count++){
//     let a = +prompt("nhap vào so trong mang")
//     arrayNumbers.push(a)}
// let count1=0
// for(let i=0; i<x; i++){
//  if(   arrayNumbers[i]<0 && arrayNumbers[i]%1==0) {count1++}
// }
// document.write (count1+ " là số các số nguyên âm")

// Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử,
// nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng số nguyên không?
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)}
// let V= +prompt("nhap vào V")
// let check=false
// for(let i=0;i<arrayNumbers.length;i++){
//     if(arrayNumbers[i]===V){check=true
//     break}
//
// } if(check){document.write("V is in the array")}
// else{document.write("V is not in the array")}

//Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử,
// nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không,
// nếu V thuộc mảng đã cho xoá V khỏi mảng (Bản chất việc xoá ở đây tức là
// dịch phần tử ở bên phải V sang vị trí của V,và gán 0 cho phần tử cuối cùng của mảng)
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)} document.write(arrayNumbers+ "<br>")
// let V= +prompt("nhap vào V");
// document.write(V+"<br>")
//
// for(let i=0;i<arrayNumbers.length;i++) {
//     if (arrayNumbers[i] === V) {
//         for (let a = i; a < arrayNumbers.length - 1; a++) {
//             arrayNumbers[i] = arrayNumbers[i + 1]
//         }
//         arrayNumbers[arrayNumbers.length - 1] = 0
//     }
// } document.write(arrayNumbers)

// Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
//     sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// let arrayNumbers=[];
// let count=0
// for(count=0;count<10;count++){
//     let x = +prompt("nhap vào x")
// arrayNumbers.push(x)} document.write(arrayNumbers+ "<br>")
// arrayNumbers.sort(function(a,b){return b-a})
// document.write(arrayNumbers)

// Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
//     Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
// Dùng hàm concat

// Luyện tập mảng 2:
// bài 1:
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (let i = 0; i <a.length; i++) { document.write("row "+i+ "<br>")
//     for (let j = 0; j < a[i].length; j++) {document.write (a[i][j]+"<br>")}
// }

// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ]
// sau khi thực hiện đảo ngược sẽ là "162csc
// let arr= [ 'c', 's', 'c', '2', '6', '1' ]
// arr.reverse()
// let x=arr.join("")
// document.write(x)

//bài 3: Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng.

// Chương trình này đếm số ký tự số trong mảng.
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     ["huong", "minh", "hội"],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
//
// let count=0
// for(i=0; i<a.length; i++) {for(let j=0;j<a[i].length; j++) {
//     if (typeof a[i][j]==="number"){count+=1}
// }} document.write("có tổng"+count+' ký tự số trong mảng')

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
//
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     ["huong", "minh", "hội"],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
//
// let count=0
// for(i=0; i<a.length; i++) {for(let j=0;j<a[i].length; j++) {
//     if (typeof a[i][j]==="string"){count+=1}
// }} document.write("có tổng"+count+' ký tự chữ trong mảng')

// bài tập của Như anh:
// b1: In ra các phần tử chẵn trong mảng
// let x=+prompt("hãy nhập số lượng số bạn muốn nhập")
// let arr=[x]
// for (let i=0; i<x; i++) {
// let y=+prompt("nhâp các số");
// arr.push(y)}
// for(i=0; i<x; i++) {
//     if(arr[i]%2==0) {document.write(arr[i]+"<br>")}
// }
// liệt kê các vị trí mà giá trị tại đó là giá trị âm
// let x=+prompt("hãy nhập số lượng số bạn muốn nhập")
// let arr=[x]
// for (let i=0; i<x; i++) {
// let y=+prompt("nhâp các số");
// arr.push(y)}
// for (let i=0; i<x; i++) {
//     if (arr[i]<0){document.write("vị trí "+ i + " là số âm <br>")}
// }
//
// //In ra các phần tử trong mảng mà phần tử đó lớn hơn giá trị phần tử trước đó
// for (let i=0; i<x; i++) {
//     if (arr[i]<arr[i+1]) {document.write(arr[i+1])}
// }
//
// // Tính tổng các phần tử nằm ở vị trí lẻ
// let T=0
// for (let i=1;i<x;i+=2) {
//     T+=arr[i]
// }document.write(T)
// //Tính tổng VỊ TRÍ của các phần tử chẵn
// let positionEven=0;
// for (let i=0; i<x; i++){
//     if (arr[i]%2==0){positionEven+=i}
// } document.write(positionEven)
//  //So sánh tổng phần tử có giá trị chẵn và lẻ của mảng
// let sumEven=0
// let sumOdd=0
// for (let i=0; i<x;i++){
//     if (arr[i]%2==0){sumEven+=arr[i]}
// else if (arr[i]%2==1){sumOdd+=arr[i]}}
// if (sumEven>sumOdd){document.write("tổng chẵn lớn hơn tổng lẻ")}
// //     else {document.write("tổng lẻ lớn hơn tổng chẵn")}
//
// //tìm max, max2
// let x=+prompt("hãy nhập số lượng số bạn muốn nhập")
// let arr=[]
// for (let i=0; i<x; i++) {
// let y=+prompt("nhâp các số");
// arr.push(y)}
// let positionMax=0
// let max=arr[0]
// for (let i=1; i<x; i++) {
//     if (arr[i]>=max) {max=arr[i]
//     positionMax=i}
// } document.write(max)
// arr[positionMax]="";
// let max2=arr[0];
// for (let i=1; i<x; i++) {
//     if (arr[i]>=max2) {max2=arr[i]
//        }
// } document.write(max2)
//
// // đếm số lần xuất hiện của các phần tử trong mảng:
// let count=0
// for (i=0; i<x; i++) {
//     count=0
//     for (j=0; j<x; j++){
//
// if (a[i]===a[j]){count++}
// document.write(a[i] +"xuất hiện"+ count +"lần")
// }}


// Tìm các phần tử chung trong 2 mảng:
// let arr1=[];
// for (let i=0; i<5; i++) {
//     let x=prompt("nhap vào x")
//     arr1.push(x);
// }
// let arr2=[];
// for (let i=0; i<5; i++) {
//     let y=prompt("nhap vào y")
//     arr2.push(y);
// }
// for(let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         if(arr1[i]===arr2[j]){
//             document.write(arr1[i]+" là phần tử giống nhau")
//         }
//     }
// }

// Tìm dãy con liên tiếp tăng dần dài nhất trong mảng:

let arr=[];
for (let i=0; i<10; i++) {
    let x=prompt("nhap vào x")
    arr.push(x);
}
let Đ=0;
let C=0;
for(let i=0; i<10; i++) {if(arr[i]<arr[i+1]){
    Đ=
}

}

