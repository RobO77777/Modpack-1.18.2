onEvent("recipes", (event) => {

  //--------------------------------Unif sword -----------------------------------
  //remove craft sword 

  event.remove({id:'minecraft:wooden_sword'})
  event.remove({id:'minecraft:stone_sword'})
  event.remove({id:'quark:tweaks/crafting/utility/tools/stone_sword'})
  event.remove({id:'minecraft:golden_sword'})
  event.remove({id:'minecraft:iron_sword'})
  event.remove({id:'minecraft:diamond_sword'})
  event.remove({id:'minecraft:netherite_sword'})
  event.remove({id:'mekanismtools:lapis_lazuli/tools/sword'})
  event.remove({id:'mekanismtools:osmium/tools/sword'})
  event.remove({id:'mekanismtools:bronze/tools/sword'})
  event.remove({id:'mekanismtools:refined_glowstone/tools/sword'})
  event.remove({id:'mekanismtools:refined_obsidian/tools/sword'})
  event.remove({id:'iceandfire:copper_sword'})
  event.remove({id:'iceandfire:silver_sword'})
  event.remove({id:'projecte:rm_sword'})
  event.remove({id:'projecte:dm_sword'})

  //ice and fire

  event.remove({id : 'iceandfire:fire_sword'})
  event.remove({id : 'iceandfire:ice_sword'})
  event.remove({id : 'iceandfire:lightning_sword'})
  event.remove({id : 'iceandfire:dragonbone_sword'})
  event.remove({id: 'iceandfire:dragonsteel_fire_sword'})
  event.remove({id: 'iceandfire:dragonsteel_ice_sword' })
  event.remove({id: 'iceandfire:dragonsteel_lightning_sword'})
  event.remove({id: 'iceandfire:hippogryph_sword'})
  event.remove({id: 'iceandfire:myrmex_sword_desert'})
  event.remove({id: 'iceandfire:myrmex_sword_venom_desert'})
  event.remove({id: 'iceandfire:myrmex_sword_jungle'})
  event.remove({id: 'iceandfire:myrmex_sword_venom_jungle'})

  event.smithing(
    'iceandfire:dragonbone_sword',  
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:dragonbone'  
  )
  event.smithing(
    'iceandfire:dragonbone_sword_fire',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:fire_dragon_blood'  
  )
  event.smithing(
    'iceandfire:dragonbone_sword_ice',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:ice_dragon_blood'  
  )
  event.smithing(
    'iceandfire:dragonbone_sword_lightning',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:lightning_dragon_blood'  
  )

  event.smithing(
   'iceandfire:dragonsteel_ice_sword',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:dragonsteel_ice_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_fire_sword',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:dragonsteel_fire_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_lightning_sword',  
    'iceandfire:dragonbone_sword', 
    'iceandfire:dragonsteel_lightning_ingot'  
  )

  event.smithing(
    'iceandfire:hippogryph_sword',  
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:hippogryph_talon' 
  )
  event.smithing(
    'iceandfire:myrmex_jungle_sword',
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_jungle_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_desert_sword',
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:necrotic_bone","tconstruct:necrotic_bone","tconstruct:necrotic_bone"]}'), 
    'iceandfire:myrmex_desert_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_jungle_sword_venom',
    'iceandfire:myrmex_jungle_sword', 
    'iceandfire:myrmex_stinger'
  )
  event.smithing(
    'iceandfire:myrmex_desert_sword_venom',
    'iceandfire:myrmex_desert_sword', 
    'iceandfire:myrmex_stinger'
  )


  //vanilla
  event.smithing(
   'minecraft:diamond_sword',  
   Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"]}'), 
    'minecraft:diamond'  
  )

  //botania
  event.remove({id: 'botania:manasteel_sword'})
  event.remove({id: 'botania:elementium_sword'})

  event.smithing(
   'botania:manasteel_sword',  
   'botania:dreamwood_twig', 
    'botania:elementium_ingot'  
  )

  //mekanism tools
  event.smithing(
    'mekanismtools:refined_glowstone_sword',  
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'mekanism:ingot_refined_glowstone'  
   )
   event.smithing(
    'mekanismtools:refined_obsidian_sword',  
    'minecraft:diamond_sword', 
    'mekanism:ingot_refined_obsidian' 
   )
   event.smithing(
    'mekanismtools:lapis_lazuli_sword',  
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"]}'), 
    'minecraft:lapis_lazuli' 
   )

   //projecte

   event.smithing(
    'projecte:dm_sword',  
    'minecraft:diamond_sword', 
    'projecte:dark_matter' 
   )
   event.smithing(
    'projecte:rm_sword',  
    'projecte:dm_sword', 
    'projecte:red_matter'
   )


});
