// Variables
const botonMenu = document.querySelector('.icoMenu');
let contentMenu = document.querySelector('.linkMenu');
let iconoMenu = document.getElementById('icono');

let estadoM = false;

// Templates
const templateMenu = `
<div class="padre">
    <div>
        <a id="links" href="#">Inicio</a>
        <a id="links" href="#sobreMi">Sobre Mi</a>
        <a id="links" href="#habilidades">Habilidades</a>
        <a id="links" href="#portafolio">Portafolio</a>
    </div>
    
</div>
`;



//Clases
class AbMenu{
    openMenu(tipo){
        if(tipo === 'open'){
            contentMenu.innerHTML = templateMenu
            contentMenu.className = 'openMenu';
            iconoMenu.name = 'close-outline';
            iconoMenu.style.color = 'white'; 
            iconoMenu.style.position = 'fixed'; 
            contentMenu.style.position = 'fixed'
        }
        if(tipo === 'close'){
            contentMenu.innerHTML = "";
            contentMenu.className = 'linkMenu'
            iconoMenu.name = 'menu-outline'
            iconoMenu.style.color = 'white';
            iconoMenu.style.position = 'relative'; 
        }
    };
};
// Event listener
botonMenu.addEventListener('click', abrirMenu);

// Funciones
function abrirMenu() {  

    const abMen = new AbMenu();
    switch(estadoM){
        case false:
            abMen.openMenu('open')
            estadoM = true;
            break;

        case true:
            estadoM = false;
            abMen.openMenu('close')
            break;
    }
}

//cambiar color de la pagina
const botonColor = document.querySelector('.camb-color');
const body = document.querySelector('body');
const icoCam = document.getElementById('icoCol')
var estado = 'negro';

botonColor.addEventListener('click', () => { 
    switch(estado) {
        case 'blanco':
            body.className = 'dark';
            icoCam.name = 'sunny';
            icoCam.style.transition = 'all .8s';
            estado = 'negro';
            break;
        case 'negro':
            estado = 'blanco';
            icoCam.name = 'moon';
            icoCam.style.transition = 'all .8s';
            body.style.transition = 'all .8s';
            body.className = 'ligth';
            break;
    }
});
// year

const fecha = Date.now()
const hoy = new Date(fecha)
const year = hoy.getFullYear()

let footer = document.getElementById("year")
footer.innerHTML = year

function datos() {
    let table = document.getElementById("table").value
    let row = document.getElementById("row").value
    let respuesta = document.getElementById("respuesta")
    
    for(let i = 1;i <= row; i++){
        const resultado = document.createElement("p")
        resultado.innerHTML = table + " X " + i + " = " + (table*i)
        respuesta.appendChild(resultado)
    }
}
