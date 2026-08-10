// priority: 1
/**
 * Material Registry for Processing Lines that register enough materials to get their own registry file.
 */

// Wetware Tweaks
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("rotten_meat")
        .dust(1)
        .color(0xe8543a).secondaryColor(0x684a09).iconSet(GTMaterialIconSet.SAND)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("saline_antiseptic")
        .fluid()
        .color(0x99dce5)

    event.create("rotten_sludge")
        .fluid()
        .color(0x997700)
})

// Netherite & Ardite Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("ardite_sand")
        .dust()
        .color(0x9C3C1C)
        .iconSet(GTMaterialIconSet.SAND)

    event.create("ardite_salt")
        .dust()
        .color(0xE6734C)

    event.create("nether_conduit")
        .dust()
        .color(0x664D4D)

    event.create("ardite_slurry")
        .fluid()
        .color(0xAD2F05)

    event.create("impure_molten_ardite")
        .fluid()
        .color(0xAD6639)

    event.create("netherite_scrap")
        .dust().ingot().ore(1, 3)
        .color(0x6D473E)
        .iconSet("dull")
        .addOreByproducts(GTMaterials.Obsidian, GTMaterials.Obsidian, GTMaterials.RarestMetalMixture)
        .ignoredTagPrefixes([TagPrefix.rawOre, TagPrefix.rawOreBlock])
})

// JEAN Chemline
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("chlorine_trifluoride")
        .gas()
        .color(0xCBC4EF)
        .components("1x chlorine", "3x fluorine")

    event.create("chloroethane")
        .gas()
        .color(0xDEEDE6)
        .components("2x carbon", "5x hydrogen", "1x chlorine")
        .formula("C2H5Cl")

    event.create("tetraethyllead")
        .fluid()
        .color(0x6E6F9E)
        .components("1x lead", "8x carbon", "20x hydrogen")
        .formula("Pb(CH3CH2)4")

    event.create("sodium_lead_alloy")
        .ingot()
        .color(0x58649B)
        .components("1x lead", "1x sodium")

    event.create("dragon_breath")
        .fluid()
        .color(0xFF6AB9)

    event.create("jean_gasoline")
        .fluid()
        .color(0xF16AA5)

})

// Primal Mana ...Chemline?
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("elemental_reduction_fluid")
        .fluid()
        .color(0xbbddbd)
        .iconSet("elemental_reduction_fluid")
})

// 
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("hydrobromic_acid")
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
        .color(0x9E5229)
        .components("1x hydrogen", "1x bromine")

})

// Optical Circuits
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("lithium_niobate")
        .liquid()
        .gem()
        .color(0xffe26c)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)
        .components("1x lithium", "1x niobium", "3x oxygen")

    event.create("dielectric_mirror_solution")
        .liquid()
        .color(0xe2fff9)
        .components("7x silicon_dioxide", "1x vibrant_alloy", "4x tantalum_pentoxide", "5x rutile", "11x polyethylene", "3x germanium")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})

// Bromine Line Redux
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("brine")
        .fluid()
        .color(0xD7A76B)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("hot_brine")
        .fluid()
        .color(0xF1C895)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("hot_chlorinated_brine")
        .fluid()
        .color(0x71614E)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("chlorinated_brine_waste")
        .fluid()
        .color(0x948675)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("impure_bromine")
        .fluid()
        .color(0xC6673A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Polymer catalysts
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("samarium_iodide")
        .dust()
        .color(0x574ECE).secondaryColor(0x262F3C).iconSet("dull")
        .components("1x samarium", "2x iodine")
    
    event.create("potassium_nonahydridorhenate")
        .dust()
        .color(0xC0F5EA).secondaryColor(0x8D9797).iconSet("shiny")
        .components("2x potassium", "1x rhenium", "9x hydrogen")
        .formula("K2[ReH9]")
})

