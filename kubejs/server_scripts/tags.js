// Listen to item tag event
onEvent('item.tags', event => {
    //TK
    event.add('forge:wires', ['minecraft:string', 'kubejs:steel_wire'])
    event.add('forge:wither_bones', 'iceandfire:witherbone')

    //kubejs

    event.add('minecraft:planks', 'kubejs:wood_casing')
    event.add('tconstruct:planklike', 'kubejs:wood_casing')
    event.add('forge:dusts', 'kubejs:dust_elementium')
    event.add('forge:dusts', 'kubejs:dust_cobalt')
    event.add('forge:dusts/elementium', 'kubejs:dust_elementium')
    event.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
    event.add('forge:ores/elementium', 'mythicbotany:elementium_ore')
    event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')
    event.add('forge:storage_blocks/elementium', 'botania:elementium_block')
    event.add('forge:dusts/cobalt', 'kubejs:dust_cobalt')

    //create

    event.add("forge:ingots/andesite", "create:andesite_alloy")

})

//blocks tags
onEvent('block.tags', event => {



})

//fluid tags
onEvent('fluid.tags', event => {

    event.add('forge:molten_draconium', 'kubejs:molten_draconium')
    event.add('forge:molten_silicon', 'kubejs:molten_silicon')
    event.add('forge:molten_diamond', 'tconstruct:molten_diamond')
    event.add("minecraft:water", "kubejs:magical_primary_energy")
    event.add("minecraft:water", "kubejs:flowing_magical_primary_energy")
    event.add("forge:seared_stone", "tconstruct:seared_stone")




})