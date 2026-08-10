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
    // NETHER VEINS
    registerOreVein("nether/cobalt", {
        weight: 45,
        clusterSize: 75,
        density: 0.87,
        layer: "netherrack",
        dimensions: [
            "minecraft:the_nether"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 115
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("cobaltite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("cobaltpentlandite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("carrollite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("grimmite"),
                    weight: 4
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("glaucodot"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("cobalt"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("freboldite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.6,
            minRichness: 0.3,
            maxRichness: 0.7,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("cobaltpentlandite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("nether/sulfide_1", {
        weight: 53,
        clusterSize: 75,
        density: 0.75,
        layer: "netherrack",
        dimensions: [
            "minecraft:the_nether"
        ],
        heightRange: {
            type: "triangle",
            min: -30,
            max: 120
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("sulfur"),
                    weight: 5,
                    minY: -30,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("polydymite"),
                    weight: 3,
                    minY: -10,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("bismuthinite"),
                    weight: 3,
                    minY: -30,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("alabandite"),
                    weight: 2,
                    minY: 40,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("patronite"),
                    weight: 2,
                    minY: -20,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("pilsenite"),
                    weight: 1,
                    minY: -30,
                    maxY: 60
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("bismuthinite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("nether/sulfide_2", {
        weight: 47,
        clusterSize: 69,
        density: 0.8,
        layer: "netherrack",
        dimensions: [
            "minecraft:the_nether"
        ],
        heightRange: {
            type: "triangle",
            min: -40,
            max: 110
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("clinosulphur"),
                    weight: 5,
                    minY: -40,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("troilite"),
                    weight: 4,
                    minY: -10,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("millerite"),
                    weight: 4,
                    minY: -30,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("niningerite"),
                    weight: 2,
                    minY: 60,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("hawleyite"),
                    weight: 2,
                    minY: -40,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("stilleite"),
                    weight: 1,
                    minY: -40,
                    maxY: 85
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("troilite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("nether/thallium", {
        weight: 22,
        clusterSize: 47,
        density: 0.4,
        layer: "netherrack",
        dimensions: [
            "minecraft:the_nether"
        ],
        heightRange: {
            type: "uniform",
            min: -50,
            max: 20
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("sartorite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("heptasartorite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("chalcothallite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("lorandite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("raguinite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("buynite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("thalfenisite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("sartorite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("nether/sulfuric_tungsten", {
        weight: 28,
        clusterSize: 37,
        density: 0.6,
        layer: "netherrack",
        dimensions: [
            "minecraft:the_nether"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 80
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("hemusite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("catamarcaite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("molybdenite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("tungstenite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("murchisite"),
                    minSize: 1,
                    maxSize: 4
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("tungstenite"),
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