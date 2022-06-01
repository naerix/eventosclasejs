let boton = document.getElementById("btn1")



boton.addEventListener("click",() => {

    alert("iniciando...")
    iniciar()
})


function iniciar(){
    window.location="pages/iniciado.html"
}
let boton2 = document.getElementById("btn2")

boton2.addEventListener("click", () => {
    document.body.setAttribute("style","background:#000")
})
