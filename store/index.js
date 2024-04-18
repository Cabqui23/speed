const comprar = () => {
    let totalApagar = 0;
    for (let index = 1; index <= 3; index++) {
        const nombre = prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        const subtotal = cantidad * precio;
        totalApagar += subtotal;
    }
    return totalApagar;
}

const total = comprar() + comprar() + comprar();
console.log("Total facturado al final del día:", total);
