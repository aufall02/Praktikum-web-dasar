var btn = document.getElementById("btn")
var txt = document.getElementById("txt")
var txt2 = document.getElementById("txt2")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
//dieksekusi ketika button diketik
btn.onclick  = () => {
    txt.style.display = "none"
}


btn1.onclick  = () => {
    txt.style.display = "block"
}
btn2.onclick  = () => {
    txt2.classList.toggle("hidden")
}