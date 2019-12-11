'use strict';

const DOCUMENT_BG_COLOR_KEY = "DOCUMENT_BG_COLOR_KEY";

const colorControls = document.querySelectorAll("input[type='range']");
for (const input of colorControls){
    input.oninput = refreshValue;
}



function refreshValue(e) {
    console.log(e);

    let value = "rgba(";
    const bgColor = [];

    colorControls.forEach(function(range, index, list) {

        bgColor.push(range.value);

        if(index === list.length -1){

            value += range.value + ')';
            localStorage.setItem(DOCUMENT_BG_COLOR_KEY, JSON.stringify(bgColor));

        }else{

            value+=range.value+",";
        }

    });

    document.body.style.backgroundColor = value;

}

window.onload = function () {

};