import { TILE_SIZE } from "./tile.js";

let mousePos = { x: 0, y: 0 };
let drag = {};

function getMousePos(canvas, coord) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: coord.x - rect.left,
        y: coord.y - rect.top
    };
}

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
document.addEventListener('mousedown', setDrag, false);
document.addEventListener('mouseup', unsetDrag, false);

function onMouseUpdate(e) {
    mousePos = { x: e.pageX, y: e.pageY }
}

function setDrag(e) {
    drag = mousePos;
}

function unsetDrag(e) {
    drag = {}
}

export function Map() {
    let self = this;

    //Create x,y grid of tiles
    this.tiles = [];
    this.stamp = { x: 1, y: 1 };

    this.setStampSize = function(x, y) {
        self.stamp.x = x;
        self.stamp.y = y;
    }

    this.addTile = function(tile, ctx) {
        //Check for existing tile
        for (var x = 0; x < tile.stamp.x; x++) {
            for (var y = 0; y < tile.stamp.y; y++) {
                var foundTile = _.findIndex(self.tiles, {'location': tile.location});
                if (foundTile != -1) {
                    self.tiles.splice(foundTile, 1);
                }
            }
        }
        tile.draw(ctx);
        self.tiles.push(tile);
    }

    this.draw = function(ctx) {
        ctx.clearRect(0, 0, 600, 450);

        //TODO remove magic numbers
        var brownish = "#90522D"
        for(var x = 0; x < 30; x++) {
            //Vert line
            ctx.beginPath();
            ctx.moveTo(0, x * TILE_SIZE);
            ctx.lineTo(600, x * TILE_SIZE);
            ctx.strokeStyle = brownish;
            ctx.stroke();
            //Horizontal line
            ctx.beginPath();
            ctx.moveTo(x * TILE_SIZE, 0);
            ctx.lineTo(x * TILE_SIZE, 450);
            ctx.strokeStyle = brownish;
            ctx.stroke();
        }

        self.tiles.forEach(function(tile) {
            tile.draw(ctx);
        });

        //Mouse outline
        let mouseXY = getMousePos(ctx.canvas, mousePos);
        let dragXY = getMousePos(ctx.canvas, drag);
        ctx.strokeStyle = "#000000";
        if (dragXY.x) {
            //Click-and-drag maths
            let xMin = Math.floor(Math.min(mouseXY.x, dragXY.x) / TILE_SIZE);
            let yMin = Math.floor(Math.min(mouseXY.y, dragXY.y) / TILE_SIZE);
            let xMax = Math.floor(Math.max(mouseXY.x, dragXY.x) / TILE_SIZE);
            let yMax = Math.floor(Math.max(mouseXY.y, dragXY.y) / TILE_SIZE);
            let xStart = xMin * TILE_SIZE;
            let yStart = (yMax + self.stamp.y) * TILE_SIZE;
            ctx.strokeRect(xStart, yStart, TILE_SIZE * (xMax - xMin + self.stamp.x), TILE_SIZE * -1 * (yMax - yMin + self.stamp.y));
        } else {
            let xStart = Math.floor(mouseXY.x / TILE_SIZE) * TILE_SIZE;
            let yStart = Math.floor(mouseXY.y / TILE_SIZE) * TILE_SIZE;
            ctx.strokeRect(xStart, yStart, TILE_SIZE * self.stamp.x, TILE_SIZE * self.stamp.y);
        }
    }

    riot.store.on("plant", function(plant) {
        if (plant.stamp) {
            self.setStampSize(plant.stamp.x, plant.stamp.y);
        } else {
            self.setStampSize(1, 1);
        }
    });
}
