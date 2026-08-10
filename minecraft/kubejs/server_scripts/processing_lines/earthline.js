ServerEvents.recipes(event => {
    /**
     * HELPER CHEMICAL LINES AND BYPRODUCTS
     */

    // OXALIC ACID LINE
    event.recipes.gtceu.arc_furnace("kubejs:earthline/vanadium_pentoxide_arc")
        .itemInputs("2x gtceu:vanadium_dust")
        .inputFluids("gtceu:oxygen 5000")
        .itemOutputs("7x gtceu:vanadium_pentoxide_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(180)

    event.recipes.gtceu.chemical_reactor("kubejs:earthline/oxalic_acid_dihydrate_chem")
        .notConsumable("1x gtceu:vanadium_pentoxide_dust")
        .itemInputs("1x minecraft:sugar")
        .inputFluids("gtceu:nitric_acid 1000", "gtceu:distilled_water 2000")
        .itemOutputs("6x gtceu:oxalic_acid_dihydrate_dust")
        .outputFluids("gtceu:nitrogen_dioxide 1000", "minecraft:water 1000")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(220)

    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/oxalic_acid_ebf")
        .itemInputs("1x gtceu:oxalic_acid_dihydrate_dust")
        .itemOutputs("1x gtceu:oxalic_acid_dust")
        .outputFluids("gtceu:steam 2000")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(100)
        .blastFurnaceTemp(500)

    event.recipes.gtceu.mixer("kubejs:earthline/oxalic_acid_solution_mixer")
        .itemInputs("1x gtceu:oxalic_acid_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:oxalic_acid_solution 1000")
        .duration(120)
        .EUt(8)

    // AMMONIUM OXALATE
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/ammonium_oxalate")
        .itemInputs("4x gtceu:oxalic_acid_dust")
        .inputFluids("gtceu:ammonia 1000")
        .itemOutputs("4x gtceu:ammonium_oxalate_dust")
        .duration(60)
        .EUt(GTValues.VHA[GTValues.HV])

    // TBP LINE
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/butanol")
        .notConsumable("gtceu:nickel_dust")
        .inputFluids("gtceu:butyraldehyde 1000", "gtceu:hydrogen 1000")
        .outputFluids("gtceu:butanol 1000")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor("kubejs:earthline/phosphorus_trichloride")
        .itemInputs("1x gtceu:phosphorus_dust")
        .inputFluids("gtceu:chlorine 3000")
        .outputFluids("gtceu:phosphorus_trichloride 1000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor("kubejs:earthline/phosphoryl_chloride_direct")
        .inputFluids("gtceu:phosphorus_trichloride 2000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:phosphoryl_chloride 2000")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/phosphoryl_chloride_alt")
        .itemInputs("gtceu:tricalcium_phosphate_dust", "6x gtceu:carbon_dust")
        .inputFluids("gtceu:chlorine 6000")
        .itemOutputs("3x gtceu:calcium_chloride_dust")
        .outputFluids("gtceu:phosphoryl_chloride 2000", "gtceu:carbon_monoxide 6000")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor("kubejs:earthline/tbp")
        .inputFluids("gtceu:butanol 1000", "gtceu:phosphoryl_chloride 1000")
        .outputFluids("gtceu:tributyl_phosphate 1000", "gtceu:hydrochloric_acid 3000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    // Reprocessing Nitric Acid
    event.recipes.gtceu.distillation_tower("kubejs:earthline/recycle_dilute_nitric_acid")
        .inputFluids("gtceu:dilute_nitric_acid 2000")
        .outputFluids("gtceu:nitric_acid 1000", "minecraft:water 1000")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(600)

    // Ammonium Sulfate
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/ammonium_sulfate_production")
        .notConsumableFluid("gtceu:steam 3300")
        .inputFluids("gtceu:ammonia 2000", "gtceu:sulfuric_acid 1000")
        .itemOutputs("3x gtceu:ammonium_sulfate_dust")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(120)

    // Ammonium Nitrate
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/ammonium_nitrate_production")
        .inputFluids("gtceu:ammonia 3000", "gtceu:nitric_acid 5000")
        .itemOutputs("10x gtceu:ammonium_nitrate_dust")
        .outputFluids("minecraft:water 3000", "gtceu:nitrogen_dioxide 2000", "gtceu:nitric_oxide 2000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(260)

    // Zinc amalgam
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/calomel_production")
        .notConsumable("gtceu:lanthanum_dust")
        .inputFluids("gtceu:mercury 1000", "gtceu:hydrochloric_acid 1000")
        .itemOutputs("2x gtceu:calomel_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(240)
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/mercury_dichloride")
        .inputFluids("gtceu:chlorine 1000")
        .itemInputs("1x gtceu:calomel_dust")
        .itemOutputs("2x gtceu:mercury_dichloride_dust")
        .circuit(2)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(120)
    event.recipes.gtceu.mixer("kubejs:earthline/zinc_amalgam")
        .itemInputs("1x gtceu:zinc_dust", "gtceu:mercury_dichloride_dust")
        .inputFluids("gtceu:salt_water 1000")
        .outputFluids("gtceu:zinc_amalgam 1000")
        .itemOutputs("4x gtceu:salt_dust")
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(300)

    // Polystyrene
    // Override coal tar and steam-cracked naphtha distillation outputs
    event.remove({id:"gtceu:distillation_tower/distill_coal_tar"})
    event.remove({id:"gtceu:distillation_tower/distill_severely_steam_cracked_naphtha"})
    event.remove({id:"gtceu:distillation_tower/distill_lightly_steam_cracked_naphtha"})
    event.recipes.gtceu.distillation_tower("kubejs:earthline/modified_distill_coal_tar")
        .inputFluids("gtceu:coal_tar 1000")
        .chancedOutput("gtceu:coke_dust", 2500, 0)
        .outputFluids("gtceu:naphthalene 400", "gtceu:hydrogen_sulfide 250", "gtceu:creosote 150", "gtceu:phenol 100", "gtceu:cyclopentadiene 100")
        .EUt(120)
        .duration(80)
    event.recipes.gtceu.distillation_tower("kubejs:earthline/modified_distill_severely_steam_cracked_naphtha")
        .inputFluids("gtceu:severely_steam_cracked_naphtha 1000")
        .chancedOutput("gtceu:carbon_dust", 3300, 0)
        .outputFluids("gtceu:heavy_fuel 25", "gtceu:light_fuel 50", "gtceu:toluene 20", "gtceu:benzene 75", "gtceu:cyclopentadiene 25",
            "gtceu:butene 50", "gtceu:butadiene 50", "gtceu:propane 15", "gtceu:propene 300", "gtceu:ethane 65", "gtceu:ethylene 500", "gtceu:methane 500"
        )
        .EUt(120)
        .duration(120)
    event.recipes.gtceu.distillation_tower("kubejs:earthline/modified_distill_lightly_steam_cracked_naphtha")
        .inputFluids("gtceu:lightly_steam_cracked_naphtha 1000")
        .chancedOutput("gtceu:carbon_dust", 1100, 0)
        .outputFluids("gtceu:heavy_fuel 75", "gtceu:light_fuel 150", "gtceu:toluene 40", "gtceu:benzene 100", "gtceu:cyclopentadiene 50",
            "gtceu:butene 80", "gtceu:butadiene 150", "gtceu:propane 15", "gtceu:propene 200", "gtceu:ethane 35", "gtceu:ethylene 200", "gtceu:methane 200"
        )
        .EUt(120)
        .duration(120)

    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/ferrocene")
        .itemInputs("gtceu:iron_dust")
        .inputFluids("gtceu:cyclopentadiene 2000")
        .itemOutputs("3x gtceu:ferrocene_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(240)
        .blastFurnaceTemp(3300)

    event.recipes.gtceu.polymerization("kubejs:earthline/polystyrene")
        .notConsumable("gtceu:ferrocene_dust")
        .inputFluids("gtceu:styrene 144", "gtceu:oxygen 1000")
        .circuit(1)
        .outputFluids("gtceu:polystyrene 144")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(260)

    event.recipes.gtceu.polymerization("kubejs:earthline/sodium_polystyrene_sulfonate")
        .notConsumable("gtceu:cobalt_dust")
        .itemInputs("2x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:polystyrene 144", "gtceu:sulfur_trioxide 2000")
        .circuit(1)
        .outputFluids("gtceu:sodium_polystyrene_sulfonate 144", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(140)

    // Sodium Carbonate
    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/sodium_carbonate")
        .itemInputs("2x gtceu:sodium_bicarbonate_dust", "1x gtceu:salt_dust")
        .itemOutputs("1x gtceu:soda_ash_dust", "2x gtceu:hydrohalite_dust")
        .outputFluids("gtceu:carbon_dioxide 1000")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(180)
        .blastFurnaceTemp(1600)

    // Sodium Amalgam
    event.recipes.gtceu.mixer("kubejs:earthline/sodium_amalgam_production")
        .itemInputs("1x gtceu:sodium_dust")
        .inputFluids("gtceu:mercury 1000", "gtceu:argon 500")
        .outputFluids("gtceu:sodium_amalgam 2000")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.distillation_tower("kubejs:earthline/sodium_amalgam_destruction")
        .inputFluids("gtceu:sodium_amalgam 2000")
        .itemOutputs("gtceu:sodium_dust")
        .outputFluids("gtceu:mercury 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(220)

    // Citric Acid
    event.recipes.gtceu.fermenter("kubejs:earthline/ferment_bacteria_citric")
        .itemInputs("minecraft:sugar")
        .inputFluids("gtceu:bacteria 1000")
        .outputFluids("gtceu:bacterial_citric_acid_filtrate 1000")
        .EUt(GTValues.VHA[GTValues.ULV])
        .duration(720)

    event.recipes.gtceu.chemical_reactor("kubejs:earthline/calcium_citrate")
        .itemInputs("3x gtceu:calcium_hydroxide_dust")
        .inputFluids("gtceu:bacterial_citric_acid_filtrate 2000")
        .outputFluids("gtceu:calcium_citrate 1000", "minecraft:water 6000")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(330)

    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/citric_acid")
        .inputFluids("gtceu:calcium_citrate 1000", "gtceu:sulfuric_acid 3000", "minecraft:water 6000")
        .itemOutputs("42x gtceu:citric_acid_dust", "24x gtceu:gypsum_dust")
        .EUt(GTValues.VHA[GTValues.IV])
        .duration(210)

    // Triammonium Citrate
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/triammonium_citrate")
        .notConsumable("gtceu:vanadium_pentoxide_dust")
        .itemInputs("21x gtceu:citric_acid_dust")
        .inputFluids("gtceu:ammonia 3000")
        .itemOutputs("33x gtceu:triammonium_citrate_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(120)

    // EDTA
    event.remove({id:"gtceu:chemical_reactor/diethylenetriamine"})
    event.remove({id:"gtceu:large_chemical_reactor/diethylenetriamine"})
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/ethylamine_mix")
        .inputFluids("gtceu:ammonia 3000", "gtceu:dichloroethane 2000")
        .outputFluids("gtceu:ethylamine_mix 1000", "gtceu:hydrochloric_acid 4000")
        .EUt(120)
        .duration(100)
    event.recipes.gtceu.distillation_tower("kubejs:earthline/distill_ethylamines")
        .inputFluids("gtceu:ethylamine_mix 1000")
        .outputFluids("gtceu:triethylenetetramine 250",
            "gtceu:diethylenetriamine 300",
            "gtceu:ethylenediamene 350"
        )
        .EUt(120)
        .duration(180)

    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/tetrasodium_edta")
        .inputFluids("gtceu:ethylenediamene 1000", "gtceu:formaldehyde 4000", 
            "gtceu:distilled_water 4000")
        .itemInputs("12x gtceu:sodium_cyanide_dust")
        .itemOutputs("36x gtceu:tetrasodium_edta_dust")
        .outputFluids("gtceu:ammonia 4000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/edta")
        .itemInputs("36x gtceu:tetrasodium_edta_dust")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .itemOutputs("36x gtceu:ethylenediaminetetraacetic_acid_dust", "4x gtceu:salt_dust")
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(100)

    // DTPA 
    // Recipe already exists, just use that

    // Fluorosulfonic Acid
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/fluorosulfuric_acid")
        .inputFluids("gtceu:sulfur_trioxide 1000", "gtceu:hydrofluoric_acid 1000")
        .outputFluids("gtceu:fluorosulfuric_acid 1000")
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])

    // HIBA
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/acetone_cyanohydrin")
        .itemInputs("gtceu:sodium_cyanide_dust")
        .inputFluids("gtceu:acetone 1000", "gtceu:hydrofluoric_acid 1000")
        .itemOutputs("gtceu:villiaumite_dust")
        .outputFluids("gtceu:acetone_cyanohydrin 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/hiba")
        .notConsumableFluid("gtceu:sulfuric_acid 2000")
        .inputFluids("gtceu:acetone_cyanohydrin 1000", "gtceu:distilled_water 2000")
        .itemOutputs("gtceu:2_hydroxyisobutyric_acid_dust")
        .outputFluids("gtceu:ammonia 1000")
        .EUt(GTValues.VHA[GTValues.IV])
        .duration(280)

    // Ion Exchange resin crafting
    event.recipes.gtceu.chemical_bath("kubejs:ion_exchange_creation")
        .itemInputs("8x gtceu:sodium_polystyrene_sulfonate_plate")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .itemOutputs("1x kubejs:ion_exchange_resin")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(360)

    // Damaged Ion Exchange repair
    event.recipes.gtceu.mixer("kubejs:repair_damaged_ion_exchange")
        .itemInputs("kubejs:depleted_ion_exchange_resin")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .chancedFluidInput("gtceu:sodium_polystyrene_sulfonate 72", 5500, 0)
        .itemOutputs("kubejs:ion_exchange_resin")
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(260)

    // Uranium filtrate (TODO: more detail if/when U-233 and other isotopes added)
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/uranium_filtrate_reprocess")
        .inputFluids("gtceu:uranium_filtrate 1000", "gtceu:hydrofluoric_acid 4000", "gtceu:fluorine 2000")
        .outputFluids("gtceu:uranium_hexafluoride 1000", "minecraft:water 2000")
        .chancedOutput("gtceu:small_lead_dust", 8500, 0)
        .chancedOutput("gtceu:tiny_thorium_dust", 4500, 0)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    /**
     * RE-OXIDIZING RARE EARTHS
     */
    const earths = [
        ["scandium", "scandia", 2, 3],
        ["yttrium", "yttria", 2, 3],
        ["lanthanum", "lanthana", 2, 3],
        ["cerium", "ceria", 1, 2],
        ["praseodymium", "praseodymium_oxide", 6, 11],
        ["neodymium", "neodymia", 2, 3],
        // Promethium here TODO
        ["samarium", "samaria", 2, 3],
        ["europium", "europia", 2, 3],
        ["gadolinium", "gadolinia", 2, 3],
        ["terbium", "terbia", 2, 3],
        ["dysprosium", "dysprosia", 2, 3],
        ["holmium", "holmia", 2, 3],
        ["erbium", "erbia", 2, 3],
        ["thulium", "thulia", 2, 3],
        ["ytterbium", "ytterbia", 2, 3],
        ["lutetium", "lutecia", 2, 3]
    ]
    earths.forEach(earth => {
        event.recipes.gtceu.arc_furnace(`kubejs:earthline/${earth[0]}_to_${earth[1]}_oxidize`)
            .itemInputs(`${earth[2]}x gtceu:${earth[0]}_dust`)
            .inputFluids(`gtceu:oxygen ${1000*earth[3]}`)
            .itemOutputs(`${earth[2]+earth[3]}x gtceu:${earth[1]}_dust`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    })
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/praseodymium_oxide_conversion")
        .itemInputs("1x gtceu:praseodymium_oxide_dust")
        .inputFluids("gtceu:hydrogen 2000")
        .itemOutputs("3x gtceu:praseodymia_dust")
        .outputFluids("minecraft:water 2000")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(140)

    /**
     * ORE SIFTING INTO REE SANDS
     */

    const REEOres = [
        ["xenotime_y", 8, 4], ["xenotime_gd", 8, 4], ["xenotime_yb", 8, 4],
        ["monazite", 8, 5], ["monazite_ce", 8, 5], ["monazite_nd", 8, 5], ["monazite_sm", 8, 5], ["monazite_gd", 8, 5],
        ["wakefieldite_y", 8, 4], ["wakefieldite_la", 8, 4], ["wakefieldite_ce", 8, 4], ["wakefieldite_nd", 8, 4],
        ["bastnasite_y", 7, 3], ["bastnasite_la", 7, 3], ["bastnasite", 7, 3], ["bastnasite_nd", 7, 3],
        ["thortveitite", 6, 5],
        ["kolbeckite", 6, 5],
        ["fergusonite_y", 7, 4], ["fergusonite_ce", 7, 4], ["fergusonite_nd", 7, 4],
        ["chinleite_y", 6, 2], ["chinleite_ce", 6, 2], ["chinleite_nd", 6, 2],
        ["gadolinite_y", 8, 3], ["gadolinite_ce", 8, 3], ["gadolinite_nd", 8, 3],
        ["churchite_y", 6, 2], ["churchite_nd", 6, 2], ["churchite_dy", 6, 2],

        ["ixiolite_sc", 5, 4],
        ["heftetjernite", 5, 4],
        ["tritomite_y", 5, 2], ["tritomite_ce", 5, 2],
        ["pilawite_y", 4, 2],
        ["samarskite_y", 5, 5], ["samarskite_yb", 5, 5],
        ["gagarinite_y", 4, 2], ["gagarinite_ce", 4, 2],
        ["aeschynite_y", 4, 4], ["aeschynite_ce", 4, 4], ["aeschynite_nd", 4, 4], ["tantalaeschynite_ce", 4, 4],
        ["loparite", 4, 3],
        ["enalite", 3, 2],
        ["allanite_y", 4, 2], ["allanite_la", 4, 2], ["allanite_ce", 4, 2], ["allanite_sm", 4, 2],
        ["heamanite_ce", 4, 3],
        ["belovite_ce", 3, 2],

        ["bazzite", 3, 1],
        ["juonniite", 2, 1],
        ["warkite", 4, 1],
        ["nybergite", 3, 2],
        ["moydite_y", 2, 1],
        ["yttrotungstite_y", 2, 2], ["yttrotungstite_ce", 2, 2],
        ["ancylite_la", 2, 1], ["ancylite_ce", 2, 1],
        ["retzian_la", 2, 2], ["retzian_ce", 2, 2], ["retzian_nd", 2, 2],
        ["ningyoite", 1, 3],
        ["perchukite_y", 2, 2],
        ["deveroite_ce", 2, 1],
        ["cerite_ceca", 3, 1],
        ["kampelite", 3, 2],
        ["kangite", 2, 5],

        ["panguite", 1, 5],
        ["mckelveyite_y", 1, 3], ["mckelveyite_nd", 1, 3],
        ["agardite_y", 1, 2], ["agardite_la", 1, 2], ["agardite_ce", 1, 2], ["agardite_nd", 1, 2], ["agardite_dy", 1, 2],
        ["miserite", 1, 1],
        ["thalenite_y", 2, 0.5],
        ["alwilkinsite_y", 0.75, 1],
        ["fluorplumbopyrochlore", 0.66, 1.5], ["hydroxynatropyrochlore", 0.66, 1.5], ["pyrochlore", 0.66, 1.5], ["oxycalciopyrochlore", 0.66, 1.5],
        ["uranopolycrase", 1, 2],
        ["tranquillityite", 1, 3],
        ["roumaite", 1, 2],
        ["olgite", 1, 1],
        ["hezuolinite", 1, 3],
        ["nacareniobsite_ce", 1, 2], ["nacareniobsite_nd", 1, 2],
        ["remondite_la", 1.25, 0.75], ["remondite_ce", 1.25, 0.75],
        ["cebaite_ce", 1.5, 1], ["cebaite_nd", 1.5, 1],
        ["tancaite_ce", 1, 1.25],

        ["davidite_y", 0.75, 4], ["davidite_ce", 0.75, 4], ["davidite_la", 0.75, 4],
        ["oftedalite", 0.5, 0.25],
        ["saryarkite_y", 0.5, 0.5],
        ["tveitite_y", 2, 0.25],
        ["euxenite_y", 1, 5],
        ["levinsonite_y", 1.25, 1],
        ["micheelsenite", 0.75, 0.5],
        ["mineevite_y", 1.5, 0.66],
        ["chukhrovite_y", 1, 0.5], ["chukhrovite_ce", 1, 0.5], ["chukhrovite_nd", 1, 0.5], ["chukhrovite_ca", 0.25, 0.5],
        ["stefanweissite", 1, 4],
        ["mendeleevite_ce", 1, 0.66], ["mendeleevite_nd", 1, 0.66],
        ["phosinaite_ce", 1.25, 1.25],
        ["vicanite_ce", 1.5, 0.8],
        ["haitaite_la", 1, 2],
        ["loveringite", 0.66, 4],
        ["orthojoaquinite_la", 0.75, 1.5], ["orthojoaquinite_ce", 0.75, 1.5], ["joaquinite_ce", 0.75, 1.5], ["strontiojoaquinite", 0.25, 1.5],
        ["dualite", 0.5, 2.25],
        ["johnsenite_ce", 0.66, 2],
        ["francoisite_ce", 1.25, 1], ["francoisite_nd", 1.25, 1],
        ["lepersonnite_nd", 1.25, 1], ["lepersonnite_gd", 1.25, 1],
        ["yttrofluorite", 0.5, 0.15],
        ["yttrocerite", 0.5, 0.15],
        ["fluorapatite", 0.15, 0.2], ["apatite", 0.15, 0.2], ["hydroxylapatite", 0.15, 0.2],
        ["fullers_earth", 0.05, 0.1], ["granitic_mineral_sand", 0.05, 0.25], ["basaltic_mineral_sand", 0.05, 0.25], ["bentonite", 0.05, 0.1]
    ]
    REEOres.forEach(ore => {
        // Helper to convert float main-output values into chance (0.0-1.0 -> 0-10000)
        const floatToChance = v => {
            const c = Math.round(v * 10000)
            return Math.max(10, Math.min(10000, c))
        }

        //const normalizeForScaling = v => (Number.isInteger(v) ? v : Math.round(v * 100))

        const baseQuartz = 8500
        const baseGarnet = 4500
        const baseCass = 1200

        const sifter = event.recipes.gtceu.sifter(`kubejs:earthline/sift_${ore[0]}_to_purified_ree_sands`)
            .itemInputs(`gtceu:refined_${ore[0]}_ore`) // Has to be refined instead of purified, otherwise conflicts with gem sifting

        // `gtceu:${ore[0]}_dust` should always be a guaranteed 1 output
        const mainDust = `gtceu:${ore[0]}_dust`

        // Handle purified_ree_sands_dust (ore[1]) and heavy_mineral_tailings_dust (ore[2])
        if (Number.isInteger(ore[1])) {
            // purified_ree_sands as fixed count
            if (Number.isInteger(ore[2])) {
                // both integer -> keep original fixed outputs
                sifter.itemOutputs(`${ore[1]}x gtceu:purified_ree_sands_dust`, mainDust, `${ore[2]}x gtceu:heavy_mineral_tailings_dust`)
            } else {
                // purified fixed, heavy tailings chanced
                sifter.itemOutputs(`${ore[1]}x gtceu:purified_ree_sands_dust`, mainDust)
                sifter.chancedOutput("gtceu:heavy_mineral_tailings_dust", floatToChance(ore[2]), 0)
            }
        } else {
            // purified_ree_sands is a chance (float)
            sifter.itemOutputs(mainDust)
            sifter.chancedOutput("gtceu:purified_ree_sands_dust", floatToChance(ore[1]), 0)
            if (Number.isInteger(ore[2])) {
                sifter.itemOutputs(`${ore[2]}x gtceu:heavy_mineral_tailings_dust`)
            } else {
                sifter.chancedOutput("gtceu:heavy_mineral_tailings_dust", floatToChance(ore[2]), 0)
            }
        }

        // Scale existing chanced byproduct outputs relative to the main outputs (ore[1]+ore[2])
        // Normalize floats to a 0-100 like scale for sensible scaling
        const mainValue = ore[1] + ore[2] // Don't normalize floats to 0-100 scale, because this disproportionately boosts outputs for floats
        const scaleFactor = mainValue / 10 // baseline normalization
        const calcChance = base => Math.max(10, Math.min(10000, Math.round(base * scaleFactor)))

        sifter.chancedOutput("gtceu:quartz_sand_dust", calcChance(baseQuartz), 0)
            .chancedOutput("gtceu:garnet_sand_dust", calcChance(baseGarnet), 0)
            .chancedOutput("gtceu:cassiterite_sand_dust", calcChance(baseCass), 0)
            .EUt(GTValues.VHA[GTValues.HV])
            .duration(160)
    })


    /**
     * MAIN REE LINE RECIPES
     */

    // Magnetic Separation
    event.recipes.gtceu.electromagnetic_separator("kubejs:earthline/magnetic_separation")
        .itemInputs("6x gtceu:purified_ree_sands_dust")
        .itemOutputs("5x gtceu:concentrated_ree_sands_dust")
        .chancedOutput("1x gtceu:magnetite_dust", 9500, 0)
        .chancedOutput("1x gtceu:ilmenite_dust", 3500, 0)
        .duration(140)
        .EUt(GTValues.VHA[GTValues.EV])

    // Dissolution
    event.recipes.gtceu.ore_digestion("kubejs:earthline/digestion")
        .itemInputs("10x gtceu:concentrated_ree_sands_dust")
        .inputFluids("gtceu:sulfuric_acid 4000")
        .chancedOutput("2x gtceu:silicon_tetrafluoride_dust", 8000, 0)
        .chancedOutput("3x gtceu:thorium_phosphate_dust", 3000, 0)
        .outputFluids("gtceu:ree_sulfate_sludge 3000")
        .chancedFluidOutput("gtceu:phosphoric_acid 1000", 8000, 0)
        .chancedFluidOutput("gtceu:carbon_dioxide 1000", 7000, 0)
        .chancedFluidOutput("gtceu:hydrofluoric_acid 1000", 2000, 0)
        .chancedFluidOutput("gtceu:hydrogen_sulfide 1000", 1000, 0)
        .chancedFluidOutput("gtceu:hydrochloric_acid 1000", 1000, 0)
        .duration(360)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.ore_digestion("kubejs:earthline/digestion_vanilla")
        .itemInputs("16x gtceu:rare_earth_dust")
        .inputFluids("gtceu:sulfuric_acid 4000")
        .chancedOutput("2x gtceu:silicon_tetrafluoride_dust", 8000, 0)
        .chancedOutput("3x gtceu:thorium_phosphate_dust", 3000, 0)
        .outputFluids("gtceu:ree_sulfate_sludge 3000")
        .chancedFluidOutput("gtceu:phosphoric_acid 1000", 8000, 0)
        .chancedFluidOutput("gtceu:carbon_dioxide 1000", 7000, 0)
        .chancedFluidOutput("gtceu:hydrofluoric_acid 1000", 2000, 0)
        .chancedFluidOutput("gtceu:hydrogen_sulfide 1000", 1000, 0)
        .chancedFluidOutput("gtceu:hydrochloric_acid 1000", 1000, 0)
        .duration(360)
        .EUt(GTValues.VHA[GTValues.IV])

    // Add Base
    event.recipes.gtceu.chemical_bath("kubejs:earthline/baseficiation")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:ree_sulfate_sludge 1000")
        .itemOutputs("6x gtceu:ree_hydroxide_residue_dust", "7x gtceu:sodium_bisulfate_dust")
        .chancedOutput("5x gtceu:thorium_pyrophosphate_dust", 4500, 0)
        .chancedOutput("1x gtceu:small_radium_phosphate_dust", 2200, 0)
        .outputFluids("minecraft:water 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV])

    // Neutralize
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/neutralization")
        .itemInputs("6x gtceu:ree_hydroxide_residue_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .chancedInput("3x gtceu:sodium_hydroxide_dust", 5000, 0)
        .chancedFluidInput("gtceu:hydrochloric_acid 1000", 5000, 0)
        .outputFluids("gtceu:ree_hydroxide_solution 2000")
        .chancedOutput("5x gtceu:aluminium_sulfate_dust", 7500, 0)
        .chancedOutput("4x gtceu:aluminium_chloride_dust", 1500, 0)
        .chancedFluidOutput("gtceu:iron_iii_chloride 1000", 6000, 0)
        .chancedOutput("3x gtceu:thorium_tetrachloride_dust", 2800, 0)
        .duration(500)
        .EUt(GTValues.VA[GTValues.MV])

    // Filter
    event.recipes.gtceu.centrifuge("kubejs:earthline/filtration")
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:ree_hydroxide_solution 2000")
        .outputFluids("gtceu:ree_hydroxide_concentrate 1500", "gtceu:uranium_filtrate 500")
        .duration(260)
        .EUt(GTValues.VHA[GTValues.EV])

    // TODO: Uranium filtrate subline

    // Oxalation
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/oxalation")
        .inputFluids("gtceu:ree_hydroxide_concentrate 1000", "gtceu:oxalic_acid_solution 1000")
        .itemOutputs("12x gtceu:sodium_bicarbonate_dust", "8x gtceu:ree_oxalate_mix_dust")
        .outputFluids("minecraft:water 2000")
        .duration(180)
        .EUt(GTValues.VA[GTValues.HV])
    
    // Oxidation
    event.recipes.gtceu.arc_furnace("kubejs:earthline/annealing")
        .itemInputs("8x gtceu:ree_oxalate_mix_dust")
        .inputFluids("gtceu:oxygen 2000")
        .itemOutputs("6x gtceu:ree_oxide_mix_dust")
        .outputFluids("gtceu:carbon_dioxide 2000")
        .chancedOutput("5x gtceu:yttria_dust", 8800, 0)
        .chancedOutput("5x gtceu:scandia_dust", 6500, 0)
        .chancedOutput("7x gtceu:tantalum_pentoxide_dust", 1500, 0)
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV])

    // Nitration
    event.recipes.gtceu.centrifuge("kubejs:earthline/nitration")
        .itemInputs("6x gtceu:ree_oxide_mix_dust")
        .inputFluids("gtceu:nitric_acid 2000")
        .outputFluids("gtceu:ree_nitrate_solution 2000")
        .itemOutputs("5x gtceu:cerium_trioxide_dust")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.mixer("kubejs:earthline/tbp_mixing")
        .inputFluids("gtceu:ree_nitrate_solution 1000", "gtceu:tributyl_phosphate 1000")
        .outputFluids('gtceu:nitric_ree_tbp_mix 2000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.distillation_tower("kubejs:earthline/distill_to_fractions")
        .inputFluids("gtceu:nitric_ree_tbp_mix 2000")
        .outputFluids("gtceu:nitric_tbp_residue 1000", "gtceu:heavy_ree_nitrate_filtrate 200", "gtceu:middle_ree_nitrate_filtrate 350", "gtceu:light_ree_nitrate_filtrate 450")
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    // LIGHT REE LINE
    // Lanthanum
    event.recipes.gtceu.autoclave("kubejs:restore_hydrohalite")
        .itemInputs("gtceu:salt_dust")
        .inputFluids("gtceu:distilled_water 2000", "gtceu:steam 5600")
        .itemOutputs("3x gtceu:hydrohalite_gem")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.centrifuge("kubejs:earthline/lanthanum_aqueation")
        .itemInputs("3x gtceu:hydrohalite_dust")
        .inputFluids("gtceu:light_ree_nitrate_filtrate 1000")
        .outputFluids("gtceu:lanthanum_rich_aqueous_phase 300", "gtceu:light_ree_residue 700")
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:earthline/lanthanum_distillation")
        .inputFluids("gtceu:lanthanum_rich_aqueous_phase 1000")
        .outputFluids("gtceu:lanthanum_nitrate_solution 500", "gtceu:dilute_nitric_acid 500")
        .duration(180)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.mixer("kubejs:earthline/lanthanum_oxalation")
        .inputFluids("gtceu:lanthanum_nitrate_solution 1000", "gtceu:oxalic_acid_solution 1000")
        .itemOutputs("20x gtceu:lanthanum_oxalate_dust")
        .outputFluids("gtceu:dilute_nitric_acid 1500")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/lanthanum_oxidation")
        .itemInputs("20x gtceu:lanthanum_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000") 
        .outputFluids("gtceu:carbon_dioxide 6000") 
        .itemOutputs("5x gtceu:lanthana_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/lanthanum_fluorination")
        .itemInputs("5x gtceu:lanthana_dust") 
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:lanthanum_trifluoride_dust") 
        .outputFluids("minecraft:water 3000") 
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/lanthanum_reduction")
        .itemInputs("8x gtceu:lanthanum_trifluoride_dust", "3x gtceu:calcium_dust") 
        .inputFluids("gtceu:steam 9600")
        .itemOutputs("2x gtceu:lanthanum_dust", "9x gtceu:fluorite_dust")
        .duration(260)
        .EUt(GTValues.VHA[GTValues.HV])

    // Cerium
    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/cerium_oxide_switch")
        .itemInputs("5x gtceu:cerium_trioxide_dust") 
        .inputFluids("gtceu:oxygen 1000")
        .itemOutputs("6x gtceu:ceria_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.HV])
        .blastFurnaceTemp(2200)
    event.recipes.gtceu.autoclave("kubejs:earthline/cerium_reduction")
        .itemInputs("6x gtceu:ceria_dust", "2x gtceu:aluminium_dust")
        .inputFluids("gtceu:steam 9600")
        .itemOutputs("2x gtceu:cerium_dust", "5x gtceu:corundum_dust")
        .duration(260)
        .EUt(GTValues.VHA[GTValues.HV])

    // Praseodymium
    event.recipes.gtceu.mixer("kubejs:earthline/praseodymium_renitration")
        .inputFluids("gtceu:light_ree_residue 1000", "gtceu:nitric_acid 1000")
        .itemOutputs("6x gtceu:praseodymium_nitrate_tbp_complex_dust")
        .outputFluids("gtceu:neodymium_rich_sludge 1000")
        .duration(180)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.centrifuge("kubejs:earthline/praseodymium_nitrate_separation")
        .itemInputs("6x gtceu:praseodymium_nitrate_tbp_complex_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:dilute_nitric_acid 1000", "gtceu:tributyl_phosphate 500")
        .itemOutputs("6x gtceu:praseodymium_nitrate_dust")
        .duration(90)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/praseodymium_oxalation")
        .inputFluids("gtceu:oxalic_acid_solution 1000")
        .itemInputs("6x gtceu:praseodymium_nitrate_dust")
        .itemOutputs("20x gtceu:praseodymium_oxalate_dust")
        .outputFluids("gtceu:dilute_nitric_acid 1000")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/praseodymium_oxidation")
        .itemInputs("60x gtceu:praseodymium_oxalate_dust")
        .inputFluids("gtceu:oxygen 11000")
        .outputFluids("gtceu:carbon_dioxide 18000")
        .itemOutputs("17x gtceu:praseodymium_oxide_dust")
        .duration(120)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/praseodymium_fluorination")
        .itemInputs("17x gtceu:praseodymium_oxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 18000")
        .itemOutputs("24x gtceu:praseodymium_trifluoride_dust")
        .outputFluids("minecraft:water 9000", "gtceu:oxygen 2000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/praseodymium_reduction")
        .itemInputs("8x gtceu:praseodymium_trifluoride_dust", "3x gtceu:calcium_dust") 
        .inputFluids("gtceu:steam 9600")
        .itemOutputs("2x gtceu:praseodymium_dust", "9x gtceu:fluorite_dust")
        .duration(260)
        .EUt(GTValues.VHA[GTValues.HV])

    // Neodymium
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/neodymium_nitrate")
        .inputFluids("gtceu:neodymium_rich_sludge 1000", "gtceu:distilled_water 6000")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("19x gtceu:neodymium_nitrate_dust", "5x gtceu:sodium_nitrate_dust")
        .chancedOutput("gtceu:small_samarium_nitrate_dust", 6600, 0)
        .duration(280)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.mixer("kubejs:earthline/neodymium_oxalation")
        .inputFluids("gtceu:oxalic_acid_solution 3000")
        .itemInputs("38x gtceu:neodymium_nitrate_dust")
        .outputFluids("gtceu:dilute_nitric_acid 6000", "minecraft:water 3000")
        .itemOutputs("20x gtceu:neodymium_oxalate_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/neodymium_oxidation")
        .itemInputs("20x gtceu:neodymium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:neodymia_dust")
        .duration(120)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/neodymium_fluorination")
        .itemInputs("5x gtceu:neodymia_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:neodymium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/neodymium_reduction")
        .itemInputs("4x gtceu:neodymium_trifluoride_dust", "3x gtceu:lithium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("1x gtceu:neodymium_dust", "6x gtceu:griceite_dust")
        .duration(110)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.mixer("kubejs:earthline/samarium_oxalation")
        .inputFluids("gtceu:oxalic_acid_solution 3000")
        .itemInputs("38x gtceu:samarium_nitrate_dust")
        .outputFluids("gtceu:dilute_nitric_acid 6000", "minecraft:water 3000")
        .itemOutputs("20x gtceu:samarium_oxalate_dust")
        .duration(130)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/samarium_oxidation")
        .itemInputs("20x gtceu:samarium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:samaria_dust")
        .duration(130)
        .EUt(GTValues.VHA[GTValues.IV])

    // PROMETHIUM (TODO)

    // MEDIUM REE LINE
    // SAMARIUM
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/samarium_extraction")
        .inputFluids("gtceu:middle_ree_nitrate_filtrate 1000", "gtceu:distilled_water 4000")
        .itemInputs("20x gtceu:ammonium_sulfate_dust")
        .itemOutputs("14x gtceu:samarium_ammonium_sulfate_hydrate_dust", "9x gtceu:ammonium_nitrate_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 2000", "gtceu:middle_ree_residue 700")
        .duration(360)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/samarium_oxidation")
        .notConsumableFluid("minecraft:lava 4000")
        .itemInputs("14x gtceu:samarium_ammonium_sulfate_hydrate_dust")
        .inputFluids("gtceu:oxygen 6000")
        .itemOutputs("5x gtceu:samaria_dust")
        .outputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:sulfur_trioxide 1000", "minecraft:water 5000")
        .duration(360)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/samarium_fluorination")
        .itemInputs("5x gtceu:samaria_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:samarium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.mixer("kubejs:earthline/samarium_reduction")
        .itemInputs("4x gtceu:samarium_trifluoride_dust", "1x gtceu:lanthanum_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:reduced_samarium_mix 1000")
        .duration(560)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.distillation_tower("kubejs:earthline/samarium_distillation")
        .inputFluids("gtceu:reduced_samarium_mix 1000")
        .itemOutputs("4x gtceu:lanthanum_trifluoride_dust")
        .outputFluids("gtceu:samarium_sludge 144", "minecraft:water 1000")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.fluid_solidifier("kubejs:earthline/samarium_solidify")
        .inputFluids("gtceu:samarium_sludge 144")
        .itemOutputs("gtceu:samarium_dust")
        .notConsumable("gtceu:cylinder_casting_mold")
        .duration(40)
        .EUt(GTValues.VHA[GTValues.LV])

    // EUROPIUM
    event.recipes.gtceu.large_chemical_reactor("kubejs:earthline/europium_carbonate")
        .inputFluids("gtceu:middle_ree_residue 1000", "gtceu:zinc_amalgam 1000")
        .itemInputs("24x gtceu:soda_ash_dust")
        .itemOutputs("14x gtceu:europium_carbonate_dust", "5x gtceu:zinc_carbonate_dust") 
        .outputFluids("gtceu:mercuric_gadolinium_nitrate_sludge 1000")
        .duration(500)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/europia")
        .itemInputs("14x gtceu:europium_carbonate_dust") 
        .inputFluids("gtceu:argon 100")
        .itemOutputs("5x gtceu:europia_dust")
        .outputFluids("gtceu:carbon_dioxide 3000")
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV])
        .blastFurnaceTemp(4200)
    event.recipes.gtceu.chemical_bath("kubejs:earthline/europium_trichloride")
        .itemInputs("5x gtceu:europia_dust")
        .inputFluids("gtceu:hydrochloric_acid 6000") 
        .itemOutputs("8x gtceu:europium_trichloride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.alloy_blast_smelter("kubejs:earthline/europium_salt")
        .itemInputs("4x gtceu:europium_trichloride_dust", "6x gtceu:salt_dust")
        .outputFluids("gtceu:molten_europium_salt 1000")
        .duration(380)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(5100)
    event.recipes.gtceu.alloy_blast_smelter("kubejs:earthline/europium_salt_boosted")
        .itemInputs("4x gtceu:europium_trichloride_dust", "6x gtceu:salt_dust")
        .inputFluids("gtceu:neon 250")
        .outputFluids("gtceu:molten_europium_salt 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(5100)
    event.recipes.gtceu.electrolyzer("kubejs:earthline/europium_purified")
        .inputFluids("gtceu:molten_europium_salt 1000")
        .chancedInput("gtceu:graphene_double_wire", 400, 0)
        .itemOutputs("1x gtceu:europium_dust", "3x gtceu:sodium_dust")
        .outputFluids("gtceu:chlorine 6000")
        .duration(270)
        .EUt(GTValues.VA[GTValues.LuV])

    // GADOLINIUM
    event.recipes.gtceu.centrifuge("kubejs:earthline/gadolinium_centrifuge")
        .inputFluids("gtceu:mercuric_gadolinium_nitrate_sludge 1000")
        .itemOutputs("13x gtceu:gadolinium_nitrate_dust")
        .chancedOutput("1x gtceu:terbium_nitrate_dust", 2300, 0)
        .outputFluids("gtceu:sodium_amalgam 2000")
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.mixer("kubejs:earthline/gadolinium_oxalation")
        .inputFluids("gtceu:oxalic_acid_solution 3000") 
        .itemInputs("26x gtceu:gadolinium_nitrate_dust")
        .outputFluids("gtceu:nitric_acid 6000")
        .itemOutputs("20x gtceu:gadolinium_oxalate_dust") 
        .duration(170)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/gadolinium_oxidation")
        .itemInputs("20x gtceu:gadolinium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:gadolinia_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/gadolinium_fluorination")
        .itemInputs("5x gtceu:gadolinia_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:gadolinium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(220)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/gadolinium_reduction")
        .itemInputs("8x gtceu:gadolinium_trifluoride_dust", "3x gtceu:calcium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("2x gtceu:gadolinium_dust", "9x gtceu:fluorite_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.EV])

    // HEAVY REE LINE
    // TERBIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/terbium_ion_exch")
        .itemInputs("1x kubejs:ion_exchange_resin", "33x gtceu:triammonium_citrate_dust")
        .inputFluids("gtceu:heavy_ree_nitrate_filtrate 1000")
        .itemOutputs("19x gtceu:terbium_citrate_dust", "1x kubejs:mixed_ree_ion_exchange_resin", "10x gtceu:ammonium_nitrate_dust")
        .outputFluids("minecraft:water 1000")
        .duration(310)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/terbium_citrate_to_nitrate")
        .itemInputs("19x gtceu:terbium_citrate_dust")
        .inputFluids("gtceu:nitric_acid 3000")
        .itemOutputs("13x gtceu:terbium_nitrate_dust", "22x gtceu:citric_acid_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.mixer("kubejs:earthline/terbium_oxalation")
        .inputFluids("gtceu:oxalic_acid_solution 3000") 
        .itemInputs("26x gtceu:terbium_nitrate_dust")
        .outputFluids("gtceu:nitric_acid 6000")
        .itemOutputs("20x gtceu:terbium_oxalate_dust") 
        .duration(170)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/terbium_oxidation")
        .itemInputs("20x gtceu:terbium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:terbia_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/terbium_fluorination")
        .itemInputs("5x gtceu:terbia_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:terbium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(220)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/terbium_reduction")
        .itemInputs("8x gtceu:terbium_trifluoride_dust", "2x gtceu:aluminium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("2x gtceu:terbium_dust", "8x gtceu:aluminium_fluoride_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])

    // DYSPROSIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/dysprosium_ion_exch")
        .itemInputs("1x kubejs:mixed_ree_ion_exchange_resin", "36x gtceu:ethylenediaminetetraacetic_acid_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("37x gtceu:dysprosium_edta_complex_dust", "1x kubejs:weighty_ion_exchange_resin")
        .outputFluids("minecraft:water 1000")
        .duration(310)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/dysprosium_edta_to_chloride")
        .itemInputs("37x gtceu:dysprosium_edta_complex_dust")
        .inputFluids("gtceu:hydrochloric_acid 3000")
        .itemOutputs("4x gtceu:dysprosium_trichloride_dust", "18x gtceu:ethylenediaminetetraacetic_acid_dust")
        .outputFluids("gtceu:ethylenediamene 500", "gtceu:acetic_acid 1500")
        .duration(170)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.autoclave("kubejs:earthline/dysprosium_reduction")
        .itemInputs("4x gtceu:dysprosium_trichloride_dust", "3x gtceu:lithium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("1x gtceu:dysprosium_dust", "6x gtceu:lithium_chloride_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])

    // HOLMIUM
    // Weighty REE Ion Exchange resin + EDTA*2 -> Holmium EDTA complex, Discolored REE Ion Exchange resin
    event.recipes.gtceu.chemical_bath("kubejs:earthline/holmium_ion_exch")
        .itemInputs("1x kubejs:weighty_ion_exchange_resin", "72x gtceu:ethylenediaminetetraacetic_acid_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("73x gtceu:holmium_edta_complex_dust", "1x kubejs:discolored_ion_exchange_resin")
        .outputFluids("minecraft:water 1000")
        .duration(310)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/holmium_edta_to_oxalate")
        .itemInputs("73x gtceu:holmium_edta_complex_dust")
        .inputFluids("gtceu:oxalic_acid_solution 3000")
        .itemOutputs("20x gtceu:holmium_oxalate_dust", "48x gtceu:ethylenediaminetetraacetic_acid_dust")
        .outputFluids("gtceu:ethylenediamene 750", "gtceu:acetic_acid 2000", "gtceu:hydrogen_cyanide 1500")
        .duration(190)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/holmium_oxidation")
        .itemInputs("20x gtceu:holmium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:holmia_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/holmium_fluorination")
        .itemInputs("5x gtceu:holmia_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:holmium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(220)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/holmium_reduction")
        .itemInputs("8x gtceu:holmium_trifluoride_dust", "3x gtceu:calcium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("2x gtceu:holmium_dust", "9x gtceu:fluorite_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])

    // ERBIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/erbium_ion_exch")
        .itemInputs("1x kubejs:discolored_ion_exchange_resin", "1x gtceu:diethylenetriaminepentaacetic_acid_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("2x gtceu:erbium_dtpa_complex_dust", "1x kubejs:heavy_ree_ion_exchange_resin")
        .outputFluids("minecraft:water 1000")
        .duration(310)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("kubejs:earthline/erbium_dtpa_centrifuge")
        .itemInputs("2x gtceu:erbium_dtpa_complex_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("13x gtceu:erbium_nitrate_dust")
        .outputFluids("gtceu:acidic_dtpa_solution 2000")
        .duration(330)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.autoclave("kubejs:earthline/erbium_double_salt")
        .itemInputs("26x gtceu:erbium_nitrate_dust", "3x gtceu:magnesium_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("53x gtceu:erbium_magnesium_nitrate_dust")
        .outputFluids("gtceu:steam 9600")
        .duration(420)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/erbium_fluorination")
        .itemInputs("53x gtceu:erbium_magnesium_nitrate_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:erbium_trifluoride_dust", "27x gtceu:magnesium_nitrate_dust")
        .outputFluids("minecraft:water 3000")
        .duration(220)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.autoclave("kubejs:earthline/erbium_reduction")
        .itemInputs("8x gtceu:erbium_trifluoride_dust", "3x gtceu:calcium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("2x gtceu:erbium_dust", "9x gtceu:fluorite_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])

    // THULIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/thulium_ion_exch")
        .itemInputs("1x kubejs:heavy_ree_ion_exchange_resin", "2x gtceu:diethylenetriaminepentaacetic_acid_dust")
        .inputFluids("gtceu:fluorosulfuric_acid 1000")
        .itemOutputs("3x gtceu:thulium_dtpa_complex_dust", "1x kubejs:worn_ion_exchange_resin")
        .outputFluids("gtceu:diluted_sulfuric_acid 2000", "gtceu:fluorine 1000")
        .duration(500)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/thulium_dtpa_to_oxalate")
        .itemInputs("3x gtceu:thulium_dtpa_complex_dust")
        .inputFluids("gtceu:oxalic_acid_solution 3000")
        .itemOutputs("20x gtceu:thulium_oxalate_dust", "1x gtceu:diethylenetriaminepentaacetic_acid_dust")
        .outputFluids("gtceu:diethylenetriamine 750", "gtceu:glycolonitrile 2000", "gtceu:hydrogen_cyanide 750")
        .duration(230)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/thulium_oxidation")
        .itemInputs("20x gtceu:thulium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:thulia_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.chemical_bath("kubejs:earthline/thulium_fluorination")
        .itemInputs("5x gtceu:thulia_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:thulium_trifluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(220)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.autoclave("kubejs:earthline/thulium_reduction")
        .itemInputs("8x gtceu:thulium_trifluoride_dust", "2x gtceu:aluminium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("2x gtceu:thulium_dust", "8x gtceu:aluminium_fluoride_dust")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])
    
    // YTTERBIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/ytterbium_ion_exch")
        .itemInputs("1x kubejs:worn_ion_exchange_resin")
        .inputFluids("gtceu:sodium_amalgam 1000")
        .itemOutputs("1x kubejs:damaged_ion_exchange_resin", "7x gtceu:sodium_bisulfate_dust")
        .outputFluids("gtceu:ytterbium_amalgam 1000")
        .duration(320)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/ytterbium_dirty_oxalation")
        .inputFluids("gtceu:ytterbium_amalgam 1000", "gtceu:hydrochloric_acid 1000", "gtceu:oxalic_acid_solution 3000")
        .outputFluids("gtceu:dirty_ytterbium_oxalate_solution 1000", "gtceu:salt_water 1000")
        .notConsumable("gtceu:ruthenium_dust")
        .duration(250)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.centrifuge("kubejs:earthline/ytterbium_oxalation")
        .inputFluids("gtceu:dirty_ytterbium_oxalate_solution 1000")
        .itemOutputs("20x gtceu:ytterbium_oxalate_dust")
        .outputFluids("gtceu:mercury 1000")
        .duration(440)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.arc_furnace("kubejs:earthline/ytterbium_oxidation")
        .itemInputs("20x gtceu:ytterbium_oxalate_dust")
        .inputFluids("gtceu:oxygen 3000")
        .outputFluids("gtceu:carbon_dioxide 6000")
        .itemOutputs("5x gtceu:ytterbia_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.electric_blast_furnace("kubejs:earthline/ytterbia_blasting")
        .itemInputs("5x gtceu:ytterbia_dust", "2x gtceu:aluminium_dust")
        .inputFluids("gtceu:neon 125")
        .itemOutputs("2x gtceu:ytterbium_dust", "5x gtceu:corundum_dust")
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV])
        .blastFurnaceTemp(4200)

    // LUTETIUM
    event.recipes.gtceu.chemical_bath("kubejs:earthline/lutetium_ion_exch")
        .itemInputs("1x kubejs:damaged_ion_exchange_resin", "4x gtceu:2_hydroxyisobutyric_acid_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("5x gtceu:lutetium_hiba_complex_dust")
        .chancedOutput("kubejs:depleted_ion_exchange_resin", 8500, 0)
        .chancedOutput("gtceu:sodium_polystyrene_sulfonate_plate", 1000, 0)
        .chancedFluidOutput("gtceu:styrene 1000", 500, 0)
        .chancedOutput("gtceu:small_hafnium_dust", 150, 0)
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.chemical_reactor("kubejs:earthline/lutetium_hiba_to_fluoride")
        .itemInputs("5x gtceu:lutetium_hiba_complex_dust")
        .inputFluids("gtceu:hydrofluoric_acid 3000")
        .itemOutputs("4x gtceu:lutetium_trifluoride_dust", "3x gtceu:2_hydroxyisobutyric_acid_dust")
        .outputFluids("gtceu:acetone 750", "gtceu:hydrogen_cyanide 250")
        .duration(220)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.autoclave("kubejs:earthline/lutetium_reduction")
        .itemInputs("4x gtceu:lutetium_trifluoride_dust", "3x gtceu:lithium_dust") 
        .inputFluids("gtceu:steam 4800")
        .itemOutputs("1x gtceu:lutetium_dust", "6x gtceu:griceite_dust")
        .duration(170)
        .EUt(GTValues.VHA[GTValues.LuV])
})