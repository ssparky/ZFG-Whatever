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
    // LAYER 7 VEINS
    event.add("seventh_layer/charium", vein => {
        vein.weight(42)
        vein.clusterSize(25)
        vein.density(0.65)
        vein.layer("seventh_layer")
        vein.dimensions("infinite_abyss:seventh_layer")
        vein.heightRangeUniform(0, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:charium_ore")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("benitoite")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("qeltite")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("hexagonite")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("axinite_mg")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("benitoite"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("seventh_layer/astarium", vein => {
        vein.weight(19)
        vein.clusterSize(19)
        vein.density(0.88)
        vein.layer("seventh_layer")
        vein.dimensions("infinite_abyss:seventh_layer")
        vein.heightRangeUniform(0, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:astarium_ore")).size(1,3))
                .layer(l => l.weight(4).mat(GTMaterials.get("tanzanite")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("shojiite")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("putnisite")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("karelianite")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("tanzanite"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add("seventh_layer/deepsilver", vein => {
        vein.weight(60)
        vein.clusterSize(33)
        vein.density(0.71)
        vein.layer("seventh_layer")
        vein.dimensions("infinite_abyss:seventh_layer")
        vein.heightRangeUniform(0, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:deepsilver_ore")).size(2,3))
                .layer(l => l.weight(5).mat(GTMaterials.get("silver")).size(2,3))
                .layer(l => l.weight(4).mat(GTMaterials.get("allargentum")).size(1,2))
                .layer(l => l.weight(4).mat(GTMaterials.get("empressite")).size(1,2))
                .layer(l => l.weight(2).mat(GTMaterials.get("stephanite")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("aguilarite")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("silver"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    registerOreVein("seventh_layer/rhenium", {
        weight: 36,
        clusterSize: 22,
        density: 0.86,
        layer: "seventh_layer",
        dimensions: [
            "infinite_abyss:seventh_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 72
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("molybdenite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("rheniite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("hemusite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("tarkianite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("dzhezkazganite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("rheniite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("seventh_layer/iridosmine", {
        weight: 14,
        clusterSize: 82,
        density: 0.35,
        layer: "seventh_layer",
        dimensions: [
            "infinite_abyss:seventh_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 92
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("rhodium"),
                    weight: 5,
                    minY: 0,
                    maxY: 92
                },
                {
                    material: GTMaterials.get("ruthenium"),
                    weight: 4,
                    minY: 20,
                    maxY: 92
                },
                {
                    material: GTMaterials.get("molybdenum"),
                    weight: 4,
                    minY: 0,
                    maxY: 92
                },
                {
                    material: GTMaterials.get("tin"),
                    weight: 3,
                    minY: 40,
                    maxY: 92
                },
                {
                    material: GTMaterials.get("cadmium"),
                    weight: 2,
                    minY: 0,
                    maxY: 92
                },
                {
                    material: GTMaterials.get("rhenium"),
                    weight: 1,
                    minY: 0,
                    maxY: 62
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("rhodium"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("seventh_layer/moissanite", {
        weight: 28,
        clusterSize: 65,
        density: 0.98,
        layer: "seventh_layer",
        dimensions: [
            "infinite_abyss:seventh_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 28,
            max: 115
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("moissanite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("chaoite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("fullerite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("toledoite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("qusongite"),
                    weight: 3
                }
            ],
            rareBlockChance: 0.71,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.8,
            minRichness: 0.63,
            maxRichness: 0.87,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("moissanite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("seventh_layer/xenotime", {
        weight: 41,
        clusterSize: 36,
        density: 0.69,
        layer: "seventh_layer",
        dimensions: [
            "infinite_abyss:seventh_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 30,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("xenotime_y"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("xenotime_gd"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("xenotime_yb"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("churchite_y"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("churchite_nd"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("churchite_dy"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("thulion"),
                    minSize: 1,
                    maxSize: 1
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("xenotime_gd"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("seventh_layer/green_garnet", {
        weight: 50,
        clusterSize: 98,
        density: 0.98,
        layer: "seventh_layer",
        dimensions: [
            "infinite_abyss:seventh_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 58,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("demantoid"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("tsavorite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("uvarovite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("knorringite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("goldmanite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("rubinite"),
                    weight: 3
                }
            ],
            rareBlockChance: 0.99,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.9,
            minRichness: 0.83,
            maxRichness: 0.99,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("uvarovite"),
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