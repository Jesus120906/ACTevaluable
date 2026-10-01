function gestion_compras(){

    let contador = 0;
    let gasto_total = 0;
    let gasto_medio = 0;
    let gasto_menor = 0;

    do {

        let precio = parseInt(window.prompt("Introduce el precio de tu producto: "));

        console.log("El precio es: "+precio);

        let cantidad = parseInt(window.prompt("Introduce la cantidad de unidades:"));

        console.log("La cantidad de unidades: "+cantidad);

        let compra = 0;

        compra = precio * cantidad;

        descuento(compra);      //llamada funcion descuento

        let IVA = 0.21;
        let resultado = 0;

        resultado = compra * IVA;
        compra = resultado + compra;
        console.log("El resultado es: "+compra+" con IVA incluido");


        var respuesta = window.confirm("Desea continuar");

        contador++;
        gasto_total= gasto_total+compra;
        gasto_medio = gasto_total / contador;

     } while(respuesta == false);
     
     console.log("Número de operaciones realizadas: "+contador+ ". \nGasto total: "+gasto_total+". \nGasto medio: "+gasto_medio+". \nGasto mayor: ");
}

gestion_compras();

function descuento(compra){

     if (compra < 50){
            console.log("El precio de tu compra es: "+compra);
        } else if(compra >= 50 && compra < 99.99){
            compra = compra- (compra * 0.05);
            console.log("El precio de tu compra es "+compra+" tienes un 5% de descuento");
        } else if(compra >= 100 && compra < 199.99){
            compra = compra - (compra * 0.10);
            console.log("El precio de tu compra es "+compra+" tienes un 10% de descuento");
        } else if(compra >= 200){
            compra = compra -(compra * 0.15);
            console.log("El precio de tu compra es "+compra+" tienes un 15% de descuento");
        }
}

