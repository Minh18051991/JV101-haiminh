let x = document.getElementById("Giatri");
function doitien() {
    let Gia = document.getElementById("Giatri").value;
    let fC = document.getElementById("from").value;
    let tC = document.getElementById("to").value;
let Result;
    if (
        fC == "Viet Nam" && tC == "America")
    {
    Result = Gia / 23000;
        document.write("kết quả = " + Result);
    }

else
    if (fC == "America" && tC == "Viet Nam")
    {
        Result = Gia * 23000;
        document.write("kết quả = " + Result);
    }

else
    if (fc == "Viet Nam")
    {
        Result = Gia ;
        document.write("kết quả = " + Result);
    }


}
