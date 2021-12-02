let boxes = 16;
const sketchArea = document.querySelector(".sketchArea");
console.log(sketchArea);
function addRows() {
    for (let i = 0; i < boxes; i++ ){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < boxes; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        sketchArea.appendChild(row);

    }
}

const btn = document.querySelector("#update");

btn.addEventListener("click", addRows);