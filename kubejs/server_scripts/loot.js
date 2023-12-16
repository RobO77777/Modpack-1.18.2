onEvent("lootjs", (event) => {
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_sword").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_axe").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_pickaxe").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_shovel").ignoreNBT())
    event.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:iron_hoe").ignoreNBT())
});