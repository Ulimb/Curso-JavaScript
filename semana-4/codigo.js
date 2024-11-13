function genero(gen){
    alert("selecciono el genero: " + gen)
}

function Compara(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value); 
    
    if(a > b){
        alert("El numero mayor es: " + a);
    }else if(a < b){
        alert("El numero mayor es: " + b);
    }else{
        alert("Los numeros son iguales");
    }
}

function Suma(){
    let c = parseInt(document.getElementById("v1").value);
    let d = parseInt(document.getElementById("v2").value); 
    alert("La suma de los numeros es: " + (c+d));
}