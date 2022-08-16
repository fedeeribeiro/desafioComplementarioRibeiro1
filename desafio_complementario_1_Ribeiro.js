//ARMADOR DE POESÍA

let cant_renglones = parseInt(prompt("¿De cuántos renglones quiere hacer su poema?" + "\n" + "Se permiten hasta 6 renglones."));

while(cant_renglones < 1 || cant_renglones > 6 || cant_renglones != cant_renglones){
    alert("ERROR. Número no válido.");
    cant_renglones = parseInt(prompt("¿De cuántos renglones quiere hacer su poema?" + "\n" + "Se permiten hasta 6 renglones."));
}

let frase = "";
let poema = "";

for(i = 0; i < cant_renglones; i++){
    frase = prompt("Ingrese una frase:");
    while(frase == ""){
        alert("ERROR. Debe escribir una frase.");
        frase = prompt("Ingrese una frase:");
    }
    poema += frase + "\n";
}

let titulo = prompt("Ingrese un título para su poema:").toUpperCase();

while(titulo == ""){
    alert("ERROR. Debe escribir un título para su poema.");
    titulo = prompt("Ingrese un título para su poema:").toUpperCase();
}

alert(titulo + "\n" + poema);
