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
    // LAYER 6 VEINS
    event.add("sixth_layer/vicerite", vein => {
        vein.weight(17)
        vein.clusterSize(27)
        vein.density(0.85)
        vein.layer("sixth_layer")
        vein.dimensions("infinite_abyss:sixth_layer")
        vein.heightRangeUniform(0, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:vicerite_ore")).size(2,4))
                .layer(l => l.weight(4).block(() => Block.getBlock("minecraft:ice")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("cubo_ice")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("diamond")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("moissanite")).size(1,3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("cubo_ice"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    registerOreVein("sixth_layer/iridosmine", {
        weight: 15,
        clusterSize: 82,
        density: 0.49,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 72
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("rutheniridosmine"),
                    weight: 5,
                    minY: 0,
                    maxY: 72
                },
                {
                    material: GTMaterials.get("iridium"),
                    weight: 4,
                    minY: 20,
                    maxY: 72
                },
                {
                    material: GTMaterials.get("osmium"),
                    weight: 3,
                    minY: 0,
                    maxY: 52
                },
                {
                    material: GTMaterials.get("chengdeite"),
                    weight: 2,
                    minY: 10,
                    maxY: 72
                },
                {
                    material: GTMaterials.get("mayingite"),
                    weight: 2,
                    minY: 0,
                    maxY: 62
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("rutheniridosmine"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("sixth_layer/blue_beryl", {
        weight: 25,
        clusterSize: 85,
        density: 0.59,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 28,
            max: 110
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("aquamarine"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("maxixe"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("bazzite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("euclase"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.61,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.33,
            maxRichness: 0.97,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("aquamarine"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("sixth_layer/sulfate", {
        weight: 51,
        clusterSize: 37,
        density: 0.66,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 33,
            max: 113
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("anhydrite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("celestine"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("anglesite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("barite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("glikinite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("anhydrite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("sixth_layer/indium_hydroxide", {
        weight: 30,
        clusterSize: 22,
        density: 0.58,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 93
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("dzhalindite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("yanomamite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("sweetite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("yixunite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("dzhalindite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("sixth_layer/hydrate", {
        weight: 52,
        clusterSize: 102,
        density: 0.73,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 15,
            max: 115
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("antarcticite"),
                    weight: 5,
                    minY: 15,
                    maxY: 115
                },
                {
                    material: GTMaterials.get("bischofite"),
                    weight: 4,
                    minY: 35,
                    maxY: 115
                },
                {
                    material: GTMaterials.get("carnallite"),
                    weight: 3,
                    minY: 10,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("cubo_ice"),
                    weight: 2,
                    minY: 15,
                    maxY: 115
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("antarcticite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("sixth_layer/bismuth_telluride", {
        weight: 38,
        clusterSize: 91,
        density: 0.77,
        layer: "sixth_layer",
        dimensions: [
            "infinite_abyss:sixth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 0,
            max: 80
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("bismuthinite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("joseite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("pilsenite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("dulanggouite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("hedleyite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("maslovite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("skippenite"),
                    weight: 4
                }
            ],
            rareBlockChance: 0.92,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.7,
            minRichness: 0.63,
            maxRichness: 0.99,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("bismuthinite"),
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