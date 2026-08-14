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
    // LAYER 1 VEINS
    registerOreVein("first_layer/moissanite", {
        weight: 18,
        clusterSize: 21,
        density: 0.84,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 60
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("graphite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("bort"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("moissanite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("ballas"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("carbonado"),
                    minSize: 1,
                    maxSize: 1
                },
                {
                    weight: 2,
                    material: GTMaterials.get("sinoite"),
                    minSize: 1,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("moissanite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/beryl_like", {
        weight: 31,
        clusterSize: 115,
        density: 0.63,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("beryllite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("beryllonite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("eudidymite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("beryl"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("rhodizite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("milarite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("goshenite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.45,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.55,
            maxRichness: 0.95,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("beryllite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/arsenic", {
        weight: 41,
        clusterSize: 97,
        density: 0.64,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 60,
            max: 120
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("orpiment"),
                    weight: 6,
                    minY: 75,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("anorpiment"),
                    weight: 6,
                    minY: 60,
                    maxY: 105
                },
                {
                    material: GTMaterials.get("lorandite"),
                    weight: 3,
                    minY: 60,
                    maxY: 95
                },
                {
                    material: GTMaterials.get("realgar"),
                    weight: 3,
                    minY: 60,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("erythrite"),
                    weight: 2,
                    minY: 85,
                    maxY: 120
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("orpiment"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/fluoric_yttrium", {
        weight: 40,
        clusterSize: 135,
        density: 0.41,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("yttrofluorite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("topazolite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("thalenite_y"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("gagarinite_y"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("topaz"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("blue_topaz"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("gagarinite_ce"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("maxwellite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.75,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.6,
            minRichness: 0.25,
            maxRichness: 0.75,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("yttrofluorite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/titanium", {
        weight: 18,
        clusterSize: 36,
        density: 0.64,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
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
                    material: GTMaterials.get("ilmenite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("perovskite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("macedonite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("anatase"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("mannardite"),
                    minSize: 1,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("ilmenite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/platinum_group", {
        weight: 16,
        clusterSize: 27,
        density: 0.69,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 40,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("melonite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("merenskyite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("temagamite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("cooperite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("rhodplumsite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("merenskyite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/cobalt", {
        weight: 50,
        clusterSize: 95,
        density: 0.83,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 60,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("cobaltpentlandite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("pentlandite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("erythrite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("burgessite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("willyamite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("cobaltite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.25,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.5,
            minRichness: 0.15,
            maxRichness: 0.95,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("erythrite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/manganese", {
        weight: 51,
        clusterSize: 113,
        density: 0.64,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 20,
            max: 90
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("pyrolusite"),
                    weight: 5,
                    minY: 40,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("spessartine"),
                    weight: 4,
                    minY: 30,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("calderite"),
                    weight: 4,
                    minY: 30,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("wodginite"),
                    weight: 2,
                    minY: 20,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("braunite"),
                    weight: 3,
                    minY: 20,
                    maxY: 60
                },
                {
                    material: GTMaterials.get("celleriite"),
                    weight: 2,
                    minY: 20,
                    maxY: 40
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("calderite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/chromium", {
        weight: 56,
        clusterSize: 108,
        density: 0.80,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 30,
            max: 100
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("chromatite"),
                    weight: 5,
                    minY: 30,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("xieite"),
                    weight: 4,
                    minY: 30,
                    maxY: 85
                },
                {
                    material: GTMaterials.get("guyanaite"),
                    weight: 3,
                    minY: 50,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("tarapacaite"),
                    weight: 2,
                    minY: 45,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("mariinskite"),
                    weight: 2,
                    minY: 30,
                    maxY: 90
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("chromatite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/copper_selenium", {
        weight: 22,
        clusterSize: 90,
        density: 0.53,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 10,
            max: 70
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("umangite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("klockmannite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("freboldite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("vulcanite"),
                    weight: 1
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("fischesserite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("copper"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.15,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.2,
            minRichness: 0.10,
            maxRichness: 0.65,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("umangite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/mixed_tin", {
        weight: 45,
        clusterSize: 75,
        density: 0.93,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 50,
            max: 110
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("cassiterite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("wodginite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("tusionite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("eakerite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("topaz"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("foordite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("stokesite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("natanite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("malayaite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.85,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.5,
            minRichness: 0.55,
            maxRichness: 0.95,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("tusionite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/spinel", {
        weight: 50,
        clusterSize: 105,
        density: 0.94,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 50,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("spinel"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("chrysoberyl"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("cuprospinel"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("ceylonite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("cymophane"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("alexandrite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.65,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.35,
            maxRichness: 0.75,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("spinel"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("first_layer/bismuth_sulfide", {
        weight: 29,
        clusterSize: 45,
        density: 0.55,
        layer: "first_layer",
        dimensions: [
            "infinite_abyss:first_layer"
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
                    weight: 5,
                    material: GTMaterials.get("bismuthinite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("mozgovaite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("matildite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("gladite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("joseite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
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