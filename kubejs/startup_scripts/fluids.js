onEvent('fluid.registry', event => {
    
    event.create('molten_silicium').thickTexture(0x717171).displayName('Molten Silicium').bucketColor(0x717171);
    event.create('molten_draconium').thickTexture(0xC205BF).displayName('Molten Draconium').bucketColor(0xC205BF);
    event.create('magical_primary_energy').stillTexture('kubejs:block/fluid/magical_primary_energy_still').flowingTexture('kubejs:block/fluid/magical_primary_energy_flow').bucketColor(0xAD77CB).displayName('Liquid Magical Primary Energy').luminosity(15);
})