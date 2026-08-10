GTCEuServerEvents.oreVeins(event => {
    
    const veins = []

    // Registration API
    function registerOreVein(id, config) {
        veins.push({
            id: id,
            config: config
        })
    }

    // Function calls with parameters
    // UNDERGARDEN VEINS (0-120, needs .block support added in helper functions!)
    event.add("undergarden/cloggrum", vein => {
        vein.weight(110)
        vein.clusterSize(44)
        vein.density(0.67)
        vein.layer("undergarden")
        vein.dimensions("undergarden:undergarden")
        vein.heightRangeUniform(30, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("undergarden:depthrock_cloggrum_ore")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("ferrosilite")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("hemleyite")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("andalusite")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("ulvospinel")).size(1,2))
                .layer(l => l.weight(2).mat(GTMaterials.get("esperite")).size(1,3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("ferrosilite"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("undergarden/froststeel", vein => {
        vein.weight(32)
        vein.clusterSize(22)
        vein.density(0.43)
        vein.layer("undergarden")
        vein.dimensions("undergarden:undergarden")
        vein.heightRangeUniform(0, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("undergarden:shiverstone_froststeel_ore")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("cryolite")).size(2,3))
                .layer(l => l.weight(4).mat(GTMaterials.get("cohenite")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("siderite")).size(2,3))
                .layer(l => l.weight(1).mat(GTMaterials.get("cryptohalite")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("cohenite"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("undergarden/utherium", vein => {
        vein.weight(27)
        vein.clusterSize(29)
        vein.density(0.63)
        vein.layer("undergarden")
        vein.dimensions("undergarden:undergarden")
        vein.heightRangeUniform(50, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("undergarden:depthrock_utherium_ore")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("minium")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("hummerite")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("roselite")).size(2,3))
                .layer(l => l.weight(1).mat(GTMaterials.get("sayrite")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("minium"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("undergarden/regalium", vein => {
        vein.weight(21)
        vein.clusterSize(19)
        vein.density(0.99)
        vein.layer("undergarden")
        vein.dimensions("undergarden:undergarden")
        vein.heightRangeUniform(30, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("undergarden:depthrock_regalium_ore")).size(1,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("bismutite")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("cymophane")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("dreyerite")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("albite")).size(2,4))
                .layer(l => l.weight(2).mat(GTMaterials.get("bismutoferrite")).size(1,3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("bismutite"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    registerOreVein("undergarden/rare_earth", {
        weight: 30,
        clusterSize: 80,
        density: 0.63,
        layer: "undergarden",
        dimensions: [
            "undergarden:undergarden"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("celsian"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("mixite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("agardite_y"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("agardite_ce"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("agardite_la"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("agardite_nd"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("agardite_dy"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.65,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.5,
            minRichness: 0.25,
            maxRichness: 0.65,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("agardite_ce"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("undergarden/organics", {
        weight: 42,
        clusterSize: 90,
        density: 0.74,
        layer: "undergarden",
        dimensions: [
            "undergarden:undergarden"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 60
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("oilsands"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("freitalite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("fichtelite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("oilsands"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("wampenite"),
                    weight: 3
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.5,
            minRichness: 0.25,
            maxRichness: 0.65,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("oilsands"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("undergarden/opal", {
        weight: 56,
        clusterSize: 108,
        density: 0.80,
        layer: "undergarden",
        dimensions: [
            "undergarden:undergarden"
        ],
        heightRange: {
            type: "triangle",
            min: 15,
            max: 100
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("moss_opal"),
                    weight: 5,
                    minY: 25,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("black_opal"),
                    weight: 4,
                    minY: 15,
                    maxY: 40
                },
                {
                    material: GTMaterials.get("tsavorite"),
                    weight: 3,
                    minY: 20,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("euchroite"),
                    weight: 2,
                    minY: 15,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("algodonite"),
                    weight: 2,
                    minY: 40,
                    maxY: 100
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("moss_opal"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("undergarden/zinc_chromium", {
        weight: 22,
        clusterSize: 78,
        density: 0.85,
        layer: "undergarden",
        dimensions: [
            "undergarden:undergarden"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 75
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("zincochromite"),
                    weight: 5,
                    minY: 0,
                    maxY: 75
                },
                {
                    material: GTMaterials.get("chromite"),
                    weight: 4,
                    minY: 5,
                    maxY: 75
                },
                {
                    material: GTMaterials.get("leiteite"),
                    weight: 3,
                    minY: 0,
                    maxY: 50
                },
                {
                    material: GTMaterials.get("crocoite"),
                    weight: 3,
                    minY: 0,
                    maxY: 50
                },
                {
                    material: GTMaterials.get("sweetite"),
                    weight: 2,
                    minY: 40,
                    maxY: 75
                },
                {
                    material: GTMaterials.get("guyanaite"),
                    weight: 2,
                    minY: 40,
                    maxY: 75
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("zincochromite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
 
    // Final Builder loop
    veins.forEach(entry => {
        buildVein(
            event,
            entry.id,
            entry.config
        )
    })

})