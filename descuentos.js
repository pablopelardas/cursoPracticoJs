function aplicarDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonDescuento(){
    const inputPrecio=document.getElementById("inputPrecio").value;
    const inputDescuento=document.getElementById("inputDescuento").value;
    const precioFinal = aplicarDescuento(inputPrecio, inputDescuento);
    const presultado= document.getElementById("p-precio-final");
    presultado.innerText= "El precio con descuento es de $" + precioFinal;
}