
export function expand() {
    const batchBtnlrg = document.getElementById("batch_lrg_btn");
    const _dashboard = document.getElementById("dashboard");
    const sideBar = document.getElementById("side_bar");
    const headings = document.getElementById("g_2");

    let issideExpand = false;

    batchBtnlrg.addEventListener("click", () => {
        if (!issideExpand) {
            console.log("yo")
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