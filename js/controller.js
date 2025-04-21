'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()
}

function resizeCanvas() { 
    const elContainer = document.querySelector('.canvas-container') 
    gElCanvas.width = elContainer.clientWidth 
} 
function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.strokeStyle = gBrush.color
    gCtx.rect(x, y, gBrush.size, gBrush.size)
    gCtx.stroke()

    gCtx.fillStyle = gBrush.color
    gCtx.fill()
}
function onClearCanvas() {
    gCtx.clearRect(0,0,gElCanvas.width,gElCanvas.height)
}
function onSetSize(value) {
    changeSize(value)
}
function onSetColor(value) {
    changeColor(value)
}

function onSetShape(value) {
    changeShape(value)
}

