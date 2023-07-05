/********************************Unification*********************************/

onEvent('item.tags', event => {
    
    //retirer les tags aux items de copper non voulu
    event.removeAllTagsFrom([
    'iceandfire:copper_ingot', 
    'mekanism:ingot_copper',
    'iceandfire:copper_nugget',
    'mekanism:nugget_copper'


    ])

    //ores
    //steel
    event.add('forge:plates/steel', 'kubejs:steel_sheet')
    event.add('forge:plates', 'kubejs:silicium_sheet')
    event.add('forge:wires/steel', 'kubejs:steel_wire')
    event.add('forge:rods/steel', 'kubejs:steel_rod')

    //silicium

    event.add('forge:plates', 'kubejs:silicium_sheet')
    event.add('forge:ingots', 'kubejs:silicium_ingot')
    event.add('forge:dusts', 'kubejs:silicium_dust')
    event.add('forge:plates/silicium', 'kubejs:silicium_sheet')
    event.add('forge:ingots/silicium', 'kubejs:silicium_ingot')
    event.add('forge:dusts/silicium', 'kubejs:silicium_dust')

    //copper

    event.add('forge:plates', 'create:copper_sheet')
    event.add('forge:plates/copper', 'create:copper_sheet')

    //zinc

    event.add('forge:dusts/zinc', 'kubejs:dust_zinc')

    //retirer les tags items au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')
    event.removeAllTagsFrom(['tconstruct:copper_ore',
    'tconstruct:tinkers_bronze_nugget',
    'tconstruct:tinkers_bronze_ingot',
    'tconstruct:tinkers_bronze_block',
    'tconstruct:copper_nugget',
    'tconstruct:copper_block',
    'tconstruct:copper_ingot'])

    //zinc
   
    event.add('forge:dusts', 'kubejs:dust_zinc')
})

onEvent('block.tags', event => {
    
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom([
        'iceandfire:copper_block',
        'mekanism:block_copper',
        'iceandfire:copper_ore',
        'mekanism:copper_ore'




    ])
	//marbre
    event.removeAllTagsFrom([
		/quark:marble/,
		/quark:polished_marble/,
    ])
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')
})

onEvent('recipes', event => {

//ingots
	
	//gold
	
	event.smelting('minecraft:gold_nugget', 'mythicbotany:gold_ore')
	event.blasting('minecraft:gold_nugget', 'mythicbotany:gold_ore')

	//copper
	event.remove({id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_smelting_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_blasting_copper_ore'})

    event.smelting('create:copper_nugget', 'minecraft:copper_ore')
	event.blasting('create:copper_nugget', 'minecraft:copper_ore')
	event.smelting('create:copper_nugget', 'minecraft:deepslate_copper_ore')
	event.blasting('create:copper_nugget', 'minecraft:deepslate_copper_ore')

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_raw_copper"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_copper",
			"chance": 1
		  }
		],
		"processingTime": 50
	})	

	//uranium
	
	//osmium

	//zinc
	event.smelting('create:zinc_ingot', 'kubejs:dust_zinc')
	event.blasting('create:zinc_ingot', 'kubejs:dust_zinc')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/zinc"}},"output":{"item":"kubejs:dust_zinc","count":2}})

	//silicium

	event.recipes.mekanismMetallurgicInfusing('kubejs:silicium_dust', '#forge:gems/quartz', 'mekanism:carbon', 50)
	event.smelting('kubejs:silicium_ingot', 'kubejs:silicium_dust')
	event.recipes.createPressing('kubejs:silicium_sheet', 'kubejs:silicium_ingot')
	
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:ingots/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:ingots/silicium"
			},
			"result": {
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:dusts/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:dusts/silicium"
			},
			"result": {
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)

	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:plates/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:plates/silicium"
			},
			"result": {
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	
	
	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/silicium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_silicium",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicium_ingot"
		},
		"cooling_time": 43
	  })

	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:plates/silicium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/plate"
		},
		"fluid": {
		  "tag": "forge:molten_silicium",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicium_sheet"
		},
		"cooling_time": 43
	  })
	//steel
	event.recipes.createPressing('kubejs:steel_sheet', '#forge:ingots/steel')

	//bronze
	event.smelting('mekanism:ingot_bronze', 'kubejs:crushed_bronze_ore')
	event.blasting('mekanism:ingot_bronze', 'kubejs:crushed_bronze_ore')
    event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "kubejs:crushed_bronze_ore"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_bronze",
			"chance": 1
		  }
		],
		"processingTime": 50
	})	


	//tin
	event.recipes.createCrushing('mekanism:dust_tin', ['create:crushed_raw_tin'])

	//lead
	event.recipes.createCrushing('mekanism:dust_lead', ['create:crushed_raw_lead'])

	//silver

	event.remove({id: 'iceandfire:furnace/silver_ingot'})
	event.remove({id: 'iceandfire:furnace/silver_ingot_blasting'})
	event.recipes.createCrushing('kubejs:dust_silver', ['create:crushed_raw_silver'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'create:crushed_raw_silver'
		  }
		],
		"results": [
		  {
			"item": 'kubejs:dust_silver',
			"chance": 1
		  }
		],
		"processingTime": 50
	})
	event.smelting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	event.blasting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/silver"}},"output":{"item":"kubejs:dust_silver","count":2}})
		
	event.smelting('iceandfire:silver_nugget', 'iceandfire:silver_ore')
	event.blasting('iceandfire:silver_nugget', 'iceandfire:silver_ore')
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "item": "kubejs:dust_silver"
			},
			"result": {
			  "fluid": "tconstruct:molten_silver",
			  "amount": 90
			},
			"temperature": 950,
			"time": 65
		  }
	)

   //draconium
   event.custom(
	{
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:ingots/draconium"
		},
		"result": {
		  "fluid": "mod_modpack:moltendraconium",
		  "amount": 90
		},
		"temperature": 950,
		"time": 65
	  }
)
	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_draconium",
		  "amount": 90
		},
		"result": {
		  "item": "draconicevolution:draconium_ingot"
		},
		"cooling_time": 43
	  })
	  event.custom({
		"type": "tconstruct:casting_basin",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:storage_blocks/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"fluid": {
		  "tag": "forge:molten_draconium",
		  "amount": 1296
		},
		"result": {
		  "tag": "forge:storage_blocks/draconium"
		},
		"cooling_time": 194
	  })
})