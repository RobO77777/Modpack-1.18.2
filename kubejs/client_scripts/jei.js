onEvent('jei.hide.items', event => {
	//regex
	//items cachés
	event.hide([
		//apotheosis
		/apotheosis:potion_charm/,
		/alchemical_bag/,

		//ice and fire
		/iceandfire:spawn_egg/,

		//mekanism
		/mekanism:creative_fluid_tank/,
		/mekanism:creative_chemical_tank/,

		//tinker
		/tconstruct:crafting_station/,
		/tconstruct:tinker_station/,
		/tconstruct:part_builder/,
		/tconstruct:modifier_worktable/,

		//vanilla
		/spawn_egg/,
		/minecraft:enchanted_book/,

		//security craft
		/securitycraft:reinforced/,

		//ceramic
		/ceramic/,

		//librairies
		/itemfilters/,
		/ftbquests/,
		/ftblibrary/,
		/titanium/,
		/guide/,
		/patchouli/,
		/chancecubes/,

		//extended crafting
		/extendedcrafting/,

		//industrial
		/industrialforegoing:laser_lens/


	])


	event.hide([

		//iceandfire
		'iceandfire:amythest_ore',
		'iceandfire:amythest_block',
		'iceandfire:amythest_gem',
		'iceandfire:copper_ore',
		'iceandfire:copper_ingot',
		'iceandfire:copper_nugget',
		'iceandfire:copper_block',

		//tinker
		'tconstruct:copper_nugget',
		'tconstruct:tinkers_bronze_nugget',
		'tconstruct:tinkers_bronze_ingot',
		'tconstruct:tinkers_bronze_block',
		'tconstruct:necrotic_bone',
		'tconstruct:part_builder',
		'tconstruct:tinker_station',
		'tconstruct:crafting_station',

		//rftools
		'rftoolsbase:machine_frame',
		'rftoolsbase:machine_base',

		//industrial
		"industrialforegoing:dissolution_chamber",
		"industrialforegoing:conveyor",
		"industrialforegoing:black_hole_controller",
		"industrialforegoing:pitiful_generator",
		"industrialforegoing:bioreactor",
		"industrialforegoing:biofuel_generator",
		"industrialforegoing:mycelial_reactor",
		"industrialforegoing:mycelial_furnace",
		"industrialforegoing:mycelial_slimey",
		"industrialforegoing:mycelial_culinary",
		"industrialforegoing:mycelial_potion",
		"industrialforegoing:mycelial_disenchantment",
		"industrialforegoing:mycelial_ender",
		"industrialforegoing:mycelial_explosive",
		"industrialforegoing:mycelial_frosty",
		"industrialforegoing:mycelial_halitosis",
		"industrialforegoing:mycelial_magma",
		"industrialforegoing:mycelial_pink",
		"industrialforegoing:mycelial_netherstar",
		"industrialforegoing:mycelial_death",
		"industrialforegoing:mycelial_rocket",
		"industrialforegoing:mycelial_crimed",
		"industrialforegoing:mycelial_meatallurgic",
		"industrialforegoing:laser_drill",
		"industrialforegoing:fluid_laser_base",
		"industrialforegoing:washing_factory",
		"industrialforegoing:fermentation_station",
		"industrialforegoing:fluid_sieving_machine",
		"industrialforegoing:stasis_chamber",
		"industrialforegoing:mob_detector",
		"industrialforegoing:enchantment_sorter",
		"industrialforegoing:enchantment_applicator",
		"industrialforegoing:plant_gatherer",
		"industrialforegoing:sewer",
		"industrialforegoing:sewage_composter",
		"industrialforegoing:plant_fertilizer",
		"industrialforegoing:plant_sower",
		"industrialforegoing:mob_slaughter_factory",
		"industrialforegoing:animal_rancher",
		"industrialforegoing:animal_baby_separator",
		"industrialforegoing:animal_feeder",
		"industrialforegoing:mob_crusher",
		"industrialforegoing:hydroponic_bed",
		"industrialforegoing:mob_duplicator",
		"industrialforegoing:wither_builder",
		"industrialforegoing:resourceful_furnace",
		"industrialforegoing:sludge_refiner",
		"industrialforegoing:water_condensator",
		"industrialforegoing:mechanical_dirt",
		"industrialforegoing:block_placer",
		"industrialforegoing:block_breaker",
		"industrialforegoing:fluid_collector",
		"industrialforegoing:fluid_placer",
		"industrialforegoing:dye_mixer",
		"industrialforegoing:spores_recreator",
		"industrialforegoing:material_stonework_factory",
		"industrialforegoing:marine_fisher",
		"industrialforegoing:potion_brewer",
		"industrialforegoing:ore_laser_base",
		"industrialforegoing:enchantment_applicator",
		"industrialforegoing:enchantment_extractor",
		"industrialforegoing:enchantment_factory",
		"industrialforegoing:infinity_charger",
		Item.of(
		  "industrialforegoing:range_addon0",
		  "{TitaniumAugment:{Range:0.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon1",
		  "{TitaniumAugment:{Range:1.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon2",
		  "{TitaniumAugment:{Range:2.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon3",
		  "{TitaniumAugment:{Range:3.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon4",
		  "{TitaniumAugment:{Range:4.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon5",
		  "{TitaniumAugment:{Range:5.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon6",
		  "{TitaniumAugment:{Range:6.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon7",
		  "{TitaniumAugment:{Range:7.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon8",
		  "{TitaniumAugment:{Range:8.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon9",
		  "{TitaniumAugment:{Range:9.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon10",
		  "{TitaniumAugment:{Range:10.0f}}"
		),
		Item.of(
		  "industrialforegoing:range_addon11",
		  "{TitaniumAugment:{Range:11.0f}}"
		),
		Item.of(
		  "industrialforegoing:speed_addon_1",
		  "{TitaniumAugment:{Speed:2.0f}}"
		),
		Item.of(
		  "industrialforegoing:speed_addon_2",
		  "{TitaniumAugment:{Speed:3.0f}}"
		),
		Item.of(
		  "industrialforegoing:efficiency_addon_1",
		  "{TitaniumAugment:{Efficiency:0.9f}}"
		),
		Item.of(
		  "industrialforegoing:efficiency_addon_2",
		  "{TitaniumAugment:{Efficiency:0.8f}}"
		),
		Item.of(
		  "industrialforegoing:processing_addon_1",
		  "{TitaniumAugment:{Processing:2.0f}}"
		),
		Item.of(
		  "industrialforegoing:processing_addon_2",
		  "{TitaniumAugment:{Processing:3.0f}}"
		),
		"industrialforegoing:world_transporter_type",
		"industrialforegoing:machine_frame_simple",
		"industrialforegoing:machine_frame_advanced",
		"industrialforegoing:machine_frame_supreme",
		"industrialforegoing:fertilizer",
		"industrialforegoing:pink_slime",
		"industrialforegoing:pink_slime_ingot",
		"industrialforegoing:straw",
		"industrialforegoing:meat_feeder",
		"industrialforegoing:common_black_hole_unit",
		"industrialforegoing:pity_black_hole_unit",
		"industrialforegoing:simple_black_hole_unit",
		"industrialforegoing:advanced_black_hole_unit",
		"industrialforegoing:supreme_black_hole_unit",
		"industrialforegoing:common_black_hole_tank",
		"industrialforegoing:pity_black_hole_tank",
		"industrialforegoing:simple_black_hole_tank",
		"industrialforegoing:advanced_black_hole_tank",
		"industrialforegoing:supreme_black_hole_tank",
		"industrialforegoing:conveyor_extraction_upgrade",
		"industrialforegoing:conveyor_insertion_upgrade",
		"industrialforegoing:conveyor_detection_upgrade",
		"industrialforegoing:conveyor_bouncing_upgrade",
		"industrialforegoing:conveyor_dropping_upgrade",
		"industrialforegoing:conveyor_blinking_upgrade",
		"industrialforegoing:conveyor_splitting_upgrade",
		"industrialforegoing:item_transporter_type",
		"industrialforegoing:fluid_transporter_type",


		

		//mowzies mobs
		'mowziesmobs:mob_remover',

		//librairies
		Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}'),
		'quark:rope',

		//clockwork + vs
		'vs_clockwork:universal_joint',
		'vs_clockwork:solver',
		'valkyrienskies:ship_assembler',
		'vs_clockwork:welder',

		'#witherstormmod:mob_statues',
		'witherstormmod:tainted_zombie_lying'

	])
})

//ajouter des items a jei
onEvent('jei.add.items', event => {

	event.add([
		
		//vanilla
		'minecraft:chest',

		//project E
		'projecte:white_alchemical_bag',

		//ceramics
		'ceramicbucket:ceramic_bucket',
		'ceramicbucket:unfired_clay_bucket',
		Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:lava",Amount:1000}}'),
		Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}'),

		//extended crafting
		'extendedcrafting:basic_auto_table',
		'extendedcrafting:advanced_auto_table',
		'extendedcrafting:elite_auto_table',
		'extendedcrafting:ultimate_auto_table',
		'extendedcrafting:elite_table',
		'extendedcrafting:basic_table',
		'extendedcrafting:advanced_table',
		'extendedcrafting:elite_table',
		'extendedcrafting:ultimate_table',

		//tinker
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:modifier_worktable', '{texture:"minecraft:stone"}'),
		'tconstruct:gear_cast',
		'tconstruct:gear_red_sand_cast',
		'tconstruct:gear_sand_cast',

		//autres
		'chancecubes:chance_cube',
		Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}'),

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

	//clockwork
	event.add('vs_clockwork:bluperglue', [
		'Applies gravity to selected elements.'
	])
	event.add('vs_clockwork:physics_infuser', [
		'makes the structure subject to gravity.'
	])

})