const container = document.querySelector(".container");

for(let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.setAttribute("style", "flex-basis: 6.25%;");
    container.appendChild(gridElement);
}

const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", () => {
        gridElement.classList.add("pinted");
    });
});

const button = document.querySelector(".sizeButton");

button.addEventListener("click", () => {
    let newSize = prompt("Please enter new size (up to 100):", "16");
    if(newSize != null && newSize <= 100){
        let percentaje = 100 / newSize;

        const grid = document.querySelector(".container");
        while (grid.lastElementChild) {
            grid.removeChild(grid.lastElementChild);
        }

        //Creates new divs
        for(let i = 0; i < (newSize*newSize); i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.setAttribute("style", `flex-basis: ${percentaje}%;`);
            container.appendChild(gridElement);
        }

        const gridElements = document.querySelectorAll(".gridElement");

        gridElements.forEach((gridElement) => {
            gridElement.addEventListener("mouseover", () => {
                gridElement.classList.add("pinted");
            });
        });
    }
});