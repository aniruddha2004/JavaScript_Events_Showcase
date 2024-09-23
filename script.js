function clickEvent() {
    alert('Button Clicked!');
    document.getElementById('output').innerHTML = "Click Event"
}

function mouseOverEvent() {
    document.getElementById('hover-box').style.backgroundColor = 'red';
    document.getElementById('output').innerHTML = "Mouse Over Event"
}

function mouseOutEvent() {
    document.getElementById('hover-box').style.backgroundColor = 'blue';
    document.getElementById('output').innerHTML = "Mouse Out Event"
}

function mouseDownEvent() {
    document.getElementById('hover-box').style.backgroundColor = 'violet';
    document.getElementById('output').innerHTML = "Mouse Down Event"
}

function mouseUpEvent() {
    document.getElementById('hover-box').style.backgroundColor = 'green';
    document.getElementById('output').innerHTML = "Mouse Up Event"
}

function mouseMoveEvent() {
    document.getElementById('click-btn').style.backgroundColor = 'purple';
    document.getElementById('output').innerHTML = "Mouse Move Event"
}

function dblClickEvent() {
    alert('Button Double Clicked!');
    document.getElementById('output').innerHTML = "Double Click Event"
}

function keyDownEvent() {
    console.log('Key Down Event Triggered');
    document.getElementById('output').innerHTML = "Key Down Event"
}

function keyUpEvent() {
    console.log('Key Up Event Triggered');
    document.getElementById('output').innerHTML = "Key Up Event"
}

function keyPressEvent() {
    console.log('Key Press Event Triggered');
    document.getElementById('output').innerHTML = "Key Press Event"
}

function focusEvent() {
    console.log('Input Focused');
    document.getElementById('output').innerHTML = "Focus Event"
}

function blurEvent() {
    console.log('Input Blurred');
    document.getElementById('output').innerHTML = "Blur Event"
}

function changeEvent() {
    console.log('Input Changed');
    document.getElementById('output').innerHTML = "Change Event"
}

function inputEvent() {
    console.log('Input Given');
    document.getElementById('output').innerHTML = "Input Event"
}

function formSubmitEvent(event) {
    event.preventDefault();
    alert('Form Submitted');
    document.getElementById('output').innerHTML = "Submit Event"
}

// Media Events
function playEvent() {
    console.log('Video Playing');
    document.getElementById('output').innerHTML = "Play Event"
}

function pauseEvent() {
    console.log('Video Paused');
    document.getElementById('output').innerHTML = "Pause Event"
}

function volumeChangeEvent() {
    console.log('Volume Changed');
    document.getElementById('output').innerHTML = "Volume Change Event"
}

function endedEvent() {
    console.log('Video Ended');
    document.getElementById('output').innerHTML = "End Event"
}

// Clipboard Events
function copyEvent() {
    console.log('Text Copied');
    document.getElementById('output').innerHTML = "Copy Event"
}

function cutEvent() {
    console.log('Text Cut');
    document.getElementById('output').innerHTML = "Cut Event"
}

function pasteEvent() {
    console.log('Text Pasted');
    document.getElementById('output').innerHTML = "Paste Event"
}

// Drag & Drop Events
function dragEvent() {
    console.log('Dragging...');
    document.getElementById('output').innerHTML = "Drag Event"
}

function dragEndEvent() {
    console.log('Drag Ended');
    document.getElementById('output').innerHTML = "Drag End Event"
}

function dragOverEvent(event) {
    event.preventDefault();
    console.log('Drag Over');
    document.getElementById('output').innerHTML = "Drag Over Event"
}

function dropEvent(event) {
    event.preventDefault();
    console.log('Dropped');
    document.getElementById('output').innerHTML = "Drop Event"
}

// Window Events
function scrollEvent() {
    console.log('Scrolling');
    document.getElementById('output').innerHTML = "Scroll Event"
}

function appLoaded() {
    console.log('App Loaded');
    document.getElementById('output').innerHTML = "Load Event"
}

function resizeEvent() {
    console.log('Resized');
    document.getElementById('output').innerHTML = "Resize Event"
}

function appUnloaded() {
    console.log('App Unloaded');
    document.getElementById('output').innerHTML = "Unload Event"
}
