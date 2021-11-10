/*simulador de caja de ahorro*/ 

let montoAcumulado = 0;
let monto= 0;
let contador=0;

function ingresarMonto(){
    monto = parseInt(prompt("ingrese el monto que quiere guardar"));
    while(monto > 0 ){
        montoAcumulado = total(monto);
        contador ++;
        monto = parseInt(prompt("ingrese el monto que quiere guardar"))
    }if(monto <= 0){
        document.write("Ud. ha dejado de introducir montos a guarda" + ("<br>"));
        console.log("Ud. a dejado de introducir montos");
    }
}

 function total(monto){
     return montoAcumulado + monto;
 }

 function ahorroTotal(){
     document.write("Lleva acumulado un total de $" + montoAcumulado + " en su Caja de Ahorros");
     console.log("Lleva acumulado un total de $" + montoAcumulado);
 }

 ingresarMonto();
 ahorroTotal();