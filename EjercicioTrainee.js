
let Vehiculos = [
  { Marca: "Peugeot", Modelo: "206", Puertas: "4", Precio: "$200.000,00" },
  { Marca: "Honda", Modelo: "Titan", Cilindrada: "125cc", Precio: "$60.000,00" },
  { Marca: "Peugeot", Modelo: "208", Puertas: "5", Precio: "$250.000,00" },
  { Marca: "Yamaha", Modelo: "YBR", Cilindrada: "160cc", Precio: "$80.500,50" }
]

function moreExpensive(array) {
  let expensive = array[0]
  for (let i = 1; i < array.length; i++) {
    if (parseInt(array[i].Precio.slice(1)) > parseInt(expensive.Precio.slice(1))) {
      expensive = array[i]
    }
  }
  return expensive.Marca + " " + expensive.Modelo
}

function moreCheap(array) {
  let cheap = array[0]
  for (let i = 1; i < array.length; i++) {
    if (parseInt(array[i].Precio.slice(1)) < parseInt(cheap.Precio.slice(1))) {
      cheap = array[i]
    }
  }
  return cheap.Marca + " " + cheap.Modelo
}

function searchY(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].Marca.indexOf("Y") == 0) {
      return array[i].Marca + " " + array[i].Modelo
    }
  }
}

function orderByPrice(array) {

  let higher
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = (i + 1); j < array.length; j++) {
      if (parseInt(array[j].Precio.slice(1)) > parseInt(array[i].Precio.slice(1))) {
        higher = array[j]
        array[j] = array[i]
        array[i] = higher
      }
    }
  }
  for (let x = 0; x < array.length; x++) {
    console.log(array[x].Marca + " " + array[x].Modelo)
  }
}

/*Impresión en consola*/
for (let i = 0; i < Vehiculos.length; i++) {
  let arrayPrint = ""
  for (let property in Vehiculos[i]) {
    arrayPrint = arrayPrint + (`${property}: ${Vehiculos[i][property]} // `)
  }
  console.log(arrayPrint)
}
console.log("=============================")
console.log("Vehículo mas caro: " + moreExpensive(Vehiculos))
console.log("Vehículo mas barato: " + moreCheap(Vehiculos))
console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + searchY(Vehiculos))
console.log("=============================")
console.log("Vehículos ordenados por precio de mayor a menor:")
orderByPrice(Vehiculos)