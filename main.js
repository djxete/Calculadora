




//Pantalla
const pantalla = document.querySelector(".pantalla");
//pantalla.textContent = "2";

//Botones
const botones = document.getElementsByTagName("button");
//console.log(botones);

//Evento para que la calculadora sepa cuando hacemos click en los botones

for(let i=0; i<botones.length; i++){

    botones[i].addEventListener("click", e=>{

        switch(e.target.textContent){

            case "=":imprimirResultado();break;
            case "CE":borrarResultado();break;
            case "+/-":cambiarSigno();break;
            case ",":ponerPunto(".");break;
            


           
            default:escribirOperacion(e.target.textContent);break;
            //llamar a la función imprimir resultado y que coja el boton diferentes a los case de arriba
            
        }
        
    })
}


//Cada vez que le doy a un botón que no sean los CASES DE ARRIBA, me imprime en la pantalla el número que he tecleado

const escribirOperacion = item =>{

    if(pantalla.textContent == 0) pantalla.textContent = ""; 

    if(isNaN(ultimoCaracter()) && isNaN(item)){

        pantalla.textContent = pantalla.textContent.substring(0,pantalla.textContent.length-1)

    }

    pantalla.textContent += item;
    
   
    
}

//Cuando le damos al botón =, imprime en pantalla, el resultado de la operacion que tenemos en pantalla(eval lo que hace es hacer la operación de un string)

const imprimirResultado = () => {

    pantalla.textContent = eval(pantalla.textContent);


}



//Función para saber cual es el último valor introducido y si es un símbolo o un número

const ultimoCaracter = () =>  pantalla.textContent.substring(pantalla.textContent.length - 1);
    
    
//Función que resetea la pantalla cuando pulsamos CE

const borrarResultado = () => {
    pantalla.textContent = "0";
}