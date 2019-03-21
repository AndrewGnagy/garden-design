import { TILE_SIZE } from "./tile.js";

export function Map() {
    let self = this;

    //Create x,y grid of tiles
    this.tiles = [];

    this.addTile = function(tile, ctx) {
        //Check for existing tile
        var foundTile = _.findIndex(self.tiles, {'location': tile.location});
        if (foundTile != -1) {
            self.tiles.splice(foundTile, 1, tile);
        }
        tile.draw(ctx);
        self.tiles.push(tile);
    }

    this.draw = function(ctx) {
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
    }
}
