riot.tag2('info-panel', '<h2>Properties</h2> <div each="{property in properties}"> <p>{property[0]}: {convertUnit(property[1])}</p> </div>', '', '', function(opts) {

this.properties = opts.properties || [];
let self = this;
this.metric = false;

self.convertUnit = function(property) {
    if (typeof property === "number") {
        if (self.metric) {
            return (property * 2.54) + "cm";
        } else {
            return property + "in"
        }
    }
    return property;
}

riot.store.on("changeUnits", function(metric) {
    self.metric = !!metric;
    self.update();
});

riot.store.on("plant", function(plant) {
    self.properties = Object.entries(plant.properties);
    self.update();
});

});
riot.tag2('plant-select', '<div class="plant-select-container"> <div class="plant-panel" each="{plant in plantList}" onclick="{highlight}" data="{plant.id}"> <img src="img/delph.jpg" class="plant-image"> <div class="plant-title media-body"> <h4>{plant.name} <div class="plant-colorbadge" riot-style="background:{plant.tileColor};"></div> </h4> <div class="plant-info">lorem ipsum set dolar werdna aotic</div> </div> </div> </div>', 'plant-select .plant-colorbadge,[data-is="plant-select"] .plant-colorbadge{ display: inline-block; width: 15px; height: 15px; }', '', function(opts) {

this.plantList = opts.plantList;

this.highlight = function(event) {
    $(".plant-selected").removeClass("plant-selected");
    let selected = $(event.currentTarget);
    selected.addClass("plant-selected");
    riot.store.trigger("plant", _.find(this.plantList, {"id": parseInt(selected.attr("data")) }));
}.bind(this)

});
