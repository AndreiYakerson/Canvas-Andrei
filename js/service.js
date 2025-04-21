'use strict'

var gElCanvas
var gCtx
var gIsMouseDown = false

var gBrush = {
    color: 'black',
    size: 5,
    shape: 'square'
}
function changeSize(value) {
    gBrush.size = value
}
function changeColor(value) {
    gBrush.color = value
}

