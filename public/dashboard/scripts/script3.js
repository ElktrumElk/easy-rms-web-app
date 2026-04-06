export default function interSect() {
    const curTime = document.getElementById("currentSecTime");
    const rootCnt = document.getElementById("time_root_cnt");
    const scrollCnt = document.getElementById("dash_cmp");
    const secDates = document.querySelectorAll(".sec_date-4");

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

    let isDark = false;

    tg_btn.addEventListener("click", () => {
        if (!isDark) {
            document.body.classList.add("dark");
            isDark = true;
            tg_btn.src = "https://img.icons8.com/?size=100&id=648&format=png&color=ffffff";

        } else {
            document.body.classList.remove("dark");
            isDark = false;
            tg_btn.src = "https://img.icons8.com/?size=100&id=45474&format=png&color=7a7a7a";
        }
    })
}
