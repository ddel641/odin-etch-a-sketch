const sketchArea = document.querySelector(".sketchArea");


// Create the etch-a-sketch grid
function initialize(numberOfBoxes) {
    // Clear the sketch area
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

    // Draw the sketch area
    for (let i = 0; i < numberOfBoxes; i++ ){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numberOfBoxes; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        sketchArea.appendChild(row);
    }

    boxListener(); // add listeners to the grid
}


// Resets the drawing area. allows a new number of boxes
function clearDrawing(){
    let num;
    let keepRunning = true;
    while(keepRunning) {
        num = parseInt(prompt("Choose a number of boxes between 10 and 100?"));
        keepRunning = (isNaN(num) || num > 100 || num < 10)
    }
    
    initialize(num);

}


// Create an event listener that changes box bg-color when mouseover
function boxListener() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {

        box.addEventListener("mouseenter", () => {
            box.classList.add("drawn");
        });
    })
}

initialize(16);

// Button event listener to reset grid
const btn = document.querySelector("#update");
btn.addEventListener("click", clearDrawing);