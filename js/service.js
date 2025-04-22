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

function changeShape(value) {
    gBrush.shape = value
    console.log(value);
}

function changeIsMouseDown(status) {
    gIsMouseDown = status
}

