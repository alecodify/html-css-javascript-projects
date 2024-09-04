const createWinBox = (title, mountContent, top, left) => {
    const winBox = new WinBox({
        title: title,
        width: "400px",
        height: "400px",
        top: top,
        left: left,
        mount: mountContent,
        onfocus() {
            this.setBackground("var(--text-color)");
        },
        onblur() {
            this.setBackground("#333");
        },
    });

    winBox.dom.classList.add('wb-body');
    return winBox;
};

document.querySelector("#about").addEventListener("click", () => {
    createWinBox("About Me", document.querySelector("#about-content"), 50, 50);
});

document.querySelector("#contact").addEventListener("click", () => {
    createWinBox("Contact Me", document.querySelector("#contact-content"), 100, 150);
});
