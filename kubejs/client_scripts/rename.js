onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
  
    Ingredient.of('vs_clockwork:vanilla_frosting_bucket').stacks.forEach(item => rename(item, "Engine Fuel"))
    Ingredient.of('mekanism:crusher').stacks.forEach(item => rename(item, "Electric Crusher"))

})