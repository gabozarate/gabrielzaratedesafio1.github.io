let product = prompt(
  "INGRESE EL PRODUCTO DESEADO: NEUMATICOS - LLANTAS - ACCESORIOS"
);

while (product != 500 && product != 400 && product != 300) {
  if (product.toLowerCase().includes("neumaticos")) {
    product = 500;
  } else if (product.toLowerCase().includes("llantas")) {
    product = 400;
  } else if (product.toLowerCase().includes("accesorios")) {
    product = 300;
  } else {
    product = prompt("INGRESE UN PRODUCTO VALIDO: NEUMATICOS - LLANTAS - ACCESORIOS");
  }
} 
let state = prompt("INGRESE LA PROVINCIA DE DESTINO (argentina)");

while (
  state != 0 &&
  state != 500 &&
  state != 1500 &&
  state != 2000 &&
  state != 2500 &&
  state != 3000
) {
  if (state.toLowerCase().includes(`neuquen`)) {
    state = 0;
  } else if (
    state.toLowerCase().includes(`jujuy`) ||
    state.toLowerCase().includes(`salta`) ||
    state.toLowerCase().includes(`tucuman`) ||
    state.toLowerCase().includes(`catamarca`) ||
    state.toLowerCase().includes(`santiago del estero`) ||
    state.toLowerCase().includes(`la rioja`)
  ) {
    state = 3000;
  } else if (
    state.toLowerCase().includes(`cordoba`) ||
    state.toLowerCase().includes(`san juan`) ||
    state.toLowerCase().includes(`san luis`) ||
    state.toLowerCase().includes(`santa fe`) ||
    state.toLowerCase().includes(`buenos aires`)
  ) {
    state = 2500;
  } else if (
    state.toLowerCase().includes(`entre rios`) ||
    state.toLowerCase().includes(`corrientes`) ||
    state.toLowerCase().includes(`misiones`)
  ) {
    state = 2000;
  } else if (
    state.toLowerCase().includes(`mendoza`) ||
    state.toLowerCase().includes(`la pampa`) ||
    state.toLowerCase().includes(`rio negro`)
  ) {
    state = 500;
  } else if (
    state.toLowerCase().includes(`chubut`) ||
    state.toLowerCase().includes(`santa cruz`) ||
    state.toLowerCase().includes(`tierra del fuego`) ||
    state.toLowerCase().includes(`islas malvinas`)
  ) {
    state = 3000;
  } else {
    state = prompt("INGRESE UNA PROVINCIA VALIDA (arg)");
  }
}
let cant = parseInt(prompt("INGRESE LA CANTIDAD DE PRODUCTOS"));


const costo = product + state * cant;
alert(`EL COSTO TOTAL DEL ENVIO ES $ ${costo}`);
