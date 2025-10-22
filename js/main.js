"use strict";
// Nombramos las variables de gatos y las asignamos a la clase de la etiqueta "list"
const kittenOne = document.querySelector(".js-list");
const kittenTwo = document.querySelector(".js-list");
const kittenThree = document.querySelector(".js-list");

// Asignar a cada constante su contenido que estaba antes en HTML
const kittenOneText = `<li class="card">
    <article>
      <img
        class="card_img"
        src="https://dev.adalab.es/gato-siames.webp"
        alt="gatito"
      />
      <h3 class="card_title">Anastacio</h3>
      <h4 class="card_race">Siamés</h4>
      <p class=" js_card_description">
        Porte elegante, su patrón de color tan característico y sus ojos de un
        azul intenso, pero su historia se remonta a Asía al menos hace 500 años,
        donde tuvo su origen muy posiblemente.
      </p>
    </article>
  </li>` ;

const kittenTwoText = `  <li class="card">
    <img
      class="card_img"
      src="https://dev.adalab.es/sphynx-gato.webp"
      alt="sphynx-cat"
    />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class=" js_card_description">
      Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con
      pinta de alienígena han llegado a definir a esta raza gatuna que se
      caracteriza por la «ausencia» de pelo.
    </p>
  </li>` ;

const kittenThreeText = `<li class="card">
    <img
      class="card_img"
      src="https://dev.adalab.es/maine-coon-cat.webp"
      alt="maine-coon-cat"
    />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class=" js_card_description">
      Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella
      mirada se ha convertido en una de sus señas de identidad. Sus ojos son
      grandes y las orejas resultan largas y en punta.
    </p>
  </li>` ;

// Con innerHTML, asignamos los tres artículos de los gatos a un solo elemento, que es la etiqueta <ul>
kittenOne.innerHTML = kittenOneText;

kittenTwo.innerHTML = kittenTwoText;

kittenThree.innerHTML = kittenThreeText;


// Nombramos las variables del botón "+" y la sección "formulario", con sus clases añadidas correspondientes
const btnAdd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-new-form");

// Añadimos un evento al botón para hacer "click" y otro evento (toggle) que muestra y oculta el formulario al hacer ese "click"
btnAdd.addEventListener("click", () => {
  newForm.classList.toggle("collapsed");
});

//Nombramos la variable del "botón cancelar" con su clase correspondiente
const buttonCancel = document.querySelector(".button-cancel");

// Añadimos un evento al botón para hacer "click" y otro evento para añadir
buttonCancel.addEventListener("click", () => {
  newForm.classList.add("collapsed");
})

// El collapsed es una clase que aparece en CSS con un display None que oculta esa clase. 
// Cuando la clase está oculta, el formulario aparece y cuando la clase aparece junto a las otras dos clases puestas en la sección "new form", el formulario se oculta.
//En esa misma sección, se encuentra el botón "cancel". Cuando le demos click al botón, aparece la clase "collapsed" junto a new form, y el formulario se oculta.

const searchButton = document.querySelector(".js_button-search");
const descrSearchText = document.querySelector(".js_in_search_desc");

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = input_search_desc.value; // Recoge el valor del input de la descripción en una variable
});
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.Sus ojos son grandes y las orejas resultan largas y en punta.";

let card_description = document.querySelector(".js_card_description");

if (kittenDesc1.includes(descrSearchText)) {
  elegante
};

if (kittenDesc2.includes(descrSearchText)) {
  //Completa el código
};

if (kittenDesc3.includes(descrSearchText)) {
  //Completa el código
};