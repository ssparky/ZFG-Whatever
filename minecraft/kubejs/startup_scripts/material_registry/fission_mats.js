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
    var fisElements = [
        ["thorium_232", 2023, 0x4A5346, 0x0D0F0D, "fr"],
        ["uranium_233", 1405, 0x23BA23, 0x3D7F2D, null],
        ["neptunium_236", 914, 0x3C6598, 0x1A4356, "pw"],
        ["plutonium_238", 912, 0xA20404, 0x222730, null],
        ["plutonium_242", 912, 0xD75E5E, 0x673C3C, "pf"],
        ["americium_241", 1449, 0x145F51, 0x0F4241, null],
        ["americium_242", 1449, 0x308D7C, 0x2C644F, null],
        ["curium_243", 1613, 0x240840, 0x090310, null],
        ["curium_245", 1613, 0x38145D, 0x2B1441, "pf"],
        ["curium_247", 1613, 0x60229E, 0x4A316F, "pf"],
        ["berkelium_248", 1259, 0x8E2A0C, 0x472716, "fr"],
        ["californium_249", 1173, 0xB50B38, 0x65272F, "pf"],
        ["californium_250", 1173, 0x550218, 0x35030B, null],
        ["californium_252", 1173, 0x62031C, 0x3F1317, null],
        ["einsteinium_253", 1133, 0xA07C05, 0x5A4C23, null],
        ["einsteinium_254", 1133, 0xF0BB0C, 0xBAAE42, null],
        ["fermium_255", 1800, 0xB180D4, 0x6E466F, "pw"]
    ]
    
    fisElements.forEach(([name, temp, color, secColor, flags]) => {
        var mat = event.create(name)
        mat.ingot().liquid(temp)
        mat.element(GTElements.get(name.replace("_", "-")))
        mat.color(color).secondaryColor(secColor).iconSet("radioactive")
        if (flags == "p") {
            mat.flags(plate)
        }
        else if (flags == "pf") {
            mat.flags(plate, foil)
        }
        else if (flags == "fr") {
            mat.flags(plate, rod, frame)
        }
        else if (flags == "pw") {
            mat.flags(plate, wire_fine)
        }
    })

    // Fissionable alloys (currently only for normal fission reactor, maybe breeder later. Not for molten salt reactors)
    var depletElements = [
        //["thorium_232", 2023, 0x383938, 0x0D0D0D, "thorium-232"],
        ["uranium_233", 1405, 0x4B874B, 0x3E5937, "uranium-233"],
        ["uranium_235", 1405, 0x2E522E, 0x263D21, "uranium_235"],
        //["uranium_238", 1405, 0x1A261A, 0x121811, "uranium"],
        ["neptunium_236", 914, 0x3F4B5B, 0x1A2A31, "neptunium-236"],
        //["neptunium_237", 914, 0x283B49, 0x0C171C, "neptunium"],
        ["plutonium_239", 912, 0x5C3333, 0x241B1B, "plutonium"],
        ["plutonium_241", 912, 0x542020, 0x321414, "plutonium-241"],
        //["plutonium_242", 912, 0xA66F6F, 0x433232, "plutonium-242"],
        ["americium_242", 1449, 0x3C625B, 0x283B34, "americium-242"],
        //["americium_243", 1449, 0x203A35, 0x13201B, "americium"],
        ["curium_245", 1613, 0x291C35, 0x1E1725, "curium-245"],
        //["curium_246", 1613, 0x42344F, 0x2B1E38, "curium"],
        //["berkelium_247", 1259, 0x77493B, 0x503424, "berkelium"],
        ["berkelium_248", 1259, 0x653628, 0x1F1612, "berkelium-248"],
        //["californium_249", 1173, 0x80364A, 0x48282D, "californium-249"],
        ["californium_252", 1173, 0x3C121D, 0x140A0B, "californium-252"],
        //["einsteinium_252", 1133, 0x6E6032, 0x483D1C, "einsteinium"],
        ["einsteinium_254", 1133, 0xAC9033, 0x857F4D, "einsteinium-254"],
        ["fermium_255", 1800, 0x9584A1, 0x493B4A, "fermium-255"],
        //["fermium_257", 1800, 0x5B4A67, 0x3C253C, "fermium"],
        ["mendelevium_259", 1100, 0x2C3160, 0x181637, "mendelevium"],
        ["trinium", 7200, 0x4D4656, 0x312D36, "trinium"],
        ["tiberium", 8100, 0x6A9B6A, 0x050B05, "tiberium"]
    ]

    depletElements.forEach(([name, temp, color, secColor, element]) => {
        var mat = event.create("depleted_" + name)
        mat.ingot().liquid(temp)
        mat.element(GTElements.get(element))
        mat.color(color).secondaryColor(secColor).iconSet("dull")
        mat.flags(disable_decomp)
    })

    // Depleted fuels


    // Molten salt mixtures (TODO)

    // Depleted salt mixtures (TODO)
})