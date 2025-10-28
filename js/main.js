"use strict";
// Nombramos las variables de gatos
//const kittenOne = document.querySelector(".js-list");
//const kittenTwo = document.querySelector(".js-list");
//const kittenThree = document.querySelector(".js-list");

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 =
  " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRace1 = "Siamés";

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 =
  "Produce fascinación y curiosidad.Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "Sphynx";

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 =
  " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRace3 = "Maine Coon";

// Asignar a cada constante su contenido que estaba antes en HTML
const kittenOneText = `<li class="card">
   <article>
      <img class="card_img" src="${kittenImage1}" alt="gatito ${kittenName1}"/>
      <h3 class="card_title"> ${kittenName1} </h3>
      <h4 class="card_race"> ${kittenRace1} </h4>
      <p class="card_description">
         ${kittenDesc1}
      </p>
    </article>
  </li>`;

const kittenTwoText = `<li class="card">
   <article>
    <img class="card_img" src="${kittenImage2}" alt="${kittenImage2}"/>
    <h3 class="card_title">${kittenName2}</h3>
    <h4 class="card_race">${kittenRace2}</h4>
    <p class=" card_description">
       ${kittenDesc2}
    </p>
    </article>
  </li>`;

const kittenThreeText = `<li class="card">
   <article>
    <img class="card_img" src="${kittenImage3}" alt="${kittenImage3}"/>
    <h3 class="card_title">${kittenName3}</h3>
    <h4 class="card_race">${kittenRace3}</h4>
    <p class=" card_description">
    ${kittenDesc3}
    </p>
    </article>
  </li>`;

// Nombramos las variables del botón "+" y la sección "formulario", con sus clases añadidas correspondientes
const btnAdd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-new-form");

// Añadimos un evento al botón para hacer "click" y otro evento (toggle) que muestra y oculta el formulario al hacer ese "click"

// btnAdd.addEventListener("click", () => {
//   newForm.classList.toggle("collapsed");
// });

//Cambiamos el evento click y el toggle de la clase "collapsed", por dos funciones. Una que quite la clase y otra que la añada.
function showNewCatForm() {
  newForm.classList.remove("collapsed");
}
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

//Creamos la función "handleClickNewCatForm", junto con el evento de evitar recargar la página.
// Después se añade la información de que si el elemento "newForm" contiene la clase "collapsed", muestra el formulario de gato nuevo. Si no la tiene, no muestra el formulario.
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Añadimos el evento click de nuevo, pero usando al información de la función que engloba el mostrar o no el formulario..
btnAdd.addEventListener("click", handleClickNewCatForm);

//Nombramos la variable del "botón cancelar" con su clase correspondiente
const buttonCancel = document.querySelector(".button-cancel");

// Añadimos un evento al botón para hacer "click" y otro evento para añadir
buttonCancel.addEventListener("click", () => {
  newForm.classList.add("collapsed");
});

// El collapsed es una clase que aparece en CSS con un display None que oculta esa clase.
// Cuando la clase está oculta, el formulario aparece y cuando la clase aparece junto a las otras dos clases puestas en la sección "new form", el formulario se oculta.
//En esa misma sección, se encuentra el botón "cancel". Cuando le demos click al botón, aparece la clase "collapsed" junto a new form, y el formulario se oculta.

//------------------BUSCADOR CON FUNCIONES--------------------------------------------------------------
const searchButton = document.querySelector(".js_button-search"); //Constante del botón "buscar" en el apartado "filtrar/buscar"
const input_search_desc = document.querySelector(".js_in_search_desc"); //Constante del input de la "descripción" del apartado "filtrar/buscar"
const kittenList = document.querySelector(".js-list"); // Nueva constante de la lista que engloba los gatitos existentes arriba

const filterKitten = (event) => {
  //Constante para declarar un filtro de búsqueda
  event.preventDefault(); //Evita que recargue la página

  const descrSearchText = input_search_desc.value; //Constante para declarar el valor que se escriba en el apartado descripción

  kittenList.innerHTML = ""; //Para que no se repita la búsqueda si los campos están en blanco

  if (descrSearchText === "") {
    //Si le damos al botón "buscar" mientras los campos están vacíos, muestra este mensaje.
    kittenList.innerHTML = `<li>Por favor, escribe una descripción para buscar 🐱</li>`;
    return;
  }
  // Si rellenamos el campo "descripción" con un valor de esta, muestra el gatito.
  if (kittenDesc1.includes(descrSearchText)) {
    kittenList.innerHTML += kittenOneText;
  } else if (kittenDesc2.includes(descrSearchText)) {
    kittenList.innerHTML += kittenTwoText;
  } else if (kittenDesc3.includes(descrSearchText)) {
    kittenList.innerHTML += kittenThreeText;
  } else {
    //REVISIÓN
    //Si buscamos en los campos un valor de la descripción que no existe, muestra este mensaje.
    kittenList.innerHTML = `<li>No se encontraron gatitos con esa descripción 😿</li>`;
  }
};

searchButton.addEventListener("click", filterKitten); // Unimos el evento click con la función de filtrado.
//

// ------------------- BUSCADOR CON CONDICIONALES -----------------------------------------------------
//let breedText = ""; // Creamos una variable para almacenar el texto de la raza
//kittenlist.innerHTML = ""; // Para que no se repita la búsqueda si los campos están en blanco
//if (kittenDesc1.includes(descrSearchText)) {
// Con innerHTML, asignamos los tres artículos de los gatos a un solo elemento, que es la etiqueta <ul>
//  kittenlist.innerHTML += kittenOneText;
//}

//if (kittenDesc2.includes(descrSearchText)) {
//  kittenlist.innerHTML += kittenTwoText;
//}

//if (kittenDesc3.includes(descrSearchText)) {
//kittenlist.innerHTML += kittenThreeText;
//}

// Los if se usan decirle a nuestra página web que si escribes en el input (descripción) un texto que está incluído en la descripción de algún artículo,
//  mostramos dicho artículo más cualquier otro que contenga ese mismo texto.

// Creamos una función, la cuál engloba TODO el contenido informativo de los gatos nuevos a rellenar.
// -----------------------------------------------------------------------------------------------------

function renderKitten(url, name, race, desc) {
  const kittenHTML = `
<li class="card">
   <article>
    <img class="card_img" src="${url}" alt=""/> 
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class=" card_description">${desc}</p>
    </article>
  </li>`;
  return kittenHTML;
}
// Quito los input de template

newForm.addEventListener("submit", handleClickNewCatForm);

const submitAdd = newForm.querySelector(".js-submit-add");

submitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  const inputUrl = newForm.querySelector(".js-input-url").value;
  const inputName = newForm.querySelector(".js-input-name").value;
  const inputRace = newForm.querySelector(".js-input-race").value;
  const inputDesc = newForm.querySelector(".js-input-desc").value;
  const kittenHTML = renderKitten(inputUrl, inputName, inputRace, inputDesc);
  //const HTMLkitten = renderKitten(inputUrl, inputName, inputRace, inputDesc);
  kittenList.innerHTML += kittenHTML;
  //kittenlist.innerHTML += kittenHTML; no tenian la misma variable.
});
