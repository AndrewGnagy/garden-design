import { Tile } from './tile.js'

export function Map() {
    let self = this;

    //Create x,y grid of tiles
    this.tiles = _.times(20, function(row) {
        return _.times(15, function(col) {
            return new Tile(row, col);
        });
    });

    this.draw = function(ctx) {
        self.tiles.forEach(function(row) {
            row.forEach(function(column) {
                column.draw(ctx);
            });
        })
    }
}
