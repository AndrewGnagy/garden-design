import { Plant } from "./plant.js";

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
var white = new Color(180, 180, 180);

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
    iso.add(Shape.Pyramid(new Point(x * UNIT, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(x * UNIT, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(START_X, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(START_X, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
}

function drawSeedling(iso, x, y) {
    iso.add(Shape.Pyramid(midpoint(x, y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), green);
}

function drawRock(iso, x, y, scale) {
    var ROCK_UNIT = (UNIT / 5) * scale;
    var START_X = x * UNIT + ROCK_UNIT;
    var START_Y = y * UNIT + ROCK_UNIT;
    iso.add([
        Shape.Prism(new Point(START_X, START_Y, 0), ROCK_UNIT * (Math.random() + 3), ROCK_UNIT * (Math.random() + 3), ROCK_UNIT * 2),
        Shape.Prism(new Point(START_X - ROCK_UNIT, START_Y + ROCK_UNIT, 0), ROCK_UNIT, ROCK_UNIT * (Math.random() * 1.5 + 1), ROCK_UNIT),
        Shape.Prism(new Point(START_X + ROCK_UNIT, START_Y - ROCK_UNIT, 0), ROCK_UNIT * (Math.random() * 1.5 + 1), ROCK_UNIT, ROCK_UNIT * 1.5)
    ]);
}

function drawMarker(iso, x, y, color) {
    var drawColor = color || green;
    var START_X = x * UNIT + UNIT / 2;
    var START_Y = y * UNIT + UNIT / 2;
    iso.add(Shape.Prism(new Point(START_X, START_Y, 0), UNIT / 10, UNIT / 10, UNIT / 2), drawColor);
    iso.add(Shape.Prism(new Point(START_X, START_Y, UNIT / 2), UNIT / 2, UNIT / 10, UNIT / 2), drawColor);
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
        new Point(x * UNIT + MIDWAY, y * UNIT + MIDWAY, UNIT * height),
        new Point(x * UNIT + MIDWAY, Y_OFFSET, UNIT * height),
        new Point(X_OFFSET, Y_OFFSET, UNIT * height),
        new Point(X_OFFSET, y * UNIT + MIDWAY, UNIT * height)
    ]), red);
}

function drawVine(iso, x, y, height) {
    //height 1-5
    var iters = Math.floor(height * 4);
    var TREL = UNIT / 7;
    var chunk = TREL * 2;
    var runningHeight = 0;
    var START_X = ((x + 1) * UNIT) - 2 * TREL;
    var START_Y = ((y + 1) * UNIT);
    var slide = START_Y;
    var slide2 = START_Y;
    var diameter = TREL * .2 + TREL * .3 * (iters * .05);
    for(var i = 0; i < iters; i++) {
        iso.add(Shape.Cylinder(new Point(START_X, slide, runningHeight), diameter, 12, chunk), green);
        iso.add(Shape.Cylinder(new Point(START_X, slide2, runningHeight), diameter, 12, chunk), green);
        runningHeight += chunk;
        chunk = chunk / 1.1;
        var randSkew = Math.random() / 1.5 * ((Math.random() > .5) ? 1 : -1);
        slide += Math.min(randSkew + (Math.random() / 2.5), 1) * TREL;
        slide2 += Math.max(randSkew - (Math.random() / 2.5), -1) * TREL;
        diameter = diameter / 1.02;
    }
}

function drawGroundCover(iso, x, y, height) {
    var START_X = x * UNIT;
    var START_Y = y * UNIT;
    iso.add(Shape.Prism(new Point(START_X, START_Y, 0), UNIT, UNIT, height * UNIT), green);
    for (var i = 0, x1 = 2, y1 = 2; i < 9; i++) {
        iso.add(Shape.Pyramid(new Point(START_X + (x1 * UNIT/3), START_Y + (y1 * UNIT/3), height * UNIT), UNIT/3, UNIT/3, UNIT/3), green);
        if(x1 == 0) {
            x1 = 2;
            y1--;
        } else {
            x1--;
        }
        //Flowers
        if(i ==4 || i == 6 || i == 3) {
            var point = new Point(START_X + UNIT * .25 + x1 * UNIT/3, START_Y + UNIT * .1 + y1 * UNIT/3, height * UNIT);
            iso.add(Shape.Cylinder(point, .03 * UNIT, 5, .4 * UNIT), white);
        }
    }
}

function drawTrellis(iso, x, y) {
    var TREL = UNIT / 7;
    var START_X = ((x + 1) * UNIT) - TREL;
    var START_Y = (y * UNIT) + (3 * TREL);
    iso.add([
        Shape.Prism(new Point(START_X, START_Y + 9 * TREL, 14 * TREL), TREL, 2 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + 9 * TREL, 8 * TREL), TREL, 2 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + 8 * TREL, 0), TREL, TREL, 20 * TREL),
        Shape.Prism(new Point(START_X, START_Y + 5 * TREL, 14 * TREL), TREL, 3 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + 5 * TREL, 8 * TREL), TREL, 3 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + 4 * TREL, 0), TREL, TREL, 20 * TREL),
        Shape.Prism(new Point(START_X, START_Y + TREL, 14 * TREL), TREL, 3 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + TREL, 8 * TREL), TREL, 3 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + 0, 0), TREL, TREL, 20 * TREL),
        Shape.Prism(new Point(START_X, START_Y + -2 * TREL, 14 * TREL), TREL, 2 * TREL, TREL),
        Shape.Prism(new Point(START_X, START_Y + -2 * TREL, 8 * TREL), TREL, 2 * TREL, TREL)
    ]);
}

export function isoDraw(map, canvasId, month) {
    var iso = new Isomer(document.getElementById(canvasId));

    drawGrid(iso);
    //drawSeedlings(iso, 0, 0);
    //drawSeedling(iso, 0, 1);
    //drawFlower(iso, 3, 3, 2);
    //drawRock(iso, 7, 8);
    //drawTrellis(iso, 7, 8);
    drawVine(iso, 7, 8, 1);
    drawGroundCover(iso, 1, 2, .4);

    //TODO less janky selector
    let currentMonth = month || $('#month-overlay .active > input').val();
    let growZone = 6;

    //TODO insure draw order is back-to-front
    map.tiles.forEach(function(tile) {
        var rgb = hexToRgb(tile.color);
        let plant = new Plant(tile.plantId);
        let growInfo = plant.getGrowInfo(growZone);
        if (plant.plantItem.class == "landscape") {
            //TODO for testing only. Replace with real logic for >1 tile items
            let isBigRock = tile.plantId == 1;
            drawRock(iso, tile.location.x, tile.location.y, isBigRock ? 2 : 1);
            return;
        }
        //Unplanted Marker
        if (currentMonth < growInfo.germ) {
            drawMarker(iso, tile.location.x, tile.location.y, new Color(rgb.r, rgb.g, rgb.b));
        //Germinated + 1 month
        } else if (currentMonth > growInfo.germ) {
            //TODO actual height calculation based on plant size!
            let height = currentMonth - growInfo.germ;
            drawFlower(iso, tile.location.x, tile.location.y, height);
        //Just germinated
        } else {
            drawSeedlings(iso, tile.location.x, tile.location.y);
        }
    });
}
