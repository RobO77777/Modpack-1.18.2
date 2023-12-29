onEvent("recipes", (event) => {

  //--------------------------------Unif sword -----------------------------------
  //remove craft sword 

  event.remove({id:'minecraft:wooden_hoe'})
  event.remove({id:'minecraft:stone_hoe'})
  event.remove({id:'quark:tweaks/crafting/utility/tools/stone_hoe'})
  event.remove({id:'minecraft:golden_hoe'})
  event.remove({id:'minecraft:iron_hoe'})
  event.remove({id:'minecraft:diamond_hoe'})
  event.remove({id:'minecraft:netherite_hoe'})
  event.remove({id:'mekanismtools:lapis_lazuli/tools/hoe'})
  event.remove({id:'mekanismtools:osmium/tools/hoe'})
  event.remove({id:'mekanismtools:bronze/tools/hoe'})
  event.remove({id:'mekanismtools:refined_glowstone/tools/hoe'})
  event.remove({id:'mekanismtools:refined_obsidian/tools/hoe'})
  event.remove({id:'mekanismtools:steel/tools/hoe'})
  event.remove({id:'iceandfire:copper_hoe'})
  event.remove({id:'iceandfire:silver_hoe'})
  event.remove({id:'projecte:rm_hoe'})
  event.remove({id:'projecte:dm_hoe'})
  event.remove({id : 'iceandfire:dragonbone_hoe'})
  event.remove({id: 'iceandfire:dragonsteel_fire_hoe'})
  event.remove({id: 'iceandfire:dragonsteel_ice_hoe' })
  event.remove({id: 'iceandfire:dragonsteel_lightning_hoe'})
  event.remove({id: 'iceandfire:myrmex_hoe_desert'})
  event.remove({id: 'iceandfire:myrmex_hoe_jungle'})


  //ice and fire

  event.smithing(
    'iceandfire:dragonbone_hoe',  
    Item.of('tconstruct:tough_handle', '{Material:"tconstruct:necrotic_bone"}'),
    'iceandfire:dragonbone'  
  )

  event.smithing(
   'iceandfire:dragonsteel_ice_hoe',  
    'iceandfire:dragonbone_hoe', 
    'iceandfire:dragonsteel_ice_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_fire_hoe',  
    'iceandfire:dragonbone_hoe', 
    'iceandfire:dragonsteel_fire_ingot'  
  )
  event.smithing(
   'iceandfire:dragonsteel_lightning_hoe',  
    'iceandfire:dragonbone_hoe', 
    'iceandfire:dragonsteel_lightning_ingot'  
  )

  event.smithing(
    'iceandfire:myrmex_jungle_hoe',
    Item.of('tconstruct:tough_handle', '{Material:"tconstruct:necrotic_bone"}'),
    'iceandfire:myrmex_jungle_chitin' 
  )
  event.smithing(
    'iceandfire:myrmex_desert_hoe',
    Item.of('tconstruct:tough_handle', '{Material:"tconstruct:necrotic_bone"}'),
    'iceandfire:myrmex_desert_chitin' 
  )
  event.smithing(
    'iceandfire:silver_hoe',
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tconstruct:silver"}')
  )
  event.smithing(
    'iceandfire:copper_hoe',
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tconstruct:copper"}')
  )


  //vanilla
  event.smithing(
   'minecraft:diamond_hoe',  
   'minecraft:stick',    'minecraft:diamond'  
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#oak"}')
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#birch"}')
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#acacia"}')
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#jungle"}')
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#dark_oak"}')
  )
  event.smithing(
   'minecraft:wooden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood#spruce"}')
  )
  event.smithing(
   'minecraft:stone_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:rock"}') 
  )
  event.smithing(
   'minecraft:stone_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:rock#stone"}') 
  )
  event.smithing(
   'minecraft:stone_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:rock#blackstone"}') 
  )
  event.smithing(
   'minecraft:stone_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:rock#deepslate"}') 
  )
  event.smithing(
   'minecraft:golden_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:gold"}')
  )
  event.smithing(
   'minecraft:iron_hoe',  
   'minecraft:stick',
   Item.of('tconstruct:small_blade', '{Material:"tconstruct:iron"}') 
  )

  //botania
  event.remove({id: 'botania:manasteel_hoe'})
  event.remove({id: 'botania:elementium_hoe'})

  event.smithing(
   'botania:elementium_hoe',  
   'botania:manasteel_hoe', 
    'botania:elementium_ingot'  
  )
  event.smithing(
    'botania:manasteel_hoe',  
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tcintegrations:manasteel"}')
   )


  //mekanism tools
  event.smithing(
    'mekanismtools:refined_glowstone_hoe',  
    'minecraft:stick',
    'mekanism:ingot_refined_glowstone'  
   )
   event.smithing(
    'mekanismtools:refined_obsidian_hoe',  
    'minecraft:diamond_hoe', 
    'mekanism:ingot_refined_obsidian' 
   )
   event.smithing(
    'mekanismtools:lapis_lazuli_hoe',  
    'minecraft:stick',
    'minecraft:lapis_lazuli' 
   )
   event.smithing(
    'mekanismtools:bronze_hoe',  
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tconstruct:bronze"}') 
   )
   event.smithing(
    'mekanismtools:osmium_hoe',  
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tconstruct:osmium"}') 
   )
   event.smithing(
    'mekanismtools:steel_hoe',  
    'minecraft:stick',
    Item.of('tconstruct:small_blade', '{Material:"tconstruct:steel"}') 
   )

   //projecte

   event.smithing(
    'projecte:dm_hoe',  
    'minecraft:diamond_hoe', 
    'projecte:dark_matter' 
   )
   event.smithing(
    'projecte:rm_hoe',  
    'projecte:dm_hoe', 
    'projecte:red_matter'
   )


});
