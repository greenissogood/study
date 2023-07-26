// 화면에 대한 구조 정의! --> 모듈화
exports.postTemp = function (queryData) {

    let result_html = ''
    result_html =
        '<html><body>' +
        `<p>ID : ${queryData.id}</p>` +
        `<p>PW : ${queryData.pw}</p>` +
        `<p>GENDER : ${queryData.gender}</p>` +
        `<p>BLD : ${queryData.bld}</p>` +
        `<p>BTH : ${queryData.bth}</p>` +
        `<p>HOBBY : ${queryData.hobby}</p>` +
        `<p>CLR : ${queryData.clr}</p>` +
        `<p>TEXTAREA : ${queryData.textarea}</p>` +
        '</body></html>'

    return result_html;
}

exports.gradeTemp = function (queryData) {

    let htmlScore = parseInt(queryData.html)
    let cssScore = parseInt(queryData.css)
    let nodeScore = parseInt(queryData.ndjs)
    let androidScore = parseInt(queryData.adr)


    let avg = (htmlScore + cssScore + nodeScore + androidScore) / 4

    let grade = 'F'
    if (avg >= 95 && avg <= 100) {
        grade = 'A+'
    } else if (avg >= 90 && avg <= 94) {
        grade = 'A'
    } else if (avg >= 85 && avg <= 89) {
        grade = 'B+'
    } else if (avg >= 80 && avg <= 84) {
        grade = 'B'
    } else if (avg >= 75 && avg <= 70) {
        grade = 'C'
    }

        console.log('쉽오류쉑');
        let result_html =
            '<html><body>' +
            `<p>name : ${queryData.name}</p>` +
            `<p>html : ${htmlScore}</p>` +
            `<p>css : ${cssScore}</p>` +
            `<p>nodejs : ${nodeScore}</p>` +
            `<p>android : ${androidScore}</p>` +
            `<p>avg : ${avg}</p>` +
            `<p>grade: ${grade}</p>` +
            '</body></html>'

        return result_html
    }