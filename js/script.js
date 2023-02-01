// Preparo gli elementi necessari
const levelUserSelection = document.querySelector("#levels").value;
const submitChoiceButton = document.querySelector(".submit-button").value;
const containerGrid = document.querySelector(".grid");

/********************************************
 *                                          *
 *               FUNCTIONS                  *
 *                                          *
 ********************************************/

/**
 * funzione per generare una griglia dinamica
 * @param {HTMLElement} grid 
 */

function generateGrid() {
    // Per 100 volte
    for (let i = 0; i < 100; i++) {
        // Crea un div
        const boxElements = document.createElement("div");
        // e assegna loro una classe (dimensioni e bordo)
        boxElements.classList.add("box");
        // Metti i box creati all'interno della grid
        containerGrid.append(boxElements);
    }
}

generateGrid();