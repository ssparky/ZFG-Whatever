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
    // END VEINS
    registerOreVein("end/lanthanide_carbonate", {
        weight: 16,
        clusterSize: 29,
        density: 0.5,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
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
                    material: GTMaterials.get("bastnasite_nd"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("praseonasite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("bastnasite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("terbocide"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("bastnasite_y"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("bastnasite_la"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("praseonasite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("end/lanthanide_arsenates", {
        weight: 21,
        clusterSize: 69,
        density: 0.71,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 80
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("popovite"),
                    weight: 5,
                    minY: 0,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("xanthiosite"),
                    weight: 4,
                    minY: 0,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("rosite"),
                    weight: 3,
                    minY: 0,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("thulion"),
                    weight: 3,
                    minY: 0,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("lutophage"),
                    weight: 2,
                    minY: 0,
                    maxY: 45
                },
                {
                    material: GTMaterials.get("terbocide"),
                    weight: 2,
                    minY: 35,
                    maxY: 80
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("rosite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("end/quadrated_beryl", {
        weight: 14,
        clusterSize: 15,
        density: 0.8,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
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
                    material: GTMaterials.get("beryl"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("queryl"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("enquedite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("naquadah"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("maxixe"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("xenocage"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("queryl"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("end/kaemanite", {
        weight: 33,
        clusterSize: 85,
        density: 0.91,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 80
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("kaemanite_cs"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("ramanite_cs"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("kaemanite_ke"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("ramanite_rb"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("kaemanite_rb"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("quarate"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("aleutite"),
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
            surfaceRock: GTMaterials.get("kaemanite_cs"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("end/naquadah_new", {
        weight: 17,
        clusterSize: 34,
        density: 0.62,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
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
                    material: GTMaterials.get("enquedite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("enquedine"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("thorium"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("plutonium"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("enquedire"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("naquadah"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("enquedite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("end/taaffeite", {
        weight: 29,
        clusterSize: 71,
        density: 0.56,
        layer: "endstone",
        dimensions: [
            "minecraft:the_end"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 90
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("magnesiotaaffeite_2n2s"),
                    weight: 5,
                    minY: 0,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("magnesiotaaffeite_6n3s"),
                    weight: 4,
                    minY: 0,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("stottite"),
                    weight: 3,
                    minY: 0,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("natanite"),
                    weight: 3,
                    minY: 0,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("foordite"),
                    weight: 2,
                    minY: 0,
                    maxY: 90
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