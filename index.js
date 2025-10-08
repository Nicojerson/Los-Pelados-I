import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";
import fs from "fs"

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = JSON.parse(fs.readFileSync("data/sabores.json"));
let productos = JSON.parse(fs.readFileSync("data/productos.json"));

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
// COMPLETEN USTEDES

let datos = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"))
datos.push(cliente)
datos.push(producto)
datos.push(saboresElegidos)
let nuevojson = JSON.stringify(datos, null, 2)

fs.writeFileSync("data/pedidos.json", nuevojson)

// JSON es como una forma de datos que es comun en muchos lenguajes de programacion, entonces para pasar datos lo tenes que hacer en json. Este TP consistia en agarrar unos datos de una funcion que nos daban, y guardarlos en un archivo usando JSON y lectura y escritura de archivos