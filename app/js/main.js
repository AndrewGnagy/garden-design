import { Tile, TILE_SIZE } from './tile.js'
import { Map } from './map.js'
import { Plant, plantList } from './plant.js'
import { isoDraw } from './isometric.js'

var clockCount = 0;
var ctx; //Main canvas context
var map; //Main map

function clientTick(){
	clockCount++;
}

function start(){
    ctx = document.getElementById('canvas').getContext('2d');
    map = new Map();
    map.draw(ctx);
    isoDraw(map, "isomer");
    //console.log(JSON.stringify(_.map(plantList, function(plant, i) {
	//	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	//	plant.tileColor = randomColor;
	//	return plant;
	//})));
}

function getMouseTile(evt) {
    var ctx = $('#canvas')[0].getContext('2d');
    var rect = $('#canvas')[0].getBoundingClientRect();

    return {
        x: ~~((evt.clientX - rect.left) / TILE_SIZE),
        y: ~~((evt.clientY - rect.top) / TILE_SIZE)
    };
}

$(document).ready(function(){
    riot.mount("plant-select", {plantList: plantList});
    $("#canvas").click(function(evt) {
        var clickPos = getMouseTile(evt);
		//TODO better way?
		var selected = $(".plant-selected");
		if (selected.length) {
			var plant = plantList[parseInt(selected.attr("data"))];
			var newTile = new Tile(clickPos.x, clickPos.y, plant);
			newTile.draw(ctx);
			map.tiles[clickPos.x][clickPos.y] = newTile;
		}
    });

    start();
})

