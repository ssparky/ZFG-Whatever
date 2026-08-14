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
    // LAYER 2 VEINS
    registerOreVein("second_layer/black_opal", {
        weight: 28,
        clusterSize: 29,
        density: 0.64,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 30,
            max: 92
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("onyx"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("black_opal"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("fire_opal"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("seifertite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("majorite"),
                    minSize: 1,
                    maxSize: 1
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("black_opal"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/tungsten", {
        weight: 38,
        clusterSize: 93,
        density: 0.74,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 3,
            max: 73
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("wolfeite"),
                    weight: 5,
                    minY: 3,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("ferberite"),
                    weight: 4,
                    minY: 8,
                    maxY: 73
                },
                {
                    material: GTMaterials.get("krasnoselskite"),
                    weight: 3,
                    minY: 35,
                    maxY: 73
                },
                {
                    material: GTMaterials.get("stolzite"),
                    weight: 3,
                    minY: 3,
                    maxY: 49
                },
                {
                    material: GTMaterials.get("russellite"),
                    weight: 2,
                    minY: 3,
                    maxY: 53
                },
                {
                    material: GTMaterials.get("wodginite"),
                    weight: 2,
                    minY: 33,
                    maxY: 73
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("wolfeite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/sulfosalts_1", {
        weight: 45,
        clusterSize: 83,
        density: 0.71,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
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
                    material: GTMaterials.get("zhonghongite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("interliveingite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("paarite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("gladite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("luxembourgite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("berryite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("sulfur"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.38,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.45,
            maxRichness: 0.85,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("paarite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/sulfosalts_2", {
        weight: 48,
        clusterSize: 79,
        density: 0.74,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 92
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("rathite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("sartorite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("veenite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("boulangerite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("heptasartorite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("polloneite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("sulfur"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.41,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.35,
            maxRichness: 0.92,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("sartorite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/sulfates", {
        weight: 46,
        clusterSize: 33,
        density: 0.44,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 50,
            max: 113
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 4,
                    material: GTMaterials.get("drobecite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("efremovite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("arcanite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("butlerite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("szmikite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("drobecite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/smoky_quartz", {
        weight: 52,
        clusterSize: 36,
        density: 0.90,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 120
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("smoky_quartz"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("citrine"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 2,
                    material: GTMaterials.get("eosphorite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("humite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("mozartite"),
                    minSize: 1,
                    maxSize: 1
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("smoky_quartz"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/mercuric_tetrahedrite", {
        weight: 35,
        clusterSize: 117,
        density: 0.62,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 23,
            max: 88
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("tetrahedrite_mn"),
                    weight: 5,
                    minY: 23,
                    maxY: 88
                },
                {
                    material: GTMaterials.get("tetrahedrite_hg"),
                    weight: 4,
                    minY: 23,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("tetrahedrite_cd"),
                    weight: 3,
                    minY: 29,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("cinnabar"),
                    weight: 4,
                    minY: 41,
                    maxY: 88
                },
                {
                    material: GTMaterials.get("arzakite"),
                    weight: 2,
                    minY: 23,
                    maxY: 53
                },
                {
                    material: GTMaterials.get("iltisite"),
                    weight: 1,
                    minY: 33,
                    maxY: 81
                },
                {
                    material: GTMaterials.get("cadsulfohite"),
                    weight: 1,
                    minY: 23,
                    maxY: 49
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("tetrahedrite_hg"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/red_beryl", {
        weight: 17,
        clusterSize: 26,
        density: 0.72,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 15,
            max: 95
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("red_beryl"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 4,
                    material: GTMaterials.get("morganite"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("pezzottaite_cs"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("milarite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("vayrynenite"),
                    minSize: 1,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("red_beryl"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/tin_sulfide", {
        weight: 41,
        clusterSize: 105,
        density: 0.47,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
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
                    material: GTMaterials.get("stannite"),
                    weight: 5,
                    minY: 60,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("mohite"),
                    weight: 4,
                    minY: 75,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("kesterite"),
                    weight: 3,
                    minY: 65,
                    maxY: 110
                },
                {
                    material: GTMaterials.get("stangersite"),
                    weight: 4,
                    minY: 70,
                    maxY: 95
                },
                {
                    material: GTMaterials.get("hemusite"),
                    weight: 2,
                    minY: 60,
                    maxY: 120
                },
                {
                    material: GTMaterials.get("cylindrite"),
                    weight: 1,
                    minY: 60,
                    maxY: 90
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("stannite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/red_garnet", {
        weight: 48,
        clusterSize: 79,
        density: 0.74,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "uniform",
            min: 70,
            max: 120
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("red_garnet"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("umbalite"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("almandine"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("pyrope"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("hessonite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("calderite"),
                    weight: 2
                }
            ],
            rareBlockChance: 0.91,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.85,
            maxRichness: 0.99,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("umbalite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("second_layer/bismuth_sulfosalts", {
        weight: 31,
        clusterSize: 89,
        density: 0.81,
        layer: "second_layer",
        dimensions: [
            "infinite_abyss:second_layer"
        ],
        heightRange: {
            type: "triangle",
            min: 13,
            max: 68
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("cuprobismutite"),
                    weight: 5,
                    minY: 13,
                    maxY: 68
                },
                {
                    material: GTMaterials.get("eskimoite"),
                    weight: 4,
                    minY: 13,
                    maxY: 45
                },
                {
                    material: GTMaterials.get("muckeite"),
                    weight: 3,
                    minY: 29,
                    maxY: 68
                },
                {
                    material: GTMaterials.get("proudite"),
                    weight: 3,
                    minY: 13,
                    maxY: 60
                },
                {
                    material: GTMaterials.get("hansblockite"),
                    weight: 2,
                    minY: 13,
                    maxY: 41
                },
                {
                    material: GTMaterials.get("kudriavite"),
                    weight: 2,
                    minY: 19,
                    maxY: 62
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cuprobismutite"),
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