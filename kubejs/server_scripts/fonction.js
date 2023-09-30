onEvent("recipes", (event) => {
  //fonction remove raw smelt+blast et ajout sandpaper polishing
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
  }

  removeRawToIngot("minecraft", "copper");
  removeRawToIngot("minecraft", "iron");
  removeRawToIngot("minecraft", "gold");
  removeRawToIngot("create", "zinc");
  removeRawToIngot("mekanism", "osmium");
  removeRawToIngot("mekanism", "tin");
  removeRawToIngot("mekanism", "lead");
  removeRawToIngot("mekanism", "uranium");
  
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
  sandPaperIngot("create", "kubejs", "zinc")
  sandPaperIngot("botania", "kubejs", "elementium")
  sandPaperIngot("tconstruct", "kubejs", "cobalt")
  sandPaperIngot("iceandfire", "kubejs", "silver")

  function millingDupli(modRaw, modDust, item) {
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": (modRaw + ":crushed_raw_" + item)
        }
      ],
      "results": [
        {
          "item": (modDust + ":dust_" + item),
          "chance": 1
        },
        {
          "item": (modDust + ":dust_" + item),
          "chance": 0.5
        }
      ]
    })
  }
  millingDupli("create", "mekanism", "iron")
  millingDupli("create", "mekanism", "gold")
  millingDupli("create", "mekanism", "copper")
  millingDupli("create", "mekanism", "lead")
  millingDupli("create", "mekanism", "uranium")
  millingDupli("create", "mekanism", "tin")
  millingDupli("create", "mekanism", "osmium")
  millingDupli("create", "kubejs", "zinc")
  millingDupli("create", "kubejs", "silver")
  millingDupli("kubejs", "kubejs", "cobalt")
  millingDupli("kubejs", "kubejs", "elementium")

  function crushingDupli(modRaw, modDust, item) {
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
  crushingDupli("create", "mekanism", "iron")
  crushingDupli("create", "mekanism", "gold")
  crushingDupli("create", "mekanism", "copper")
  crushingDupli("create", "mekanism", "lead")
  crushingDupli("create", "mekanism", "uranium")
  crushingDupli("create", "mekanism", "tin")
  crushingDupli("create", "mekanism", "osmium")
  crushingDupli("create", "kubejs", "zinc")
  crushingDupli("create", "kubejs", "silver")
  crushingDupli("kubejs", "kubejs", "cobalt")
  crushingDupli("kubejs", "kubejs", "elementium")

});
