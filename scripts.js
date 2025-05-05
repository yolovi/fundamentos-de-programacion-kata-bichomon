console.log(document.title);
console.log(document.title);
document.querySelector('.infocard')
console.log(document.querySelector('.infocard')
)

//Ejercicio 1
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
// document.getElementById("gen-1").innerHTML = "<h2>Generasión 1 Pokimon</h2>"
const titleElement = document.getElementById("gen-1")

titleElement.textContent = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.

document.getElementById("gen-1").style.background = "red"

// 3. Imprime por consola la URL de la página.
const url = document.URL
console.log(url)

// 4. Imprime por consola el dominio de la página.
const dominio = document.domain
console.log(dominio)

// 5. Imprime todos los nodos de imagen.
// console.log(document.getElementsByTagName("img"))

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const imagenes = document.getElementsByTagName("img")
// console.log(imagenes)

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

const infocards = document.querySelectorAll(".infocard-lg-data.text-muted")

// infocards.forEach(card => { //Esto me va a permitir verificar si el enlace dentro de este contenedor tiene la clase 'itype flying'
//     const flyingLink = card.querySelector(".itype.flying"); // Aquí selecciono el enlace dentro del contenedor que tiene la clase 'itype flying'
//     if (flyingLink) { // Si el enlace existe, significa que el Pokémon tiene la clase 'flying'
//       card.style.backgroundColor = "yellow";  // Cambiar el color de fondo si tiene la clase 'flying'
//     }
//   });

for (let i = 0; i < infocards.length; i++) {
    const volador = infocards[i].querySelector(".itype.flying")
    if(volador) {
        infocards[i].style.background = "green"
    }
}



