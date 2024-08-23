// Khởi tạo mảng 2 chiều với cấu trúc [tên sản phẩm, giá, số lượng]
let produceList = [
    ["Samsung", 23000, 2],
    ["Nokia", 15000, 3],
    ["Iphone", 100000, 1],
    ["Xiaomi", 5000, 5]
];

// Hàm hiển thị danh sách sản phẩm
function showListProduce() {
    let text = "";
    produceList.forEach((item, index) => {
        text += "<tr>";
        text += "<td>" + (index + 1) + "</td>"; // Số thứ tự
        text += "<td>" + item[0] + "</td>"; // Tên sản phẩm
        text += "<td>" + item[1] +"</td>"; // Giá, định dạng số
        text += "<td>" + item[2] + "</td>"; // Số lượng
        text += "<td>";
        text += " <button onclick='deleteProduce(" + index + ")'> Delete </button>";
        text += " <button onclick='updateProduce(" + index + ")'> Update</button>";
        text += "</td>";
        text += "</tr>";
    });
    document.getElementById("listProduce").innerHTML = text;
}

// Hàm thêm sản phẩm mới
function addProduce() {
    let nameProduce = document.getElementById("nameProduce").value;
    let priceProduce = document.getElementById("priceProduce").value;
    let quantityProduce = document.getElementById("quantityProduce").value;
    if (nameProduce && priceProduce && quantityProduce) {
        produceList.push([nameProduce, parseFloat(priceProduce), parseInt(quantityProduce)]);
        showListProduce();
        document.getElementById("nameProduce").value = "";
        document.getElementById("priceProduce").value = "";
        document.getElementById("quantityProduce").value = "";
        document.getElementById("idProduce").value = "";
    } else {
        alert("Nhập đầy đủ thông tin sản phẩm");
    }
}

// Hàm xóa sản phẩm
function deleteProduce(index) {
    if (confirm("Bạn có muốn xóa dữ liệu này không?")) {
        produceList.splice(index, 1);
        showListProduce();
    }
}

// Hàm cập nhật thông tin sản phẩm
function updateProduce(index) {
    let item = produceList[index];
    if (item) {
        document.getElementById("nameProduce").value = item[0];
        document.getElementById("priceProduce").value = item[1];
        document.getElementById("quantityProduce").value = item[2];
        document.getElementById("idProduce").value = index;
    }
}

// Hàm chỉnh sửa sản phẩm
function editProduce() {
    let index = parseInt(document.getElementById("idProduce").value);
    let nameProduce = document.getElementById("nameProduce").value;
    let priceProduce = document.getElementById("priceProduce").value;
    let quantityProduce = document.getElementById("quantityProduce").value;
    if (!isNaN(index) && nameProduce && priceProduce && quantityProduce) {
        produceList[index] = [nameProduce, parseFloat(priceProduce), parseInt(quantityProduce)];
        showListProduce();
        document.getElementById("nameProduce").value = "";
        document.getElementById("priceProduce").value = "";
        document.getElementById("quantityProduce").value = "";
        document.getElementById("idProduce").value = "";
    } else {
        alert("Không thể cập nhật sản phẩm. Vui lòng thử lại.");
    }
}

// Hiển thị danh sách sản phẩm khi trang tải
document.addEventListener('DOMContentLoaded', function() {
    showListProduce();
});


