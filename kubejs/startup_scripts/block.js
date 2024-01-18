onEvent('block.registry', event => {
	event.create('wood_casing').material('wood').hardness(1).harvestTool('axe', 1).displayName('Wood Casing')
})
onEvent('block.registry', event => {
	event.create('iron_casing').material('metal').hardness(2).harvestTool('pickaxe', 6).displayName('Iron Casing').requiresTool(True)
})
onEvent('block.registry', event => {
	event.create('moissanite').material('stone').hardness(2).harvestTool('pickaxe', 6).displayName('Moissanite').requiresTool(True)
})
