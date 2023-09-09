/********************************Unification*********************************/

//--------------------------------tags-----------------------------
onEvent('item.tags', event => {

    
    //retirer les tags aux items de copper non voulu
    event.removeAllTagsFrom([
    'iceandfire:copper_ingot', 
    'iceandfire:copper_nugget',
	'tconstruct:tinkers_bronze_nugget',
    'tconstruct:tinkers_bronze_ingot',
    'tconstruct:tinkers_bronze_block',
    'tconstruct:copper_nugget',
	'iceandfire:copper_ore'
    ])

    //ores

    //steel
    event.add('forge:plates/steel', 'kubejs:steel_sheet')
    event.add('forge:plates', 'kubejs:silicon_sheet')
    event.add('forge:wires/steel', 'kubejs:steel_wire')
    event.add('forge:rods/steel', 'kubejs:steel_rod')

    //silicon

    event.add('forge:plates', 'kubejs:silicon_sheet')
    event.add('forge:ingots', 'kubejs:silicon_ingot')
    event.add('forge:dusts', 'kubejs:silicon_dust')
    event.add('forge:plates/silicon', 'kubejs:silicon_sheet')
    event.add('forge:ingots/silicon', 'kubejs:silicon_ingot')
    event.add('forge:dusts/silicon', 'kubejs:silicon_dust')

    //copper

    event.add('forge:plates', 'create:copper_sheet')
    event.add('forge:plates/copper', 'create:copper_sheet')

    //zinc

    event.add('forge:dusts/zinc', 'kubejs:dust_zinc') 
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

})
//----------------------------------Recipes-------------------------------
onEvent('recipes', event => {
	
	function blastsmelt(result , input) {
		event.smelting(result, input)
		event.blasting(result, input)
	}
	//iron

	//gold

	//copper
	event.remove({id: 'iceandfire:copper_ore'})
	event.remove({id: 'iceandfire:copper_ingot'})
	event.remove({id: 'iceandfire:copper_block_to_ingots'})
	event.remove({id: 'iceandfire:copper_ingot_to_nuggets'})
	event.remove({id: 'iceandfire:furnace/copper_nugget'})
	event.remove({id: 'iceandfire:furnace/copper_nugget_blasting'})
	event.remove({id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_smelting_copper_ore'})
	event.remove({id: 'minecraft:copper_ingot_from_blasting_copper_ore'})

	//uranium
	
	//osmium

	//tin
	event.recipes.createCrushing('mekanism:dust_tin', ['create:crushed_raw_tin'])

	//lead
	event.recipes.createCrushing('mekanism:dust_lead', ['create:crushed_raw_lead'])

	//zinc
	event.smelting('create:zinc_ingot', 'kubejs:dust_zinc')
	event.blasting('create:zinc_ingot', 'kubejs:dust_zinc')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/zinc"}},"output":{"item":"kubejs:dust_zinc","count":2}})

	//silver

	event.remove({id: 'iceandfire:furnace/silver_ingot'})
	event.remove({id: 'iceandfire:furnace/silver_ingot_blasting'})
	event.recipes.createCrushing('kubejs:dust_silver', ['create:crushed_raw_silver'])
	event.smelting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	event.blasting('iceandfire:silver_ingot', 'kubejs:dust_silver')

	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/silver"}},"output":{"item":"kubejs:dust_silver","count":2}})
	//silver dust -> silver fluid
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
//----------------alliages----------------
	//silicon

	event.smelting('kubejs:silicon_ingot', 'kubejs:silicon_dust')
	event.custom({"type":"mekanism:metallurgic_infusing","itemInput":{"ingredient":{"tag":"forge:gems/quartz"}},"chemicalInput":{"amount":50,"tag":"mekanism:carbon"},"output":{"item":"kubejs:silicon_dust"}})
	event.recipes.createPressing('kubejs:silicon_sheet', 'kubejs:silicon_ingot')
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:ingots/silicon",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:ingots/silicon"
			},
			"result": {
			  "fluid": "kubejs:molten_silicon",
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
				  "tag": "forge:dusts/silicon",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:dusts/silicon"
			},
			"result": {
			  "fluid": "kubejs:molten_silicon",
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
				  "tag": "forge:plates/silicon",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:plates/silicon"
			},
			"result": {
			  "fluid": "kubejs:molten_silicon",
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
			  "tag": "forge:ingots/silicon",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_silicon",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicon_ingot"
		},
		"cooling_time": 43
	  })

	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:plates/silicon",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/plate"
		},
		"fluid": {
		  "tag": "forge:molten_silicon",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicon_sheet"
		},
		"cooling_time": 43
	  })

	//steel

	event.recipes.createPressing('kubejs:steel_sheet', '#forge:ingots/steel')

	//bronze

   //draconium
		//draco ingot -> draco fluid
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
		  "fluid": "kubejs:molten_draconium",
		  "amount": 90
		},
		"temperature": 950,
		"time": 65
	  }
)
		// draco fluid -> draco ingot
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
	  	// draco fluid -> draco block
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