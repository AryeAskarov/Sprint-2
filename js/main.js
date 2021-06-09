'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}

function drawImg() {
    var img = new Image()
    img.src = 'pics/1.jpg';
    img.onload = function() {
        return gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) 
    }
}
