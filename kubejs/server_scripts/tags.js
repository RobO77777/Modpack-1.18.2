// Listen to item tag event
onEvent('item.tags', event => {
    //TK
    event.add('forge:wires', ['minecraft:string', 'kubejs:steel_wire'])
    event.add('forge:wither_bones', 'iceandfire:witherbone')
    event.add('forge:gears', ['industrialforegoing:iron_gear', 'industrialforegoing:gold_gear', 'industrialforegoing:diamond_gear'])
    event.add('forge:gears/iron', 'industrialforegoing:iron_gear')
    event.add('forge:gears/gold', 'industrialforegoing:gold_gear')
    event.add('forge:gears/diamond', 'industrialforegoing:diamond_gear')

    //kubejs

    event.add('minecraft:planks', 'kubejs:wood_casing')
    event.add('tconstruct:planklike', 'kubejs:wood_casing')
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