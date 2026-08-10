ServerEvents.recipes(event => {
    // Expanded GT
    event.shaped("expandedgt:linked_terminal", [
        "ABA",
        "CDC",
        "CEC"
    ], {
        A: "gtceu:titanium_screw",
        B: "gtceu:terminal",
        C: "gtceu:titanium_plate",
        D: "ae2:wireless_terminal",
        E: "gtceu:niobium_nitride_single_wire"
    }).id("kubejs:gt/linked_terminal")

    event.recipes.gtceu.assembler("kubejs:gt/expanded_me_input_bus")
        .itemInputs("gtceu:zpm_quantum_chest", "gtceu:me_input_bus", "4x ae2:capacity_card")
        .itemOutputs("expandedgt:expanded_me_input_bus")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.assembler("kubejs:gt/expanded_me_input_hatch")
        .itemInputs("gtceu:zpm_quantum_tank", "gtceu:me_input_hatch", "4x ae2:capacity_card")
        .itemOutputs("expandedgt:expanded_me_input_hatch")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler("kubejs:gt/expanded_stocking_me_input_bus")
        .itemInputs("gtceu:uv_quantum_chest", "gtceu:me_stocking_input_bus", "4x ae2:capacity_card")
        .itemOutputs("expandedgt:expanded_me_stocking_input_bus")
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.assembler("kubejs:gt/expanded_stocking_me_input_hatch")
        .itemInputs("gtceu:uv_quantum_tank", "gtceu:me_stocking_input_hatch", "4x ae2:capacity_card")
        .itemOutputs("expandedgt:expanded_me_stocking_input_hatch")
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler("kubejs:gt/dual_me_output_hatch")
        .itemInputs("gtceu:zpm_machine_hull", "gtceu:me_output_bus", "gtceu:me_output_hatch", "3x gtceu:scandium_yttrium_ytterbium_frame")
        .inputFluids("gtceu:polystyrene 1008")
        .itemOutputs("expandedgt:dual_me_output_hatch")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.assembler("kubejs:gt/dual_me_input_hatch")
        .itemInputs("gtceu:zpm_machine_hull", "gtceu:me_input_bus", "gtceu:me_input_hatch", "3x gtceu:scandium_yttrium_ytterbium_frame")
        .inputFluids("gtceu:polystyrene 1008")
        .itemOutputs("expandedgt:dual_me_input_hatch")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.assembler("kubejs:gt/dual_me_stocking_input_hatch")
        .itemInputs("gtceu:zpm_machine_hull", "gtceu:me_stocking_input_bus", "gtceu:me_stocking_input_hatch", "3x gtceu:scandium_yttrium_ytterbium_frame")
        .inputFluids("gtceu:sodium_polystyrene_sulfonate 1008")
        .itemOutputs("expandedgt:dual_me_stocking_input_hatch")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])


    // True misc
    // Alloy mixing recipes
    event.recipes.gtceu.mixer("kubejs:gt/energetic_alloy")
        .itemInputs("2x gtceu:gold_dust", "1x minecraft:redstone", "2x minecraft:glowstone_dust")
        .itemOutputs("5x gtceu:energetic_alloy_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)
        .circuit(3)

    event.recipes.gtceu.mixer("kubejs:gt/vibrant_alloy")
        .itemInputs("2x gtceu:energetic_alloy_dust", "1x #forge:dusts/ender_pearl")
        .itemOutputs("3x gtceu:vibrant_alloy_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)
        .circuit(3)

    // Easier steel and wrought iron
    event.smelting("1x gtceu:wrought_iron_ingot", "1x minecraft:iron_ingot").id("kubejs:gt/easy_wrought_iron")
    event.smelting("1x gtceu:steel_ingot", "1x gtceu:steel_dust").id("kubejs:gt/easy_steel")
    const coalEquivs = ["coal", "charcoal", "carbon", "activated_carbon", "carbonado", "chaoite", "tartarosite"]
    coalEquivs.forEach(coal => {
        event.shapeless("1x gtceu:steel_dust", ["1x gtceu:wrought_iron_dust", `1x gtceu:${coal}_dust`]).id(`kubejs:gt/hand_steel_mixing_${coal}`)
        event.recipes.gtceu.alloy_smelter(`kubejs:gt/alloy_smelter_steel_from_wrought_iron_${coal}`)
            .itemInputs("1x gtceu:wrought_iron_ingot", `1x gtceu:${coal}_dust`)
            .itemOutputs("1x gtceu:steel_ingot")
            .duration(140)
            .EUt(GTValues.VHA[GTValues.HV])
        event.recipes.gtceu.alloy_smelter(`kubejs:gt/alloy_smelter_steel_from_iron_${coal}`)
            .itemInputs("1x minecraft:iron_ingot", `1x gtceu:${coal}_dust`)
            .itemOutputs("1x gtceu:steel_ingot")
            .duration(140)
            .EUt(GTValues.VHA[GTValues.HV])
        event.recipes.gtceu.alloy_smelter(`kubejs:gt/alloy_smelter_steel_from_dust_wrought_iron_${coal}`)
            .itemInputs("1x gtceu:wrought_iron_dust", `1x gtceu:${coal}_dust`)
            .itemOutputs("1x gtceu:steel_ingot")
            .duration(140)
            .EUt(GTValues.VHA[GTValues.HV])
        event.recipes.gtceu.alloy_smelter(`kubejs:gt/alloy_smelter_steel_from_dust_iron_${coal}`)
            .itemInputs("1x gtceu:iron_dust", `1x gtceu:${coal}_dust`)
            .itemOutputs("1x gtceu:steel_ingot")
            .duration(140)
            .EUt(GTValues.VHA[GTValues.HV])
    })

    // Manual rubber plates
    event.shaped("gtceu:rubber_plate", [
        " A ",
        " B ",
        " B "
    ], {
        A: "#gtceu:tools/crafting_hammers",
        B: "gtceu:sticky_resin"
    }).id("kubejs:gt/easy_rubber_plate")

    // Hand-cutting wood into plates
    event.shapeless("gtceu:wood_plate", ["#gtceu:tools/crafting_saws", "#minecraft:wooden_slabs"]).id("kubejs:gt/easy_wood_plate")
    event.shapeless("gtceu:treated_wood_plate", ["#gtceu:tools/crafting_saws", "gtceu:treated_wood_slab"]).id("kubejs:gt/easy_treated_wood_plate")

    // TODO: Nether Star recipe chain (PLACEHOLDER RECIPE)
    event.recipes.gtceu.mixer("kubejs:placeholder_netherstar_dust")
        .itemInputs("4x gtceu:vibrant_alloy_dust", "2x gtceu:blue_alloy_dust", "3x minecraft:soul_sand")
        .inputFluids("gtceu:cyclopentadiene 250")
        .itemOutputs("2x gtceu:nether_star_dust")
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    // TODO: Alternate way(s) to get noble gasses

    // TODO: Alternate propene/butene and such recipes

    // Alt NaOH Recipe (Na + H2O)
    event.recipes.gtceu.chemical_reactor("kubejs:gt/make_sodium_hydroxide")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(80)

    // TODO: Alt slimeball/rubber method because rubber trees are rarer (spruce, birch for paper, pine, ???)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_maple1")
        .itemInputs("natures_spirit:maple_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("gtceu:wood_dust", 4500, 0)
        .chancedOutput("gtceu:sticky_resin", 3200, 0)
        .chancedOutput("gtceu:carbon_dust", 2500, 0)
        .outputFluids("gtceu:methane 30")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_maple2")
        .itemInputs("regions_unexplored:maple_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("gtceu:wood_dust", 4500, 0)
        .chancedOutput("gtceu:sticky_resin", 3200, 0)
        .chancedOutput("gtceu:carbon_dust", 2500, 0)
        .outputFluids("gtceu:methane 30")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_pine")
        .itemInputs("regions_unexplored:pine_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("gtceu:wood_dust", 5500, 0)
        .chancedOutput("gtceu:carbon_dust", 3500, 0)
        .chancedOutput("gtceu:sticky_resin", 2200, 0)
        .outputFluids("gtceu:methane 20")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_spruce")
        .itemInputs("minecraft:spruce_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("gtceu:wood_dust", 4200, 0)
        .chancedOutput("gtceu:carbon_dust", 3800, 0)
        .chancedOutput("gtceu:sticky_resin", 2200, 0)
        .outputFluids("gtceu:methane 20")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_fir")
        .itemInputs("natures_spirit:fir_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("gtceu:wood_dust", 5000, 0)
        .chancedOutput("gtceu:carbon_dust", 3700, 0)
        .chancedOutput("gtceu:sticky_resin", 2000, 0)
        .outputFluids("gtceu:methane 25")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_birch1")
        .itemInputs("minecraft:birch_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("minecraft:paper", 4400, 0)
        .chancedOutput("gtceu:carbon_dust", 2100, 0)
        .chancedOutput("gtceu:sticky_resin", 1500, 0)
        .outputFluids("gtceu:methane 15")
        .EUt(5)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:alt_sticky_resin_birch2")
        .itemInputs("regions_unexplored:silver_birch_log")
        .chancedOutput("gtceu:plant_ball", 6500, 0)
        .chancedOutput("minecraft:paper", 4400, 0)
        .chancedOutput("gtceu:carbon_dust", 2100, 0)
        .chancedOutput("gtceu:sticky_resin", 1500, 0)
        .outputFluids("gtceu:methane 15")
        .EUt(5)
        .duration(200)

    // TODO: Echo shard recipe

    // TODO: (req registry) dusts for dimensional ore stones, also ore stone generation and maceration recipes

    // Buff wood distillation
    event.remove({id:"gtceu:distillation_tower/distill_wood_vinegar"})
    event.recipes.gtceu.distillation_tower("kubejs:buffed_wood_vinegar")
        .inputFluids("gtceu:wood_vinegar 1000")
        .outputFluids("gtceu:phenol 50", "gtceu:butanol 25", "gtceu:acetic_acid 150", "gtceu:formic_acid 50", 
            "minecraft:water 400", "gtceu:ethanol 50", "gtceu:methanol 300", "gtceu:acetone 75", "gtceu:methyl_acetate 10"
        )
        .duration(40)
        .EUt(GTValues.VHA[GTValues.HV])

    // Ingots that ought to be hand-craftable. Hand-mixing recipes are made to be slightly worse than mixer recipes.
    event.remove({id: "gtceu:electric_blast_furnace/blast_rose_gold"})
    event.remove({id: "gtceu:electric_blast_furnace/blast_rose_gold_gas"})
    event.smelting("gtceu:rose_gold_ingot", "gtceu:rose_gold_dust")
    event.shapeless("4x gtceu:rose_gold_dust", ["gtceu:copper_dust", "gtceu:gold_dust", "gtceu:gold_dust", "gtceu:gold_dust", "gtceu:gold_dust"])

    event.remove({id: "gtceu:electric_blast_furnace/blast_sterling_silver"})
    event.remove({id: "gtceu:electric_blast_furnace/blast_sterling_silver_gas"})
    event.smelting("gtceu:sterling_silver_ingot", "gtceu:sterling_silver_dust")
    event.shapeless("4x gtceu:sterling_silver_dust", ["gtceu:copper_dust", "gtceu:silver_dust", "gtceu:silver_dust", "gtceu:silver_dust", "gtceu:silver_dust"])

    event.remove({id: "gtceu:electric_blast_furnace/blast_bismuth_bronze"})
    event.remove({id: "gtceu:electric_blast_furnace/blast_bismuth_bronze_gas"})
    event.smelting("gtceu:bismuth_bronze_ingot", "gtceu:bismuth_bronze_dust")
    event.shapeless("4x gtceu:bismuth_bronze_dust", ["gtceu:bismuth_dust", "gtceu:brass_dust", "gtceu:brass_dust", "gtceu:brass_dust", "gtceu:brass_dust"])

    event.shapeless("1x gtceu:gallium_arsenide_dust", ["gtceu:arsenic_dust", "gtceu:gallium_dust"])
    event.shapeless("4x gtceu:damascus_steel_dust", ["gtceu:graphite_dust", "gtceu:steel_dust", "gtceu:steel_dust", "gtceu:steel_dust", "gtceu:steel_dust"])
    event.recipes.gtceu.mixer("kubejs:gt/damascus_steel_mixing")
        .circuit(3)
        .itemInputs("1x gtceu:graphite_dust", "4x gtceu:steel_dust")
        .itemOutputs("5x gtceu:damascus_steel_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV])

    // Clay from sand for automatic clay
    event.recipes.gtceu.chemical_reactor("kubejs:clay_generation")
        .itemInputs("minecraft:sand", "gtceu:clay_dust")
        .inputFluids("minecraft:water 500")
        .itemOutputs("minecraft:clay")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    // PCL is nylon-6, so it should make good carbon fibers by GT logic
    event.recipes.gtceu.autoclave("carbon_fibers_pcl")
        .itemInputs("4x #forge:dusts/carbon")
        .inputFluids("gtceu:polycaprolactam 9")
        .itemOutputs("16x gtceu:carbon_fibers")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1.85*20)

    // Green steel mixer
    event.recipes.gtceu.mixer("green_steel_mixing")
        .itemInputs("1x gtceu:scandium_dust", "1x gtceu:emerald_dust", "4x gtceu:black_steel_dust", "2x gtceu:steel_dust")
        .itemOutputs("8x gtceu:green_steel_dust")
        .EUt(7)
        .duration(20*40)
        .circuit(1)

    // Dragon Breath canning and uncanning
    event.recipes.gtceu.canner("dragon_breath_unbottling")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("gtceu:dragon_breath 250")
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.canner("dragon_breath_bottling")
        .itemInputs("minecraft:glass_bottle")
        .inputFluids("gtceu:dragon_breath 250")
        .itemOutputs("minecraft:dragon_breath")
        .duration(400)
        .EUt(2)

    // Dragon breath from egg generation (placeholder)
    event.recipes.gtceu.chemical_bath("kubejs:dragon_egg_torture")
        .notConsumable("minecraft:dragon_egg")
        .inputFluids("gtceu:hydrobromic_acid 500")
        .outputFluids("gtceu:dragon_breath 250")
        .chancedOutput("gtceu:anatase_dust", 2700, 0)
        .chancedOutput("gtceu:tungstenite_dust", 1100, 0)
        .duration(600)
        .EUt(16)

    // JEAN Gasoline consumption
    event.recipes.gtceu.combustion_generator("jean_gasoline_generator")
        .inputFluids("gtceu:jean_gasoline 1")
        .duration(160)
        .EUt(-GTValues.V[GTValues.MV])

    // JEAN Gasoline
    event.recipes.gtceu.large_chemical_reactor("kubejs:jean_gasoline")
        .itemInputs("3x gtceu:netherrack_dust")
        .inputFluids("gtceu:high_octane_gasoline 8000", "gtceu:rocket_fuel 5000", "gtceu:chlorine_trifluoride 2000", "gtceu:tetraethyllead 1000", "gtceu:dragon_breath 500")
        .outputFluids("gtceu:jean_gasoline 16000")
        .duration(200)
        .EUt(7680)
        .circuit(24)

    event.recipes.gtceu.chemical_reactor("kubejs:chloroethane")
        .inputFluids("gtceu:ethylene 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:chloroethane 1000")
        .duration(60)
        .EUt(30)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor("kubejs:tetraethyllead")
        .itemInputs("8x gtceu:sodium_lead_alloy_dust")
        .inputFluids("gtceu:chloroethane 4000")
        .outputFluids("gtceu:tetraethyllead 1000")
        .itemOutputs("8x gtceu:salt_dust", "3x gtceu:lead_dust")
        .duration(300)
        .EUt(480)

    event.recipes.gtceu.chemical_reactor("kubejs:chlorine_trifluoride")
        .inputFluids("gtceu:fluorine 3000", "gtceu:chlorine 1000")
        .outputFluids("gtceu:chlorine_trifluoride 1000")
        .duration(60)
        .EUt(7)

    event.recipes.gtceu.mixer("kubejs:sodium_lead_alloy")
        .itemInputs("gtceu:sodium_dust", "gtceu:lead_dust")
        .itemOutputs("2x gtceu:sodium_lead_alloy_dust")
        .duration(200)
        .EUt(7)

    // Kapton K Wetwares
    // event.remove({ id: "gtceu:circuit_assembler/wetware_board" })
    event.recipes.gtceu.circuit_assembler("kubejs:circuit_assembler/wetware_hm")
        .itemInputs(
            "16x gtceu:kapton_k_plate",
            "gtceu:petri_dish",
            "gtceu:luv_electric_pump",
            "gtceu:iv_sensor",
            "#gtceu:circuits/iv",
            "16x gtceu:niobium_titanium_foil"
        )
        .inputFluids(Fluid.of("gtceu:sterilized_growth_medium", 4000))
        .itemOutputs("24x gtceu:wetware_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(30720)

    // Beryllium Oxide
    event.recipes.gtceu.chemical_reactor("beryllium_oxide")
        .itemInputs("gtceu:beryllium_dust")
        .inputFluids("gtceu:oxygen 1000")
        .itemOutputs("2x gtceu:beryllium_oxide_ingot")
        .duration(640).EUt(30)

    // Rocketry
    event.recipes.gtceu.chemical_reactor("kubejs:chemical_reactor/durene_hm")
        .inputFluids(Fluid.of("gtceu:dimethylbenzene", 1000), Fluid.of("gtceu:chloromethane", 1000))
        .itemOutputs("24x gtceu:durene_dust")
        .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 1000))
        .EUt(120)
        .duration(120)

    event.recipes.gtceu.chemical_reactor("pyrometillic_dianhydride")
        .inputFluids("gtceu:durene 250", "gtceu:oxygen 1500")
        .outputFluids("gtceu:pyromellitic_dianhydride 250", "minecraft:water 1500")
        .duration(400).EUt(480);

    event.recipes.gtceu.chemical_reactor("chloronitrobenzene")
        .inputFluids("gtceu:chlorobenzene 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:nitrochlorobenzene 1000", "minecraft:water 1000")
        .duration(400).EUt(480);

    event.recipes.gtceu.chemical_reactor("pyromellitic_dianhydride")
        .inputFluids("gtceu:durene 250", "gtceu:oxygen 1500")
        .outputFluids("gtceu:pyromellitic_dianhydride 250", "minecraft:water 1500")
        .duration(400).EUt(480);

    event.recipes.gtceu.chemical_reactor("dinitrodiphenyl_ether")
        .inputFluids("gtceu:nitrochlorobenzene 2000")
        .chancedInput("gtceu:copper_iodide_dust", 1500, 0)
        .itemInputs("6x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:dinitrodiphenyl_ether 1000", "minecraft:water 1000")
        .itemOutputs("4x gtceu:salt_dust")
        .duration(400).EUt(480);

    event.recipes.gtceu.chemical_reactor("oxydianiline")
        .notConsumable("gtceu:palladium_dust")
        .inputFluids("gtceu:dinitrodiphenyl_ether 1000", "gtceu:hydrogen 12000")
        .outputFluids("gtceu:oxydianiline 1000", "minecraft:water 4000")
        .duration(200).EUt(1920);

    event.recipes.gtceu.large_chemical_reactor("copper_iodide_dust")
        .itemInputs("4x gtceu:potassium_iodide_dust", "4x gtceu:cuprous_chloride_dust")
        .inputFluids("gtceu:nitric_acid 2000")
        .itemOutputs("4x gtceu:copper_iodide_dust", "10x gtceu:saltpeter_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .duration(160).EUt(120);

    event.recipes.gtceu.chemical_reactor("cuprous_chloride_dust")
        .itemInputs("gtceu:copper_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("2x gtceu:cuprous_chloride_dust")
        .duration(160).EUt(120);

    event.recipes.gtceu.chemical_reactor("kapton_k")
        .inputFluids("gtceu:pyromellitic_dianhydride 1000", "gtceu:oxydianiline 1000")
        .outputFluids("gtceu:kapton_k 1000")
        .duration(400).EUt(480);

})