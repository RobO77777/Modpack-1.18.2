onEvent("recipes", (event) => {

  //fonction remove raw smelt+blast
  function removeRawToIngot(mod, item) {
    if (mod === "create") {
      event.remove({id: "create:smelting/" + item + "_ingot_from_raw_ore"});
      event.remove({id :"create:blasting/" + item + "_ingot_from_raw_ore"});
    }
    else if (mod === "minecraft") {
      event.remove({id :"minecraft:" + item + "_ingot_from_smelting_raw_" + item});
      event.remove({id :"minecraft:" + item + "_ingot_from_blasting_raw_" + item});
    }
    else if (mod === "mekanism") {
      event.remove({id: "mekanism:processing/" + item + "/ingot/from_raw_smelting"});
      event.remove({id: "mekanism:processing/" + item + "/ingot/from_raw_blasting"});
    }
    else if (mod === "tconstruct") {
      event.remove({id: "tconstruct:common/materials/" + item + "_ingot_smelting"});
    }
    else if (mod === "mythicbotany") {
      event.remove({id: "mythicbotany:smelting/" + item + "_ingot_from_raw_ore"});
      event.remove({id :"mythicbotany:blasting/" + item + "_ingot_from_raw_ore"});
    }
  }
  removeRawToIngot("minecraft", "copper");
  removeRawToIngot("minecraft", "iron");
  removeRawToIngot("minecraft", "gold");
  removeRawToIngot("create", "zinc");
  removeRawToIngot("mekanism", "osmium");
  removeRawToIngot("mekanism", "tin");
  removeRawToIngot("mekanism", "lead");
  removeRawToIngot("mekanism", "uranium");
  removeRawToIngot("tconstruct", "cobalt");
  removeRawToIngot("mythicbotany", "elementium");
  
  //dupli sand paper
  function sandPaperDupli(modRaw, modDust, item) {
    event.custom({
      "type": "create:sandpaper_polishing",
      "ingredients": [
        {
          "item": (modRaw + ":raw_" + item)
        }
      ],
      "results": [
        {
          "item": (modDust + ":dust_" + item)
        }
      ]
    })
  }
  sandPaperDupli("minecraft", "mekanism", "iron")
  sandPaperDupli("minecraft", "mekanism", "gold")
  sandPaperDupli("minecraft", "mekanism", "copper")
  sandPaperDupli("mekanism", "mekanism", "lead")
  sandPaperDupli("mekanism", "mekanism", "uranium")
  sandPaperDupli("mekanism", "mekanism", "tin")
  sandPaperDupli("mekanism", "mekanism", "osmium")
  sandPaperDupli("create", "kubejs", "zinc")
  sandPaperDupli("mythicbotany", "kubejs", "elementium")
  sandPaperDupli("tconstruct", "kubejs", "cobalt")
  sandPaperDupli("kubejs", "kubejs", "silver")

  //fonction Ingot -> Dust
  function sandPaperIngot(modIngot, modDust, item) {
    if (modIngot == "mekanism") {
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": (modIngot + ":ingot_" + item)
          }
        ],
        "results": [
          {
            "item": (modDust + ":dust_" + item)
          }
        ]
      })
    }
    else {
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": (modIngot + ":" + item + "_ingot")
          }
        ],
        "results": [
          {
            "item": (modDust + ":dust_" + item)
          }
        ]
      })
    }
    }

  sandPaperIngot("minecraft", "mekanism", "iron")
  sandPaperIngot("minecraft", "mekanism", "gold")
  sandPaperIngot("minecraft", "mekanism", "copper")
  sandPaperIngot("mekanism", "mekanism", "lead")
  sandPaperIngot("mekanism", "mekanism", "uranium")
  sandPaperIngot("mekanism", "mekanism", "tin")
  sandPaperIngot("mekanism", "mekanism", "osmium")
  sandPaperIngot("mekanism", "mekanism", "bronze")
  sandPaperIngot("mekanism", "mekanism", "steel")
  sandPaperIngot("mekanism", "mekanism", "refined_obsidian")
  sandPaperIngot("create", "kubejs", "zinc")
  sandPaperIngot("botania", "kubejs", "elementium")
  sandPaperIngot("tconstruct", "kubejs", "cobalt")
  sandPaperIngot("iceandfire", "kubejs", "silver")
  sandPaperIngot("kubejs", "kubejs", "silicon")

  // Dupli crushed raw x2.5
  function crushingDupliCrushedRaw(modRaw, modDust, item) {
    event.custom({
      "type": "create:crushing",
      "ingredients": [
        {
          "item": (modRaw + ":crushed_raw_" + item)
        }
      ],
      "results": [
        {
          "item": ("2x " + modDust + ":dust_" + item),
          "chance": 1
        },
        {
          "item": (modDust + ":dust_" + item),
          "chance": 0.5
        }
      ]
    })
  }
  crushingDupliCrushedRaw("create", "mekanism", "iron")
  crushingDupliCrushedRaw("create", "mekanism", "gold")
  crushingDupliCrushedRaw("create", "mekanism", "copper")
  crushingDupliCrushedRaw("create", "mekanism", "lead")
  crushingDupliCrushedRaw("create", "mekanism", "uranium")
  crushingDupliCrushedRaw("create", "mekanism", "tin")
  crushingDupliCrushedRaw("create", "mekanism", "osmium")
  crushingDupliCrushedRaw("create", "kubejs", "zinc")
  crushingDupliCrushedRaw("create", "kubejs", "silver")
  crushingDupliCrushedRaw("kubejs", "kubejs", "cobalt")
  crushingDupliCrushedRaw("kubejs", "kubejs", "elementium")

});
