import { Plant } from "./plant.js";

let Point  = Isomer.Point;
let Path   = Isomer.Path;
let Shape  = Isomer.Shape;
let Vector = Isomer.Vector;
let Color  = Isomer.Color;

//Units
let UNIT = .3;
let SEED_UNIT = UNIT/5;
let TILES_X = 30;
let TILES_Y = 20;

//Colors
let green = new Color(50, 160, 60);
let red = new Color(160, 50, 60);
let blue = new Color(50, 60, 160);
let yellow = new Color(180, 180, 20);
let white = new Color(180, 180, 180);
let brown = new Color(139, 69, 19);
let lightBrown = new Color(182, 141, 105);

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r: 0, g: 0, b: 0};
}

function midpoint(x, y, z) {
    z = z || 0;
    let MIDWAY = (UNIT / 2) - SEED_UNIT;
    return Point(x * UNIT + MIDWAY, y * UNIT + MIDWAY, z);
}

function drawGrid(iso) {
    //Ground
    iso.add(new Path([
        new Point(0, 0, 0),
        new Point(TILES_X*UNIT, 0, 0),
        new Point(TILES_X*UNIT, TILES_Y*UNIT, 0),
        new Point(0, TILES_Y*UNIT, 0),
        new Point(0, 0, 0)
    ]), lightBrown);
    //X-lines
    for (let x = 0; x < 30; x++) {
        iso.add(new Path([
            new Point(x*UNIT, 0, 0),
            new Point(x*UNIT, TILES_Y*UNIT, 0),
            new Point(x*UNIT, 0, 0)
        ]), blue);
    }
    //Y-lines
    for (let y = 0; y < 20; y++) {
        iso.add(new Path([
            new Point(0, y*UNIT, 0),
            new Point(TILES_X*UNIT, y*UNIT, 0),
            new Point(0, y*UNIT, 0)
        ]), blue);
    }
}

function drawSeedlings(iso, x, y, color) {
    let drawColor = color || green;
    let START_X = x * UNIT + UNIT / 2;
    let START_Y = y * UNIT + UNIT / 2;
    iso.add(Shape.Pyramid(new Point(x * UNIT, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(x * UNIT, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(START_X, START_Y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
    iso.add(Shape.Pyramid(new Point(START_X, y * UNIT), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), drawColor);
}

function drawSeedling(iso, x, y) {
    iso.add(Shape.Pyramid(midpoint(x, y), SEED_UNIT, SEED_UNIT, 2 * SEED_UNIT), green);
}

function drawBorder(iso, x, y) {
    let START_X = x * UNIT;
    let START_Y = y * UNIT;
    iso.add(Shape.Prism(new Point(START_X, START_Y, 0), UNIT, UNIT, UNIT / 2), brown);
}

function drawRock(iso, x, y, scale) {
    let ROCK_UNIT = (UNIT / 5) * scale;
    let START_X = x * UNIT + ROCK_UNIT;
    let START_Y = y * UNIT + ROCK_UNIT;
    iso.add([
        Shape.Prism(new Point(START_X, START_Y, 0), ROCK_UNIT * (Math.random() + 3), ROCK_UNIT * (Math.random() + 3), ROCK_UNIT * 2),
        Shape.Prism(new Point(START_X - ROCK_UNIT, START_Y + ROCK_UNIT, 0), ROCK_UNIT, ROCK_UNIT * (Math.random() * 1.5 + 1), ROCK_UNIT),
        Shape.Prism(new Point(START_X + ROCK_UNIT, START_Y - ROCK_UNIT, 0), ROCK_UNIT * (Math.random() * 1.5 + 1), ROCK_UNIT, ROCK_UNIT * 1.5)
    ]);
}

function drawMarker(iso, x, y, color) {
    let drawColor = color || green;
    let START_X = x * UNIT + UNIT / 2;
    let START_Y = y * UNIT + UNIT / 2;
    iso.add(Shape.Prism(new Point(START_X, START_Y, 0), UNIT / 10, UNIT / 10, UNIT / 2), drawColor);
    iso.add(Shape.Prism(new Point(START_X, START_Y, UNIT / 2), UNIT / 2, UNIT / 10, UNIT / 2), drawColor);
}

function drawFlower(iso, x, y, height) {
    //Stem
    iso.add(Shape.Cylinder(midpoint(x, y), SEED_UNIT / 2, 12, UNIT * height), green);
    //Squarish flower
    iso.add(Shape.Pyramid(midpoint(x, y, UNIT * height), UNIT / 2, UNIT / 2, -1 * (UNIT / 2)), red);
    let MIDWAY = (UNIT / 2) - SEED_UNIT;
    let X_OFFSET = x * UNIT + MIDWAY + UNIT / 2;
    let Y_OFFSET = y * UNIT + MIDWAY + UNIT / 2;
    iso.add(new Path([
        new Point(x * UNIT + MIDWAY, y * UNIT + MIDWAY, UNIT * height),
        new Point(x * UNIT + MIDWAY, Y_OFFSET, UNIT * height),
        new Point(X_OFFSET, Y_OFFSET, UNIT * height),
        new Point(X_OFFSET, y * UNIT + MIDWAY, UNIT * height)
    ]), red);
}

function drawVine(iso, x, y, height) {
    //height 1-5
    let iters = Math.floor(height * 4);
    let TREL = UNIT / 7;
    let chunk = TREL * 2;
    let runningHeight = 0;
    let START_X = ((x + 1) * UNIT) - 2 * TREL;
    let START_Y = ((y + .5) * UNIT);
    let slide = START_Y;
    let slide2 = START_Y;
    let diameter = TREL * .2 + TREL * .3 * (iters * .05);
    for(let i = 0; i < iters; i++) {
        iso.add(Shape.Cylinder(new Point(START_X, slide, runningHeight), diameter, 12, chunk), green);
        iso.add(Shape.Cylinder(new Point(START_X, slide2, runningHeight), diameter, 12, chunk), green);
        runningHeight += chunk;
        chunk = chunk / 1.1;
        let randSkew = Math.random() / 1.5 * ((Math.random() > .5) ? 1 : -1);
        slide += Math.min(randSkew + (Math.random() / 2.5), 1) * TREL;
        slide2 += Math.max(randSkew - (Math.random() / 2.5), -1) * TREL;
        diameter = diameter / 1.02;
    }
}

function drawGroundCover(iso, x, y, height) {
    let START_X = x * UNIT;
    let START_Y = y * UNIT;
    iso.add(Shape.Prism(new Point(START_X, START_Y, 0), UNIT, UNIT, height * UNIT), green);
    for (let i = 0, x1 = 2, y1 = 2; i < 9; i++) {
        iso.add(Shape.Pyramid(new Point(START_X + (x1 * UNIT/3), START_Y + (y1 * UNIT/3), height * UNIT), UNIT/3, UNIT/3, UNIT/3), green);
        if(x1 == 0) {
            x1 = 2;
            y1--;
        } else {
            x1--;
        }
        //Flowers
        if(i ==4 || i == 6 || i == 3) {
            let point = new Point(START_X + UNIT * .25 + x1 * UNIT/3, START_Y + UNIT * .1 + y1 * UNIT/3, height * UNIT);
            iso.add(Shape.Cylinder(point, .03 * UNIT, 5, .4 * UNIT), white);
        }
    }
}

function drawTrellis(iso, x, y) {
    let TREL = UNIT / 7;
    let START_X = ((x + 1) * UNIT) - TREL;
    let START_Y = (y * UNIT) + (3 * TREL);
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

function drawSunflower(iso, x, y, height) {
    let START_X = x * UNIT + UNIT / 2;
    let START_Y = y * UNIT + UNIT / 2;
    let chunk = 2 * UNIT;
    let runningHeight = 0;
    let slide = 0;
    let slideSkew = .03;
    let diameter = .2 + .3 * (height / 20);
    for(let i = 0; i < height; i++) {
        iso.add(Shape.Cylinder(new Point(START_X, START_Y + slide, runningHeight), diameter * UNIT, 12, chunk), green);
        runningHeight += chunk;
        chunk = chunk / 1.1;
        slideSkew = slideSkew * 1.3;
        slide -= slideSkew;
        diameter = diameter / 1.02;
    }
    let half = 0.3 * UNIT;
    let full = 0.6 * UNIT;
    iso.add([Shape.Prism(new Point(START_X + 0.2 * UNIT, START_Y + slide, runningHeight - half), full, half, half),
    Shape.Prism(new Point(START_X + UNIT, START_Y + slide, runningHeight + .2 * UNIT), half, half, full),
    Shape.Prism(new Point(START_X, START_Y + slide, runningHeight), UNIT, half, UNIT),
    Shape.Prism(new Point(START_X - half, START_Y + slide, runningHeight + .2 * UNIT), half, half, full),
    Shape.Prism(new Point(START_X + 0.2 * UNIT, START_Y + slide, runningHeight + UNIT), full, half, half)], yellow);
}

function scaleHeight(month, germMonth, fullHeight) {
    //UNIT ~= 12 inches
    //Assume linear growth between germination and full height (3 months of growth)
    return Math.min((Math.max(month.dayOfYear() - germMonth.dayOfYear(), 10) / 90), 1) * (fullHeight / 12);
}

export function isoDraw(map, canvasId, month) {
    let iso = new Isomer(document.getElementById(canvasId));

    drawGrid(iso);
    //drawSeedlings(iso, 0, 0);
    //drawSeedling(iso, 0, 1);
    //drawFlower(iso, 3, 3, 2);
    //drawRock(iso, 7, 8);
    //drawTrellis(iso, 7, 8);
    //drawVine(iso, 7, 8, 1);
    //drawGroundCover(iso, 1, 2, .4);

    //TODO less janky selector
    month = month || $('#month-overlay .active > input').val();
    let currentMonth = moment({year: 2020, month: month});
    let growZone = 6;

    let sortedTiles = _.sortBy(map.tiles, [(p) => { return p.location.x }, (p) => { return p.location.y }]);
    sortedTiles.reverse();
    sortedTiles.forEach(function(tile) {
        let rgb = hexToRgb(tile.color);
        let plant = new Plant(tile.plantId);
        let growInfo = plant.getGrowInfo(growZone);
        let x = tile.location.x;
        let y = tile.location.y;

        //Landscape items
        if (plant.plantItem.class == "landscape") {
            switch (plant.plantItem.draw) {
                case "border":
                    drawBorder(iso, x, y);
                    break;
                default:
                    //TODO for testing only. Replace with real logic for >1 tile items
                    let isBigRock = tile.plantId == 1;
                    drawRock(iso, x, y, isBigRock ? 2 : 1);
            }
            return;
        }
        //Unplanted Marker
        if (currentMonth.isBefore(growInfo.germ)) {
            drawMarker(iso, x, y, new Color(rgb.r, rgb.g, rgb.b));
        //Just germinated (sprouts)
        } else if (currentMonth.isBetween(growInfo.germ, growInfo.germ.add({days: 10}))) {
            drawSeedlings(iso, x, y);
        //Plants
        } else {
            switch (plant.plantItem.draw) {
                case "groundCover":
                    drawGroundCover(iso, x, y, scaleHeight(currentMonth, growInfo.germ, plant.plantItem.properties.height));
                    break;
                case "vine":
                    drawVine(iso, x, y, scaleHeight(currentMonth, growInfo.germ, plant.plantItem.properties.height));
                    break;
                case "sunflower":
                    drawSunflower(iso, x, y, scaleHeight(currentMonth, growInfo.germ, plant.plantItem.properties.height));
                    break;
                default:
                    drawFlower(iso, x, y, scaleHeight(currentMonth, growInfo.germ, plant.plantItem.properties.height));
            }
        }
    });
}
