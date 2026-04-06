
import { showBg } from "./script2.js";

/**
 * Renders file components sorted by date
 * @param {Array} filesData - Array of file groups with dates
 * @param {HTMLElement} parentContainer - Container to append files to
 * @param {string} sortDirection - 'ascending' or 'descending'
 * @param {Function} onElementCreate - Optional callback when each group is created
 */
function renderFilesComponent(filesData, parentContainer, sortDirection = 'ascending', onElementCreate = null) {
    const startIdx = sortDirection === 'ascending' ? 0 : filesData.length - 1;
    const isAscending = sortDirection === 'ascending';

    for (let i = startIdx; isAscending ? i < filesData.length : i >= 0; isAscending ? i++ : i--) {
        
        const dateGroup = filesData[i];
        const groupElement = document.createElement('div');
        groupElement.setAttribute('class', 'group_time-4');

        const dateElement = document.createElement('span');
        dateElement.setAttribute('class', 'sec_date-4');
        dateElement.innerText = `${dateGroup.date} ${dateGroup.year}`;
        groupElement.appendChild(dateElement);

        dateGroup.files.forEach((file, idx) => {
            const fileCnt = document.createElement('div');
            fileCnt.setAttribute('class', 'file_sub_cnt-4');

            const fileNameSect = document.createElement('div');
            fileNameSect.setAttribute('class', 'file_name-4');

            const fileIcon = document.createElement('img');
            fileIcon.setAttribute('class', 'file_type_ic-4');
            fileIcon.setAttribute('src', 'https://img.icons8.com/?size=100&id=117561&format=png&color=000000');
            fileNameSect.appendChild(fileIcon);

            const fileName = document.createElement('span');
            fileName.setAttribute('class', 'fn');
            
            fileName.innerText = isAscending ? file.name : dateGroup.files[(dateGroup.files.length - 1) - idx].name;
            fileNameSect.appendChild(fileName);

            fileCnt.appendChild(fileNameSect);

            const fileTimeCnt = document.createElement('span');
            fileTimeCnt.setAttribute('class', 'time-4');

            const fileTime = document.createElement('span');
            fileTime.innerText = isAscending ? file.time : dateGroup.files[(dateGroup.files.length - 1) - idx].time;
            fileTimeCnt.appendChild(fileTime);

            const downloadBtn = document.createElement('button');
            downloadBtn.setAttribute('class', 'download_btn-4');

            const downloadIc = document.createElement('img');
            downloadIc.setAttribute('class', 'download_ic');
            downloadIc.setAttribute('src', 'https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF');
            downloadBtn.appendChild(downloadIc);

            const downloadText = document.createElement('span');
            downloadText.innerText = 'Download';
            downloadBtn.appendChild(downloadText);

            fileTimeCnt.appendChild(downloadBtn);
            fileCnt.appendChild(fileTimeCnt);
            groupElement.appendChild(fileCnt);
        });

        parentContainer.appendChild(groupElement);

        if (typeof onElementCreate === 'function') {
            onElementCreate(groupElement);
        }
    }
}

export default function fileclone() {

    const files = document.getElementById("file_1");
    const parent = document.getElementById("file_cnt");
    const date = document.getElementById('sec_date');
    const menuBg = document.getElementById("menu_pan");
    const menuCard = document.getElementById("menu_card");
    const searchInp = document.getElementById("search_1");
    const searchInp2 = document.getElementById("search");
    const searchInp2Btn = document.getElementById("searc_btn");
    const sortBtn = document.getElementById('sort_btn');

    let fileNames = [];

    const f = [
        {
            date: 'Mon 26 jan',
            year: '2026',
            files: [
                {
                    name: 'sales.xlps',
                    time: '2:45pm',
                },
                {
                    name: 'management.xlps',
                    time: '2:47pm',
                },
                {
                    name: 'sales_book.xlps',
                    time: '2:48pm',
                }
            ]
        },
        {
            date: 'Wed 28 jan',
            year: '2026',
            files: [
                {
                    name: 'filter.xlps',
                    time: '2:45pm',
                },
                {
                    name: 'data.xlps',
                    time: '2:47pm',
                },
                {
                    name: 'example.txt',
                    time: '2:48pm',
                }
            ]
        },
        {
            date: 'Sat 30 jan',
            year: '2026',
            files: [
                {
                    name: 'cash.xlps',
                    time: '2:45pm',
                },
                {
                    name: 'chapter 54.xlps',
                    time: '2:47pm',
                },
                {
                    name: 'work.xlps',
                    time: '2:48pm',
                }
            ]
        }
    ]

    let sortDirection = 'ascending';

    sortBtn.addEventListener('click', () => {
        // Toggle sort direction
        sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';

        // Clear existing files
        parent.innerHTML = '';

        // Re-render with new sort direction
        renderFilesComponent(f, parent, sortDirection);
    });

    // Initial render
    renderFilesComponent(f, parent, sortDirection);


    /**When the mobile search input is focused */
    searchInp.addEventListener("focus", () => {
        menuBg.style.backgroundColor = "transparent";
        menuBg.style.pointerEvents = "none";
        menuCard.style.height = "4.3rem";
        menuCard.style.marginTop = "1rem";
    });

    /**When the mobile search input is blur */
    searchInp.addEventListener("blur", () => {

        menuBg.style.backgroundColor = "";
        menuCard.style.height = "";
        menuCard.style.marginTop = "";
        menuBg.style.pointerEvents = "all";

    });


    /**Search functionality */
    function searchfnc(inpt) {
        Array.from(parent.children).forEach(_child => {

            Array.from(_child.querySelectorAll('.fn')).forEach((_fname, idx) => {
                if (_fname.innerText.includes(inpt.value.toLowerCase())) {

                    _child.children[idx + 1].style.display = "flex"
                } else {
                    _child.children[idx + 1].style.display = "none"
                }
            })
            //if()
        })
    }

    searchInp.addEventListener("input", () => {
        searchfnc(searchInp);
    });

    /**Comment: The search input for wider screen*/
    searchInp2.addEventListener("input", () => {
        searchfnc(searchInp2);
    });


    let isSearchInp = false;
    searchInp2Btn.addEventListener("click", () => {
        if (!isSearchInp) {
            searchInp2.style.width = "20rem";
            searchInp2.style.padding = ".5rem";
            searchInp2.style.pointerEvents = "all"


            isSearchInp = true;
        } else {
            searchInp2.style.width = "";
            searchInp2.style.padding = "";
            searchInp2.style.pointerEvents = ""
            isSearchInp = false;
        }
    });


}