import { Tile, TILE_SIZE } from './tile.js'
import { Map } from './map.js'
import { Plant, plantList } from './plant.js'
import { isoDraw } from './isometric.js'

var clockCount = 0;
var ctx; //Main canvas context
var map; //Main map
var interval;

function clientTick(){
    clockCount++;
    map.draw(ctx);
}

function start(){
    ctx = document.getElementById('canvas').getContext('2d');
    map = new Map();
    interval = setInterval(clientTick, 150);
    //console.log(JSON.stringify(_.map(plantList, function(plant, i) {
	//	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	//	plant.tileColor = randomColor;
	//	return plant;
	//})));
}

function getMouseTile(evt) {
    var rect = $('#canvas')[0].getBoundingClientRect();
    return {
        x: ~~((evt.clientX - rect.left) / TILE_SIZE),
        y: ~~((rect.bottom - evt.clientY) / TILE_SIZE)
    };
}

$(document).ready(function(){
    riot.mount("plant-select", {plantList: plantList});
    riot.mount("info-panel");

    //Plant placed
    $("#canvas").click(function(evt) {
        var clickPos = getMouseTile(evt);
		//TODO better way?
		var selected = $(".plant-selected");
		if (selected.length) {
			var plant = _.find(plantList, {"id": parseInt(selected.attr("data")) });
			var newTile = new Tile(clickPos.x, clickPos.y, plant);
			map.addTile(newTile, ctx);
		}
    });

    //Month changed
    $("#month-overlay .btn").click(function(evt) {
        if($("#changeView").prop('checked')) {
            return;
        } else {
            ctx.clearRect(0, 0, 600, 450);
            //TODO replace this selector
            let currentMonth = $(this).find('input').val();
            isoDraw(map, "canvas", currentMonth);
        }
    });

    //Iso/Overhead changed
    $("#changeView").change(function(evt) {
        ctx.clearRect(0, 0, 600, 450);
        if($(this).prop('checked')) {
            interval = setInterval(clientTick, 150);
        } else {
            clearInterval(interval);
            isoDraw(map, "canvas");
        }
    });

    $("#changeUnits").change(function(evt) {
        riot.store.trigger("changeUnits", !evt.target.checked);
    });


    start();
})

