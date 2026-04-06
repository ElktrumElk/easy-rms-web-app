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
        }
        console.log(scrollCnt.scrollHeight, scrollCnt.scrollTop)
    })
}
