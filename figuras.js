
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.log("El perimetro del cuadrado es de " + perimetroCuadrado(5) + "cm");

console.log("El area del cuadrado es de " + areaCuadrado(5) + "cm2");
console.groupEnd();

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;  
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.log("El perimetro del triangulo es de " + perimetroTriangulo(6,6,4) + "cm");
console.log("El area del triangulo es de " + areaTriangulo(4,5.5) + "cm2");
console.groupEnd();


console.group("Circulos");

function perimetroCirculo(radio){
    return (radio * 2) * Math.PI
}
function areaCirculo(radio){
    return (radio * radio) * Math.PI
}

console.log("La circunferencia del circulo es de " + perimetroCirculo(4) + "cm");
console.log("El area del circulo es de " + areaCirculo(4) + "cm2");

console.groupEnd();



