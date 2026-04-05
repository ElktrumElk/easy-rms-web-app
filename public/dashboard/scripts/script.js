

export default function fileclone() {

    const files = document.getElementById("file_1");
    const parent = document.getElementById("file_cnt");
    const date = document.getElementById('sec_date');
    const fileName = document.getElementById('file_name');

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

    for (let i = 0; i < f.length; i++) {
        const new_files = document.createElement('div');
        new_files.setAttribute('class', 'group_time-4');

        const dateElement = document.createElement('span');
        dateElement.setAttribute('class', 'sec_date-4');

        dateElement.innerText = f[i].date + ' ' + f[i].year;
        //append
        new_files.appendChild(dateElement);




        /**File type icon */
        f[i].files.forEach(_files => {

            /**comment: Holds the files in section in each date group */
            const fileCnt = document.createElement('div');
            fileCnt.setAttribute('class', 'file_sub_cnt-4');

            /**File name section */
            const fileNameSect = document.createElement('div');
            fileNameSect.setAttribute('class', 'file_name-4');
            //append
            fileCnt.appendChild(fileNameSect);

            const fileIcon = document.createElement('img');
            fileIcon.setAttribute('class', 'file_type_ic-4');
            fileIcon.setAttribute('src', 'https://img.icons8.com/?size=100&id=117561&format=png&color=000000');
            //append
            fileNameSect.appendChild(fileIcon);

            /**file */
            const file = document.createElement('span');
            file.innerText = _files.name;
            //append
            fileNameSect.appendChild(file);

            const fileTimeCnt = document.createElement('span');
            fileTimeCnt.setAttribute('class', 'time-4');

            const fileTime = document.createElement('span');
            fileTime.innerText = _files.time;
            fileTimeCnt.appendChild(fileTime);
            fileCnt.appendChild(fileTimeCnt);

            /**Download btn */
            const downloadBtn = document.createElement('button');
            downloadBtn.setAttribute('class', 'download_btn-4');

            const downloadIc = document.createElement('img');
            downloadIc.setAttribute('class', 'download_ic');
            downloadIc.setAttribute('src', 'https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF');
            downloadBtn.appendChild(downloadIc);
            /**Download text */
            const downloadText = document.createElement('span');
            downloadText.innerText = 'Download';
            downloadBtn.appendChild(downloadText);
            /**Append */
            fileTimeCnt.appendChild(downloadBtn);


            new_files.appendChild(fileCnt);

        });


        parent.appendChild(new_files);
    }
}