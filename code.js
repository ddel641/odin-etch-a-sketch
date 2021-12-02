let numberOfBoxes = 16;
const sketchArea = document.querySelector(".sketchArea");


// create the etch-a-sketch grid
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

function clearDrawing(){
    let filled = document.querySelectorAll(".drawn");
    filled.forEach((box) => {
        box.classList.remove("drawn");
    });
}



//Button event listener to remove grid bg-color
const btn = document.querySelector("#update");
btn.addEventListener("click", clearDrawing);

    
    
// Create an event listener that changes box bg-color when mouseover
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {
        box.classList.add("drawn");
    });
})
