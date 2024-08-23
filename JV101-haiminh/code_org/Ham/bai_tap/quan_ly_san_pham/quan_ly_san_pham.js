let produceList = ["Iphone 15 promax", "ipad m2", "Samsung s23", "Xiaomi fold 4"];

function showListProduce() {
    let text = "";
    produceList.forEach((item, index) => {
        text += "<tr>";
        text += "<td>";
        text += index + 1;
        text += "</td>";
        text += "<td>";
        text += item;
        text += "</td>";
        text += "<td>";
        text += " <button onclick='deleteProduce("+index+")'> Delete </button>";
        text += " <button onclick='updateProduce("+index+")'> Update</button>";
        text += "</td>";
        text += "</tr>";
    });
    document.getElementById("listProduce").innerHTML = text;
}

showListProduce();

function addProduce() {
    let nameProduce = document.getElementById("nameProduce").value;
    if (nameProduce) {
        produceList.push(nameProduce);
        showListProduce();
        document.getElementById("nameProduce").value = ""
    } else {
        alert("Nhập tên sản phẩm");
    }
}

function deleteProduce(index) {
    if (confirm("ban co muon xoa du lieu này")) {
        produceList.splice(index, 1);
        showListProduce();
    }
}

function updateProduce(index) {
    document.getElementById("nameProduce").value = produceList[index];
    document.getElementById("idProduce").value = index;
}

function editProduce() {
    let index = document.getElementById("idProduce").value;
    let nameProduce = document.getElementById("nameProduce").value;
    produceList[index] = nameProduce;
    document.getElementById("nameProduce").value = "";
    showListProduce();
}
