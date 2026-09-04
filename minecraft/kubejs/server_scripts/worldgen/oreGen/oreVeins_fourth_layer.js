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
    // LAYER 4 VEINS
    event.add("fourth_layer/cursed_opal", vein => {
        vein.weight(50)
        vein.clusterSize(24)
        vein.density(0.78)
        vein.layer("fourth_layer")
        vein.dimensions("infinite_abyss:fourth_layer")
        vein.heightRangeUniform(30, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:cursed_opal_ore")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("black_opal")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("asbestos")).size(1,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("clinochrysotile")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("parachrysotile")).size(1,2))
                .layer(l => l.weight(2).mat(GTMaterials.get("orthochrysotile")).size(1,3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("asbestos"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    registerOreVein("fourth_layer/organics_1", {
        weight: 18,
        clusterSize: 61,
        density: 0.24,
        layer: "fourth_layer",
        dimensions: [
            "infinite_abyss:fourth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 33
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("oilsands"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("wampenite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("carpathite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("flagstaffite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("tinnunculite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("wampenite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fourth_layer/organics_2", {
        weight: 16,
        clusterSize: 57,
        density: 0.28,
        layer: "fourth_layer",
        dimensions: [
            "infinite_abyss:fourth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 37
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("caoxite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("phoxite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("stepanovite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("deveroite_ce"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("levinsonite_y"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("phoxite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fourth_layer/tin", {
        weight: 42,
        clusterSize: 112,
        density: 0.72,
        layer: "fourth_layer",
        dimensions: [
            "infinite_abyss:fourth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 43,
            max: 118
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("cassiterite_sand"),
                    weight: 5,
                    minY: 73,
                    maxY: 118
                },
                {
                    material: GTMaterials.get("cassiterite"),
                    weight: 4,
                    minY: 43,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("atokite"),
                    weight: 2,
                    minY: 43,
                    maxY: 72
                },
                {
                    material: GTMaterials.get("dzhalindite"),
                    weight: 2,
                    minY: 55,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("niggliite"),
                    weight: 3,
                    minY: 47,
                    maxY: 78
                },
                {
                    material: GTMaterials.get("eta_bronze"),
                    weight: 2,
                    minY: 66,
                    maxY: 117
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cassiterite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fourth_layer/yellow_garnet", {
        weight: 44,
        clusterSize: 82,
        density: 0.81,
        layer: "fourth_layer",
        dimensions: [
            "infinite_abyss:fourth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 30,
            max: 100
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("yellow_garnet"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("andradite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("grossular"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("spessartine"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("topazolite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("calderite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.41,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.33,
            maxRichness: 0.77,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("andradite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fourth_layer/spinel", {
        weight: 28,
        clusterSize: 26,
        density: 0.78,
        layer: "fourth_layer",
        dimensions: [
            "infinite_abyss:fourth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 37
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("spinel"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("trevorite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("galaxite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("xieite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("chromite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("ulvospinel"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("spinel"),
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