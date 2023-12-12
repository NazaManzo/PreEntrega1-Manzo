let edad = Number(prompt("Ingrese su edad"));

if (edad < 14) {
    alert("No podes entrar");
} else if (edad < 50) {
    alert("podes ingresar al sitio");
}

for (let cupon = 1; cupon <= 7; cupon++) {
    let nombre = prompt("Ingrese el nombre");
    alert(`cupon #${cupon} Nombre: ${nombre}`);
}

alert("ya no quedan cupos")
