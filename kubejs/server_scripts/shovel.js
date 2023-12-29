onEvent("recipes", (event) => {

  //--------------------------------Unif sword -----------------------------------
  //remove craft sword 

  event.remove({id:'minecraft:wooden_shovel'})
  event.remove({id:'minecraft:stone_shovel'})
  event.remove({id:'quark:tweaks/crafting/utility/tools/stone_shovel'})
  event.remove({id:'minecraft:golden_shovel'})
  event.remove({id:'minecraft:iron_shovel'})
  event.remove({id:'minecraft:diamond_shovel'})
  event.remove({id:'minecraft:netherite_shovel'})
  event.remove({id:'mekanismtools:lapis_lazuli/tools/shovel'})
  event.remove({id:'mekanismtools:osmium/tools/shovel'})
  event.remove({id:'mekanismtools:bronze/tools/shovel'})
  event.remove({id:'mekanismtools:refined_glowstone/tools/shovel'})
  event.remove({id:'mekanismtools:refined_obsidian/tools/shovel'})
  event.remove({id:'mekanismtools:steel/tools/shovel'})
  event.remove({id:'iceandfire:copper_shovel'})
  event.remove({id:'iceandfire:silver_spade'})
  event.remove({id:'projecte:rm_shovel'})
  event.remove({id:'projecte:dm_shovel'})
  event.remove({id : 'iceandfire:dragonbone_shovel'})
  event.remove({id: 'iceandfire:dragonsteel_fire_shovel'})
  event.remove({id: 'iceandfire:dragonsteel_ice_shovel' })
  event.remove({id: 'iceandfire:dragonsteel_lightning_shovel'})
  event.remove({id: 'iceandfire:myrmex_shovel_desert'})
  event.remove({id: 'iceandfire:myrmex_shovel_jungle'})


  //ice and fire

  event.smithing(
    'iceandfire:dragonbone_shovel',  
    'iceandfire:witherbone',
    'iceandfire:dragonbone'  
  )

  event.smithing(
   'iceandfire:dragonsteel_ice_shovel',  
    'iceandfire:dragonbone_shovel', 
    'iceandfire:dragonsteel_ice_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_fire_shovel',  
    'iceandfire:dragonbone_shovel', 
    'iceandfire:dragonsteel_fire_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_lightning_shovel',  
    'iceandfire:dragonbone_shovel', 
    'iceandfire:dragonsteel_lightning_ingot'  
  )

  event.smithing(
    'iceandfire:myrmex_jungle_shovel',
    'iceandfire:witherbone',
    'iceandfire:myrmex_jungle_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_desert_shovel',
    'iceandfire:witherbone',
    'iceandfire:myrmex_desert_chitin' 
  )
  event.smithing(
    'iceandfire:silver_shovel',
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tconstruct:silver"}')
  )
  event.smithing(
    'iceandfire:copper_shovel',
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}')
  )


  //vanilla
  event.smithing(
   'minecraft:diamond_shovel',  
   'minecraft:stick',
    'minecraft:diamond'  
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood"}')
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood#birch"}')
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood#acacia"}')
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood#jungle"}')
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood#dark_oak"}')
  )
  event.smithing(
   'minecraft:wooden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood#spruce"}')
  )

  event.smithing(
   'minecraft:stone_shovel',  
    'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:rock"}') 
  )
  event.smithing(
   'minecraft:golden_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:gold"}')
  )
  event.smithing(
   'minecraft:iron_shovel',  
   'minecraft:stick',
   Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}') 
  )

  //botania
  event.remove({id: 'botania:manasteel_shovel'})
  event.remove({id: 'botania:elementium_shovel'})

  event.smithing(
   'botania:elementium_shovel',  
   'botania:manasteel_shovel', 
    'botania:elementium_ingot'  
  )
  event.smithing(
    'botania:manasteel_shovel',  
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tcintegrations:manasteel"}')
   )


  //mekanism tools
  event.smithing(
    'mekanismtools:refined_glowstone_shovel',  
    'minecraft:stick',
    'mekanism:ingot_refined_glowstone'  
   )
   event.smithing(
    'mekanismtools:refined_obsidian_shovel',  
    'minecraft:diamond_shovel', 
    'mekanism:ingot_refined_obsidian' 
   )
   event.smithing(
    'mekanismtools:lapis_lazuli_shovel',  
    'minecraft:stick',
    'minecraft:lapis_lazuli' 
   )
   event.smithing(
    'mekanismtools:bronze_shovel',  
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tconstruct:bronze"}') 
   )
   event.smithing(
    'mekanismtools:osmium_shovel',  
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tconstruct:osmium"}') 
   )
   event.smithing(
    'mekanismtools:steel_shovel',  
    'minecraft:stick',
    Item.of('tconstruct:large_plate', '{Material:"tconstruct:steel"}') 
   )

   //projecte

   event.smithing(
    'projecte:dm_shovel',  
    'minecraft:diamond_shovel', 
    'projecte:dark_matter' 
   )
   event.smithing(
    'projecte:rm_shovel',  
    'projecte:dm_shovel', 
    'projecte:red_matter'
   )


});
