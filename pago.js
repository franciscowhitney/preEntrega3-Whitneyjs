const comprado = JSON.parse(localStorage.getItem("carrito"));

console.log(comprado);

let listadoProductos = document.getElementById("listado-productos");

const table = document.createElement("table");
table.className="table table-striped";
// table.setAttribute("border",1);
const tHead = document.createElement("thead");
const tr = document.createElement("tr");
const tdNombre = document.createElement("td");
tdNombre.setAttribute("scope","col");
tdNombre.innerHTML="Nombre producto";
const tdCantidad = document.createElement("td");
tdCantidad.setAttribute("scope","col");
tdCantidad.innerHTML="Cantidad";
const tdPrecioUnitario = document.createElement("td");
tdPrecioUnitario.setAttribute("scope","col");
tdPrecioUnitario.innerHTML="Precio unitario";
const tdTotal = document.createElement("td");
tdTotal.setAttribute("scope","col");
tdTotal.innerHTML="Total";
tr.append(tdNombre,tdCantidad,tdPrecioUnitario,tdTotal);
console.log(tr);
tHead.append(tr);
table.append(tHead);


const tBody = document.createElement("tbody");
let total=0;
comprado.forEach((producto) => {
    const subtotal = producto.cantidad*producto.precio;
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    tdNombre.setAttribute("scope","row");
    tdNombre.innerHTML=producto.nombre;
    const tdCantidad = document.createElement("td");
    tdCantidad.setAttribute("scope","row");
    tdCantidad.innerHTML=producto.cantidad;
    const tdPrecioUnitario = document.createElement("td");
    tdPrecioUnitario.setAttribute("scope","row");
    tdPrecioUnitario.innerHTML="$"+producto.precio+".-";
    const tdTotal = document.createElement("td");
    tdTotal.setAttribute("scope","row");
    tdTotal.innerHTML=subtotal;
    tr.append(tdNombre,tdCantidad,tdPrecioUnitario,tdTotal);
    tBody.append(tr);
    total = total + subtotal;
})

table.append(tBody);
listadoProductos.append(table);

let infoTotal = document.createElement("div");
infoTotal.className="info-total";
infoTotal.append("Total $"+total+".-");
listadoProductos.append(infoTotal);
