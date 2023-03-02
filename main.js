const goTo = (seccion) => {
    localStorage.setItem("seccion_actual",seccion);
    window.location="categoria.html";
}

const arrayVacio=[];

const vaciarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(arrayVacio));
    location.reload();
}

if(localStorage.getItem("carrito")===null){
    localStorage.setItem("carrito", JSON.stringify(arrayVacio));
}else{
    const carritoActual = JSON.parse(localStorage.getItem("carrito"));
    const divCarrito= document.getElementById("listado-resumen-carrito");
    carritoActual.forEach((producto) => {
        const newProduct = document.createElement("div");
        newProduct.innerHTML=producto.cantidad+" x "+producto.nombre;
        divCarrito.append(newProduct);
    });
}

