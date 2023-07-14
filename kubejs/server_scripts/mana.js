onEvent("recipes", (event) => {
    //manasteel
    event.custom(
        {
            "type": "tconstruct:melting",
            "conditions": [
              {
                "value": {
                  "tag": "forge:ingots/manasteel",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "ingredient": {
              "tag": "forge:ingots/manasteel"
            },
            "result": {
                  "fluid": "tconstruct:molten_iron",
                  "amount": 90
              },
            "temperature": 950,
            "time": 65,
            "byproducts": [
               {
                 "fluid": "kubejs:magical_primary_energy",
                 "amount": 15
               }
             ]
          }
    )
    //block manasteel smeltery
    event.custom(
        {
            "type": "tconstruct:melting",
            "conditions": [
              {
                "value": {
                  "tag": "forge:ingots/manasteel",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "ingredient": {
              "tag": "forge:storage_blocks/manasteel"
            },
            "result": {
                  "fluid": "tconstruct:molten_iron",
                  "amount": 810
              },
            "temperature": 950,
            "time": 194,
            "byproducts": [
               {
                 "fluid": "kubejs:magical_primary_energy",
                 "amount": 135
               }
             ]
          }
    )
    //manasteel avec primal mana
    event.recipes.createMixing("botania:manasteel_ingot", [
        "minecraft:glowstone_dust",
        "minecraft:iron_ingot",
        Fluid.of("kubejs:magical_primary_energy", 15),
      ])
    //mana diamond
    event.custom(
        {
            "type": "tconstruct:melting",
            "conditions": [
              {
                "value": {
                  "tag": "forge:gems/mana_diamond",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "ingredient": {
              "tag": "forge:gems/mana_diamond"
            },
            "result": {
                  "fluid": "tconstruct:molten_diamond",
                  "amount": 100
              },
            "temperature": 1450,
            "time": 65,
            "byproducts": [
               {
                 "fluid": "kubejs:magical_primary_energy",
                 "amount": 50
               }
             ]
          }
    )
    //block mana diamond smeltery 
    event.custom(
        {
            "type": "tconstruct:melting",
            "conditions": [
              {
                "value": {
                  "tag": "forge:gems/mana_diamond",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "ingredient": {
              "item": "botania:mana_diamond_block"
            },
            "result": {
                  "fluid": "tconstruct:molten_diamond",
                  "amount": 900
              },
            "temperature": 1450,
            "time": 194,
            "byproducts": [
               {
                 "fluid": "kubejs:magical_primary_energy",
                 "amount": 450
               }
             ]
          }
    )
    event.recipes.createMixing("botania:mana_diamond", [
        "minecraft:glowstone_dust",
        "minecraft:diamond",
        Fluid.of("kubejs:magical_primary_energy", 50),
      ])
})