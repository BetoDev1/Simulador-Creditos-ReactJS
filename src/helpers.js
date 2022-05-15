export function calcularTotal(cantidad, plazo){
  
    // Calcular el total
    let totalCantidad
    
    if (cantidad <=1000) {
        totalCantidad = cantidad * 25 / 100;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * 20 / 100;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * 15 / 100;
    } else if (cantidad > 10000 && cantidad <= 20000) {
        totalCantidad = cantidad * 10 / 100;
    }
    

    // Calcular el total del plazo
    let totalPlazo = 0

    switch (plazo) {
        case 3:
            totalPlazo = totalCantidad * .05;
            break;
        case 6:
            totalPlazo = totalCantidad * .10;
            break;
        case 12:
            totalPlazo = totalCantidad * .15;
            break;
        case 24:
            totalPlazo = totalCantidad * .20;
            break;
        default:
            break;
    }

    return cantidad + totalPlazo + totalCantidad;

}