onEvent('block.registry', event => {
	
	event.create('wood_casing')
	.material('wood')
	.hardness(1)
	.harvestTool('axe', 1)
	.displayName('Wood Casing')

})