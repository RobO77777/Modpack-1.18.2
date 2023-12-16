onEvent("recipes", (event) => {

  //--------------------------------Unif sword -----------------------------------
  //remove craft sword 

  event.remove({id:'minecraft:wooden_pickaxe'})
  event.remove({id:'minecraft:stone_pickaxe'})
  event.remove({id:'quark:tweaks/crafting/utility/tools/stone_pickaxe'})
  event.remove({id:'minecraft:golden_pickaxe'})
  event.remove({id:'minecraft:iron_pickaxe'})
  event.remove({id:'minecraft:diamond_pickaxe'})
  event.remove({id:'minecraft:netherite_pickaxe'})
  event.remove({id:'mekanismtools:lapis_lazuli/tools/pickaxe'})
  event.remove({id:'mekanismtools:osmium/tools/pickaxe'})
  event.remove({id:'mekanismtools:bronze/tools/pickaxe'})
  event.remove({id:'mekanismtools:refined_glowstone/tools/pickaxe'})
  event.remove({id:'mekanismtools:refined_obsidian/tools/pickaxe'})
  event.remove({id:'iceandfire:copper_pickaxe'})
  event.remove({id:'iceandfire:silver_pickaxe'})
  event.remove({id:'projecte:rm_pick'})
  event.remove({id:'projecte:dm_pick'})

  //ice and fire

  event.remove({id : 'iceandfire:dragonbone_pickaxe'})
  event.remove({id: 'iceandfire:dragonsteel_fire_pickaxe'})
  event.remove({id: 'iceandfire:dragonsteel_ice_pickaxe' })
  event.remove({id: 'iceandfire:dragonsteel_lightning_pickaxe'})
  event.remove({id: 'iceandfire:myrmex_pickaxe_desert'})
  event.remove({id: 'iceandfire:myrmex_pickaxe_jungle'})

  event.smithing(
    'iceandfire:dragonbone_pickaxe',  
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:dragonbone'  
  )

  event.smithing(
   'iceandfire:dragonsteel_ice_pickaxe',  
    'iceandfire:dragonbone_pickaxe', 
    'iceandfire:dragonsteel_ice_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_fire_pickaxe',  
    'iceandfire:dragonbone_pickaxe', 
    'iceandfire:dragonsteel_fire_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_lightning_pickaxe',  
    'iceandfire:dragonbone_pickaxe', 
    'iceandfire:dragonsteel_lightning_ingot'  
  )

  event.smithing(
    'iceandfire:myrmex_jungle_pickaxe',
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_jungle_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_desert_pickaxe',
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_desert_chitin' 
  )


  //vanilla
  event.smithing(
   'minecraft:diamond_pickaxe',  
   Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"]}'), 
    'minecraft:diamond'  
  )

  //botania
  event.remove({id: 'botania:manasteel_pick'})
  event.remove({id: 'botania:elementium_pickaxe'})
  event.remove({id: 'botania:glass_pickaxe'})

  event.smithing(
   'botania:elementium_pickaxe',  
   'botania:manasteel_pick', 
    'botania:elementium_ingot'  
  )
  event.smithing(
    'botania:glass_pickaxe',  
    'botania:manasteel_pick', 
    'minecraft:glass'  
   )

  //mekanism tools
  event.smithing(
    'mekanismtools:refined_glowstone_pickaxe',  
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'mekanism:ingot_refined_glowstone'  
   )
   event.smithing(
    'mekanismtools:refined_obsidian_pickaxe',  
    'minecraft:diamond_pickaxe', 
    'mekanism:ingot_refined_obsidian' 
   )
   event.smithing(
    'mekanismtools:lapis_lazuli_pickaxe',  
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'minecraft:lapis_lazuli' 
   )

   //projecte

   event.smithing(
    'projecte:dm_pick',  
    'minecraft:diamond_pickaxe', 
    'projecte:dark_matter' 
   )
   event.smithing(
    'projecte:rm_pick',  
    'projecte:dm_pick', 
    'projecte:red_matter'
   )


});
