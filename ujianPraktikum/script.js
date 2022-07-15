var kd = document.getElementById("kdBrg")
var namaBarang = document.getElementById("nmBrg")
var hargaBarang = document.getElementById("hrgBrg")
var jumlahBarang = document.getElementById("jmlBrg")
var tanggalBeli = document.getElementById("tglBeli")
var total = document.getElementById("total")
var jumlahDiskon = document.getElementById("jmlDisk")
var jumlahBayar = document.getElementById("jmlByr")
var btn1 = document.getElementById("btnCari")
var btn2 = document.getElementById("totalHitung")


function diskon() {
    let tglBeli = tanggalBeli.value
    if (tglBeli >= 15)  {
        jumlahDiskon.value = total.value * 15/100
    }else{
        jumlahDiskon.value = total.value * 5/100
    }
}

function totalHarga() {
    total.value = hargaBarang.value * jumlahBarang.value
}

function jmlBayar() {
    jumlahBayar.value = total.value - jumlahDiskon.value
}

btn2.onclick =()=> {
    // let tglBeli = tanggalBeli.value
    // if (tglBeli >= 15)  {
    //     jumlahDiskon.value = total.value * 15/100
    // }else{
    //     jumlahDiskon.value = total.value * 5/100
    // }

    // total.value = hargaBarang.value * jumlahBarang.value

    // jumlahBayar.value = total.value - jumlahDiskon
    totalHarga();
    diskon();
    jmlBayar();
}
btn1.onclick =()=> {
    let kode = kd.value
    if (kode == "001") {
        namaBarang.value = "CELANA"
        hargaBarang.value = 300000
    }else if (kode == "002") {
        namaBarang.value = "Baju"
        hargaBarang.value = 25000
    }else if(kode == "003")
        namaBarang.value = "topi"
        hargaBarang.value = 150000
}