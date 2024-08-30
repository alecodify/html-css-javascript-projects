const kits = ['crash', 'kick', 'snare', 'tom']

const container = document.querySelector('.container');

kits.forEach((kit) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = kit;
    btn.style.backgroundImage = `url(images/${kit}.png)`;
    container.append(btn);

    const audio = document.createElement('audio');
    audio.src = `sounds/${kit}.mp3`;
    container.appendChild(audio);

    btn.addEventListener('click', () => {
        audio.play();
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === kit.slice(0,1)) {
            audio.play();

            btn.style.transform = 'scale(.9)';

            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 1000);
        }
    })
})