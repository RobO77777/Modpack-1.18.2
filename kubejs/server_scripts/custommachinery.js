onEvent("recipes", (event) => {

    let craftCount = 0;

    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "custommachinery:railgun",
        "time": 50,
        "requirements": [
            {
                "type": "custommachinery:item",
                "item": "dyson:satellitesolarpanel",
                "amount": 1,
                "mode": "input"
            },
            {
                "type": "custommachinery:energy_per_tick",
                "amount": 10000,
                "mode": "input"
            },
            {
                "type": "custommachinery:structure",
                "pattern": [
                    [
                        "     ",
                        "     ",
                        "  C  ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "  C  ",
                        "     ",
                        "     ",
                        " GSG ",
                        " GSG ",
                        " SSS ",
                        " GSG ",
                        " GSG ",
                        "BBBBB",
                        "BCCCB",
                        "BCCCB",
                        "BCCCB",
                        "BBBBB"
                    ],
                    [
                        "     ",
                        "     ",
                        "  C  ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "  C  ",
                        " GSG ",
                        " GSG ",
                        "G W G",
                        "G W G",
                        "S W S",
                        "G W G",
                        "G W G",
                        "B E B",
                        " NEN ",
                        " NEN ",
                        " NNN ",
                        "B   B"
                    ],
                    [
                        "     ",
                        "     ",
                        "  C  ",
                        "     ",
                        "     ",
                        " GSG ",
                        " GSG ",
                        " SSS ",
                        "G W G",
                        "G W G",
                        "G   G",
                        "G   G",
                        "S   S",
                        "G   G",
                        "G   G",
                        "B   B",
                        " NNN ",
                        " MIM ",
                        " NNN ",
                        "B m B"
                    ],
                    [
                        "     ",
                        "     ",
                        "  C  ",
                        " GSG ",
                        " GSG ",
                        "G W G",
                        "G W G",
                        "S W S",
                        "G   G",
                        "G   G",
                        "G   G",
                        "G   G",
                        "S W S",
                        "G W G",
                        "G W G",
                        "B E B",
                        " NEN ",
                        " NEN ",
                        " NNN ",
                        "B   B"
                    ],
                    [
                        " GSG ",
                        " GSG ",
                        " SSS ",
                        "G W G",
                        "G W G",
                        "G   G",
                        "G   G",
                        "S   S",
                        "G   G",
                        "G   G",
                        "G   G",
                        "G W G",
                        " SSS ",
                        " GGG ",
                        " GGG ",
                        "BBBBB",
                        "B   B",
                        "B   B",
                        "B   B",
                        "BBBBB"
                    ],
                    [
                        "G W G",
                        "G W G",
                        "S W S",
                        "G   G",
                        "G   G",
                        "G   G",
                        "G   G",
                        "S W S",
                        "G W G",
                        "G W G",
                        "G W G",
                        " GGG ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     "
                    ],
                    [
                        "G   G",
                        "G   G",
                        "S   S",
                        "G   G",
                        "G   G",
                        "G   G",
                        "G W G",
                        " SSS ",
                        " GGG ",
                        " GGG ",
                        " GGG ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     "
                    ],
                    [
                        "G W G",
                        "G W G",
                        "S W S",
                        "G W G",
                        "G W G",
                        "G W G",
                        " GGG ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     "
                    ],
                    [
                        " GGG ",
                        " GGG ",
                        " SSS ",
                        " GGG ",
                        " GGG ",
                        " GGG ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     ",
                        "     "
                    ]
                ],
                "keys": {
                    "B": "mekanism:block_steel",
                    "C": "mekanism:steel_casing",
                    "I": "mekanism:ultimate_induction_cell",
                    "E": "mekanismgenerators:electromagnetic_coil",
                    "G": "mekanism:structural_glass",
                    "S": "mekanism:sps_casing",
                    "P": "minecraft:copper_block",
                    "W": "minecraft:waxed_copper_block",
                    "M": "mekanism:induction_port",
                    "N": "mekanism:induction_casing"
            }}
        ]
    })

    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "custommachinery:energy_receptor",
        "time": 50,
        "requirements": [
            {
                "type": "custommachinery:energy_per_tick",
                "amount": 10000,
                "mode": "output"
            },
            {
                "type": "custommachinery:structure",
                "pattern": [
                    [
                        "       ",
                        "       ",
                        "  B B  ",
                        "   C   ",
                        "  B B  ",
                        "       ",
                        "       "
                    ],
                    [
                        "       ",
                        "       ",
                        "  B B  ",
                        "   m   ",
                        "  B B  ",
                        "       ",
                        "       "
                    ],
                    [
                        "       ",
                        "       ",
                        "  B B  ",
                        "   C   ",
                        "  B B  ",
                        "       ",
                        "       "
                    ],
                    [
                        "       ",
                        "       ",
                        "  SSS  ",
                        "  SQS  ",
                        "  SSS  ",
                        "       ",
                        "       "
                    ],
                    [
                        "       ",
                        "  SSS  ",
                        " S   S ",
                        " S E S ",
                        " S   S ",
                        "  SSS  ",
                        "       "
                    ],
                    [
                        "  SSS  ",
                        " S   S ",
                        "S     S",
                        "S  E  S",
                        "S     S",
                        " S   S ",
                        "  SSS  "
                    ],
                    [
                        "       ",
                        "       ",
                        "       ",
                        "   E   ",
                        "       ",
                        "       ",
                        "       "
                    ]
                ],
                "keys": {
                    "C": "mekanism:steel_casing",
                    "E": "minecraft:end_rod",
                    "B": "mekanism:block_steel",
                    "S": "mekanism:sps_casing",
                    "Q": "mekanism:quantum_entangloporter"
            }}
        ]
    })
})

