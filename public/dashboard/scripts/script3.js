let isDark = false;


/**Toggle btn */
function toggleTheme(tg_btn, ic, tgCtr, ham_btn = null) {
    if (!isDark) {

        document.body.classList.add("dark");

        isDark = true;
        if (ic) {
            tg_btn.src = "https://img.icons8.com/?size=100&id=648&format=png&color=ffffff";

        } else {
            tg_btn.style.backgroundColor = "rgb(2, 61, 82)";
            tgCtr.style.marginInlineStart = "auto";

        }

        if (ham_btn !== null) {
            ham_btn.src = 'https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF'
        }


    } else {
        document.body.classList.remove("dark");
        isDark = false;
        if (ic) {
            tg_btn.src = "https://img.icons8.com/?size=100&id=45474&format=png&color=7a7a7a";
        } else {
            tg_btn.style.backgroundColor = "";
            tgCtr.style.marginInlineStart = "";
        }
        if (ham_btn !== null) {
            ham_btn.src = 'https://img.icons8.com/?size=100&id=120374&format=png&color=000000'
        }
    }

}


export default function interSect() {
    const curTime = document.getElementById("currentSecTime");
    const rootCnt = document.getElementById("time_root_cnt");
    const scrollCnt = document.getElementById("dash_cmp");
    const secDates = document.querySelectorAll(".sec_date-4");
    const hambugerBtn = document.getElementById("hambuger_menu");
    const rect = rootCnt.getBoundingClientRect().bottom;



    scrollCnt.addEventListener("scroll", (e) => {

        secDates.forEach(sec => {

            const secDateRect = sec.getBoundingClientRect().top;

            if (secDateRect < rect) {
                curTime.innerText = sec.innerText;
                rootCnt.style.boxShadow = "0px 2px 1rem gray"
            }
        })
        if (scrollCnt.scrollTop <= 0) {
            rootCnt.style.boxShadow = "0px 0px 0rem gray"
        };
    })



    const tg_btn = document.getElementById('theme_tg_btn');
    const tg_btn_mobile = document.getElementById('tg_btn_mobile')
    const tgCtr = document.getElementById('tg_ctr');

    tg_btn.addEventListener("click", () => {
        toggleTheme(tg_btn, true, null);
    });

    tg_btn_mobile.addEventListener("click", () => {
        toggleTheme(tg_btn_mobile, false, tgCtr, hambugerBtn)

    });
}
