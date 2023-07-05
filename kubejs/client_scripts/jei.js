onEvent('jei.hide.items', event => {
	//regex
	//items cachés
	event.hide([
		/buildersinvislights:invisilight/,
		/apotheosis:potion_charm/,
		/iceandfire:spawn_egg/,
		/spawn_egg/,
		/mekanism:creative_fluid_tank/,
		/mekanism:creative_chemical_tank/,
		/alchemical_bag/,
		/securitycraft:reinforced/,
		/nickel/,
		/platinum/,
		/invar/,
		/creative/,
		/electrum/,
		/ceramic/,
		/itemfilters/,
		/ftbquests/,
		/ftblibrary/,
		/quark:marble/,
		/quark:polished_marble/,
		/extendedcrafting/,
		/titanium/,
		/tconstruct:crafting_station/,
		/tconstruct:tinker_station/,
		/tconstruct:part_builder/,
		/tconstruct:modifier_worktable/
	])


	event.hide([
		'iceandfire:amythest_ore',
		'iceandfire:amythest_block',
		'iceandfire:amythest_gem',
		'tconstruct:tinkers_bronze_nugget',
		'tconstruct:tinkers_bronze_ingot',
		'tconstruct:tinkers_bronze_block',
		'quark:rope',
		'tconstruct:necrotic_bone',
		'tconstruct:part_builder',
		'tconstruct:tinker_station',
		'tconstruct:crafting_station',
		'chiselsandbits:block_bit',
		'iceandfire:bestiary',
		'rftoolsbase:machine_frame',
		'rftoolsbase:machine_base',
		'industrialforegoing:machine_frame_simple',
		'industrialforegoing:machine_frame_advanced',
		'industrialforegoing:machine_frame_supreme',
		'ars_nouveau:worn_notebook'

	])





})

//ajouter des items a jei
onEvent('jei.add.items', event => {

	event.add([
		
		'minecraft:chest',
		'projecte:white_alchemical_bag',
		'explorercraft:sleeping_bag_white',
		'ceramicbucket:ceramic_bucket',
		'ceramicbucket:unfired_clay_bucket',
		Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:lava",Amount:1000}}'),
		Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}'),
		Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}'),
		'extendedcrafting:basic_auto_table',
		'extendedcrafting:advanced_auto_table',
		'extendedcrafting:elite_auto_table',
		'extendedcrafting:ultimate_auto_table',
		'extendedcrafting:elite_table',
		'extendedcrafting:basic_table',
		'extendedcrafting:advanced_table',
		'extendedcrafting:elite_table',
		'extendedcrafting:ultimate_table',
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:modifier_worktable', '{texture:"minecraft:stone"}')
	])
  })


//ajouter des infos
onEvent('jei.information', event => {
	
	
	event.add('projecte:relay_mk1', [
		'Surrounds the core of the EMC flower. There are several versions of this block.'
	])
	event.add('projecte:relay_mk2', [
		'Surrounds the core of the EMC flower. There are several versions of this block.'
	])
	event.add('projecte:relay_mk3', [
		'Surrounds the core of the EMC flower. There are several versions of this block.'
	])
	event.add('projecte:condenser_mk1', [
		'Heart of the EMC flower, stores the generated items. There are several versions of this block.'
	])
	event.add('projecte:condenser_mk2', [
		'Heart of the EMC flower, stores the generated items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk1', [
		'External part of the EMC flower, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk2', [
		'External part of the EMC flower, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk3', [
		'External part of the EMC flower, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:transmutation_table', [
		'Converts items to EMC to convert EMC into other items.'
	])
	event.add('projecte:dark_matter', [
		'Basic manufacturing item for Project:E.'
	])
	event.add('projecte:aeternalis_fuel', [
		'The ultimate item for fuel.'
	])
	event.add('projecte:watch_of_flowing_time', [
		'Changes the time. Can be used on a pedestal.'
	])



	//infos wire
	//event.add(['immersiveengineering:connector_lv', 'immersiveengineering:connector_lv_relay', 'immersiveengineering:connector_mv', 'immersiveengineering:connector_mv_relay', 'immersiveengineering:connector_hv', 'immersiveengineering:connector_hv_relay'], [
	//	'Transmits energy over long distances.'
	//])
	event.add(['mekanism:basic_universal_cable', 'mekanism:advanced_universal_cable', 'mekanism:elite_universal_cable', 'mekanism:ultimate_universal_cable'], [
		'Transmits energy over short distances.'
	])
	event.add(['mekanism:basic_mechanical_pipe', 'mekanism:advanced_mechanical_pipe', 'mekanism:elite_mechanical_pipe', 'mekanism:ultimate_mechanical_pipe'], [
		'Transmits fluid in large quantities.'
	])
	event.add(['mekanism:basic_pressurized_tube', 'mekanism:advanced_pressurized_tube', 'mekanism:elite_pressurized_tube', 'mekanism:ultimate_pressurized_tube'], [
		'Transmits gases in large quantities.'
	])
	event.add(['mekanism:basic_logistical_transporter', 'mekanism:advanced_logistical_transporter', 'mekanism:elite_logistical_transporter', 'mekanism:ultimate_logistical_transporter'], [
		'Transmits items in large quantities.'
	])


})