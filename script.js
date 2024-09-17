const conteudoDoMenu = document.getElementById("conteudoDoMenu");
const Menu = document.getElementById("Menu");

let isOpen = false;

conteudoDoMenu.addEventListener("click", () => {
    if (!isOpen) {
        isOpen = true;
        Menu.style.width = "15vw";
        conteudoDoMenu.textContent = "Fechar Menu <<";
        conteudoDoMenu.style.justifyContent = "center";
        conteudoDoMenu.style.alignItems = "center";
        conteudoDoMenu.style.textAlign = "center";
        conteudoDoMenu.style.paddingRight = "20px";
    } else {
        isOpen = false;
        Menu.style.width = "4vw";
        conteudoDoMenu.textContent = ">>";
        conteudoDoMenu.style.justifyContent = "center";
        conteudoDoMenu.style.textAlign = "center";
    }
});