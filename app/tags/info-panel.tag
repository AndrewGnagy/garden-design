<info-panel>
    <h2>Properties</h2>
    <div each={ property in properties }>
        <p>{property[0]}: {property[1]}</p>
    </div>
<style>
</style>
<script>

this.properties = opts.properties || [];
let self = this;

riot.store.on("plant", function(plant) {
    self.properties = Object.entries(plant.properties);
    self.update();
});

</script>
</info-panel>