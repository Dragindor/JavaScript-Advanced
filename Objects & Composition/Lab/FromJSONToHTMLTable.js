function JsonToHtmlTable()
{
    let arr=Json.parse(json);
    let outputArr= ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    function makeKeyRow(arr){};
    function makeValueRow(obj){};
    function escapeHtml(value){};

    console.log(outputArr.join('\n'));
}