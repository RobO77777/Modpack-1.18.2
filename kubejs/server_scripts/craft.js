onEvent("recipes", (event) => {
  //fonctions
  
  function allCrush(input2, output2, count2) {
    event.recipes.createCrushing(count2 + "x " + output2, [
      input2,
    ]);
    event.custom({
      type: "mekanism:crushing",
      input: { ingredient: { item: input2 } },
      output: { item: output2, count: count2 },
    });
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": (input2)
        }
      ],
      "results": [
        {
          "item": (output2),
          "chance": 1,
          "count": 2
        }
      ]
    })
  }

  //mods

  //create
  event.remove({ id: "tconstruct:compat/create/andesite_alloy_zinc" });
  event.remove({ id: "tconstruct:compat/create/andesite_alloy_iron" });
  event.remove({ id: "create:crafting/kinetics/rope_pulley" });
  event.remove({ id: "create:crafting/materials/andesite_alloy" });
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" });
  event.remove({ id: "create:mixing/andesite_alloy" });
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" });
  event.remove({ id: "create:crafting/materials/andesite_casing" });
  event.remove({output: 'create:rose_quartz_block'})

  event.recipes
    .createMixing("create:andesite_alloy", [
      "kubejs:cement",
      "minecraft:andesite",
    ])
    .heated();
  event.recipes.createMixing("create:andesite_alloy", [
    "kubejs:cement",
    "minecraft:andesite",
    Fluid.of("minecraft:lava", 100),
  ]);
  event.recipes.createMixing("2x kubejs:cement", [
    "minecraft:sand",
    "minecraft:gravel",
    Fluid.of("minecraft:water", 500),
  ]);

  event.custom({
    type: "tconstruct:casting_basin",
    conditions: [
      {
        modid: "create",
        type: "forge:mod_loaded",
      },
    ],
    cast: {
      item: "minecraft:andesite",
    },
    cast_consumed: true,
    fluid: {
      tag: "forge:seared_stone",
      amount: 2000,
    },
    result: "create:andesite_alloy",
    cooling_time: 16,
  });

  event.custom({
    type: "tconstruct:melting",
    conditions: [
      {
        value: {
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    ingredient: {
      item: "kubejs:cement",
    },
    result: {
      fluid: "tconstruct:seared_stone",
      amount: 250,
    },
    temperature: 600,
    time: 55,
  });

  event.stonecutting("create:cogwheel", "create:large_cogwheel");
  event.stonecutting("4x create:shaft", "create:andesite_alloy");
  event.stonecutting("create:large_cogwheel", "create:water_wheel");

  event.shapeless("create:andesite_alloy", [
    "kubejs:cement",
    "minecraft:andesite",
    "minecraft:lava_bucket",
  ]);
  event.shapeless("kubejs:cement", [
    "minecraft:sand",
    "minecraft:gravel",
    "minecraft:water_bucket",
  ]);
  event.shapeless("create:andesite_alloy", [
    "kubejs:cement",
    "minecraft:andesite",
    Item.of(
      "ceramicbucket:ceramic_bucket",
      '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'
    ),
  ]);
  event.shapeless("kubejs:cement", [
    "minecraft:sand",
    "minecraft:gravel",
    Item.of(
      "ceramicbucket:ceramic_bucket",
      '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'
    ),
  ]);

  event.shaped("create:rope_pulley", [" C ", "SRS", " I "], {
    C: "create:andesite_casing",
    S: "create:shaft",
    R: "createaddition:copper_spool",
    I: "create:iron_sheet",
  });
  event.shaped("2x create:andesite_casing", ["PPP", "ALA", "PPP"], {
    P: "#minecraft:planks",
    L: "#minecraft:logs",
    A: "create:andesite_alloy",
  });

  event.custom({
    type: "createaddition:rolling",
    input: {
      item: "kubejs:steel_sheet",
    },
    result: {
      item: "kubejs:steel_wire",
      count: 2,
    },
  });
  event.remove({ id: "create:item_application/brass_casing_from_wood" });
  event.remove({ id: "create:item_application/copper_casing_from_wood" });
  event.shaped("4x create:copper_casing", [" C ", "CAC", " C "], {
    C: "create:copper_sheet",
    A: "create:andesite_casing",
  });
  //Extended crafting

  event.remove({ id: /extendedcrafting:/ });

  //craft tables
  const tableTypes = ["basic", "advanced", "elite", "ultimate"];
  const controlCircuits = [
    "basic_control_circuit",
    "advanced_control_circuit",
    "elite_control_circuit",
    "ultimate_control_circuit",
  ];
  const alloys = [
    "steel_casing",
    "alloy_infused",
    "alloy_reinforced",
    "alloy_atomic",
  ];

  for (let i = 0; i < tableTypes.length; i++) {
    let centerItem =
      i === 0
        ? "minecraft:crafting_table"
        : `extendedcrafting:${tableTypes[i - 1]}_table`;

    event.shaped(
      `extendedcrafting:${tableTypes[i]}_table`,
      ["IBI", "BCB", "ISI"],
      {
        C: centerItem,
        B: `mekanism:${controlCircuits[i]}`,
        S: `mekanism:${alloys[i]}`,
        I: "mekanism:ingot_steel",
      }
    );
  }

  event.shapeless("extendedcrafting:basic_auto_table", [
    "mekanism:dictionary",
    "mekanism:basic_energy_cube",
    "extendedcrafting:basic_table",
  ]);
  event.shapeless("extendedcrafting:advanced_auto_table", [
    "mekanism:dictionary",
    "mekanism:advanced_energy_cube",
    "extendedcrafting:advanced_table",
  ]);
  event.shapeless("extendedcrafting:elite_auto_table", [
    "mekanism:dictionary",
    "mekanism:elite_energy_cube",
    "extendedcrafting:elite_table",
  ]);
  event.shapeless("extendedcrafting:ultimate_auto_table", [
    "mekanism:dictionary",
    "mekanism:ultimate_energy_cube",
    "extendedcrafting:ultimate_table",
  ]);

  //craft 5x5
  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", "  A  ", " BSB ", "BSRSB", " BCB "],
    key: {
      B: {
        item: "create:brass_sheet",
      },
      S: {
        item: "createaddition:copper_spool",
      },
      C: {
        item: "createaddition:capacitor",
      },
      A: {
        item: "create:andesite_alloy",
      },
      R: {
        item: "createaddition:iron_rod",
      },
    },
    result: {
      item: "createaddition:electric_motor",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", "  A  ", " BSB ", "BSRSB", " BCB "],
    key: {
      B: {
        item: "create:iron_sheet",
      },
      S: {
        item: "createaddition:copper_spool",
      },
      C: {
        item: "createaddition:capacitor",
      },
      A: {
        item: "create:andesite_alloy",
      },
      R: {
        item: "createaddition:iron_rod",
      },
    },
    result: {
      item: "createaddition:alternator",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", " N N ", "BCSCB", "BCACB", "BCSCB"],
    key: {
      B: {
        item: "create:brass_sheet",
      },
      S: {
        item: "createaddition:gold_spool",
      },
      C: {
        item: "createaddition:capacitor",
      },
      A: {
        item: "create:brass_casing",
      },
      N: {
        item: "createaddition:connector",
      },
    },
    result: {
      item: "createaddition:accumulator",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", " SSS ", "  A  ", " CEC ", " BTB "],
    key: {
      B: {
        item: "create:brass_sheet",
      },
      S: {
        item: "createaddition:copper_spool",
      },
      C: {
        item: "createaddition:capacitor",
      },
      E: {
        item: "create:brass_casing",
      },
      A: {
        item: "create:andesite_alloy",
      },
      T: {
        item: "create:electron_tube",
      },
    },
    result: {
      item: "createaddition:tesla_coil",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", "     ", "AMPPP", "CC   ", "     "],
    key: {
      C: {
        item: "minecraft:copper_ingot",
      },
      M: {
        item: "create:precision_mechanism",
      },
      P: {
        item: "create:fluid_pipe",
      },
      A: {
        item: "create:andesite_alloy",
      },
    },
    result: {
      item: "create:potato_cannon",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [" AAA ", "AAPAA", "APSPA", "AAPAA", " AAA "],
    key: {
      P: {
        tag: "minecraft:planks",
      },
      A: {
        item: "create:andesite_alloy",
      },
      S: {
        tag: "forge:stone",
      },
    },
    result: {
      item: "create:crushing_wheel",
      count: 2,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["  I  ", "  M  ", " SSS ", " SSS ", "  H  "],
    key: {
      H: {
        item: "create:brass_hand",
      },
      I: {
        item: "create:brass_ingot",
      },
      S: {
        item: "minecraft:stick",
      },
      M: {
        item: "create:precision_mechanism",
      },
    },
    result: {
      item: "create:extendo_grip",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["     ", " III ", "CI I ", " III ", "     "],
    key: {
      C: {
        item: "create:brass_casing",
      },
      I: {
        item: "create:brass_ingot",
      },
    },
    result: {
      item: "create:flywheel",
      count: 1,
    },
  });

  //mekanism
  event.remove({output: ['mekanismtools:lapis_lazuli_boots',
   'mekanismtools:lapis_lazuli_leggings',
   'mekanismtools:lapis_lazuli_chestplate',
   'mekanismtools:lapis_lazuli_helmet',
   "mekanismgenerators:wind_generator",
   'mekanismtools:osmium_boots',
   'mekanismtools:osmium_leggings',
   'mekanismtools:osmium_chestplate',
   'mekanismtools:osmium_helmet',
   'mekanismtools:refined_glowstone_leggings',
   'mekanismtools:refined_glowstone_boots',
   'mekanismtools:refined_glowstone_chestplate',
   'mekanismtools:refined_glowstone_helmet']})

  event.shaped("mekanismgenerators:wind_generator", [" P ", "OAO", "TCT"], {
    P: "create:propeller",
    O: "mekanism:ingot_osmium",
    T: "mekanism:energy_tablet",
    C: "mekanism:basic_control_circuit",
    A: "mekanism:alloy_infused",
  });
  event.recipes.createCrushing("mekanism:dust_copper", [
    "minecraft:copper_ingot",
  ]);
   event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:iron_casing"
      },
      {
        "item": 'mekanism:block_steel'
      }
    ],
    "results": [
      {
        "item": 'mekanism:steel_casing'
      }
    ]
  })
  //bio fuel

  event.custom({
    type: "mekanism:crushing",
    input: { ingredient: { tag: "forge:vegetables" } },
    output: { item: "mekanism:bio_fuel", count: 5 },
  });
  event.custom({
    type: "mekanism:crushing",
    input: { ingredient: { tag: "forge:seeds" } },
    output: { item: "mekanism:bio_fuel", count: 2 },
  });
  //Industrial foregoing
  event.remove({
    id: "industrialforegoing:dissolution_chamber/simple_machine_frame",
  });
  event.remove({
    id: "industrialforegoing:dissolution_chamber/advanced_machine_frame",
  });
  event.remove({
    id: "industrialforegoing:dissolution_chamber/supreme_machine_frame",
  });
  event.remove({ id: "industrialforegoing:iron_gear" });
  event.remove({ id: "industrialforegoing:gold_gear" });
  event.remove({ id: "industrialforegoing:diamond_gear" });
  event.custom({
    type: "tconstruct:casting_table",
    conditions: [
      {
        value: {
          tag: "forge:gears/diamond",
          type: "forge:tag_empty",
        },
        type: "forge:not",
      },
    ],
    cast: {
      tag: "tconstruct:casts/multi_use/gear",
    },
    fluid: {
      tag: "forge:molten_diamond",
      amount: 400,
    },
    result: {
      item: "industrialforegoing:diamond_gear",
    },
    cooling_time: 120,
  });

  event.remove({
    output: [
      "industrialforegoing:machine_frame_pity",
      "industrialforegoing:dissolution_chamber",
      "industrialforegoing:dark_glass",
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
    ],
  });

  //projectE
  event.shaped("projecte:collector_mk1", ["SGS", "SNS", "SFS"], {
    S: "minecraft:glowstone",
    F: "projecte:dm_furnace",
    N: "minecraft:netherite_block",
    G: "minecraft:glass",
  });

  event.shaped("projecte:collector_mk2", ["BMB", "BCB", "BBB"], {
    B: "projecte:dark_matter_block",
    C: "projecte:collector_mk1",
    M: "projecte:dark_matter",
  });

  event.shaped("projecte:collector_mk3", ["BRB", "BCB", "BBB"], {
    B: "projecte:red_matter_block",
    C: "projecte:collector_mk2",
    R: "projecte:red_matter",
  });

  event.shaped("projecte:transmutation_table", ["ONO", "NSN", "ONO"], {
    O: "minecraft:obsidian",
    N: "minecraft:netherite_ingot",
    S: "projecte:philosophers_stone",
  });

  event.shaped("minecraft:charcoal", ["SWW", "WWW", "WWW"], {
    S: "projecte:philosophers_stone",
    W: "#minecraft:logs",
  });

  const ids = [
    "gem_helmet",
    "gem_chestplate",
    "gem_boots",
    "gem_leggings",
    "collector_mk1",
    "collector_mk2",
    "collector_mk3",
    "transmutation_table",
  ];
  ids.forEach((id) => {
    event.remove({ id: `projecte:${id}` });
  });



  //Kubejs

  event.custom({
    type: "mekanism:infusion_conversion",
    input: {
      ingredient: [
        { tag: "forge:dusts/silicon" },
        { item: "kubejs:silicon_dust" },
      ],
    },
    output: { infuse_type: "kubejs:silicon", amount: 20 },
  });

  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: "mekanism:basic_control_circuit" } },
    chemicalInput: { amount: 50, infuse_type: "kubejs:silicon" },
    output: { item: "kubejs:processor" },
  });
  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: "mekanism:advanced_control_circuit" } },
    chemicalInput: { amount: 100, infuse_type: "kubejs:silicon" },
    output: { item: "kubejs:processor_advanced" },
  });
  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: "mekanism:elite_control_circuit" } },
    chemicalInput: { amount: 200, infuse_type: "kubejs:silicon" },
    output: { item: "kubejs:processor_elite" },
  });
  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: "mekanism:ultimate_control_circuit" } },
    chemicalInput: { amount: 400, infuse_type: "kubejs:silicon" },
    output: { item: "kubejs:processor_ultimate" },
  });
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": 'minecraft:iron_block'
      }
    ],
    "results": [
      {
        "item": 'kubejs:iron_casing'
      }
    ]
  })
  event.shaped("kubejs:iron_casing", ["ISI", "SCS", "ISI"], {
    C: "create:andesite_casing",
    I: "minecraft:iron_ingot",
    S: "create:iron_sheet",
  });

  //Vanilla

  event.shapeless("4x minecraft:cobblestone", [
    "minecraft:stone",
    "#forge:dusts/glowstone",
  ]);
  event.smelting("mekanism:dust_charcoal", "#minecraft:planks");
  event.remove({ id: "create:milling/granite" });
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:granite",
      },
    ],
    results: [
      {
        item: "minecraft:gravel",
      },
      {
        item: "minecraft:flint",
        chance: 0.1,
      },
      {
        item: "minecraft:quartz",
        chance: 0.2,
      },
    ],
    processingTime: 250,
  });
  event.shaped("kubejs:wood_casing", ["PPP", "P P", "PPP"], {
    P: "minecraft:stick",
  });
  event.shapeless("minecraft:blaze_rod", [
    "#forge:rods/all_metal",
    "minecraft:blaze_powder",
    "#magic_dust",
  ]);
  event.recipes.createMixing("minecraft:blaze_rod", [
    "#forge:rods/all_metal",
    "minecraft:blaze_powder",
    "minecraft:glowstone_dust",
  ]);
  event.shaped("minecraft:charcoal", ["CCC", "CCC", "CCC"], {
    C: "mekanism:dust_charcoal",
  });

  allCrush("minecraft:magma_block", "minecraft:magma_cream", 2)

  event.remove({output: [Item.of('minecraft:iron_boots', '{Damage:0}'), Item.of('minecraft:iron_leggings', '{Damage:0}'), Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:diamond_boots', '{Damage:0}'), Item.of('minecraft:diamond_leggings', '{Damage:0}'), Item.of('minecraft:diamond_chestplate', '{Damage:0}'), Item.of('minecraft:diamond_helmet', '{Damage:0}'), Item.of('minecraft:chainmail_boots', '{Damage:0}'), Item.of('minecraft:chainmail_leggings', '{Damage:0}'), Item.of('minecraft:chainmail_chestplate', '{Damage:0}'), Item.of('minecraft:chainmail_helmet', '{Damage:0}')]})
  event.remove({output: 'minecraft:netherite_helmet'})
  event.remove({output: 'minecraft:netherite_chestplate'})
  event.remove({output: 'minecraft:netherite_leggings'})
  event.remove({output: 'minecraft:netherite_boots'})

  //draconic evo
  event.remove({ id: "draconicevolution:components/draconium_ingot" });
  event.remove({ id: "draconicevolution:draconium_ingot" });

  event.recipes
    .createMixing("2x draconicevolution:draconium_ingot", [
      "2x draconicevolution:draconium_dust",
      "mekanism:dust_lithium",
    ])
    .superheated();
  event.recipes.createMixing("2x draconicevolution:draconium_ingot", [
    "2x draconicevolution:draconium_dust",
    "mekanism:dust_lithium",
    Fluid.of("minecraft:lava", 500),
  ]);

  //mowzies mobs
  event.shaped("mowziesmobs:earthbore_gauntlet", ["DJD", "DRD", "DGD"], {
    D: "minecraft:dirt",
    G: "create:brass_hand",
    R: "botania:rune_earth",
    J: "botania:terrasteel_ingot",
  });

  event.shaped("mowziesmobs:earth_talisman", ["TE ", "ESE", " ET"], {
    S: "minecraft:stick",
    T: "botania:terrasteel_ingot",
    E: "botania:life_essence",
  });

  //tinker
  event.remove({ id: "tconstruct:gadgets/throwball/efln_ball" });
  event.shaped("tconstruct:efln_ball", [" F ", "CNC", " C "], {
    C: "minecraft:clay_ball",
    N: "projecte:nova_catalyst",
    F: "minecraft:flint",
  });

  //botania

  event.recipes.create.emptying(
    ["minecraft:bucket", Fluid.of("kubejs:magical_primary_energy", 1000)],
    "kubejs:magical_primary_energy_bucket"
  );
  //irons spells

  event.remove({output: [
    'irons_spellbooks:fire_rune',
    'irons_spellbooks:ice_rune',
    'irons_spellbooks:ender_rune',
    'irons_spellbooks:protection_rune',
    'irons_spellbooks:blood_rune',
    'irons_spellbooks:evocation_rune',
    'irons_spellbooks:cooldown_rune',
    'irons_spellbooks:poison_rune']})

  event.remove({id:'irons_spellbooks:lightning_rune'})
  event.remove({id:'irons_spellbooks:holy_rune'})
  event.remove({id:'irons_spellbooks:arcane_rune'})

  event.custom({
    "type": "botania:runic_altar",
    "output": {
      "item": "irons_spellbooks:arcane_rune",
      "count": 1
    },
    "mana": 5200,
    "ingredients": [
      {
        "item": "botania:mana_diamond"
      },
      {
        "item": "botania:rune_mana"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ]
  })
  event.custom({
    "type": "botania:runic_altar",
    "output": {
      "item": "irons_spellbooks:holy_rune",
      "count": 1
    },
    "mana": 5200,
    "ingredients": [
      {
        "item": "botania:mana_diamond"
      },
      {
        "item": "botania:rune_mana"
      },
      {
        "item": "irons_spellbooks:divine_pearl"
      },
      {
        "item": "irons_spellbooks:divine_pearl"
      }
    ]
  })
  event.custom({
    "type": "botania:runic_altar",
    "output": {
      "item": "irons_spellbooks:lightning_rune",
      "count": 1
    },
    "mana": 5200,
    "ingredients": [
      {
        "item": "botania:mana_diamond"
      },
      {
        "item": "botania:rune_air"
      },
      {
        "item": "irons_spellbooks:lightning_bottle"
      },
      {
        "item": "irons_spellbooks:lightning_bottle"
      }
    ]
  })
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": "botania:livingrock"
    },
    "output": {
      "item": "irons_spellbooks:blank_rune",
      "count": 1
    },
    "mana": 100,
  })

    
  //clockwork + vs
  if( Platform.isLoaded ( 'vs_clockwork' ) ){
  event.shaped("vs_clockwork:physics_infuser", ["BRB", "RSR", "BRB"], {
    R: "kubejs:steel_rod",
    S: "minecraft:nether_star",
    B: "create:brass_ingot",
  });
  event.shaped("vs_clockwork:propellor_bearing", [" T ", "CAC", " S "], {
    C: "create:cogwheel",
    A: "create:andesite_casing",
    T: "create:turntable",
    S: "create:shaft",
  });
  event.shaped('vs_clockwork:flap_bearing', ["CSC", "CAC", "LLL"], {
    C: "create:cogwheel",
    A: "create:andesite_casing",
    L: "create:andesite_alloy",
    S: "create:shaft",
  });
  event.shaped('vs_clockwork:gravitron', ["H  ", "SET", " SB"], {
    S: "create:copper_sheet",
    B: "createaddition:brass_rod",
    E: "minecraft:ender_pearl",
    T: 'create:electron_tube',
    H: 'create:brass_hand',
  });
  event.shaped('vs_clockwork:afterblazer', ["IFI", "IBI", "III"], {
    F: 'create:encased_fan',
    B: 'create:blaze_burner',
    I: "minecraft:iron_bars",
  });
  event.shaped('vs_clockwork:ballooner', ["IFI", "IBI", "III"], {
    F: 'create:nozzle',
    B: 'create:blaze_burner',
    I: "minecraft:iron_bars",
  });
  event.shaped('vs_clockwork:redstone_resistor', [" R ", "CAL", " R "], {
    A: 'create:andesite_casing',
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    R: "minecraft:redstone",
  });
  event.shaped('vs_clockwork:combustion_engine', ["III", "SBM", "III"], {
    S: 'createaddition:straw',
    B: 'create:blaze_burner',
    M: 'create:mechanical_bearing',
    I: "minecraft:iron_ingot",
  });
  event.shaped('vs_clockwork:balloon_casing', ["BBB", "BAB", "BBB"], {
    A: "kubejs:wood_casing",
    B: 'vs_eureka:balloon',
  });

  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: 'createaddition:bioethanol_bucket' } },
    chemicalInput: { amount: 200, infuse_type: "mekanism:carbon" },
    output: { item: 'vs_clockwork:vanilla_frosting_bucket' },
  });

  event.custom({
    type: "mekanism:metallurgic_infusing",
    itemInput: { ingredient: { item: 'createaddition:bioethanol_bucket' } },
    chemicalInput: { amount: 200, infuse_type: "mekanism:carbon" },
    output: { item: 'vs_clockwork:vanilla_frosting_bucket' },
  });
  event.shapeless('vs_clockwork:command_seat', ["create:lime_seat", "create:linked_controller", "create:andesite_casing"])
  event.remove({output: 'vs_clockwork:vanilla_frosting'})
  event.remove({output: 'vs_clockwork:chocolate_frosting'})
  }


  //Items filters
  event.remove({ id: /itemfilters/ });

  //rftools
  event.remove({ id: "rftoolsbase:machine_frame" });

  //chance cube
  event.remove({ id: "chancecubes:tier_1_pendant_crafting" });

  //ice and fire
  event.remove({ id: "iceandfire:bestiary" });


  //rf tools
  event.remove({ id: "rftoolsbase:machine_base" });

  //CGM
  //advanced bullet
  event.remove({ id: "cgm:advanced_bullet" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/lead",
        count: 4,
      },
      {
        tag: "forge:gunpowder",
        count: 2,
      },
    ],
    result: {
      item: "cgm:advanced_bullet",
      count: 12,
    },
  });

  //assault_rifle
  event.remove({ id: "cgm:assault_rifle" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 28,
      },
      {
        item: "create:brass_ingot",
        count: 4,
      },
      {
        tag: "forge:plates/steel",
        count: 2,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:ingots/iron",
        count: 6,
      },
    ],
    result: {
      item: "cgm:assault_rifle",
    },
  });

  //basic bullet
  event.remove({ id: "cgm:basic_bullet" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/lead",
        count: 4,
      },
      {
        tag: "forge:gunpowder",
        count: 1,
      },
    ],
    result: {
      item: "cgm:basic_bullet",
      count: 20,
    },
  });
  //bazooka
  event.remove({ id: "cgm:bazooka" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 44,
      },
      {
        tag: "forge:plates/steel",
        count: 4,
      },
      {
        item: "create:brass_ingot",
        count: 6,
      },
      {
        tag: "forge:wires/steel",
        count: 2,
      },
      {
        item: "minecraft:redstone",
        count: 4,
      },
      {
        item: "create:cogwheel",
        count: 2,
      },
      {
        tag: "forge:dyes/red",
        count: 1,
      },
    ],
    result: {
      item: "cgm:bazooka",
    },
  });
  //grenade
  event.remove({ id: "cgm:grenade" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 5,
      },
      {
        tag: "forge:plates/steel",
        count: 2,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
      {
        tag: "forge:gunpowder",
        count: 4,
      },
    ],
    result: {
      item: "cgm:grenade",
    },
  });
  //grenade launcher
  event.remove({ id: "cgm:grenade_launcher" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 32,
      },
      {
        tag: "forge:plates/steel",
        count: 4,
      },
      {
        item: "create:brass_ingot",
        count: 6,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:wires/steel",
        count: 2,
      },
    ],
    result: {
      item: "cgm:grenade_launcher",
    },
  });
  //heavy rifle
  event.remove({ id: "cgm:heavy_rifle" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 36,
      },
      {
        tag: "forge:plates/steel",
        count: 4,
      },
      {
        item: "create:brass_ingot",
        count: 4,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:wires/steel",
        count: 2,
      },
    ],
    result: {
      item: "cgm:heavy_rifle",
    },
  });
  //light grip
  event.remove({ id: "cgm:light_grip" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        item: "minecraft:gray_wool",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:rods/steel",
        count: 1,
      },
      {
        tag: "forge:nuggets/steel",
        count: 5,
      },
    ],
    result: {
      item: "cgm:light_grip",
    },
  });
  //light stock
  event.remove({ id: "cgm:light_stock" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 1,
      },
      {
        tag: "forge:rods/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        item: "minecraft:gray_wool",
        count: 1,
      },
    ],
    result: {
      item: "cgm:light_stock",
    },
  });
  //long scope
  event.remove({ id: "cgm:long_scope" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 6,
      },
      {
        tag: "forge:plates/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:glass_panes",
        count: 2,
      },
      {
        tag: "forge:dyes/black",
        count: 1,
      },
    ],
    result: {
      item: "cgm:long_scope",
    },
  });
  //machine pistol
  event.remove({ id: "cgm:machine_pistol" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 20,
      },
      {
        tag: "forge:plates/steel",
        count: 2,
      },
      {
        item: "create:brass_ingot",
        count: 3,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
    ],
    result: {
      item: "cgm:machine_pistol",
    },
  });
  //medium scope
  event.remove({ id: "cgm:medium_scope" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 4,
      },
      {
        tag: "forge:glass_panes",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:plates/steel",
        count: 1,
      },
      {
        tag: "forge:dusts/redstone",
        count: 4,
      },
    ],
    result: {
      item: "cgm:medium_scope",
    },
  });
  //mini gun
  event.remove({ id: "cgm:mini_gun" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 38,
      },
      {
        tag: "forge:rods/steel",
        count: 4,
      },
      {
        tag: "forge:wires/steel",
        count: 3,
      },
      {
        item: "create:brass_ingot",
        count: 8,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:plates/steel",
        count: 5,
      },
    ],
    result: {
      item: "cgm:mini_gun",
    },
  });
  //missile
  event.remove({ id: "cgm:missile" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/lead",
        count: 5,
      },
      {
        tag: "forge:nuggets/steel",
        count: 4,
      },
      {
        tag: "forge:gunpowder",
        count: 4,
      },
    ],
    result: {
      item: "cgm:missile",
    },
  });
  //pistol
  event.remove({ id: "cgm:pistol" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 14,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:plates/steel",
        count: 1,
      },
    ],
    result: {
      item: "cgm:pistol",
    },
  });
  //rifle
  event.remove({ id: "cgm:rifle" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 24,
      },
      {
        tag: "forge:wires/steel",
        count: 2,
      },
      {
        item: "create:brass_ingot",
        count: 4,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:plates/steel",
        count: 2,
      },
    ],
    result: {
      item: "cgm:rifle",
    },
  });
  //shell
  event.remove({ id: "cgm:shell" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/lead",
        count: 6,
      },
      {
        tag: "forge:nuggets/gold",
        count: 2,
      },
      {
        tag: "forge:gunpowder",
        count: 1,
      },
    ],
    result: {
      item: "cgm:shell",
      count: 14,
    },
  });
  //short scope
  event.remove({ id: "cgm:short_scope" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 2,
      },
      {
        tag: "forge:plates/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:glass_panes",
        count: 1,
      },
      {
        tag: "forge:dusts/redstone",
        count: 2,
      },
    ],
    result: {
      item: "cgm:short_scope",
    },
  });
  //shotgun
  event.remove({ id: "cgm:shotgun" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:ingots/steel",
        count: 22,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 4,
      },
      {
        item: "create:cogwheel",
        count: 1,
      },
      {
        tag: "forge:rods/steel",
        count: 1,
      },
      {
        tag: "forge:plates/steel",
        count: 2,
      },
    ],
    result: {
      item: "cgm:shotgun",
    },
  });
  //silencer
  event.remove({ id: "cgm:silencer" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 4,
      },
      {
        tag: "forge:plates/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        tag: "forge:wool",
        count: 2,
      },
    ],
    result: {
      item: "cgm:silencer",
    },
  });
  //spe grip
  event.remove({ id: "cgm:specialised_grip" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 8,
      },
      {
        tag: "forge:rods/steel",
        count: 1,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        item: "minecraft:gray_wool",
        count: 1,
      },
    ],
    result: {
      item: "cgm:specialised_grip",
    },
  });
  //stun grenade
  event.remove({ id: "cgm:stun_grenade" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/iron",
        count: 1,
      },
      {
        tag: "forge:plates/iron",
        count: 1,
      },
      {
        tag: "forge:wires/steel",
        count: 1,
      },
      {
        tag: "forge:gunpowder",
        count: 2,
      },
      {
        item: "create:wheat_flour",
        count: 4,
      },
    ],
    result: {
      item: "cgm:stun_grenade",
      count: 2,
    },
  });
  //tactical stock
  event.remove({ id: "cgm:tactical_stock" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 8,
      },
      {
        tag: "forge:rods/steel",
        count: 2,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        item: "minecraft:gray_wool",
        count: 1,
      },
    ],
    result: {
      item: "cgm:tactical_stock",
    },
  });
  //weighted stock
  event.remove({ id: "cgm:weighted_stock" });
  event.custom({
    type: "cgm:workbench",
    materials: [
      {
        tag: "forge:nuggets/steel",
        count: 12,
      },
      {
        tag: "forge:rods/steel",
        count: 3,
      },
      {
        item: "create:brass_ingot",
        count: 1,
      },
      {
        item: "minecraft:gray_wool",
        count: 1,
      },
    ],
    result: {
      item: "cgm:weighted_stock",
    },
  });
  //workbench
  event.remove({ id: "cgm:workbench" });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["CCC", "III", "I I"],
    key: {
      C: {
        item: "minecraft:light_gray_concrete",
      },
      I: {
        tag: "forge:ingots/steel",
      },
    },
    result: {
      item: "cgm:workbench",
    },
  });
});
