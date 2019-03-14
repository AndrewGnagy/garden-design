var TILE_SIZE = 30

export function Tile(x, y, plant) {
    plant = plant || { tileColor: "#00FF00", tilePattern: "dots" };
    let self = this;
    //X,Y Coordinates
    this.location = { x: x, y: y }
    //Light level 0-100
    this.light = 50;
    this.color = plant.tileColor;
    this.pattern = plant.tilePattern;

    this.draw = function(ctx) {
        console.log("drawing");
        ctx.strokeStyle = self.color;
        ctx.strokeRect(self.location.x * TILE_SIZE, self.location.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
}
