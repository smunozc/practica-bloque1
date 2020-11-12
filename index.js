// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

var list = document.querySelector(".color-list");

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

function addColors(list) {
  for (let i = 0; i < colorList.length; i++) {
    let li = document.createElement("li");
    li.classList.add("color-item");
    if (i % 2 === 1) {
      li.classList.add("color-item--odd");
    }

    li.addEventListener("click", () => alert(colorList[i].colorName), false);

    let div1 = document.createElement("div");
    div1.textContent = "Color " + colorList[i].colorName;
    div1.classList.add("color-name");

    let div2 = document.createElement("div");
    div2.textContent = "Muestra";
    div2.classList.add("color-show");
    div2.style.backgroundColor = colorList[i].hex;
    div2.style.border = "1px dashed";

    let button1 = document.createElement("button");
    button1.textContent = "Next item color";
    button1.classList.add("color-set");

    let button2 = document.createElement("button");
    button2.textContent = "Page color";
    button2.classList.add("color-set");

    list.appendChild(li);

    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(button1);
    li.appendChild(button2);
  }
}

//Añade la lista de colores
addColors(list);

//selecciona la etiqueta body
let body = document.querySelector("body");

//onclick de toda la vida en el body
body.addEventListener("click", () => alert("body"), false);
//Detiene la propagación del event listener ya que al hacer click en cualquier parte de la página salta el alert.
list.addEventListener("click", e => e.stopPropagation(), false);

//La idea es obtener los hijos de cada elemento de la lista, hacer 8 if comparando el contenido de texto del primer div dentro del li, y hacer los event listener de cada botón.
let li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  //saltar elemento de lista con el titulo
  if (i !== 0) {
    let liElements = li[i].childNodes;
    liElements[2].addEventListener("click", e => e.stopPropagation(), false);
    liElements[3].addEventListener("click", e => e.stopPropagation(), false);

    if (li[i].hasChildNodes) {
      if (li[i].firstChild.textContent === "Color white") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[0].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[0].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color red") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[1].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[1].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color orange") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[2].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[2].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color yellow") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[3].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[3].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color orchid") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[4].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[4].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color pink") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[5].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[5].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color green") {
        liElements[2].addEventListener(
          "click",
          () => (li[i + 1].style.backgroundColor = colorList[6].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[6].hex),
          false
        );
      } else if (li[i].firstChild.textContent === "Color silver") {
        liElements[2].addEventListener(
          "click",
          () => (li[1].style.backgroundColor = colorList[7].hex),
          false
        );

        liElements[3].addEventListener(
          "click",
          () => (body.style.backgroundColor = colorList[7].hex),
          false
        );
      }
    }
  }
}
