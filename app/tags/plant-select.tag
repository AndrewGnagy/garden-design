<plant-select>
<div class="plant-select-container">
    <div class="plant-panel" each={plant in plantList } onclick={ highlight } data={ plant.id }>
        <div class="plant-image"></div>
        <div class="plant-title">
			<h4>{plant.name}
				<div class="plant-colorbadge" style="background:{ plant.tileColor };"></div>
			</h4>
		</div>
        <div class="plant-info">lorem ipsum set dolar werdna aotic</div>
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
    console.log(event.item);
    $(".plant-selected").removeClass("plant-selected");
    $(event.currentTarget).addClass("plant-selected");
}

</script>
</plant-select>
