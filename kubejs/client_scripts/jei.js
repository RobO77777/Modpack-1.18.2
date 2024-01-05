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
		/electrum/,

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

		//vanilla
		/bucket/


	])


	event.hide([
		//biomesoplenty
		'biomesoplenty:rose_quartz_shard',

		//clockwork + vs
		'vs_clockwork:universal_joint',
		'vs_clockwork:solver',
		'valkyrienskies:ship_assembler',
		'vs_clockwork:welder',
		'vs_clockwork:strawberry_frosting_bucket',
		'vs_clockwork:chocolate_frosting_bucket',
		'valkyrienskies:test_sphere',

		//create 

		'create:rose_quartz_block',


		//iceandfire
		'iceandfire:amythest_ore',
		'iceandfire:amythest_block',
		'iceandfire:amythest_gem',
		'iceandfire:copper_ore',
		'iceandfire:copper_ingot',
		'iceandfire:copper_nugget',
		'iceandfire:copper_block',

		//irons spellbooks

		'irons_spellbooks:fire_rune',
		'irons_spellbooks:ice_rune',
		'irons_spellbooks:ender_rune',
		'irons_spellbooks:protection_rune',
		'irons_spellbooks:blood_rune',
		'irons_spellbooks:evocation_rune', 
		'irons_spellbooks:cooldown_rune',
		'irons_spellbooks:poison_rune',

		//librairies
		Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}'),
		'quark:rope',

		//meka
		'mekanismtools:lapis_lazuli_boots',
   		'mekanismtools:lapis_lazuli_leggings',
   		'mekanismtools:lapis_lazuli_chestplate',
   		'mekanismtools:lapis_lazuli_helmet',
   		'mekanismtools:osmium_boots',
   		'mekanismtools:osmium_leggings',
   		'mekanismtools:osmium_chestplate',
   		'mekanismtools:osmium_helmet',
   		'mekanismtools:refined_glowstone_leggings',
   		'mekanismtools:refined_glowstone_boots',
   		'mekanismtools:refined_glowstone_chestplate',
   		'mekanismtools:refined_glowstone_helmet',

		//quark
		'quark:blank_rune',

		//tinker
		'tconstruct:copper_nugget',
		'tconstruct:tinkers_bronze_nugget',
		'tconstruct:tinkers_bronze_ingot',
		'tconstruct:tinkers_bronze_block',
		'tconstruct:necrotic_bone',
		'tconstruct:part_builder',
		'tconstruct:tinker_station',
		'tconstruct:crafting_station',
		'tcintegrations:bronze_nugget',
		'tcintegrations:bronze_block',
		'tcintegrations:bronze_ingot',

		//mowzies mobs
		'mowziesmobs:mob_remover',

		//rftools
		'rftoolsbase:machine_frame',
		'rftoolsbase:machine_base',


		//vanilla
		'minecraft:iron_boots',
		'minecraft:iron_leggings',
		'minecraft:iron_chestplate', 
		'minecraft:iron_helmet', 
		'minecraft:chainmail_boots',
		'minecraft:chainmail_leggings',
		'minecraft:chainmail_chestplate',
		'minecraft:chainmail_helmet',
		'minecraft:diamond_boots',
		'minecraft:diamond_leggings',
		'minecraft:diamond_chestplate',
		'minecraft:diamond_helmet',

		//witherstorm
		'#witherstormmod:mob_statues',
		'witherstormmod:tainted_zombie_lying',

		//irons spells
		'irons_spellbooks:dragonskin',

		//miscelanious
		'valkyrienskies:test_hinge',
		'valkyrienskies:test_chair',
		'valkyrienskies:test_wing',
		'valkyrienskies:test_flap',
		'vs_clockwork:stratodonut',
		'valkyrienskies:ship_creator',
		'valkyrienskies:ship_creator_smaller',
		'structure_gel:red_gel',
		'structure_gel:blue_gel', 
		'structure_gel:green_gel', 
		'structure_gel:cyan_gel',
		'structure_gel:orange_gel',
		'structure_gel:yellow_gel',
		'structure_gel:data_handler',
		'structure_gel:dynamic_spawner',
		'structure_gel:building_tool',
		'buildinggadgets:construction_paste_container_creative',
		Item.of('minecraft:structure_block','{BlockEntityTag:{mode:"SAVE"}}'),
		'minecraft:structure_void',
		'minecraft:jigsaw',
		'minecraft:command_block',
		'minecraft:repeating_command_block',
		'minecraft:chain_command_block',
		'minecraft:debug_stick',

		//swords
		'minecraft:wooden_sword', 
		'minecraft:stone_sword',
		'minecraft:golden_sword', 
		'minecraft:iron_sword',
		'minecraft:netherite_sword',
		'mekanismtools:steel_sword',
		'iceandfire:copper_sword',
		'iceandfire:silver_sword',
		'mekanismtools:osmium_sword',
		'mekanismtools:bronze_sword', 
		'botania:manasteel_sword',

		//pick

		'minecraft:wooden_pickaxe',
		'minecraft:stone_pickaxe',
		'minecraft:golden_pickaxe',
		'minecraft:iron_pickaxe',
		'iceandfire:silver_pickaxe',
		'iceandfire:copper_pickaxe',
		'mekanismtools:bronze_pickaxe',
		'mekanismtools:osmium_pickaxe',
		'mekanismtools:steel_pickaxe',
		'botania:manasteel_pick',

		//axe

		'minecraft:wooden_axe',
		'minecraft:stone_axe',
		'minecraft:golden_axe',
		'minecraft:iron_axe',
		'iceandfire:silver_axe',
		'iceandfire:copper_axe',
		'mekanismtools:bronze_axe',
		'mekanismtools:osmium_axe',
		'mekanismtools:steel_axe',
		'botania:manasteel_axe',

		//rocks
		'rocks:pinecone',
		'rocks:geyser',
		'rocks:nether_geyser'
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
		'extendedcrafting:handheld_table',

		//tinker
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:modifier_worktable', '{texture:"minecraft:stone"}'),
		'tconstruct:gear_cast',
		'tconstruct:gear_red_sand_cast',
		'tconstruct:gear_sand_cast',

		//vs clockwork
		'vs_clockwork:vanilla_frosting_bucket',


		//autres
		'chancecubes:chance_cube',
		Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}'),
		'stacked_dimensions_warden:grimstone_gold_ore',
		'stacked_dimensions_warden:grimstone_diamond_ore',
		'stacked_dimensions_warden:grimstone_redstone_ore'

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

onEvent('jei.hide.fluids', e => {
	e.hide('vs_clockwork:strawberry_frosting')
	e.hide('vs_clockwork:chocolate_frosting')
	e.hide('biomesoplenty:blood')
})