<plant-select>
<div class="plant-select-container">
    <div class="plant-panel" each={ plant in plantList } onclick={ highlight } data={ plant.id }>
        <img src="img/delph.jpg" class="plant-image"/>
        <div class="plant-title media-body">
			<h4>{plant.name}
				<div class="plant-colorbadge" style="background:{ plant.tileColor };"></div>
			</h4>
            <div class="plant-info">lorem ipsum set dolar werdna aotic</div>
		</div>
    </div>
</div>
<style>
.plant-colorbadge
{
	display: inline-block;
	width: 15px;
	height: 15px;
}
</style>
<script>

this.plantList = opts.plantList;

highlight(event) {
    $(".plant-selected").removeClass("plant-selected");
    let selected = $(event.currentTarget);
    selected.addClass("plant-selected");
    riot.store.trigger("plant", _.find(this.plantList, {"id": parseInt(selected.attr("data")) }));
}

</script>
</plant-select>
