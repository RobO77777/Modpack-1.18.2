onEvent('fluid.registry', event => {
    
    event.create('molten_silicon').thickTexture(0x717171).displayName('Molten Silicon').bucketColor(0x717171);
    event.create('molten_draconium').thickTexture(0xC205BF).displayName('Molten Draconium').bucketColor(0xC205BF);
    event.create('molten_elementium').thickTexture(0xed339a).displayName('Molten Elementium').bucketColor(0xed339a);
    event.create('magical_primary_energy').stillTexture('kubejs:block/fluid/magical_primary_energy_still').flowingTexture('kubejs:block/fluid/magical_primary_energy_flow').displayName('Liquid Magical Primary Energy').luminosity(15);
})