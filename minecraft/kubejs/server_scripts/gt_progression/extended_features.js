ServerEvents.recipes(event => {
    // Controller blocks
    event.recipes.gtceu.assembly_line("kubejs:ef/ram")
        .itemInputs("gtceu:alloy_blast_smelter", "4x gtceu:zpm_field_generator", "16x gtceu:rhenium_ingot", "4x #gtceu:circuits/uv",
            "6x gtceu:dense_naquadah_alloy_plate", "4x gtceu:bismuth_strontium_calcium_cuprate_octal_wire", "4x gtceu:osmiridium_rotor")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:tungsten_steel 1440", "gtceu:molybdenum_disilicide 288")
        .itemOutputs("extendedfeatures:robust_alloy_materializer")
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UV])
        .stationResearch(b => b
            .researchStack("gtceu:alloy_blast_smelter")
            .CWUt(48, 256000)
            .EUt(GTValues.VA[GTValues.ZPM])
        )

    event.shaped("extendedfeatures:large_cracking_machine", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:molybdenum_disilicide_coil_block",
        B: "gtceu:iv_electric_pump",
        C: "#gtceu:circuits/iv",
        D: "gtceu:cracker"
    }).id("kubejs:ef/large_cracker")

    event.recipes.gtceu.assembly_line("kubejs:ef/mega_chem_reactor")
        .itemInputs("gtceu:large_chemical_reactor", "8x gtceu:molybdenum_disilicide_spring", "4x #gtceu:circuits/uhv",
            "64x gtceu:ruthenium_foil", "64x gtceu:osmium_foil", "64x gtceu:fine_platinum_wire",
            "64x gtceu:fine_palladium_wire", "64x gtceu:fine_rhodium_wire", "64x gtceu:fine_iridium_wire"
        )
        .inputFluids("gtceu:polytetrafluoroethylene 2880", "gtceu:polycaprolactam 1440", "gtceu:polyacrylonitrile 720", "gtceu:polyether_ether_ketone 360")
        .itemOutputs("extendedfeatures:synthesis_vessel")
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("gtceu:large_chemical_reactor")
            .CWUt(96, 512000)
            .EUt(GTValues.VA[GTValues.UV])
        )

    event.shaped("extendedfeatures:large_pyrolysis_oven", [
        "FCE",
        "CDC",
        "FBE"
    ], {
        B: "gtceu:iv_electric_pump",
        C: "#gtceu:circuits/iv",
        D: "gtceu:pyrolyse_oven",
        E: "gtceu:hssg_quadruple_wire",
        F: "gtceu:iv_electric_piston"
    }).id("kubejs:ef/large_pyro")

    // TODO CAL (how to balance?)

    event.recipes.gtceu.assembly_line("kubejs:ef/rock_processing_plant")
        .itemInputs("gtceu:large_maceration_tower", "gtceu:large_electrolyzer", Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:magnalium"}}').strongNBT(),
            Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:magnalium"}}').strongNBT(), "8x gtceu:diamond_buzz_saw_blade", "12x gtceu:vanadium_steel_gear",
            "2x #gtceu:circuits/luv", "32x gtceu:fine_cobalt_wire"
        )
        .inputFluids("gtceu:lubricant 3000", "gtceu:tungsten 576")
        .itemOutputs("extendedfeatures:rock_processing_plant")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .stationResearch(b => b
            .researchStack("gtceu:large_maceration_tower")
            .CWUt(8, 50000)
            .EUt(GTValues.VA[GTValues.LuV])
        )

    // TODO Disassembler (do I even want this?)

    // TODO: Expanded Databank & Optical Transmission Network (???)

    // Misc hatches and whatnot
    // TODO
    event.recipes.gtceu.assembly_line("kubejs:ef/zpm_data_access")
        .itemInputs("gtceu:zpm_input_bus", "4x gtceu:data_module", "4x #gtceu:circuits/uv"
        )
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:polybenzimidazole 1152")
        .itemOutputs("extendedfeatures:zpm_data_access_hatch")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV]*1.5)
        .stationResearch(b => b
            .researchStack("gtceu:advanced_data_access_hatch")
            .CWUt(16, 32000)
            .EUt(GTValues.VA[GTValues.LuV])
        )
    event.recipes.gtceu.assembly_line("kubejs:ef/uv_data_access")
        .itemInputs("gtceu:uv_input_bus", "16x gtceu:data_module", "4x #gtceu:circuits/uhv"
        )
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("extendedfeatures:uv_data_access_hatch")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]*1.5)
        .stationResearch(b => b
            .researchStack("extendedfeatures:zpm_data_access_hatch")
            .CWUt(32, 128000)
            .EUt(GTValues.VA[GTValues.ZPM])
        )
    event.recipes.gtceu.assembly_line("kubejs:ef/uhv_data_access")
        .itemInputs("gtceu:uhv_input_bus", "64x gtceu:data_module", "4x #gtceu:circuits/uev"
        )
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:polybenzimidazole 4608")
        .itemOutputs("extendedfeatures:uhv_data_access_hatch")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV]*1.5)
        .stationResearch(b => b
            .researchStack("extendedfeatures:uv_data_access_hatch")
            .CWUt(64, 512000)
            .EUt(GTValues.VA[GTValues.UV])
        )
    event.recipes.gtceu.assembler("kubejs:ef/luv_wireless_data_trans")
        .itemInputs("gtceu:advanced_data_access_hatch", "4x gtceu:luv_emitter", "1x gtceu:luv_field_generator")
        .inputFluids("gtceu:vibrant_alloy 576")
        .itemOutputs("extendedfeatures:luv_wireless_data_transmissor")
        .duration(200)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.assembler("kubejs:ef/luv_wireless_data_receiv")
        .itemInputs("gtceu:advanced_data_access_hatch", "4x gtceu:luv_sensor", "1x gtceu:luv_field_generator")
        .inputFluids("gtceu:vibrant_alloy 576")
        .itemOutputs("extendedfeatures:luv_wireless_data_receptor")
        .duration(200)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.assembler("kubejs:ef/zpm_wireless_data_trans")
        .itemInputs("extendedfeatures:zpm_data_access_hatch", "4x gtceu:zpm_emitter", "1x gtceu:zpm_field_generator")
        .inputFluids("gtceu:vibrant_alloy 1152")
        .itemOutputs("extendedfeatures:zpm_wireless_data_transmissor")
        .duration(200)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
    event.recipes.gtceu.assembler("kubejs:ef/zpm_wireless_data_receiv")
        .itemInputs("extendedfeatures:zpm_data_access_hatch", "4x gtceu:zpm_sensor", "1x gtceu:zpm_field_generator")
        .inputFluids("gtceu:vibrant_alloy 1152")
        .itemOutputs("extendedfeatures:zpm_wireless_data_receptor")
        .duration(200)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.UV])
    event.recipes.gtceu.assembler("kubejs:ef/uv_wireless_data_trans")
        .itemInputs("extendedfeatures:uv_data_access_hatch", "4x gtceu:uv_emitter", "1x gtceu:uv_field_generator")
        .inputFluids("gtceu:vibrant_alloy 2304")
        .itemOutputs("extendedfeatures:uv_wireless_data_transmissor")
        .duration(200)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV])
    event.recipes.gtceu.assembler("kubejs:ef/uv_wireless_data_receiv")
        .itemInputs("extendedfeatures:uv_data_access_hatch", "4x gtceu:uv_sensor", "1x gtceu:uv_field_generator")
        .inputFluids("gtceu:vibrant_alloy 2304")
        .itemOutputs("extendedfeatures:uv_wireless_data_receptor")
        .duration(200)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.UHV])
    
    
})