// Preparo gli elementi necessari
const submitChoiceButton = document.querySelector(".submit-button");
const containerGrid = document.querySelector(".grid");

// Levels
const levelOne = 100;
const levelTwo = 81;
const levelThree = 49;

/********************************************
 *                                          *
 *               FUNCTIONS                  *
 *                                          *
 ********************************************/

/**
 * funzioni per generare una griglia dinamica a seconda dei diversi livelli
 * @param {HTMLElement} grid l'elemento nel quale inserire i box
 * @param {Int} dimension la dimensione della griglia (in base al livello)
 */

function generateGrid(grid, dimension) { //Livello 1
    // Per n volte
    for (let i = 1; i < dimension; i++) {
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

function generatedGridLevel2(grid, dimension) { //Livello 2
    for (let i = 1; i < dimension; i++) {
        // Crea un div
        const boxElements = document.createElement("div");
        // e assegna loro una classe (dimensioni e bordo)
        boxElements.classList.add("box-2");
        // Metti i box creati all'interno della grid
        grid.append(boxElements);
        // Numerali
        boxElements.innerHTML += i;
    }
}

function generatedGridLevel3(grid, dimension) { //Livello 3
    for (let i = 1; i < dimension; i++) {
        // Crea un div
        const boxElements = document.createElement("div");
        // e assegna loro una classe (dimensioni e bordo)
        boxElements.classList.add("box-3");
        // Metti i box creati all'interno della grid
        grid.append(boxElements);
        // Numerali
        boxElements.innerHTML += i;
    }
}

// Al click del bottone, a seconda della scelta del giocatore - crea la griglia
submitChoiceButton.addEventListener(
    "click",
    function () {
        const levelUserSelection = document.querySelector("#levels").value;

        if (levelUserSelection == "level-1") {
            generateGrid(containerGrid, levelOne);
        } if (levelUserSelection == "level-2") {
            generatedGridLevel2(containerGrid, levelTwo);
        } else if (levelUserSelection == "level-3") {
            generatedGridLevel3(containerGrid, levelThree);
        }

    }

)