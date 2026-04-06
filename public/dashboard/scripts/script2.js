
let isMenu = false;

export function showBg(menuBg, menu_card) {
    if (!isMenu) {
        menuBg.style.display = "flex";

        requestAnimationFrame(() => {
            menu_card.style.maxHeight = "900px";
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
        }, 200)
    }
}
let isBatch = false;

export function showBatch(batchList) {
    if (!isBatch) {
        batchList.style.display = "flex";
        requestAnimationFrame(() => {
            batchList.style.maxHeight = "900px";
        });
        isBatch = true;

    } else {
        requestAnimationFrame(() => {
            batchList.style.maxHeight = "0";
        });

        isBatch = false;
        setTimeout(() => {
            batchList.style.display = "none";

        }, 300)
    }
}

/**Script2: */
export default async function Script2() {
    const hambugerBtn = document.getElementById("hambuger_menu");
    const menuBg = document.getElementById("menu_pan");
    const menuCard = document.getElementById("menu_card");

    const batchBtn = document.getElementById("batch_btn");
    const batchList = document.getElementById("btch_list");

    hambugerBtn.addEventListener("click", () => { showBg(menuBg, menuCard) });
    menuBg.addEventListener("click", (e) => {
        if (e.target !== menuBg) return;
        showBg(menuBg, menuCard)
    });

    batchBtn.addEventListener("click", () => {
        showBatch(batchList)
    });

    const batchBtnlrg = document.getElementById("batch_lrg_btn");
    const _dashboard = document.getElementById("dashboard");
    const sideBar = document.getElementById("side_bar");
    const headings = document.getElementById("g_2");

    let issideExpand = false;

    batchBtnlrg.addEventListener("click", () => {
        if (!issideExpand) {

            batchBtnlrg.style.flexDirection = "row";
            
            /**Add class */
            _dashboard.classList.add("side_expand"); //dashboard
            headings.classList.add("visible");
            sideBar.classList.add('expand');

            issideExpand = true;
        } else {

            batchBtnlrg.style.flexDirection = "column";

            /**Remove class */
            _dashboard.classList.remove("side_expand"); //dashboard
            headings.classList.remove("visible");
            sideBar.classList.remove('expand');

            issideExpand = false;

        }
    });

}