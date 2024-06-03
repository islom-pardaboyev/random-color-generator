const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = '';
    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `
        <div class="rect-box" style="background-color: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>
            `
        color.addEventListener('click', () => copyColor(color, randomHex))
        container.appendChild(color);
    }
}

generatePalette()

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerHTML = 'Copied';
        setTimeout(() => {
            colorElement.innerHTML = hexVal;
        }, 1000);
    }).catch(() => alert('Failed to copy the color code!'))
}

refreshBtn.addEventListener('click', generatePalette);