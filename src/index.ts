let btnCalcular = document.getElementById("btnCalcular");
let contador: number;

btnCalcular.addEventListener("click", () => {
  let numero1: number = Number(dato.value);
  let numero2: number = Number(dato1.value);
  let suma: number = 0;

  for (contador = numero1; contador <= numero2; contador++) {
    suma = suma + contador;
  }
  console.log("la suma es de: " + suma);
});
