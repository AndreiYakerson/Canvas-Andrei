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

function drawCircle(x,y) {
    gCtx.beginPath()
    gCtx.arc(x,y,gBrush.size,0,2 * Math.PI)
    gCtx.strokeStyle = gBrush.color
    gCtx.stroke()

    gCtx.fillStyle = gBrush.color
    gCtx.fill()
}

function onDown(ev) {
    changeIsMouseDown(true)
}

function onDraw(ev) {
    const { offsetX, offsetY } = ev

    if (!gIsMouseDown) return
    if (gBrush.shape === 'square') drawRect(offsetX - (gBrush.size / 2), offsetY - (gBrush.size / 2))
    else drawCircle(offsetX,offsetY)
}

function onUp() {
    changeIsMouseDown(false)
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

function onDownloadCanvas(el) {
    const dataUrl = gElCanvas.toDataURL()
    el.href = dataUrl
}

function onImgInput(ev) {
    loadImageFromInput(ev,renderImg)
}

function loadImageFromInput(ev,onImageReady) {
    document.querySelector('canvas').innerHTML = ''
    const reader = new FileReader()

    reader.onload = function (event) {
        const img = new Image()
        img.onload = () => {
            onImageReady(img)
        }
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height)
}



