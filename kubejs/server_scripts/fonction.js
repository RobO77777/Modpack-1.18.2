onEvent("recipes", (event) => {
  function modifyMineralRecipes(modPrefix, mineralName, methode) {
    const fullMineralName = modPrefix + mineralName;

    if (methode == 0) {
      // Supprimer les recettes de cuisson pour le minerai spécifié
      event.remove({
        id: fullMineralName + "_ingot_from_blasting_" + mineralName + "_ore",
      });
      event.remove({
        id: fullMineralName + "_ingot_from_smelting_" + mineralName + "_ore",
      });
      event.remove({
        id:
          fullMineralName +
          "_ingot_from_blasting_deepslate_" +
          mineralName +
          "_ore",
      });
      event.remove({
        id:
          fullMineralName +
          "_ingot_from_smelting_deepslate_" +
          mineralName +
          "_ore",
      });

      // Ajouter les recettes de cuisson pour obtenir des pépites de minerai
      event.smelting(fullMineralName + "_nugget", fullMineralName + "_ore");
      event.blasting(fullMineralName + "_nugget", fullMineralName + "_ore");
      event.smelting(
        fullMineralName + "_nugget",
        "deepslate_" + mineralName + "_ore"
      );
      event.blasting(
        fullMineralName + "_nugget",
        "deepslate_" + mineralName + "_ore"
      );

      //milling
      event.custom({
        type: "create:milling",
        ingredients: [
          {
            item: "create:crushed_raw_" + mineralName,
          },
        ],
        results: [
          {
            item: "mekanism:dust_" + mineralName,
            chance: 1,
          },
        ],
        processingTime: 50,
      });
    }

    if (methode == 1) {
      event.remove({
        id: modPrefix + "smelting/" + mineralName + "_ingot_from_ore",
      });
      event.remove({
        id: modPrefix + "blasting/" + mineralName + "_ingot_from_ore",
      });

      event.smelting(fullMineralName + "_nugget", fullMineralName + "_ore");
      event.blasting(fullMineralName + "_nugget", fullMineralName + "_ore");
      event.smelting(
        fullMineralName + "_nugget",
        modPrefix + "deepslate_" + mineralName + "_ore"
      );
      event.blasting(
        fullMineralName + "_nugget",
        modPrefix + "deepslate_" + mineralName + "_ore"
      );

      event.custom({
        type: "create:milling",
        ingredients: [
          {
            item: "create:crushed_raw_" + mineralName,
          },
        ],
        results: [
          {
            item: "kubejs:dust_" + mineralName,
            chance: 1,
          },
        ],
        processingTime: 50,
      });
    }

    if (methode == 2) {
      event.remove({
        id:
          modPrefix + "processing/" + mineralName + "/ingot/from_ore_smelting",
      });
      event.remove({
        id:
          modPrefix + "processing/" + mineralName + "/ingot/from_ore_blasting",
      });

      event.smelting(
        modPrefix + "nugget_" + mineralName,
        fullMineralName + "_ore"
      );
      event.blasting(
        modPrefix + "nugget_" + mineralName,
        fullMineralName + "_ore"
      );
      event.smelting(
        modPrefix + "nugget_" + mineralName,
        modPrefix + "deepslate_" + mineralName + "_ore"
      );
      event.blasting(
        modPrefix + "nugget_" + mineralName,
        modPrefix + "deepslate_" + mineralName + "_ore"
      );

      event.custom({
        type: "create:milling",
        ingredients: [
          {
            item: "create:crushed_raw_" + mineralName,
          },
        ],
        results: [
          {
            item: "mekanism:dust_" + mineralName,
            chance: 1,
          },
        ],
        processingTime: 50,
      });
    }
  }

  modifyMineralRecipes("minecraft:", "iron", 0);
  modifyMineralRecipes("minecraft:", "gold", 0);

  modifyMineralRecipes("create:", "zinc", 1);

  modifyMineralRecipes("mekanism:", "osmium", 2);
  modifyMineralRecipes("mekanism:", "uranium", 2);
  modifyMineralRecipes("mekanism:", "lead", 2);
  modifyMineralRecipes("mekanism:", "tin", 2);

  
});
