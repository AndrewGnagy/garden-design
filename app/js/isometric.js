var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

//Units
var UNIT = .5;
var SEED_UNIT = UNIT/5;
var TILES_X = 30;
var TILES_Y = 20;

//Colors
var green = new Color(50, 160, 60);
var red = new Color(160, 50, 60);
var blue = new Color(50, 60, 160);

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r: 0, g: 0, b: 0};
}

function midpoint(x, y, z) {
    z = z || 0;
    var MIDWAY = (UNIT / 2) - SEED_UNIT;
    return Point(x * UNIT + MIDWAY, y * UNIT + MIDWAY, z);
}

function drawGrid(iso) {
    for (var x = 0; x < 30; x++) {
        iso.add(new Path([
            new Point(x*UNIT, 0, 0),
            new Point(x*UNIT, TILES_Y*UNIT, 0),
            new Point(x*UNIT, 0, 0)
        ]), blue);
    }
    for (var y = 0; y < 20; y++) {
        iso.add(new Path([
            new Point(0, y*UNIT, 0),
            new Point(TILES_X*UNIT, y*UNIT, 0),
            new Point(0, y*UNIT, 0)
        ]), blue);
    }
}

function drawSeedlings(iso, x, y, color) {
    var drawColor = color || green;
    var START_X = x * UNIT + UNIT / 2;
    var START_Y = y * UNIT + UNIT / 2;
    iso.add(Shape.Pyramid(Point(x * UNIT, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(Point(x * UNIT, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(Point(START_X, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(Point(START_X, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
}

function drawSeedling(iso, x, y) {
    iso.add(Shape.Pyramid(midpoint(x, y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), green);
}

function drawFlower(iso, x, y, height) {
    //Stem
    iso.add(Shape.Cylinder(midpoint(x, y), SEED_UNIT / 2, 12, UNIT * height), green);
    //Squarish flower
    iso.add(Shape.Pyramid(midpoint(x, y, UNIT * height), UNIT / 2, UNIT / 2, -1 * (UNIT / 2)), red);
    var MIDWAY = (UNIT / 2) - SEED_UNIT;
    var X_OFFSET = x * UNIT + MIDWAY + UNIT / 2;
    var Y_OFFSET = y * UNIT + MIDWAY + UNIT / 2;
    iso.add(new Path([
        Point(x * UNIT + MIDWAY, y * UNIT + MIDWAY, UNIT * height),
        Point(x * UNIT + MIDWAY, Y_OFFSET, UNIT * height),
        Point(X_OFFSET, Y_OFFSET, UNIT * height),
        Point(X_OFFSET, y * UNIT + MIDWAY, UNIT * height)
    ]), red);
}

export function isoDraw(map, canvasId) {
    var iso = new Isomer(document.getElementById(canvasId));

    drawGrid(iso);
    drawSeedlings(iso, 0, 0);
    drawSeedling(iso, 0, 1);
    drawFlower(iso, 3, 3, 2);

    map.tiles.forEach(function(tile) {
        var rgb = hexToRgb(tile.color);
        drawSeedlings(iso, tile.location.x, tile.location.y, new Color(rgb.r, rgb.g, rgb.b));
    });
}
