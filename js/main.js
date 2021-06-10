'use strict';

var gCanvas;
var gCtx;
var gText = [];
var gTextId = 0;
var isNewLine = true;
var gSrc = '';


function onInit() {
    console.log('init')
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    clearTextArea();
    starGallery();
    // getText();
}

function starGallery(){
    document.querySelector('.grid-gallery-main').style.display = 'initial';
    document.querySelector('.edit-area').style.display = 'none';
}

function creatText(text, textId) {
    var newText = {
        text: text,
        color: '',
        size: 40,
        textId: textId
    }
    console.log('newText:', newText);
    gText.push(newText);
    console.log('gText:', gText);
    gTextId++;
    return newText;
}
// function creatTexts(newText){
//     gText.push(newText);
//     console.log('gText:',gText);
//     return gText.length;
// }
function clearTextArray() {
    gText = [];
}


function clearTextArea() {
    document.querySelector('[name="text-editor"]').value = '';
}

function drawImg(src) {
    var img = new Image()
    console.log('drawImg(' + src + ')')
    img.src = src;
    img.onload = function () {
        return gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

    }
    gSrc = src;
}
function inputTextOnCanvas() {
    input.oninput = function () {
        result.innerHTML = input.value;
        gCtx.fillText(input.value, 50, 50)
        gCtx.strokeText(input.value, 50, 50)
    };

}


function userTyping() {
    var userText = document.querySelector('[name="text-editor"]').value;
    if (!userText) return console.log('empty text');
    // creatText(userText,gTextId)
    // console.log('gText[0].text',gText[0].text);
    console.log('getText()', userText);
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '50px Arial'
    // gCtx.textAlign = 'center'
    gCtx.fillText(userText, 50, 50)
    gCtx.strokeText(userText, 50, 50)

}
// function userTyping(){
//     getText();
// }
function cleanCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    drawImg(gSrc);
}
function addText(ev) {
    ev.preventDefault();
    isNewLine = true;
    console.log('addText');
    var userText = document.querySelector('[name="text-editor"]').value;
    if (!userText) return console.log('empty text');
    creatText(userText)
    console.log('gText[0].text', gText[1].text);
    // console.log('getText()', userText);
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '50px Arial'
    // gCtx.textAlign = 'center'
    gCtx.fillText(gText[1].text, 50, 300)
    gCtx.strokeText(gText[1].text, 50, 300)
}

function getImgOnCanvas(img) {
    console.log('img', img.attributes[0].value);
    drawImg(img.attributes[0].value);
    document.querySelector('.grid-gallery-main').style.display = 'none';
    document.querySelector('.edit-area').style.display = 'initial';

}