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
    // BUMBLEZONE VEINS (0-250)
    registerOreVein("bumblezone/uranic_gems", {
        weight: 30,
        clusterSize: 128,
        density: 0.50,
        layer: "the_bumblezone",
        dimensions: [
            "the_bumblezone:the_bumblezone"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 250
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("schoepite"),
                    weight: 5,
                    minY: 0,
                    maxY: 250
                },
                {
                    material: GTMaterials.get("rabbittite"),
                    weight: 4,
                    minY: 5,
                    maxY: 245
                },
                {
                    material: GTMaterials.get("linekite"),
                    weight: 3,
                    minY: 0,
                    maxY: 230
                },
                {
                    material: GTMaterials.get("greenlizardite"),
                    weight: 2,
                    minY: 20,
                    maxY: 250
                },
                {
                    material: GTMaterials.get("billietite"),
                    weight: 2,
                    minY: 0,
                    maxY: 250
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("schoepite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("bumblezone/silicate", {
        weight: 52,
        clusterSize: 31,
        density: 0.79,
        layer: "the_bumblezone",
        dimensions: [
            "the_bumblezone:the_bumblezone"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 220
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("citrine"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("milky_quartz"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("certus_quartz"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("herkimer_diamond"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("andradite"),
                    minSize: 2,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("citrine"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("bumblezone/organics", {
        weight: 85,
        clusterSize: 145,
        density: 0.68,
        layer: "the_bumblezone",
        dimensions: [
            "the_bumblezone:the_bumblezone"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 250
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("acetamide"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("lianbinite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("uricite"),
                    weight: 4
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("tinnunculite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("triazolite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.25,
            minRichness: 0.05,
            maxRichness: 0.65,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("acetamide"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("bumblezone/chromium_sulfide", {
        weight: 31,
        clusterSize: 26,
        density: 0.89,
        layer: "the_bumblezone",
        dimensions: [
            "the_bumblezone:the_bumblezone"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 200
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("murchisite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("alabandite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("grokhovskyite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("redstone"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("samsonite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("murchisite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("bumblezone/taaffeite", {
        weight: 21,
        clusterSize: 98,
        density: 0.76,
        layer: "the_bumblezone",
        dimensions: [
            "the_bumblezone:the_bumblezone"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 250
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("dolomite"),
                    weight: 5,
                    minY: 0,
                    maxY: 250
                },
                {
                    material: GTMaterials.get("magnesiotaaffeite_2n2s"),
                    weight: 4,
                    minY: 25,
                    maxY: 250
                },
                {
                    material: GTMaterials.get("magnesiotaaffeite_6n3s"),
                    weight: 3,
                    minY: 0,
                    maxY: 225
                },
                {
                    material: GTMaterials.get("brucite"),
                    weight: 2,
                    minY: 50,
                    maxY: 250
                },
                {
                    material: GTMaterials.get("majindeite"),
                    weight: 1,
                    minY: 0,
                    maxY: 200
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("magnesiotaaffeite_2n2s"),
            placement: "below",
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