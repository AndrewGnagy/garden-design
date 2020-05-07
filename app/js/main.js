import { Tile, TILE_SIZE } from './tile.js'
import { Map } from './map.js'
import { Plant, plantList } from './plant.js'
import { isoDraw } from './isometric.js'

let ctx; //Main canvas context
let map; //Main map
let interval;
let mouseDown;

function clientTick(){
    map.draw(ctx);
}

function start(){
    ctx = document.getElementById('canvas').getContext('2d');
    map = new Map();
    interval = setInterval(clientTick, 150);
    //console.log(JSON.stringify(_.map(plantList, function(plant, i) {
	//	let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	//	plant.tileColor = randomColor;
	//	return plant;
	//})));
}

function getMouseTile(evt) {
    let rect = $('#canvas')[0].getBoundingClientRect();
    return {
        x: ~~((evt.clientX - rect.left) / TILE_SIZE),
        y: ~~((rect.bottom - evt.clientY) / TILE_SIZE)
    };
}

$(document).ready(function(){
    riot.mount("plant-select", {plantList: plantList});
    riot.mount("info-panel");

    //Plant placed (or drag)
    $("#canvas").mousedown(function(evt) {
        mouseDown = getMouseTile(evt);
    }).mouseup(function(evt) {
        //TODO better way?
		let selected = $(".plant-selected");
		if (selected.length) {
            let mouseUp = getMouseTile(evt);
            let xStart = Math.min(mouseDown.x, mouseUp.x);
            let xEnd = Math.max(mouseDown.x, mouseUp.x);
            let yStart = Math.min(mouseDown.y, mouseUp.y);
            let yEnd = Math.max(mouseDown.y, mouseUp.y);
            for(let i = xStart; i <= xEnd; i++) {
                for(let j = yStart; j <= yEnd; j++) {
                    let plant = _.find(plantList, {"id": parseInt(selected.attr("data")) });
                    let newTile = new Tile(i, j, plant);
                    map.addTile(newTile, ctx);
                }
            }
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

