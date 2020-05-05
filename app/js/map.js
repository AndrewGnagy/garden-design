import { TILE_SIZE } from "./tile.js";

let mousePos = { x: 0, y: 0 };

function getMousePos(canvas) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: mousePos.x - rect.left,
        y: mousePos.y - rect.top
    };
}

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    mousePos = { x: e.pageX, y: e.pageY }
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
        let mouseXY = getMousePos(ctx.canvas);
        let xStart = Math.floor(mouseXY.x / TILE_SIZE) * TILE_SIZE;
        let yStart = Math.floor(mouseXY.y / TILE_SIZE) * TILE_SIZE;
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(xStart, yStart, TILE_SIZE * self.stamp.x, TILE_SIZE * self.stamp.y);
    }

    riot.store.on("plant", function(plant) {
        if (plant.stamp) {
            self.setStampSize(plant.stamp.x, plant.stamp.y);
        } else {
            self.setStampSize(1, 1);
        }
    });
}
