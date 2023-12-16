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

	//elementium
    event.add('forge:dusts', 'kubejs:dust_elementium')
    event.add('forge:dusts/elementium', 'kubejs:dust_elementium')
    event.add('forge:ores/elementium', 'mythicbotany:elementium_ore')
    event.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
    event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')
    event.add('forge:storage_blocks/elementium', 'botania:elementium_block')
    event.add('forge:crushed_ores/elementium', 'kubejs:crushed_raw_elementium')

	//silver
    event.add('forge:dusts', 'kubejs:dust_silver')
    event.add('forge:dusts/silver', 'kubejs:dust_silver')
    event.add('forge:raw_materials/silver', 'kubejs:raw_silver')

	//cobalt

    event.add('forge:dusts', 'kubejs:dust_cobalt')
    event.add('forge:dusts/cobalt', 'kubejs:dust_cobalt')
    event.add('forge:crushed_ores/cobalt', 'kubejs:crushed_raw_cobalt')

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
	event.remove({id: 'tconstruct:common/materials/copper_ingot_from_nuggets'})
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
	event.smelting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	event.blasting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "kubejs:raw_silver",
		  },
		],
		results: [
		  {
			item: "create:crushed_raw_silver",
		  },
		  {
			item: "create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });

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

	//cobalt
	blastsmelt("tconstruct:cobalt_ingot", "kubejs:crushed_raw_cobalt")
	blastsmelt("tconstruct:cobalt_ingot", "kubejs:dust_cobalt")
	event.custom({"type":"mekanism:enriching","input":{"amount":3,"ingredient":{"item":"tconstruct:raw_cobalt"}},"output":{"item":"kubejs:dust_cobalt","count":4}})
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"tconstruct:raw_cobalt_block"}},"output":{"item":"kubejs:dust_cobalt","count":12}})
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"tconstruct:cobalt_ore"}},"output":{"item":"kubejs:dust_cobalt","count":2}})

	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "tconstruct:raw_cobalt",
		  },
		],
		results: [
		  {
			item: "kubejs:crushed_raw_cobalt",
		  },
		  {
			item: "create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });

	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "tconstruct:raw_cobalt_block",
		  },
		],
		results: [
		  {
			item: "9x kubejs:crushed_raw_cobalt",
		  },
		  {
			item: "9x create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });

	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "tconstruct:cobalt_ore",
		  },
		],
		results: [
		  {
			item: "kubejs:crushed_raw_cobalt",
		  },
		  {
			item: "kubejs:crushed_raw_cobalt",
			chance: 0.75,
		  },
		  {
			item: "create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });
	event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "kubejs:crushed_raw_cobalt"
		  }
		],
		"results": [
		  {
			"item": "tconstruct:cobalt_nugget",
			"count": 9
		  }
		]
	  })
	event.custom({
		type: "mekanism:crushing",
		input: { ingredient: { tag: "forge:ingots/cobalt" } },
		output: { item: "kubejs:dust_cobalt", count: 1 },
	  });
	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:dusts/cobalt",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:dusts/cobalt"
		},
		"result": {
		  "fluid": "tconstruct:molten_cobalt",
		  "amount": 90
		},
		"temperature": 800,
		"time": 45
	  })

	//elementium

	blastsmelt("botania:elementium_ingot", "kubejs:crushed_raw_elementium")
	blastsmelt("botania:elementium_ingot", "kubejs:dust_elementium")
	event.custom({"type":"mekanism:enriching","input":{"amount":3,"ingredient":{"item":"mythicbotany:raw_elementium"}},"output":{"item":"kubejs:dust_elementium","count":4}})
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"mythicbotany:raw_elementium_block"}},"output":{"item":"kubejs:dust_elementium","count":12}})
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"mythicbotany:elementium_ore"}},"output":{"item":"kubejs:dust_elementium","count":2}})
	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "mythicbotany:raw_elementium",
		  },
		],
		results: [
		  {
			item: "kubejs:crushed_raw_elementium",
		  },
		  {
			item: "create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });

	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "mythicbotany:raw_elementium_block",
		  },
		],
		results: [
		  {
			item: "9x kubejs:crushed_raw_elementium",
		  },
		  {
			item: "9x create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });

	event.custom({
		type: "create:crushing",
		ingredients: [
		  {
			item: "mythicbotany:elementium_ore",
		  },
		],
		results: [
		  {
			item: "kubejs:crushed_raw_elementium",
		  },
		  {
			item: "kubejs:crushed_raw_elementium",
			chance: 0.75,
		  },
		  {
			item: "create:experience_nugget",
			chance: 0.75,
		  },
		],
		processingTime: 250,
	  });
	  event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "kubejs:crushed_raw_elementium"
		  }
		],
		"results": [
		  {
			"item": "botania:elementium_nugget",
			"count": 9
		  }
		]
	  })
	  event.custom({
		type: "mekanism:crushing",
		input: { ingredient: { tag: "forge:ingots/elementium" } },
		output: { item: "kubejs:dust_elementium", count: 1 },
	  });

	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:dusts/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:dusts/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 90
		},
		"temperature": 800,
		"time": 45
	  })
	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:ingots/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 90
		},
		"temperature": 800,
		"time": 60
	  })
	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:raw_materials/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:raw_materials/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 120
		},
		"temperature": 800,
		"time": 90
	  })

	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ores/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:ores/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 240
		},
		"temperature": 800,
		"time": 150
	  })

	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:storage_blocks/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:storage_blocks/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 810
		},
		"temperature": 800,
		"time": 180
	  })
	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:storage_blocks/raw_elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:storage_blocks/raw_elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 1080
		},
		"temperature": 800,
		"time": 360
	  })
	  event.custom({
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:nuggets/elementium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:nuggets/elementium"
		},
		"result": {
		  "fluid": "kubejs:molten_elementium",
		  "amount": 10
		},
		"temperature": 800,
		"time": 20
	  })
	  


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
			  "amount": 90
			},
			"temperature": 950,
			"time": 60
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
			  "amount": 90
			},
			"temperature": 950,
			"time": 45
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
			  "amount": 90
			},
			"temperature": 950,
			"time": 60
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
		  "amount": 90
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
		  "amount": 90
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
		"time": 60
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