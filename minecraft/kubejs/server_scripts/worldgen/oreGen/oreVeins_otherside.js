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
    // OTHERSIDE VEINS
    registerOreVein("otherside/tin_sulfosalt", {
        weight: 41,
        clusterSize: 105,
        density: 0.51,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "triangle",
            min: 50,
            max: 120
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("cylindrite"),
                    weight: 5,
                    minY: 60,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("sakuraiite"),
                    weight: 3,
                    minY: 75,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("oulankaite"),
                    weight: 2,
                    minY: 55,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("nekrasovite"),
                    weight: 2,
                    minY: 60,
                    maxY: 115
                },
                {
                    material: GTMaterials.get("petrukite"),
                    weight: 1,
                    minY: 60,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("asbecasite"),
                    weight: 1,
                    minY: 75,
                    maxY: 120
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cylindrite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/redstone", {
        weight: 48,
        clusterSize: 83,
        density: 0.84,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 52
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("redstone"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("electrotine"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("cinnabar"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("calomel"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("ruby"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("quetzalcoatlite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.50,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.45,
            maxRichness: 0.72,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("redstone"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/sculk_gems", {
        weight: 22,
        clusterSize: 26,
        density: 0.84,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("melanite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("yttrocerite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("antozonite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("thorianite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("agaite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("melanite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/vanadium", {
        weight: 39,
        clusterSize: 21,
        density: 0.77,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 70
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("vanadium_magnetite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("nolanite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("ziminaite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("karelianite"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 1,
                    material: GTMaterials.get("lyonsite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("fingerite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("karelianite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/tin_sulfosalt", {
        weight: 16,
        clusterSize: 81,
        density: 0.33,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 80
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("indite"),
                    weight: 5,
                    minY: 20,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("roquesite"),
                    weight: 4,
                    minY: 10,
                    maxY: 75
                },
                {
                    material: GTMaterials.get("laforetite"),
                    weight: 3,
                    minY: 5,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("cadmoindite"),
                    weight: 3,
                    minY: 0,
                    maxY: 65
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("indite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/diamond", {
        weight: 25,
        clusterSize: 19,
        density: 0.97,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 40
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("chaoite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("carbonado"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("ballas"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("bort"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("diamond"),
                    minSize: 1,
                    maxSize: 1
                },
                {
                    weight: 1,
                    material: GTMaterials.get("pink_diamond"),
                    minSize: 1,
                    maxSize: 1
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("carbonado"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("otherside/bismuth_sulfochloride", {
        weight: 28,
        clusterSize: 90,
        density: 0.99,
        layer: "otherside",
        dimensions: [
            "deeperdarker:otherside"
        ],
        heightRange: {
            type: "triangle",
            min: 20,
            max: 82
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("bismuthinite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("demicheleite_cl"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("demicheleite_br"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("aiolosite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("demicheleite_i"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("tazieffite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.81,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.75,
            maxRichness: 0.92,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("demicheleite_cl"),
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