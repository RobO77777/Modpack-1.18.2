onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
  
    // rename all items with e in their path to EEEEEEEEEEEE
    //Ingredient.of('ars_nouveau:amulet_of_mana_boost').stacks.forEach(item => rename(item, "Amulet of Source Boost"))

})