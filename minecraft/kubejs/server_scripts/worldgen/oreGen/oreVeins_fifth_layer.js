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
    // LAYER 5 VEINS
    event.add("fifth_layer/violet_diamond", vein => {
        vein.weight(40)
        vein.clusterSize(21)
        vein.density(0.55)
        vein.layer("fifth_layer")
        vein.dimensions("infinite_abyss:fifth_layer")
        vein.heightRangeUniform(20, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).block(() => Block.getBlock("infinite_abyss:violet_diamond_ore")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("pink_diamond")).size(2,3))
                .layer(l => l.weight(3).mat(GTMaterials.get("ballas")).size(1,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("chaoite")).size(2,3))
                .layer(l => l.weight(2).mat(GTMaterials.get("sassolite")).size(1,2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("pink_diamond"))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    registerOreVein("fifth_layer/salt", {
        weight: 62,
        clusterSize: 39,
        density: 0.71,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 3,
            max: 93
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("hydrohalite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("salt"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("rock_salt"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("villiaumite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("carobbiite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("hydrohalite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/calcite", {
        weight: 58,
        clusterSize: 92,
        density: 0.95,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
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
                    material: GTMaterials.get("calcite"),
                    weight: 5,
                    minY: 43,
                    maxY: 118
                },
                {
                    material: GTMaterials.get("aragonite"),
                    weight: 4,
                    minY: 43,
                    maxY: 88
                },
                {
                    material: GTMaterials.get("strontianite"),
                    weight: 3,
                    minY: 43,
                    maxY: 108
                },
                {
                    material: GTMaterials.get("otavite"),
                    weight: 2,
                    minY: 43,
                    maxY: 76
                },
                {
                    material: GTMaterials.get("witherite"),
                    weight: 2,
                    minY: 43,
                    maxY: 66
                },
                {
                    material: GTMaterials.get("cerussite"),
                    weight: 3,
                    minY: 43,
                    maxY: 58
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("calcite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/hydroxide_1", {
        weight: 31,
        clusterSize: 85,
        density: 0.59,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 2,
            max: 70
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("brucite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("portlandite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("behoite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("ferrihydrite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("anthoinite"),
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
            surfaceRock: GTMaterials.get("portlandite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/hydrate_1", {
        weight: 50,
        clusterSize: 65,
        density: 0.79,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 52,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("opal"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("silhydrite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("blue_opal"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("bosoite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("amethyst"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.91,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.73,
            maxRichness: 0.99,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("silhydrite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/tungstite", {
        weight: 20,
        clusterSize: 62,
        density: 0.64,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 65
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("tungstite"),
                    weight: 5,
                    minY: 0,
                    maxY: 55
                },
                {
                    material: GTMaterials.get("hydrotungstite"),
                    weight: 5,
                    minY: 10,
                    maxY: 65
                },
                {
                    material: GTMaterials.get("anthoinite"),
                    weight: 3,
                    minY: 0,
                    maxY: 65
                },
                {
                    material: GTMaterials.get("tungstate"),
                    weight: 2,
                    minY: 42,
                    maxY: 65
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("tungstite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/opal", {
        weight: 44,
        clusterSize: 22,
        density: 0.80,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 58,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("opal"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("blue_opal"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("black_opal"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("euclase"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("chalcedony"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("blue_opal"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/manganocalcite", {
        weight: 29,
        clusterSize: 90,
        density: 0.89,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 32,
            max: 100
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("calcite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("manganocalcite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("rhodochrosite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("siderite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("manganite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.61,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.43,
            maxRichness: 0.79,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("manganocalcite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/magnesium_salt", {
        weight: 18,
        clusterSize: 35,
        density: 0.72,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 78,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("hexahydrite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("epsomite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("nickelhexahydrite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("gunningite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("alunogen"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("epsomite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/tin_hydroxide", {
        weight: 14,
        clusterSize: 93,
        density: 0.81,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 78
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("natanite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("eakerite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("tin"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("abhurite"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("nybergite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("cabriite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.88,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.63,
            maxRichness: 0.91,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("eakerite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/apatite", {
        weight: 38,
        clusterSize: 30,
        density: 0.92,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 26,
            max: 110
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("hydroxylapatite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("apatite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("fluorapatite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("oxycalciopyrochlore"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("pyrochlore"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("hydroxynatropyrochlore"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("fluorplumbopyrochlore"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("hydroxylapatite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/hydrate_2", {
        weight: 27,
        clusterSize: 62,
        density: 0.64,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 105
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("brassite"),
                    weight: 5,
                    minY: 20,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("yvonite"),
                    weight: 4,
                    minY: 20,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("krautite"),
                    weight: 3,
                    minY: 20,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("geigerite"),
                    weight: 2,
                    minY: 42,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("bulachite"),
                    weight: 2,
                    minY: 72,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("aqualite"),
                    weight: 1,
                    minY: 20,
                    maxY: 75
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("brassite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("fifth_layer/hydrate_3", {
        weight: 40,
        clusterSize: 33,
        density: 0.72,
        layer: "fifth_layer",
        dimensions: [
            "infinite_abyss:fifth_layer"
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
                    material: GTMaterials.get("trona"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("mirabilite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("gypsum"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("zeolite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("borax"),
                    minSize: 1,
                    maxSize: 4
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("trona"),
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