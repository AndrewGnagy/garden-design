export const TILE_SIZE = 30;

function point(x, y, canvas){
  canvas.fillRect(x,y,2,2);
}

export function Tile(x, y, plant) {
    plant = plant || { tileColor: "#00BB00", tilePattern: "dots" };
    let self = this;
    //X,Y Coordinates
    this.location = { x: x, y: y }
    //Light level 0-100
    this.light = 50;
    this.color = plant.tileColor;
    this.pattern = plant.tilePattern;

    this.draw = function(ctx) {
        var xStart = self.location.x * TILE_SIZE
        var yStart = self.location.y * TILE_SIZE
        ctx.clearRect(xStart, yStart, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = self.color;
        ctx.fillStyle = self.color;
        ctx.strokeRect(xStart, yStart, TILE_SIZE, TILE_SIZE);
        switch (this.pattern) {
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
