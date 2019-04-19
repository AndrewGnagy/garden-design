<info-panel>
    <h2>Properties</h2>
    <div each={ property in properties }>
        <p>{property[0]}: {convertUnit(property[1])}</p>
    </div>
<style>
</style>
<script>

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

</script>
</info-panel>