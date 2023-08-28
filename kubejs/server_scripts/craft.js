onEvent("recipes", (event) => {
  //mods

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

  //create

  event.remove({ id: "quark:building/crafting/rope" });
  event.remove({ id: "create:crafting/kinetics/rope_pulley" });
  event.remove({ id: "create:crafting/materials/andesite_alloy" });
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" });
  event.remove({ id: "create:mixing/andesite_alloy" });
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" });
  event.remove({ id: "create:crafting/materials/andesite_casing" });

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
  event.shaped("create:andesite_casing", ["PPP", "ALA", "PPP"], {
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

  event.remove({ output: "mekanismgenerators:wind_generator" });

  event.recipes.createCrushing("mekanism:dust_copper", [
    "minecraft:copper_ingot",
  ]);

  event.recipes
    .createMixing("kubejs:crushed_bronze_ore", [
      "create:crushed_raw_copper",
      "create:crushed_raw_tin",
    ])
    .superheated();

  event.shaped("mekanismgenerators:wind_generator", [" P ", "OAO", "TCT"], {
    P: "create:propeller",
    O: "mekanism:ingot_osmium",
    T: "mekanism:energy_tablet",
    C: "mekanism:basic_control_circuit",
    A: "mekanism:alloy_infused",
  });
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

  //ice and fire

  event.remove({ id: "iceandfire:bestiary" });

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

  //Kubejs

  //craft magnet
  event.shaped("twilightforest:ore_magnet", ["M M", "I I", "IRI"], {
    I: "minecraft:iron_ingot",
    M: "kubejs:magnetite",
    R: "minecraft:redstone",
  });

  //craft magnetite

  event.recipes
    .createMixing("kubejs:magnetite", [
      "mekanism:dust_iron",
      "create:zinc_nugget",
    ])
    .superheated();

  //crafts transistors
  event.shaped("kubejs:transistor", [" S ", " A ", " C "], {
    A: "create:andesite_alloy",
    S: "kubejs:silicium_dust",
    C: "createaddition:copper_wire",
  });
  event.shaped("kubejs:transistor_advanced", [" S ", " A ", " C "], {
    A: "mekanism:alloy_infused",
    S: "kubejs:silicium_dust",
    C: "createaddition:copper_wire",
  });
  event.shaped("kubejs:transistor_elite", [" S ", " A ", " C "], {
    A: "mekanism:alloy_reinforced",
    S: "kubejs:silicium_dust",
    C: "createaddition:copper_wire",
  });
  event.shaped("kubejs:transistor_ultimate", [" S ", " A ", " C "], {
    A: "mekanism:alloy_atomic",
    S: "kubejs:silicium_dust",
    C: "createaddition:copper_wire",
  });

  event.shaped("kubejs:processor", ["TST", "SSS", "TST"], {
    T: "kubejs:transistor",
    S: "kubejs:steel_sheet",
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [" TTT ", "TSSST", "TSDST", "TSSST", " TTT "],
    key: {
      T: {
        item: "kubejs:transistor_advanced",
      },
      S: {
        item: "kubejs:steel_sheet",
      },
      D: {
        item: "kubejs:silicium_dust",
      },
    },
    result: {
      item: "kubejs:processor_advanced",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      " TTTTT ",
      "TSSSSST",
      "TSSDSST",
      "TSDDDST",
      "TSSDSST",
      "TSSSSST",
      " TTTTT ",
    ],
    key: {
      T: {
        item: "kubejs:transistor_elite",
      },
      S: {
        item: "kubejs:steel_sheet",
      },
      D: {
        item: "kubejs:silicium_dust",
      },
    },
    result: {
      item: "kubejs:processor_elite",
      count: 1,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_table",
    pattern: [
      " TTTTTTT ",
      "TSSSSSSST",
      "TSSSDSSST",
      "TSSDDDSST",
      "TSDDDDDST",
      "TSSDDDSST",
      "TSSSDSSST",
      "TSSSSSSST",
      " TTTTTTT ",
    ],
    key: {
      T: {
        item: "kubejs:transistor_ultimate",
      },
      S: {
        item: "kubejs:steel_sheet",
      },
      D: {
        item: "kubejs:silicium_dust",
      },
    },
    result: {
      item: "kubejs:processor_ultimate",
      count: 1,
    },
  });
  //rf tools

  event.remove({ id: "rftoolsbase:machine_base" });

  //Autres crafts
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

  //crafts wood
  event.shaped("minecraft:chest", ["PPP", "P P", "PPP"], {
    P: "biomesoplenty:mahogany_planks",
  });
  event.shaped("minecraft:chest", ["PPP", "P P", "PPP"], {
    P: "biomesoplenty:willow_planks",
  });
  event.shaped("minecraft:chest", ["PPP", "P P", "PPP"], {
    P: "kubejs:wood_casing",
  });
  event.shaped("kubejs:wood_casing", ["PPP", "P P", "PPP"], {
    P: "minecraft:stick",
  });

  //Items filters
  event.remove({ id: /itemfilters/ });
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

  //botania

  event.recipes.create.emptying(
    ["minecraft:bucket", Fluid.of("kubejs:magical_primary_energy", 1000)],
    "kubejs:magical_primary_energy_bucket"
  );

  //rftools
  event.remove({ id: "rftoolsbase:machine_frame" });

  //dungeons gear

  event.shaped("dungeons_gear:dagger", 
  ["   "
  ,"  I",
   " S "], {
    S: "minecraft:stick",
    I: "minecraft:iron_ingot",
  })
  event.shaped('dungeons_gear:cutlass', 
  ["  I"
  ," I ",
   " S "], {
    S: "minecraft:stick",
    I: "minecraft:iron_ingot",
  })
  event.shaped('dungeons_gear:sickle', 
  ["III"
  ,"I  ",
   " S "], {
    S: "minecraft:stick",
    I: "minecraft:iron_ingot",
  })
  event.shaped('dungeons_gear:soul_scythe', 
  ["III"
  ,"  I",
   " S "], {
    S: "iceandfire:witherbone",
    I: "minecraft:iron_ingot",
  })
  event.shaped('dungeons_gear:rapier', 
  ["  I"
  ," I ",
   "S  "], {
    S: "minecraft:stick",
    I: "createaddition:iron_rod",
  })
  event.shaped('dungeons_gear:gauntlet', 
  ["III"
  ,"SSS",
   "S S"], {
    S: "minecraft:leather",
    I: "minecraft:iron_ingot",
  })
  event.shaped('dungeons_gear:whip', 
  [" W "
  ," I ",
   " S "], {
    I: "minecraft:string",
    S: "minecraft:stick",
    W: "createaddition:iron_wire",
  })
  event.shaped('dungeons_gear:tempest_knife', 
  [" I "
  ," I ",
   " S "], {
    I: "create:iron_sheet",
    S: "minecraft:stick",

  })
  event.shaped('dungeons_gear:boneclub', 
  ["BBB"
  ,"BBB",
   " S "], {
    B: "minecraft:bone",
    S: "minecraft:stick",

  })
  event.shaped('dungeons_gear:anchor', 
  ["III"
  ," II",
   "I I"], {
    I: 'createaddition:iron_rod',

  })
  event.shaped('dungeons_gear:glaive', 
  ["  I"
  ," R ",
   "S  "], {
    I: 'minecraft:iron_ingot',
    R: 'kubejs:steel_rod',
    S: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:spear', 
  ["  I"
  ," S ",
   "S  "], {
    I: 'minecraft:iron_ingot',
    S: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:claymore', 
  ["  I"
  ,"II ",
   "SI "], {
    I: 'minecraft:iron_ingot',
    S: 'kubejs:steel_rod',
  })
  event.shaped('dungeons_gear:soul_knife', 
  [" BB"
  ," IB",
   "S  "], {
    I: 'minecraft:iron_ingot',
    S: 'minecraft:stick',
    B: 'quark:soul_bead',
  })
  event.shaped('dungeons_gear:katana', 
  ["  I"
  ," R ",
   "G  "], {
    R: 'createaddition:iron_rod',
    G: 'createaddition:gold_rod',
    I: 'create:iron_sheet',
  })
  event.shaped('dungeons_gear:great_hammer', 
  [" I "
  ," S ",
   " S "], {
    I: 'minecraft:iron_block',
    S: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:mace', 
  [" N "
  ,"NIN",
   "SN "], {
    I: 'minecraft:iron_ingot',
    N: 'minecraft:iron_nugget',
    S: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:double_axe', 
  ["III"
  ,"ISI",
   " S "], {
    I: 'minecraft:iron_ingot',
    S: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:battlestaff', 
  ["  S"
  ," S ",
   "S  "], {

    S: 'minecraft:stick',
  })



  event.shapeless('dungeons_gear:dual_crossbow', '2x minecraft:crossbow')
  event.shaped('dungeons_gear:burst_crossbow', 
  ["SIS"
  ,"GTG",
   " S "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    G: 'minecraft:string',
    S: 'botania:livingwood_twig',
  })
  event.shaped('dungeons_gear:heavy_crossbow', 
  ["SIS"
  ,"GTG",
   " S "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    G: 'minecraft:string',
    S: 'createaddition:iron_rod',
  })
  event.shaped('dungeons_gear:exploding_crossbow', 
  ["SIS"
  ,"GTG",
   " S "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    G: 'quark:gunpowder_sack',
    S: 'minecraft:stick',
  })
  event.shaped('dungeons_gear:scatter_crossbow', 
  ["SIS"
  ,"GGG",
   " S "], {

    I: 'botania:livingwood_twig',
    G: 'minecraft:string',
    S: 'minecraft:stick',
  })
  event.shaped('dungeons_gear:soul_crossbow', 
  ["SIS"
  ,"GTG",
   "BSB"], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    G: 'minecraft:string',
    S: 'minecraft:stick',
    B: 'quark:soul_bead'
  })
  
  event.shaped('dungeons_gear:slayer_crossbow', 
  ["RIR"
  ,"WTW",
   " R "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    R: 'createaddition:iron_rod',
    W: 'createaddition:iron_wire',
  })
  event.shaped('dungeons_gear:rapid_crossbow', 
  ["RIR"
  ,"WTW",
   " R "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    R: 'createaddition:iron_rod',
    W: 'minecraft:feather',
  })
  event.shaped('dungeons_gear:harpoon_crossbow', 
  ["RIR"
  ,"WTW",
   " R "], {

    T: 'minecraft:tripwire_hook',
    I: 'minecraft:iron_ingot',
    R: 'createaddition:iron_rod',
    W: 'minecraft:string',
  })

  event.shaped('dungeons_gear:soul_bow', 
  [" SG"
  ,"S G",
   " SG"], {

    S: 'minecraft:stick',
    G: 'quark:soul_bead',
  })
  event.shaped('dungeons_gear:power_bow', 
  [" SG"
  ,"R G",
   " SG"], {

    S: 'minecraft:stick',
    G: 'minecraft:string',
    R: 'kubejs:steel_rod',
  })
  event.shaped('dungeons_gear:longbow', 
  [" SG"
  ,"B G",
   " SG"], {

    S: 'minecraft:stick',
    G: 'minecraft:string',
    B: 'minecraft:bow',
  })
  event.shaped('dungeons_gear:hunting_bow', 
  [" SG"
  ,"S G",
   " SG"], {

    S: 'botania:livingwood_twig',
    G: 'minecraft:string',

  })
  event.shaped('dungeons_gear:shortbow', 
  ["   "
  ," S ",
   "SG "], {

    S: 'minecraft:stick',
    G: 'minecraft:string',

  })
  event.shaped('dungeons_gear:trickbow', 
  [" GS"
  ,"G S",
   " GS"], {

    S: 'botania:mana_string',
    G: 'minecraft:stick',

  })
  event.shaped('dungeons_gear:snow_bow', 
  [" SG"
  ,"H G",
   " SG"], {

    S: 'minecraft:stick',
    G: 'minecraft:string',
    H: 'alexsmobs:froststalker_horn'

  })
  event.shaped('dungeons_gear:wind_bow', 
  [" SF"
  ,"S G",
   " SF"], {

    S: 'minecraft:stick',
    G: 'minecraft:string',
    F: 'minecraft:feather'

  })

  //immersive armors
  event.remove({id: 'immersive_armors:wither_helmet'})
  event.remove({id: 'immersive_armors:chesplate'})
  event.remove({id: 'immersive_armors:leggings'})
  event.remove({id: 'immersive_armors:boots'})

});