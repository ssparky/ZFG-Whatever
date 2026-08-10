GTCEuStartupEvents.registry('gtceu:material', event => {
    // Useful shorthands
    var decomp_elec = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
    var decomp_cent = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
    var disable_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION
    var explosive = GTMaterialFlags.EXPLOSIVE // No implosion compressor recipes, gives ash in arc furnace
    var flammable = GTMaterialFlags.FLAMMABLE // No implosion compressor, EBF, or furnace recipes
    var sticky = GTMaterialFlags.STICKY // Unused fluid property
    var phospho = GTMaterialFlags.PHOSPHORESCENT // Unused fluid property
    var plate = GTMaterialFlags.GENERATE_PLATE
    var dense_plate = GTMaterialFlags.GENERATE_DENSE
    var rod = GTMaterialFlags.GENERATE_ROD
    var bolt_screw = GTMaterialFlags.GENERATE_BOLT_SCREW
    var frame = GTMaterialFlags.GENERATE_FRAME
    var gear = GTMaterialFlags.GENERATE_GEAR
    var long_rod = GTMaterialFlags.GENERATE_LONG_ROD
    //
    var foil = GTMaterialFlags.GENERATE_FOIL
    var ring = GTMaterialFlags.GENERATE_RING
    var spring = GTMaterialFlags.GENERATE_SPRING
    var spring_small = GTMaterialFlags.GENERATE_SPRING_SMALL
    var gear_small = GTMaterialFlags.GENERATE_SMALL_GEAR
    var wire_fine = GTMaterialFlags.GENERATE_FINE_WIRE
    var rotor = GTMaterialFlags.GENERATE_ROTOR
    var round = GTMaterialFlags.GENERATE_ROUND
    //
    var crystal = GTMaterialFlags.CRYSTALLIZABLE
    var lens = GTMaterialFlags.GENERATE_LENS

    // AE2
    // Charged certus
    event.create("charged_certus_quartz")
        .gem()
        .color(0xc2d6ff).secondaryColor(0x86bacf)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("certus_quartz")
    // Fluix
    event.create("fluix")
        .gem()
        .dust()
        .color(0x9c6fc9).secondaryColor(0x614895)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components("charged_certus_quartz", "redstone", "nether_quartz")

    // Sky Stone
    event.create("sky_stone")
        .dust()
        .color(0x95A9B8).secondaryColor(0x3B4447)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("1x basalt", "1x certus_quartz", "2x carbon")

    // Dark Steel (obsidian + steel + ..., mixer)
    event.create("dark_steel")
        .ingot().fluid()
        .components("2x steel", "1x zinc", "4x obsidian")
        .color(0x303F43).secondaryColor(0x182023).iconSet(GTMaterialIconSet.DULL)
        .flags(plate, rod, bolt_screw, dense_plate, spring, foil)

    // Sky Steel (skystone + ...)
    event.create("sky_steel")
        .ingot().fluid()
        .components("1x manganese", "3x sky_stone") 
        .color(0xBBECD8).secondaryColor(0x333735).iconSet(GTMaterialIconSet.METALLIC)
        .flags(plate, foil, gear, gear_small, rod, ring, disable_decomp)
        .blastTemp(1400, "low", GTValues.VHA[GTValues.MV], 400)

    // Diamond sky steel
    event.create("diamond_sky_steel")
        .ingot().fluid()
        .components("1x sky_steel", "1x diamond")
        .color(0x93D4D5).secondaryColor(0x3C4E4E).iconSet(GTMaterialIconSet.DULL)
        .flags(plate, rod, ring, round)
        .blastTemp(2200, "low", GTValues.VA[GTValues.MV], 960)

    // Gold sky steel
    event.create("gold_sky_steel")
        .ingot().fluid()
        .components("1x sky_steel", "1x gold")
        .color(0xD5D593).secondaryColor(0x4D4E3C).iconSet(GTMaterialIconSet.SHINY)
        .flags(plate, rod, ring, round)
        .blastTemp(2200, "low", GTValues.VA[GTValues.MV], 960)
    
    // Certus sky steel
    event.create("certus_sky_steel")
        .ingot().fluid()
        .components("1x sky_steel", "1x certus_quartz")
        .color(0xD2E7E4).secondaryColor(0x72726D).iconSet(GTMaterialIconSet.METALLIC)
        .flags(plate, rod, ring, round)
        .blastTemp(2200, "low", GTValues.VA[GTValues.MV], 960)

    // Fluix dark steel (megacells)
    event.create("fluix_dark_steel")
        .ingot().fluid()
        .components("2x dark_steel", "1x thulium", "4x fluix")
        .color(0x521271).secondaryColor(0x130719).iconSet(GTMaterialIconSet.METALLIC)
        .flags(plate, rod, ring, round, rotor, gear)
        .blastTemp(4000, "high", GTValues.VHA[GTValues.IV], 1400)

    // EIO / Thermal Materials
    // Energetic Alloy
    event.create("energetic_alloy")
        .ingot().fluid()
        .components("2x gold", "3x redstone", "1x glowstone")
        .color(0xffb545).secondaryColor(0xe13923).iconSet(GTMaterialIconSet.SHINY)
        .flags(plate, rod, ring, round, rotor, gear, dense_plate, wire_fine, foil)
        .blastTemp(1000, "low", GTValues.VHA[GTValues.MV], 300)
        .cableProperties(GTValues.V[GTValues.MV], 4, 1, false)

    // Vibrant Alloy
    event.create("vibrant_alloy")
        .ingot().fluid()
        .components("2x energetic_alloy", "1x ender_pearl")
        .color(0xa4ff70).secondaryColor(0x24e048).iconSet(GTMaterialIconSet.SHINY)
        .flags(plate, rod, ring, round, rotor, gear, dense_plate, wire_fine, foil)
        .blastTemp(1900, "low", GTValues.VHA[GTValues.MV], 400)
        .cableProperties(GTValues.V[GTValues.HV], 6, 1, false)
})