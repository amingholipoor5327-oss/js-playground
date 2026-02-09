const input = document.querySelector("#inpu");
const result = document.querySelector("#Result");

function Showtext() {
    const name = input.value.trim();

    if (name === "") {
        result.innerHTML = "لطفا فیلد را تکمیل کنید ❌";
        return;
    }

    const ok = confirm("آیا از نمایش اسم خود اطمینان دارید؟");

    if (!ok) return;

    result.innerHTML = `سلام ${name} 👋`;

    setTimeout(() => {
        result.innerHTML = "";
    }, 5000);
}

 input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") Showtext();
});
