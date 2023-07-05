onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
  
    // rename all items with e in their path to EEEEEEEEEEEE
    Ingredient.of('ars_nouveau:amulet_of_mana_boost').stacks.forEach(item => rename(item, "Amulet of Source Boost"))
    Ingredient.of('ars_nouveau:amulet_of_mana_regen').stacks.forEach(item => rename(item, "Amulet of Source Regen"))
    Ingredient.of('minecraft:lingering_potion', '{Potion:"ars_nouveau:mana_regen_potion"}').stacks.forEach(item => rename(item, "Lingering Potion of Source Regen"))
    Ingredient.of('minecraft:splash_potion', '{Potion:"ars_nouveau:mana_regen_potion"}').stacks.forEach(item => rename(item, "Splash Potion of Source Regen"))
    Ingredient.of('minecraft:potion', '{Potion:"ars_nouveau:mana_regen_potion"}').stacks.forEach(item => rename(item, "Potion of Source Regen Potion"))
  
})