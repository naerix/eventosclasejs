
document.addEventListener("DOMContentLoaded", e =>{
    modoOscuro(".boton", ".container")
});

const modoOscuro = (boton,container)=>{
    const a = document

    a.addEventListener("click", e =>{
        if(e.target.matches(".boton")){
            a.querySelector(container).classList.toggle("active")
            a.querySelector(boton).classList.toggle("activebtn")
        }
    })
}
