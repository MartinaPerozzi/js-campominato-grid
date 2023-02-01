// Preparo gli elementi necessari
const levelUserSelection = document.querySelector("#levels").value;
const submitChoiceButton = document.querySelector(".submit-button");
const containerGrid = document.querySelector(".grid");

// Levels
const levelOne = 100;
const levelTwo = 81;
const levelTree = 49;

/********************************************
 *                                          *
 *               FUNCTIONS                  *
 *                                          *
 ********************************************/

/**
 * funzione per generare una griglia dinamica
 * @param {HTMLElement} grid l'elemento nel quale inserire i box
 * @param {Int} dimension la dimensione della griglia (in base al livello)
 */

function generateGrid(grid, dimension) {
    // Per n volte
    for (let i = 0; i < dimension; i++) {
        // Crea un div
        const boxElements = document.createElement("div");
        // e assegna loro una classe (dimensioni e bordo)
        boxElements.classList.add("box");
        // Metti i box creati all'interno della grid
        grid.append(boxElements);
        // Numerali
        boxElements.innerHTML += i;
    }
}

submitChoiceButton.addEventListener(
    "click",
    function () {

        generateGrid(containerGrid, levelOne);
    }

)