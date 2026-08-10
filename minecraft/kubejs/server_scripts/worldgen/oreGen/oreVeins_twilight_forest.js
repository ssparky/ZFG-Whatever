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
    // TWILIGHT FOREST VEINS
    registerOreVein("twilight_forest/tanzanite", {
        weight: 35,
        clusterSize: 85,
        density: 0.93,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 60
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("zoisite_ca"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("tanzanite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("diopside"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("axinite_mg"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("zoisite_pb"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("thulite"),
                    weight: 2
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
            surfaceRock: GTMaterials.get("tanzanite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("twilight_forest/sapphire", {
        weight: 48,
        clusterSize: 27,
        density: 0.7,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 60
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("sapphire"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("corundum"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("pink_sapphire"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("green_sapphire"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("golden_sheen_sapphire"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 2,
                    material: GTMaterials.get("ruby"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("sapphire"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("twilight_forest/tourmaline", {
        weight: 35,
        clusterSize: 95,
        density: 0.73,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 60
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("elbaite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("lepidolite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("rubellite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("achroite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("verdelite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("indicolite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.6,
            minRichness: 0.6,
            maxRichness: 0.9,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("rubellite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("twilight_forest/rare_earth", {
        weight: 35,
        clusterSize: 65,
        density: 0.73,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 60
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("xenotime_y"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("thortveitite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("kolbeckite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("samarskite_y"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("xenotime_gd"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("samarskite_yb"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("xenotime_yb"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.4,
            minRichness: 0.1,
            maxRichness: 0.9,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("xenotime_y"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("twilight_forest/rare_earth_sands", {
        weight: 28,
        clusterSize: 29,
        density: 0.9,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
        ],
        heightRange: {
            type: "uniform",
            min: -20,
            max: 60
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("garnet_sand"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 5,
                    material: GTMaterials.get("monazite_ce"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("monazite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("rutile"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("monazite_nd"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("brookite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("monazite_sm"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("monazite_gd"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("monazite_ce"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("twilight_forest/meteoric_impact_1", {
        weight: 12,
        clusterSize: 87,
        density: 0.3,
        layer: "twilightforest",
        dimensions: [
            "twilightforest:twilight_forest"
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
                    weight: 5,
                    material: GTMaterials.get("gold"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("cadmium"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("cadmoselite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("honeaite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("greenockite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("maldonite"),
                    minSize: 1,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cadmium"),
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