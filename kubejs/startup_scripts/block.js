onEvent('block.registry', event => {
	
	event.create('wood_casing')
	.material('wood')
	.hardness(1)
	.harvestTool('axe', 1)
	.displayName('Wood Casing')

	event.create('iron_casing')
	.material('metal')
	.hardness(2)
	.harvestTool('pickaxe', 2)
	.displayName('Iron Casing')

})