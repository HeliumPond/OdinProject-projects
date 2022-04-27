const GRID_SIZE = 80; // vh
const grid = document.getElementById('grid');

let gridCount = 16;

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

resetGrid(gridCount);

let color = (tile) => setColor(tile, 'black');

function resetGrid(count) {
    if(!Number.isInteger(count)) return;
    count = Math.max(1, count);
    count = Math.min(count, 100);

    grid.innerHTML = "";

    const tileSize = GRID_SIZE / count + 'vh';

    for(let i = 0; i < count; i++) {
        const row = document.createElement('div');
        row.className = 'container';
        grid.appendChild(row);

        for(let j = 0; j < count; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.height = tile.style.width = tileSize;
            row.appendChild(tile);

            tile.addEventListener('mouseenter',
            () => {
                if(mouseDown){
                    color(tile)
                }
            },
            );
        }
    }
}

function setColor(tile, color) {
    tile.style.backgroundColor = color;
}