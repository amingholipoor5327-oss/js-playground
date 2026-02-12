const template = document.getElementById("cardTemplate");
const container = document.getElementById("cards");

function addCard() {
    const name = document.getElementById("name").value.trim();
    const job = document.getElementById("job").value.trim();

    if (!name || !job) return;

    // ✨ clone
    const newCard = template.cloneNode(true);

    newCard.classList.remove("template");
    newCard.removeAttribute("id");

    newCard.querySelector(".card-name").textContent = name;
    newCard.querySelector(".card-job").textContent = job;

    // delete button
    newCard.querySelector(".delete").onclick = () => {
        newCard.remove();
    };

    container.appendChild(newCard);
}
