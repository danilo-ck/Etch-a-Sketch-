const container = document.querySelector(".container");

for(let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.textContent = "";
    container.appendChild(gridElement);
}

const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", () => {
        gridElement.classList.add("pinted");
    });
});