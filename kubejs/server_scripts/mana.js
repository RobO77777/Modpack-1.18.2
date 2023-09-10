onEvent("recipes", (event) => {
  //foundry
  //manasteel
  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          tag: "forge:ingots/manasteel",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      tag: "forge:ingots/manasteel",
    },
    result: {
      fluid: "tconstruct:molten_iron",
      amount: 90,
    },
    temperature: 950,
    time: 65,
    byproducts: [
      {
        fluid: "kubejs:magical_primary_energy",
        amount: 15,
      },
    ],
  });
  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          tag: "forge:nuggets/manasteel",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      tag: "forge:nuggets/manasteel",
    },
    result: {
      fluid: "tconstruct:molten_iron",
      amount: 10,
    },
    temperature: 950,
    time: 65,
    byproducts: [
      {
        fluid: "kubejs:magical_primary_energy",
        amount: 1,
      },
    ],
  });
  //block manasteel smeltery
  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          tag: "forge:ingots/manasteel",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      tag: "forge:storage_blocks/manasteel",
    },
    result: {
      fluid: "tconstruct:molten_iron",
      amount: 810,
    },
    temperature: 950,
    time: 194,
    byproducts: [
      {
        fluid: "kubejs:magical_primary_energy",
        amount: 135,
      },
    ],
  });

  //mana diamond
  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          tag: "forge:gems/mana_diamond",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      tag: "forge:gems/mana_diamond",
    },
    result: {
      fluid: "tconstruct:molten_diamond",
      amount: 100,
    },
    temperature: 1450,
    time: 65,
    byproducts: [
      {
        fluid: "kubejs:magical_primary_energy",
        amount: 50,
      },
    ],
  });
  //block mana diamond smeltery
  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          tag: "forge:gems/mana_diamond",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      item: "botania:mana_diamond_block",
    },
    result: {
      fluid: "tconstruct:molten_diamond",
      amount: 900,
    },
    temperature: 1450,
    time: 194,
    byproducts: [
      {
        fluid: "kubejs:magical_primary_energy",
        amount: 450,
      },
    ],
  });

  //smeltery
  event.custom(
    {
      "type": "tconstruct:melting",
      "conditions": [
        {
        "value": {
          "tag": "",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
        }
      ],
      "ingredient": {
        "item": "botania:mana_pearl"
      },
      "result": {
        "fluid": "kubejs:magical_primary_energy",
        "amount": 30
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
          "tag": "",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
        }
      ],
      "ingredient": {
        "item": "botania:mana_string"
      },
      "result": {
        "fluid": "kubejs:magical_primary_energy",
        "amount": 25
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
          "tag": "",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
        }
      ],
      "ingredient": {
        "item": "botania:mana_powder"
      },
      "result": {
        "fluid": "kubejs:magical_primary_energy",
        "amount": 2
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
          "tag": "",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
        }
      ],
      "ingredient": {
        "item": "botania:quartz_mana"
      },
      "result": {
        "fluid": "kubejs:magical_primary_energy",
        "amount": 1
      },
      "temperature": 950,
      "time": 65
      }
  )


  //mixing
  event.recipes.createMixing("botania:mana_diamond", [
    "minecraft:glowstone_dust",
    "minecraft:diamond",
    Fluid.of("kubejs:magical_primary_energy", 100),
  ]);
  event.recipes.createMixing("botania:manasteel_ingot", [
    "minecraft:glowstone_dust",
    "minecraft:iron_ingot",
    Fluid.of("kubejs:magical_primary_energy", 30),
  ]);
  event.recipes.createMixing("botania:mana_pearl", [
    "minecraft:glowstone_dust",
    "minecraft:ender_pearl",
    Fluid.of("kubejs:magical_primary_energy", 60),
  ]);
  event.recipes.createMixing("botania:mana_string", [
    "minecraft:glowstone_dust",
    "minecraft:string",
    Fluid.of("kubejs:magical_primary_energy", 50),
  ]);
  event.recipes.createMixing("botania:mana_powder", [
    "minecraft:glowstone_dust",
    "#forge:dusts",
    Fluid.of("kubejs:magical_primary_energy", 5),
  ]);
  event.recipes.createMixing("botania:quartz_mana", [
    "minecraft:glowstone_dust",
    "minecraft:quartz",
    Fluid.of("kubejs:magical_primary_energy", 2),
  ]);




  //project E
  //mixing

  event.recipes.createMixing("projecte:dark_matter", [
    "minecraft:glowstone_dust",
    "minecraft:coal",
    Fluid.of("kubejs:magical_primary_energy", 5500),
  ]);

  event.custom({
  type: "tconstruct:melting",
  conditions: [
    {
      value: {
        tag: "",
        type: "forge:tag_empty",
      },
      type: "forge:not",
    },
  ],
  ingredient: {
    item: "projecte:dark_matter",
  },
  result: {
    fluid: "kubejs:magical_primary_energy",
    amount: 2250,
  },
  temperature: 1450,
  time: 65,
  });
});