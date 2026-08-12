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
    // OVERWORLD VEINS
    registerOreVein("overworld/tetrahedrite", {
        weight: 60,
        clusterSize: 41,
        density: 0.7,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -12,
            max: 80
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("tetrahedrite"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("tetrahedrite_fe"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("tetrahedrite_ni"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("tetrahedrite_mn"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("stibnite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("tetrahedrite_cd"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("copper"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("tetrahedrite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/beryl", {
        weight: 22,
        clusterSize: 17,
        density: 0.4,
        layer: "deepslate",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -55,
            max: 10
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
                    weight: 3,
                    material: GTMaterials.get("emerald"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("heliodor"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 3,
                    material: GTMaterials.get("aquamarine"),
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
                    material: GTMaterials.get("goshenite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("beryl"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/zinc", {
        weight: 40,
        clusterSize: 26,
        density: 0.6,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -2,
            max: 60
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("sphalerite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("sulfur"),
                    minSize: 1,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("pyrite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("orpiment"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("pentlandite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("acanthite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("chalcocite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("sphalerite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/meteoric_impact_1", {
        weight: 6,
        clusterSize: 45,
        density: 0.2,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 60,
            max: 160
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("copper"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("auricupride"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("icosahedrite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("proxidecagonite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("hexamolybdenum"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("molybdenum"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("hexaferrum"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("molybdenum"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/silver_sulfosalt", {
        weight: 45,
        clusterSize: 32,
        density: 0.65,
        layer: "deepslate",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -35,
            max: 15
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("galena"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("xanthoconite"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("pyrargyrite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("polybasite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("jordanite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("silver"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("xanthoconite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/meteoric_impact_2", {
        weight: 6,
        clusterSize: 50,
        density: 0.2,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 60,
            max: 160
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("nickel"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("antitaenite"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("nisnite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("olgafrankite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("decagonite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("rutheniridosmine"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("olgafrankite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/meteoric_impact_3", {
        weight: 6,
        clusterSize: 55,
        density: 0.2,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 60,
            max: 160
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("iron"),
                    minSize: 2,
                    maxSize: 5
                },
                {
                    weight: 3,
                    material: GTMaterials.get("antitaenite"),
                    minSize: 1,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("cohenite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("hexaferrum"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("tetraferroplatinum"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 1,
                    material: GTMaterials.get("jedwabite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cohenite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/titanium", {
        weight: 17,
        clusterSize: 35,
        density: 0.7,
        layer: "deepslate",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -60,
            max: 15
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("granitic_mineral_sand"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("perovskite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("ilmenite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("rutile"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("benitoite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.25,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.3,
            maxRichness: 0.5,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("perovskite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/lithium", {
        weight: 33,
        clusterSize: 45,
        density: 0.5,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
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
                    material: GTMaterials.get("chlorocalcite"),
                    weight: 5,
                    minY: 45,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("lithium"),
                    weight: 3,
                    minY: 0,
                    maxY: 70
                },
                {
                    material: GTMaterials.get("tungstate"),
                    weight: 2,
                    minY: 0,
                    maxY: 30
                },
                {
                    material: GTMaterials.get("griceite"),
                    weight: 4,
                    minY: 40,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("zabuyelite"),
                    weight: 3,
                    minY: 25,
                    maxY: 60
                },
                {
                    material: GTMaterials.get("spodumene"),
                    weight: 2,
                    minY: 5,
                    maxY: 40
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("perovskite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/tungsten", {
        weight: 20,
        clusterSize: 22,
        density: 0.6,
        layer: "deepslate",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -45,
            max: 5
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("siderite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("rhodochrosite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 3,
                    material: GTMaterials.get("ferberite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("hubnerite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 2,
                    material: GTMaterials.get("cassiterite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 1,
                    material: GTMaterials.get("krasnoselskite"),
                    minSize: 1,
                    maxSize: 3
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("ferberite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/rare_earth_1", {
        weight: 27,
        clusterSize: 85,
        density: 0.77,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 10,
            max: 85
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("aragonite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("bastnasite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("bastnasite_y"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("bastnasite_la"),
                    weight: 2
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("bastnasite_nd"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("remondite_ce"),
                    weight: 1
                },
                {
                    material: GTMaterials.get("remondite_la"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.30,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.5,
            minRichness: 0.4,
            maxRichness: 0.9,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("bastnasite"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/rare_earth_2", {
        weight: 18,
        clusterSize: 65,
        density: 0.97,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 0,
            max: 75
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("fullers_earth"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("paragonite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("gadolinite_ce"),
                    weight: 4
                },
                {
                    material: GTMaterials.get("gadolinite_y"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("gadolinite_nd"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("bazzite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("beryl"),
                    weight: 1
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
            surfaceRock: GTMaterials.get("gadolinite_ce"),
            placement: "below",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/platinum_group", {
        weight: 18,
        clusterSize: 27,
        density: 0.4,
        layer: "deepslate",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: -60,
            max: -10
        },
        generator: {
            type: "layered",
            layers: [
                {
                    weight: 5,
                    material: GTMaterials.get("pentlandite"),
                    minSize: 2,
                    maxSize: 4
                },
                {
                    weight: 4,
                    material: GTMaterials.get("cooperite"),
                    minSize: 2,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("braggite"),
                    minSize: 1,
                    maxSize: 3
                },
                {
                    weight: 3,
                    material: GTMaterials.get("daomanite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("driekopite"),
                    minSize: 1,
                    maxSize: 2
                },
                {
                    weight: 1,
                    material: GTMaterials.get("polarite"),
                    minSize: 1,
                    maxSize: 2
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("cooperite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/azurite", {
        weight: 31,
        clusterSize: 70,
        density: 0.9,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "uniform",
            min: 20,
            max: 90
        },
        generator: {
            type: "veined",
            oreBlocks: [
                {
                    material: GTMaterials.get("calcite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("azurite"),
                    weight: 5
                },
                {
                    material: GTMaterials.get("malachite"),
                    weight: 3
                },
                {
                    material: GTMaterials.get("azurmalachite"),
                    weight: 3
                }
            ],
            rareBlocks: [
                {
                    material: GTMaterials.get("sodalite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("lazurite"),
                    weight: 2
                },
                {
                    material: GTMaterials.get("lazulite"),
                    weight: 1
                }
            ],
            rareBlockChance: 0.95,
            veininessThreshold: 0.1,
            maxRichnessThreshold: 0.3,
            minRichness: 0.5,
            maxRichness: 1.0,
            edgeRoundoffBegin: 10,
            maxEdgeRoundoff: 0.2
        },
        indicator: {
            surfaceRock: GTMaterials.get("azurite"),
            placement: "above",
            density: 0.2,
            radius: 5
        }
    })
    registerOreVein("overworld/lithium", {
        weight: 40,
        clusterSize: 85,
        density: 0.66,
        layer: "stone",
        dimensions: [
            "minecraft:overworld"
        ],
        heightRange: {
            type: "triangle",
            min: 20,
            max: 100
        },
        generator: {
            type: "dike",
            blocks: [
                {
                    material: GTMaterials.get("siderite"),
                    weight: 5,
                    minY: 35,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("phosphosiderite"),
                    weight: 4,
                    minY: 20,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("triphylite"),
                    weight: 4,
                    minY: 40,
                    maxY: 100
                },
                {
                    material: GTMaterials.get("lipscombite"),
                    weight: 2,
                    minY: 20,
                    maxY: 90
                },
                {
                    material: GTMaterials.get("phosphophyllite"),
                    weight: 3,
                    minY: 20,
                    maxY: 75
                },
                {
                    material: GTMaterials.get("xenophyllite"),
                    weight: 2,
                    minY: 25,
                    maxY: 80
                },
                {
                    material: GTMaterials.get("phosphorus"),
                    weight: 1,
                    minY: 20,
                    maxY: 100
                }
            ]
        },
        indicator: {
            surfaceRock: GTMaterials.get("phosphosiderite"),
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