onEvent("recipes", (event) => {

  //--------------------------------Unif sword -----------------------------------
  //remove craft sword 

  event.remove({id:'minecraft:wooden_axe'})
  event.remove({id:'minecraft:stone_axe'})
  event.remove({id:'quark:tweaks/crafting/utility/tools/stone_axe'})
  event.remove({id:'minecraft:golden_axe'})
  event.remove({id:'minecraft:iron_axe'})
  event.remove({id:'minecraft:diamond_axe'})
  event.remove({id:'minecraft:netherite_axe'})
  event.remove({id:'mekanismtools:lapis_lazuli/tools/axe'})
  event.remove({id:'mekanismtools:osmium/tools/axe'})
  event.remove({id:'mekanismtools:bronze/tools/axe'})
  event.remove({id:'mekanismtools:refined_glowstone/tools/axe'})
  event.remove({id:'mekanismtools:refined_obsidian/tools/axe'})
  event.remove({id:'iceandfire:copper_axe'})
  event.remove({id:'iceandfire:silver_axe'})
  event.remove({id:'projecte:rm_axe'})
  event.remove({id:'projecte:dm_axe'})

  //ice and fire

  event.remove({id : 'iceandfire:dragonbone_axe'})
  event.remove({id: 'iceandfire:dragonsteel_fire_axe'})
  event.remove({id: 'iceandfire:dragonsteel_ice_axe' })
  event.remove({id: 'iceandfire:dragonsteel_lightning_axe'})
  event.remove({id: 'iceandfire:myrmex_axe_desert'})
  event.remove({id: 'iceandfire:myrmex_axe_jungle'})

  event.smithing(
    'iceandfire:dragonbone_axe',  
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:dragonbone'  
  )

  event.smithing(
   'iceandfire:dragonsteel_ice_axe',  
    'iceandfire:dragonbone_axe', 
    'iceandfire:dragonsteel_ice_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_fire_axe',  
    'iceandfire:dragonbone_axe', 
    'iceandfire:dragonsteel_fire_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_lightning_axe',  
    'iceandfire:dragonbone_axe', 
    'iceandfire:dragonsteel_lightning_ingot'  
  )

  event.smithing(
    'iceandfire:myrmex_jungle_axe',
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_jungle_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_desert_axe',
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_desert_chitin' 
  )


  //vanilla
  event.smithing(
   'minecraft:diamond_axe',  
   Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"]}'), 
    'minecraft:diamond'  
  )

  //botania
  event.remove({id: 'botania:manasteel_axe'})
  event.remove({id: 'botania:elementium_axe'})
  event.remove({id: 'botania:glass_axe'})

  event.smithing(
   'botania:elementium_axe',  
   'botania:manasteel_axe', 
    'botania:elementium_ingot'  
  )


  //mekanism tools
  event.smithing(
    'mekanismtools:refined_glowstone_axe',  
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'mekanism:ingot_refined_glowstone'  
   )
   event.smithing(
    'mekanismtools:refined_obsidian_axe',  
    'minecraft:diamond_axe', 
    'mekanism:ingot_refined_obsidian' 
   )
   event.smithing(
    'mekanismtools:lapis_lazuli_axe',  
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'minecraft:lapis_lazuli' 
   )

   //projecte

   event.smithing(
    'projecte:dm_axe',  
    'minecraft:diamond_axe', 
    'projecte:dark_matter' 
   )
   event.smithing(
    'projecte:rm_axe',  
    'projecte:dm_axe', 
    'projecte:red_matter'
   )


});
