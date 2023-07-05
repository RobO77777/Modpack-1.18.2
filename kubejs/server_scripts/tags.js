// Listen to item tag event
onEvent('item.tags', event => {
    //TK
    event.add('forge:wires', ['minecraft:string', 'kubejs:steel_wire'])
    event.add('forge:wither_bones', 'iceandfire:witherbone')

    //kubejs

    event.add('minecraft:planks', 'kubejs:wood_casing')
    event.add('tconstruct:planklike', 'kubejs:wood_casing')

    //draconium

})

//blocks tags
onEvent('block.tags', event => {



})

//fluid tags
onEvent('fluid.tags', event => {

    event.add('forge:molten_draconium', 'kubejs:molten_draconium')
    event.add('forge:molten_silicium', 'kubejs:molten_silicium')
    event.add("minecraft:water", "kubejs:magical_primary_energy");
    event.add("minecraft:water", "kubejs:flowing_magical_primary_energy");



})