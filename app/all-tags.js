riot.tag2('plant-select', '<div class="plant-select-container"> <div class="plant-panel" each="{plant in plantList}" onclick="{highlight}" data="{plant.id}"> <div class="plant-image"></div> <div class="plant-title"> <h4>{plant.name} <div class="plant-colorbadge" riot-style="background:{plant.tileColor};"></div> </h4> </div> <div class="plant-info">lorem ipsum set dolar werdna aotic</div> </div> </div>', 'plant-select .plant-colorbadge,[data-is="plant-select"] .plant-colorbadge{ display: inline-block; width: 15px; height: 15px; }', '', function(opts) {

this.plantList = opts.plantList;

this.highlight = function(event) {
    console.log(event.item);
    $(".plant-selected").removeClass("plant-selected");
    $(event.currentTarget).addClass("plant-selected");
}.bind(this)

});
