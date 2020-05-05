export const TILE_SIZE = 30;

function point(x, y, canvas){
    canvas.fillRect(x, y, 2, 2);
}

export function Tile(x, y, plant) {
    plant = plant || { tileColor: "#00BB00", tilePattern: "dots", id: -1 };
    let self = this;
    //X,Y Coordinates
    this.location = { x: x, y: y }
    //Light level 0-100
    this.light = 50;
    this.color = plant.tileColor;
    this.pattern = plant.tilePattern;
    this.plantId = plant.id;
    this.stamp = plant.stamp || { x: 1, y: 1 };

    this.draw = function(ctx) {
        for (var x = 0; x < self.stamp.x; x++) {
            for (var y = 0; y < self.stamp.y; y++) {
                var xStart = (self.location.x + x) * TILE_SIZE;
                var yStart = (14 - self.location.y + y) * TILE_SIZE;
                ctx.clearRect(xStart, yStart, TILE_SIZE, TILE_SIZE);
                ctx.strokeStyle = self.color;
                ctx.fillStyle = self.color;
                ctx.strokeRect(xStart, yStart, TILE_SIZE, TILE_SIZE);
                switch (self.pattern) {
                    case "stripes":
                        //Diagonal lines
                        ctx.beginPath();
                        ctx.moveTo(xStart, yStart);
                        ctx.lineTo(xStart + TILE_SIZE, yStart + TILE_SIZE);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(xStart + 5, yStart);
                        ctx.lineTo(xStart + TILE_SIZE, yStart + TILE_SIZE - 5);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(xStart, yStart + 5);
                        ctx.lineTo(xStart + TILE_SIZE - 5, yStart + TILE_SIZE);
                        ctx.stroke();
                        break;
                    case "solid":
                        ctx.fillRect(xStart, yStart, TILE_SIZE, TILE_SIZE);
                        break;
                    case "dots":
                    default:
                        point(xStart + 22, yStart + 2, ctx);
                        point(xStart + 6, yStart + 5, ctx);
                        point(xStart + 12, yStart + 10, ctx);
                        point(xStart + 20, yStart + 17, ctx);
                        point(xStart + 8, yStart + 21, ctx);
                        point(xStart + 17, yStart + 26, ctx);
                        break;
                }
            }
        }
    }
}
