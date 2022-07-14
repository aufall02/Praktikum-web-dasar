var tampil1 = document.getElementById("section1")
var tampil2 = document.getElementById("section2")
var tampil3 = document.getElementById("section3")



btn1.onclick  = () => {
    tampil1.style.display = "block"
    tampil2.style.display = "none"
    tampil3.style.display = "none"
}
btn2.onclick  = () => {
    tampil2.style.display = "block"
    tampil1.style.display = "none"
    tampil3.style.display = "none"
}
btn3.onclick  = () => {
    tampil3.style.display = "block"
    tampil1.style.display = "none"
    tampil2.style.display = "none"
}