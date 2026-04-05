
let isMenu = false;

function showBg(menuBg, menu_card) {
    if (!isMenu) {
        menuBg.style.display = "flex";
        
        requestAnimationFrame(() => {
            menu_card.style.maxHeight = "400px";
            menu_card.style.padding = "1rem 1rem";
            menu_card.style.overflow = "hidden";
        });
        isMenu = true;

    } else {
        requestAnimationFrame(() => {
            menu_card.style.maxHeight = "0";
            menu_card.style.padding = "0rem 0rem";
            menu_card.style.overflow = "hidden";

        });

        setTimeout(() => {
            menuBg.style.display = "none";
            isMenu = false;
        }, 600)
    }
}
/**Script2: */
export default async function Script2() {
    const hambugerBtn = document.getElementById("hambuger_menu");
    const menuBg = document.getElementById("menu_pan");
    const menuCard = document.getElementById("menu_card");

    hambugerBtn.addEventListener("click", () => { showBg(menuBg, menuCard) });
    menuBg.addEventListener("click", () => { showBg(menuBg, menuCard) });

}