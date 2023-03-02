const listadoCompleto= {
    carnes: [
        {
            nombre: "Cerdo (x Kg)",
            precio: 1500
        },
        {
            nombre: "Vaca (x Kg) ",
            precio: 1800
        },
        {
            nombre: "Entraña (x Kg)",
            precio: 2000
        }
    ],
    verduras: [
        {
            nombre: "Lechuga (x kg)",
            precio: 1500
        },
        {
            nombre: "Tomate (x Kg)",
            precio: 1800
        }
    ],
    frutas: [{
        nombre: "Banana (x Kg)",
        precio: 1000
    },
    {
        nombre: "Pera (x Kg)",
        precio: 900
    }],
    lacteos: [        {
        nombre: "Sachet Leche (x Lt)",
        precio: 500
    },
    {
        nombre: "Queso (x Kg)",
        precio: 2500
    }]
}

const arrayVacio=[];

const vaciarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(arrayVacio));
    location.reload();
}

const addProduct = (nombreProducto, precioProducto) => {
    const infoCarrito = JSON.parse(localStorage.getItem("carrito"));
    const indiceProductoYaElegido = infoCarrito.findIndex(producto => producto.nombre === nombreProducto);
    if(indiceProductoYaElegido>-1){
        infoCarrito[indiceProductoYaElegido].cantidad+=1;
    }else{
        infoCarrito.push({
            cantidad: 1,
            nombre: nombreProducto,
            precio: precioProducto
        })
    }
    localStorage.setItem("carrito", JSON.stringify(infoCarrito));
    location.reload();
}

const removeProduct = (nombreProducto) => {
    const infoCarrito = JSON.parse(localStorage.getItem("carrito"));
    const indiceProductoYaElegido = infoCarrito.findIndex(producto => producto.nombre === nombreProducto);
    let newInfoCarrito;
    if(indiceProductoYaElegido>-1){
        if(infoCarrito[indiceProductoYaElegido].cantidad===1){
            // borrar el item
            console.log(nombreProducto);
            newInfoCarrito = infoCarrito.filter(producto => producto.nombre!==nombreProducto);
        }else{
            infoCarrito[indiceProductoYaElegido].cantidad-=1;
            newInfoCarrito = infoCarrito;
        }
        localStorage.setItem("carrito", JSON.stringify(newInfoCarrito));
        location.reload();
    }
}

if(localStorage.getItem("carrito")!==null){
    const carritoActual = JSON.parse(localStorage.getItem("carrito"));
    const divCarrito= document.getElementById("listado-resumen-carrito");
    carritoActual.forEach((producto) => {
        const newProduct = document.createElement("div");
        newProduct.innerHTML=producto.cantidad+" x "+producto.nombre;
        divCarrito.append(newProduct);
    });
}


const nombreSeccion = localStorage.getItem("seccion_actual");

document.getElementById("nombre-categoria").innerHTML=nombreSeccion;

const listadoAUtilizar = listadoCompleto[nombreSeccion];

console.log(listadoAUtilizar);

let listadoProductos = document.getElementById("listado");

listadoAUtilizar.forEach((producto) => {
    const newProduct = document.createElement("div");
    newProduct.className="card personalizada";
    newProduct.innerHTML="nombre: "+producto.nombre+"</br>precio: $"+producto.precio+".-";
    const addProductButton = document.createElement("button");
    addProductButton.innerHTML="+";
    const carritoActual=JSON.parse(localStorage.getItem("carrito"));
    const infoProductoEnCarrito = carritoActual.find(productoYaElegido => productoYaElegido.nombre === producto.nombre);
    let cantidadActual;
    if(infoProductoEnCarrito){
        cantidadActual = infoProductoEnCarrito.cantidad;
    }else{
        cantidadActual = 0;
    }
    addProductButton.setAttribute("onclick",`addProduct('${producto.nombre}','${producto.precio}')`);
    const addRemoveButton = document.createElement("button");
    addRemoveButton.innerHTML="-";
    addRemoveButton.setAttribute("onclick",`removeProduct('${producto.nombre}')`);
    const manejoCantidadItem=document.createElement("div");
    manejoCantidadItem.append("  cantidad:   ",addRemoveButton,"   ",cantidadActual,"   ",addProductButton);
    newProduct.append(manejoCantidadItem);
    listadoProductos.append(newProduct);
})



