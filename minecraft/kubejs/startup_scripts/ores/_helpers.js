// priority: 999
// Stores helper functions for ore modification script

// Defaults
function applyDefaults(config) {
    return {
        byproducts: config.byproducts || [],
        washedIn: config.washedIn || null,
        directSmeltResult:
            config.directSmeltResult || null,
        separatedInto:
            config.separatedInto || [],
        removeExisting:
            config.removeExisting !== false
    }
}

// Apply Ore Property
function applyOreProperty(materialName, config) {

    config = applyDefaults(config)

    const material = GTMaterials.get(materialName)

    if (!material) {
        throw new Error(
            "Unknown material: " + materialName
        )
    }

    // Remove existing property
    if (
        config.removeExisting &&
        material.hasProperty(PropertyKey.ORE)
    ) {
        material.removeProperty(PropertyKey.ORE)
    }

    // Create new property
    const oreProp = new $OreProperty()

    //Byproducts
    if (config.byproducts.length > 0) {
        oreProp.setOreByProducts(
            config.byproducts[0] || null,
            config.byproducts[1] || null,
            config.byproducts[2] || null,
            config.byproducts[3] || null
        )
    }

    // Washed in
    if (config.washedIn) {
        oreProp.setWashedIn(
            GTMaterials.get(config.washedIn)
        )
    }

    // Direct smelt
    if (config.directSmeltResult) {
        oreProp.setDirectSmeltResult(
            config.directSmeltResult
        )

    }

    // Separated into
    if (config.separatedInto) {
        oreProp.setSeparatedInto(
            config.separatedInto
        )

    }

    // Apply property
    material.setProperty(
        $PropertyKey.ORE,
        oreProp
    )
}
