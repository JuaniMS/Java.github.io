/*
const si= "si"
const no= "no"
let="nombreProductos";
let="nombreusuario";
let="producto";
let="precio";
let="total";
let="continuar";
let="detalles";
let="ticket";


nombreusuario = prompt(" ¿hola, desea adquirir algun servicio? a continuacion seleccione si o no");
do {
    nombreProductos= prompt('ingrese nombre del servicio');
    precio= prompt('ingrese su respectivo precio');
    continuar= prompt('¿desea ingresar otro servicio? si o no');
    while(continuar !== si && continuar !== no) /*(
        continuar = prompt('respuesta invalida, por favor vuelva a ingreasar su desea continuar o no'),
    )
    total = total + precio + cantidad;
    detalle = '$(nombreproductos)','${precio}','${cantidad+}','${precio+cantidad}/n';
    ticket = ticket + detalles;
} while (continuar == si);
ticket = ticket + 'total: ${total}';
alert(ticket);
------------------------------------------------------------------------------------------------------------------------

const SI = 'si';
const NO = 'no';
let nombreUsuario;
let nombreProducto;
let precio;
let total = 0;
let cantidad;
let continuar;
let ticket = 'nombre   precio   cantidad    subtotal \n';


function cargaProducto() {
    nombreProducto = prompt('Ingrese nombre del servicio:');
    precio = +prompt('Ingrese su precio:');
    precio = validacionPrecio(precio);
    cantidad = +prompt('Ingrese la cantidad: ');
}

function generarTicket(nombreProducto, precio, cantidad) {
    let detalle = `${nombreProducto}     ${precio}       ${cantidad}     ${precio*cantidad}\n`;
    ticket = ticket + detalle;
}

function validacionPrecio(price) {
    while (price < 0) {
        price = prompt('precio incorrecto, vuelva a ingresarlo: ');
    }
    return price;
}


nombreUsuario = prompt('Bienvenido al TechCart de TechMach!! \n Ingrese su nombre: ');
 alert("Perfecto " +  nombreUsuario + " ahora mismo te dirijiremos al Techcart");
do {
   cargaProducto();
   continuar = prompt('Desea ingresar otro item? si/no');
   while (continuar !== SI && continuar !== NO) {
        continuar = prompt('respuesta invalida, por favor vuelva a ingresar si desea continuar o no:');
   }
   generarTicket(nombreProducto,precio,cantidad);
   total = total + precio * cantidad;

}while(continuar == SI);

alert("ha concretado su compra!, a continuacion le dejamos el ticket")

ticket = ticket + `total: ${total}`;
alert(ticket);


*/

