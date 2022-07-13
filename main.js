// Khởi tạo mảng
var myArray = [];
// Thêm giá trị vào mảng
document.getElementById("btnPush").onclick = function () {
  var valuePush = document.getElementById("valuePush").value * 1;
  myArray.push(valuePush);
  console.log("myArray: ", myArray);
  document.getElementById("myArray").innerHTML = myArray;
  document.getElementById("valuePush").value = "";
};
document.getElementById("btnPop").onclick = function () {
  myArray.pop();
  document.getElementById("myArray").innerHTML = myArray;
};

// // Tìm số chẵn trong mảng
// document.getElementById("btnSoDuong").onclick = function () {
//   // Khởi tạo mảng chứa số Dương
//   var arrayDuong = myArray.map(soDuong);
//   // Khởi tạo hàm callback lọc số Dương
//   function soDuong(num) {
//     if (num %2 == 0) {
//       return num;
//     }
//   }
//   document.getElementById("arrayDuong").innerHTML = arrayDuong;
//   var soSoDuong = arrayDuong.length;
//   console.log("arrayDuong: ", arrayDuong);
//   console.log("soSoDuong: ", soSoDuong);
// };
// // Tìm số dương trong mảng
document.getElementById("btnSoDuong").onclick = function () {
  arrayDuong2 = [];
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
      var valueDuongPush = myArray[i];
      arrayDuong2.push(valueDuongPush);
    }
  }
  console.log("arrayDuong2: ", arrayDuong2);
  document.getElementById("arrayDuong").innerHTML = arrayDuong2;
};
// Tổng các số dương trong mảng
document.getElementById("btnTinhTong").onclick = function () {
  var tinhTong = 0;
  for (i = 0; i <= arrayDuong2.length - 1; i++) {
    tinhTong += arrayDuong2[i];
  }
  document.getElementById("tinhTong").innerHTML = tinhTong;
};
// Đếm các số dương trong mảng
document.getElementById("btnDemSoDuong").onclick = function () {
  var soSoDuong = arrayDuong2.length;
  document.getElementById("demSoDuong").innerHTML = soSoDuong;
};
//Tìm số dương min
document.getElementById("btnTimSoDuongMin").onclick = function () {
  var smallest = arrayDuong2[1];
  for (i = 0; i < arrayDuong2.length; i++) {
    if (arrayDuong2[i] < smallest) {
      smallest = arrayDuong2[i];
    }
  }
  console.log("smallest: ", smallest);
  document.getElementById("timSoDuongMin").innerHTML = smallest;
};
// Tìm số chẵn cuối cùng
document.getElementById("btnTimSoChanLast").onclick = function () {
  // Khởi tạo mảng chứa số Chẵn
  var arrayChan = [];
  // Khởi tạo hàm callback lọc số Dương
  for (i = 0; i <= myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      var valueChanpush = myArray[i];
      arrayChan.push(valueChanpush);
    } else {
    }
  }
  console.log("arrayChan: ", arrayChan);
  // tạo biến chưa index cuối cùng
  var indexChanLast = (arrayChan.length - 1) * 1;
  // nếu mảng có giá trị chẵn
  if (indexChanLast >= 0) {
    console.log("indexChanLast: ", indexChanLast);
    document.getElementById("timSoDuongChanLast").innerHTML =
      arrayChan[indexChanLast];
  } else {
    // nếu mảng ko có giá trị chẵn
    document.getElementById("timSoDuongChanLast").innerHTML = indexChanLast;
  }
};
//Đổi chỗ 2 vị trí trong mảng
document.getElementById("btnDoiCho").onclick = function () {
  var index1 = document.getElementById("index1").value * 1 - 1;
  var index2 = document.getElementById("index2").value * 1 - 1;
  var value1 = myArray[index1];
  var value2 = myArray[index2];
  myArray[index1] = value2;
  myArray[index2] = value1;
  document.getElementById("doiCho").innerHTML = myArray;
  console.log("myArray: ", myArray);
};
//Sắp xếp lại theo thứ tự tăng dần
document.getElementById("btnSapXep").onclick = function () {
  var myArrayClone = myArray;
  for (j = 0; j <= myArrayClone.length; j++) {
    for (i = 0; i <= myArrayClone.length; i++) {
      var valueCompare = myArrayClone[i];
      if (myArrayClone[i] >= myArrayClone[i + 1]) {
        myArrayClone[i] = myArrayClone[i + 1];
        myArrayClone[i + 1] = valueCompare;
      }
    }
  }
  console.log("myArray: ", myArrayClone);
  document.getElementById("sapXep").innerHTML = myArrayClone;
};
// Tìm số nguyên tố đầu tiên của mảng
document.getElementById("btnTimNguyenTo1st").onclick = function () {
  // Kiểm tra từng số trong mảng
  for (i = 0; i <= myArray.length - 1; i++) {
    // Gán cờ hiệu
    var flag = true;
    // Nếu số kiểm tra lớn hơn không thì gán số kiểm tra cho biến số
    if (myArray[i] > 0) {
      var so1stNguyenTo = myArray[i];
      // Kiểm tra chi tiết số đó
      for (j = 2; j <= Math.sqrt(myArray[i]); j++) {
        // Nếu chia hết cho 1 số j bất kì thì ko là nguyên tố, hủy kết quả, cờ hiệu = false, bỏ vòng lặp kiểm tra số đó (tiếp tục tìm số tiếp theo)
        if (myArray[i] % j == 0) {
          so1stNguyenTo = "-1";
          flag = false;
          break;
          // Tìm thấy số nguyên tố. Gán cờ hiệu = true
        } else {
          flag = true;
        }
      }
      //Cờ hiệu = true. Dừng vòng lặp;
      if (flag == true) {
        break;
      }
      // Nếu số kiểm tra bé hơn không thì kệ
    }
    // Nếu ko có số lớn hơn 0
    else {
      so1stNguyenTo = "Không có số nguyên tố nào";
    }
  }
  console.log("so1stNguyenTo: ", so1stNguyenTo);
  document.getElementById("timNguyenTo1st").innerHTML = so1stNguyenTo;
};
// So sánh số lượng số âm và dương
document.getElementById("btnSoSanh").onclick = function () {
  var soSanh = myArray.length - arrayDuong2.length - arrayDuong2.length;
  console.log("soSanh: ", soSanh);
  if (soSanh > 0) {
    document.getElementById("soSanh").innerHTML =
      "Số dương ít hơn: " + soSanh + " số";
  } else if (soSanh < 0) {
    document.getElementById("soSanh").innerHTML =
      "Số dương nhiều hơn: " + soSanh * -1 + " số";
  } else {
    document.getElementById("soSanh").innerHTML = "Số dương bằng số âm";
  }
};
// Kiểm tra số nguyên
// Khởi tạo mảng
var myArray2 = [];
// Thêm giá trị vào mảng
document.getElementById("btnPush2").onclick = function () {
  var valuePush2 = document.getElementById("valuePush2").value * 1;
  myArray2.push(valuePush2);
  console.log("myArray2: ", myArray2);
  document.getElementById("myArray2").innerHTML = myArray2;
  document.getElementById("valuePush2").value = "";
};
document.getElementById("btnPop2").onclick = function () {
  myArray2.pop();
  document.getElementById("myArray2").innerHTML = myArray2;
};
//Tìm số nguyên
document.getElementById("btnSoNguyen").onclick = function () {
  arrayNguyen = [];
  for (i = 0; i <= myArray2.length; i++) {
    if (myArray2[i] % 1 === 0) {
      var valueNguyen = myArray2[i];
      arrayNguyen.push(valueNguyen);
    }
  }
  console.log("arrayNguyen: ", arrayNguyen);
  document.getElementById("arrayNguyen").innerHTML = arrayNguyen;
};
