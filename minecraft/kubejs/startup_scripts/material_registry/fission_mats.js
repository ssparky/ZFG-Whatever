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

    // Reactor
    event.create("zircaloy")
        .ingot().fluid()
        .color(0xCEAC94).secondaryColor(0x836233)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components("11x zirconium", "1x niobium", "1x nickel")
        .flags(plate, rod, long_rod, frame, gear, gear_small, spring, rotor, dense_plate)
        .blastTemp(4900, "high", GTValues.VHA[GTValues.IV], 1400)

    // Fissionable elements
    event.create("thorium_232")
        .ingot().liquid(2023)
        .element(GTElements.get("thorium-232"))
        .color(0x4A5346).secondaryColor(0x0D0F0D).iconSet("radioactive")

    event.create("uranium_233")
        .ingot().liquid(1405)
        .element(GTElements.get("uranium-233"))
        .color(0x23BA23).secondaryColor(0x45463B).iconSet("radioactive")

    event.create("neptunium_236")
        .ingot().liquid(914)
        .element(GTElements.get("neptunium-236"))
        .color(0x3C6598).iconSet("radioactive")

    event.create("plutonium_238")
        .ingot().liquid(912)
        .element(GTElements.get("plutonium-238"))
        .color(0xA20404).secondaryColor(0x222730).iconSet("radioactive")

    event.create("plutonium_242")
        .ingot().liquid(912)
        .element(GTElements.get("plutonium-242"))
        .color(0xD75E5E).secondaryColor(0x222730).iconSet("radioactive")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    event.create("americium_241")
        .ingot().liquid(1449)
        .element(GTElements.get("americium-241"))
        .color(0x145F51).iconSet("radioactive")

    event.create("americium_242")
        .ingot().liquid(1449)
        .element(GTElements.get("americium-242"))
        .color(0x308D7C).iconSet("radioactive")

    event.create("curium_243")
        .ingot().liquid(1613)
        .element(GTElements.get("curium-243"))
        .color(0x240840).iconSet("radioactive")

    event.create("curium_245")
        .ingot().liquid(1613)
        .element(GTElements.get("curium-245"))
        .color(0x38145D).iconSet("radioactive")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    event.create("curium_247")
        .ingot().liquid(1613)
        .element(GTElements.get("curium-247"))
        .color(0x60229E).iconSet("radioactive")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    event.create("berkelium_248")
        .ingot().liquid(1259)
        .element(GTElements.get("berkelium-248"))
        .color(0x8E2A0C).iconSet("radioactive")

    event.create("californium_249")
        .ingot().liquid(1173)
        .element(GTElements.get("californium-249"))
        .color(0xB50B38).iconSet("radioactive")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    event.create("californium_250")
        .ingot().liquid(1173)
        .element(GTElements.get("californium-250"))
        .color(0x550218).iconSet("radioactive")

    event.create("californium_252")
        .ingot().liquid(1173)
        .element(GTElements.get("californium-252"))
        .color(0x62031C).iconSet("radioactive")

    event.create("einsteinium_253")
        .ingot().liquid(1133)
        .element(GTElements.get("einsteinium-253"))
        .color(0xA07C05).iconSet("radioactive")
    
    event.create("einsteinium_254")
        .ingot().liquid(1133)
        .element(GTElements.get("einsteinium-254"))
        .color(0xF0BB0C).iconSet("radioactive")

    event.create("fermium_255")
        .ingot().liquid(1800)
        .element(GTElements.get("fermium-255"))
        .color(0xB180D4).iconSet("radioactive")

    // Fissionable alloys
})