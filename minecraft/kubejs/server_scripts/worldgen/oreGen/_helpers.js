// priority: 999
// Stores helper functions for ore vein generation

// Validation function
function validateVein(id, config) {

    if (!config.generator)
        throw new Error(id + ": missing generator")

    if (!config.heightRange)
        throw new Error(id + ": missing heightRange")

    const rangeType = config.heightRange.type

    if (
        rangeType !== "uniform" &&
        rangeType !== "triangle"
    ) {
        throw new Error(
            id + ": invalid heightRange.type"
        )
    }

    const generatorType = config.generator.type

    const validGenerators = [
        "layered",
        "veined",
        "dike",
        "cuboid",
        "classic"
    ]

    if (validGenerators.indexOf(generatorType) === -1) {
        throw new Error(
            id + ": invalid generator.type"
        )
    }
}

// Generator Builders
function applyLayeredGenerator(vein, gen) {
    vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => {
            gen.layers.forEach(layer => {
                pattern.layer(l => l
                    .weight(layer.weight)
                    .mat(layer.material)
                    .size(
                        layer.minSize,
                        layer.maxSize
                    )
                )
            })
        })
    )
}

function applyVeinedGenerator(vein, gen) {
    vein.veinedVeinGenerator(generator => {
        gen.oreBlocks.forEach(block => {
            generator.oreBlock(
                block.material,
                block.weight
            )
        })
        gen.rareBlocks.forEach(block => {
            generator.rareBlock(
                block.material,
                block.weight
            )
        })
        generator
            .rareBlockChance(gen.rareBlockChance)
            .veininessThreshold(gen.veininessThreshold)
            .maxRichnessThreshold(gen.maxRichnessThreshold)
            .minRichness(gen.minRichness)
            .maxRichness(gen.maxRichness)
            .edgeRoundoffBegin(gen.edgeRoundoffBegin)
            .maxEdgeRoundoff(gen.maxEdgeRoundoff)
    })
}

function applyDikeGenerator(vein, gen) {
    vein.dikeVeinGenerator(generator => {
        gen.blocks.forEach(block => {
            generator.withBlock(
                block.material,
                block.weight,
                block.minY,
                block.maxY
            )
        })
    })
}

function applyCuboidGenerator(vein, gen) {
    vein.cuboidVeinGenerator(generator => {
        generator
            .top(b => b
                .mat(gen.top.material)
                .size(gen.top.size)
            )
            .middle(b => b
                .mat(gen.middle.material)
                .size(gen.middle.size)
            )
            .bottom(b => b
                .mat(gen.bottom.material)
                .size(gen.bottom.size)
            )
        gen.spread.forEach(material => {
            generator.spread(b => b.mat(material))
        })

    })
}

function applyClassicGenerator(vein, gen) {
    vein.classicVeinGenerator(generator => {
        generator
            .primary(b => b
                .mat(gen.primary.material)
                .size(gen.primary.size)
            )
            .secondary(b => b
                .mat(gen.secondary.material)
                .size(gen.secondary.size)
            )
            .between(b => b
                .mat(gen.between.material)
                .size(gen.between.size)
            )
        gen.sporadic.forEach(material => {
            generator.sporadic(
                b => b.mat(material)
            )
        })
    })
}

// Main Application Functions
function applyGenerator(vein, generator) {
    switch (generator.type) {
        case "layered":
            applyLayeredGenerator(
                vein,
                generator
            )
            break
        case "veined":
            applyVeinedGenerator(
                vein,
                generator
            )
            break
        case "dike":
            applyDikeGenerator(
                vein,
                generator
            )
            break
        case "cuboid":
            applyCuboidGenerator(
                vein,
                generator
            )
            break
        case "classic":
            applyClassicGenerator(
                vein,
                generator
            )
            break
    }
}

function applyHeightRange(vein, range) {
    switch (range.type) {
        case "uniform":
            vein.heightRangeUniform(
                range.min,
                range.max
            )
            break
        case "triangle":
            vein.heightRangeTriangle(
                range.min,
                range.max
            )
            break
    }
}

function applyIndicator(vein, indicator) {
    if (!indicator)
        return
    vein.surfaceIndicatorGenerator(i => i
        .surfaceRock(indicator.surfaceRock)
        .placement(indicator.placement)
        .density(indicator.density)
        .radius(indicator.radius)
    )
}

// MAIN VEIN BUILDER FUNCTION
function buildVein(event, id, config) {
    validateVein(id, config)
    event.add(id, vein => {
        vein.weight(config.weight)
        vein.clusterSize(config.clusterSize)
        vein.density(config.density)
        if (config.discardChanceOnAirExposure != null) {
            vein.discardChanceOnAirExposure(
                config.discardChanceOnAirExposure
            )
        }
        vein.layer(config.layer)
        config.dimensions.forEach(dimension => {
            vein.dimensions(dimension)
        })
        applyHeightRange(
            vein,
            config.heightRange
        )
        applyGenerator(
            vein,
            config.generator
        )
        applyIndicator(
            vein,
            config.indicator
        )
    })
}