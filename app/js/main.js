import { Tile } from './tile.js'
import { Map } from './map.js'
import { Plant, plantList } from './plant.js'

var clockCount = 0;
var ctx; //Main canvas context

function clientTick(){
	clockCount++;
}

function start(){
    ctx = document.getElementById('canvas').getContext('2d');
    var map = new Map();
    map.draw(ctx);
}

$(document).ready(function(){
    start();
    riot.mount("plant-select", {plantList: plantList});
})
