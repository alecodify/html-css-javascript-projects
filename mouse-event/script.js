const container = document.querySelector('.container');

window.addEventListener('mousemove', (event) => {
    container.innerHTML = `
        <div class='mouse-event'>${event.clientX} <h4>Mouse X position(px)</h4></div>
        <div class='mouse-event'>${event.clientY} <h4>Mouse Y position(px)</h4></div>
    `
})