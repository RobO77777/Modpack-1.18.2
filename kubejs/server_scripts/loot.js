onEvent("lootjs", (event) => {
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_pickaxe").ignoreNBT())

    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:iron_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:iron_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:iron_pickaxe").ignoreNBT())

    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:wooden_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:wooden_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:wooden_pickaxe").ignoreNBT())

    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:stone_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:stone_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:stone_pickaxe").ignoreNBT())

    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:golden_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:golden_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("minecraft:golden_pickaxe").ignoreNBT())

    event.addLootTypeModifier(LootType.ENTITY).removeLoot(Item.of("irons_spellbooks:dragonskin").ignoreNBT())

    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("beyond_earth:steel_ingot").ignoreNBT())
});
