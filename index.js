// Definir una función para calcular la velocidad
/*function calcularVelocidad() {
    // Definir variables para distancia y tiempo
    const distancia = 10;
    const tiempo = 2;

    // Calcular la velocidad (distancia / tiempo)
    const velocidad = distancia / tiempo;

    // Imprimir el resultado en la consola
    console.log("La velocidad del móvil es " + velocidad);
}

// Llamar a la función para ejecutarla
calcularVelocidad();
calcularVelocidad();
calcularVelocidad();

function calcularVelocidad(distancia, tiempo) {
    // const distancia = 10
    // const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    }
    calcularVelocidad(10,2);
calcularVelocidad(100,2);
calcularVelocidad(75,3);*/


const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
//console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    };



const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad(100,2);
console.log("La velocidad de Juan es " + velocidad2);

const velocidad3 = calcularVelocidad(75,3);
console.log("La velocidad de Daniel es " + velocidad3);


