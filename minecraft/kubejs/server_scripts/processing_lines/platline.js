/**
 * Hardmode Platline recipes.
 * An abbreviated version of NH's platline.
 */
ServerEvents.recipes(event => {
    // Normal Platinum Group recipes
    event.remove({ id: "gtceu:centrifuge/pgs_separation" })
    event.remove({ id: "gtceu:electrolyzer/raw_platinum_separation" })
    event.remove({ id: "gtceu:chemical_reactor/raw_palladium_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_palladium_separation" })
    event.remove({ id: "gtceu:chemical_reactor/inert_metal_mixture_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/inert_metal_mixture_separation" })
    event.remove({ id: "gtceu:chemical_reactor/ruthenium_tetroxide_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/ruthenium_tetroxide_separation" })
    event.remove({ id: "gtceu:electrolyzer/rhodium_sulfate_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/rarest_metal_mixture_separation" })
    event.remove({ id: "gtceu:centrifuge/iridium_metal_residue_separation" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:distillation_tower/acidic_osmium_solution_separation" })
    event.remove({ id: "gtceu:distillery/acidic_osmium_solution_separation_to_hydrochloric_acid" })
    event.remove({ id: "gtceu:distillery/acidic_osmium_solution_separation_to_water" })
    event.remove({ id: "gtceu:chemical_reactor/osmium_tetroxide_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/osmium_tetroxide_separation" })
    // event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__platinum_sludge_residue" })

    // Formic Acid
    event.recipes.gtceu.chemical_reactor("sodium_methoxide")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:methanol 1000")
        .itemOutputs("6x gtceu:sodium_methoxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(10).EUt(30)

    event.recipes.gtceu.chemical_reactor("methyl_formate")
        .itemInputs("6x gtceu:sodium_methoxide_dust")
        .inputFluids("gtceu:methanol 1000", "gtceu:carbon_dioxide 1000")
        .outputFluids("gtceu:methyl_formate 1000", "minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .duration(16).EUt(30)

    event.recipes.gtceu.chemical_reactor("methyl_formate_large")
        .itemInputs("54x gtceu:sodium_methoxide_dust")
        .inputFluids("gtceu:methanol 9000", "gtceu:carbon_dioxide 9000")
        .outputFluids("gtceu:methyl_formate 9000", "minecraft:water 9000")
        .itemOutputs("27x gtceu:sodium_hydroxide_dust")
        .duration(16).EUt(30)

    event.recipes.gtceu.chemical_reactor("formic_acid")
        .inputFluids("gtceu:methyl_formate 1000", "minecraft:water 1000")
        .outputFluids("gtceu:formic_acid 1000", "gtceu:methanol 1000")
        .duration(16).EUt(30)

    // Potassium Pyrosulfate
    event.recipes.gtceu.chemical_bath("rock_salt_to_potassium_bisulfate")
        .itemInputs("2x gtceu:rock_salt_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("7x gtceu:potassium_bisulfate_dust")
        .outputFluids("gtceu:hydrochloric_acid 1000")
        .duration(60).EUt(30)

    event.recipes.gtceu.chemical_bath("saltpeter_to_potassium_bisulfate")
        .itemInputs("5x gtceu:saltpeter_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("7x gtceu:potassium_bisulfate_dust")
        .outputFluids("gtceu:nitric_acid 1000")
        .duration(60).EUt(30)

    event.recipes.gtceu.chemical_reactor("potassium_bisulfate_to_potassium_pyrosulfate")
        .itemInputs("14x gtceu:potassium_bisulfate_dust")
        .itemOutputs("11x gtceu:potassium_pyrosulfate_dust")
        .outputFluids("minecraft:water 1000")
        .duration(30).EUt(64)
        .circuit(1)

    event.recipes.gtceu.chemical_reactor("potassium_sulfate_to_potassium_pyrosulfate")
        .itemInputs("7x gtceu:potassium_sulfate_dust")
        .inputFluids("gtceu:sulfur_trioxide 1000")
        .itemOutputs("11x gtceu:potassium_pyrosulfate_dust")
        .duration(30).EUt(64)

    // Sodium Peroxide
    event.recipes.gtceu.chemical_reactor("sodium_peroxide")
        .itemInputs("6x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:hydrogen_peroxide 7000")
        .itemOutputs("4x gtceu:sodium_peroxide_dust")
        .outputFluids("minecraft:water 8000", "gtceu:oxygen 6000")
        .duration(100).EUt(30)

    // Sodium Nitrate
    event.recipes.gtceu.chemical_reactor("sodium_nitrate")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("5x gtceu:sodium_nitrate_dust")
        .outputFluids("minecraft:water 1000")
        .duration(5).EUt(60)

    event.recipes.gtceu.chemical_reactor("sodium_nitrate_alternate")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("5x gtceu:sodium_nitrate_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(5).EUt(60)

    // Platinum Group Sludge
    event.recipes.gtceu.chemical_bath("bathe_platinum_group_sludge_dust")
        .itemInputs("2x gtceu:platinum_group_sludge_dust")
        .inputFluids("gtceu:aqua_regia 2000")
        .itemOutputs("gtceu:platinum_group_residue_dust", "gtceu:platinum_sludge_residue_dust")
        .outputFluids("gtceu:platinum_palladium_leachate 1000")
        .duration(250).EUt(30)

    event.recipes.gtceu.chemical_bath("bathe_platinum_metallic_dust")
        .itemInputs("2x gtceu:platinum_metallic_dust")
        .inputFluids("gtceu:aqua_regia 2000")
        .itemOutputs("gtceu:platinum_group_residue_dust")
        .outputFluids("gtceu:platinum_palladium_leachate 1000")
        .duration(250).EUt(30)

    // Platinum Sludge Residue - recipe does not allign with formula and conflicts with NM recipe
    // event.recipes.gtceu.centrifuge("centrifuge_platinum_sludge_residue_dust")
    //     .itemInputs("5x gtceu:platinum_sludge_residue_dust")
    //     .itemOutputs("2x gtceu:silicon_dioxide_dust", "2x gtceu:copper_dust")
    //     .chancedOutput("gtceu:gold_dust", 1000, 1000)
    //     .duration(938).EUt(30)

    // Platinum
    event.recipes.gtceu.chemical_reactor("platinum_palladium_leachate_separation")
        .itemInputs("8x gtceu:ammonium_chloride_dust")
        .inputFluids("gtceu:platinum_palladium_leachate 1000")
        .itemOutputs("9x gtceu:ammonium_hexachloroplatinate_dust", "gtceu:crude_platinum_residue_dust")
        .outputFluids("gtceu:palladium_rich_ammonia 1000")
        .duration(1200).EUt(30)

    event.recipes.gtceu.electrolyzer("electrolyze_ammonium_hexachloroplatinate")
        .itemInputs("9x gtceu:ammonium_hexachloroplatinate_dust")
        .outputFluids("gtceu:ammonia 2000", "gtceu:chloroplatinic_acid 1000")
        .duration(30).EUt(30)

    event.recipes.gtceu.distillery("distill_chloroplatinic_acid")
        .inputFluids("gtceu:chloroplatinic_acid 1000")
        .circuit(1)
        .itemOutputs("3x gtceu:platinum_raw_dust")
        .outputFluids("gtceu:hydrochloric_acid 4000")
        .duration(120).EUt(30)

    event.recipes.gtceu.autoclave("platinum_raw_dust_to_platinum")
        .itemInputs("3x gtceu:platinum_raw_dust", "gtceu:calcium_dust")
        .inputFluids("gtceu:steam 3840")
        .itemOutputs("gtceu:platinum_dust", "3x gtceu:calcium_chloride_dust")
        .outputFluids("minecraft:water 24")
        .duration(30).EUt(30)

    event.recipes.gtceu.sifter("sift_crude_platinum_residue_dust")
        .itemInputs("gtceu:crude_platinum_residue_dust")
        .chancedOutput("gtceu:platinum_metallic_dust", 9500, 0)
        .duration(600).EUt(30)

    // Palladium
    event.recipes.gtceu.mixer("palladium_rich_ammonia")
        .itemInputs("2x gtceu:palladium_metallic_dust")
        .inputFluids("gtceu:ammonia 2000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:palladium_rich_ammonia 1000")
        .duration(250).EUt(30)

    event.recipes.gtceu.fluid_solidifier("solidify_palladium_rich_ammonia")
        .inputFluids("gtceu:palladium_rich_ammonia 500")
        .notConsumable("gtceu:ball_casting_mold")
        .itemOutputs("gtceu:crude_palladium_residue_dust")
        .duration(125).EUt(30)

    event.recipes.gtceu.chemical_reactor("palladium_metallic_dust_to_palladium_raw_dust")
        .itemInputs("2x gtceu:palladium_metallic_dust")
        .inputFluids("gtceu:palladium_rich_ammonia 1000")
        .itemOutputs("3x gtceu:crude_palladium_residue_dust", "gtceu:palladium_raw_dust")
        .outputFluids("gtceu:ammonia 2000")
        .duration(250).EUt(30)

    event.recipes.gtceu.chemical_reactor("raw_palladium_dust_to_palladium_dust")
        .itemInputs("3x gtceu:palladium_raw_dust") // 1 Pd, ? Cl
        .inputFluids("gtceu:formic_acid 1000") // 1 C, 2 H, 2 O
        .itemOutputs("gtceu:palladium_dust") // 1 Pd
        .outputFluids("gtceu:hydrochloric_acid 4000", "gtceu:carbon_dioxide 1000") // 4 Cl, 4 H, 1 C, 2 O
        .duration(250).EUt(30)

    event.recipes.gtceu.sifter("sift_crude_palladium_residue_dust")
        .itemInputs("gtceu:crude_palladium_residue_dust")
        .chancedOutput("gtceu:palladium_metallic_dust", 9500, 0)
        .duration(600).EUt(30)

    // Rhodium
    event.recipes.gtceu.electric_blast_furnace("platinum_group_residue_to_iridium_group_sludge")
        .itemInputs("gtceu:platinum_group_residue_dust", "11x gtceu:potassium_pyrosulfate_dust")
        .itemOutputs("gtceu:rhodium_sulfate_dust", "7x gtceu:potassium_sulfate_dust", "gtceu:iridium_group_sludge_dust")
        .duration(200).EUt(120)
        .blastFurnaceTemp(1048)

    event.recipes.gtceu.chemical_bath("bathe_rhodium_sulfate")
        .itemInputs("6x gtceu:rhodium_sulfate_dust")
        .inputFluids("minecraft:water 2000")
        .itemOutputs("gtceu:iridium_group_sludge_dust")
        .outputFluids("gtceu:rhodium_sulfate_solution 2000")
        .duration(300).EUt(30)

    event.recipes.gtceu.chemical_reactor("rhodium_sulfate_solution_to_crude_rhodium_residue_dust")
        .itemInputs("3x gtceu:zinc_dust")
        .inputFluids("gtceu:rhodium_sulfate_solution 1000")
        .itemOutputs("18x gtceu:zinc_sulfate_dust", "gtceu:crude_rhodium_residue_dust")
        .duration(300).EUt(30)

    event.recipes.gtceu.electric_blast_furnace("crude_rhodium_residue_to_rhodium_salt")
        .itemInputs("gtceu:crude_rhodium_residue_dust", "4x gtceu:salt_dust")
        .inputFluids("gtceu:chlorine 6000")
        .itemOutputs("gtceu:rhodium_salt_dust")
        .outputFluids("gtceu:steam 9600")
        .duration(300).EUt(120)
        .blastFurnaceTemp(848)

    event.recipes.gtceu.chemical_reactor("rhodium_salt_to_rhodium_nitrate")
        .itemInputs("30x gtceu:sodium_nitrate_dust", "gtceu:rhodium_salt_dust")
        .notConsumableFluid("minecraft:water 8000")
        .itemOutputs("26x gtceu:rhodium_nitrate_dust", "16x gtceu:salt_dust")
        .duration(300).EUt(30)

    event.recipes.gtceu.chemical_reactor("rhodium_nitrate_to_rhodium")
        .itemInputs("13x gtceu:rhodium_nitrate_dust", "3x gtceu:potassium_dust")
        .itemOutputs("gtceu:rhodium_dust", "15x gtceu:saltpeter_dust")
        .duration(300).EUt(30)

    // Ruthenium
    event.recipes.gtceu.electric_blast_furnace("iridium_group_sludge_to_sodium_ruthenate")
        .itemInputs("gtceu:iridium_group_sludge_dust", "2x gtceu:soda_ash_dust")
        .itemOutputs("2x gtceu:sodium_ruthenate_dust", "gtceu:ash_dust", "gtceu:rarest_metal_mixture_dust")
        .duration(200).EUt(120)
        .blastFurnaceTemp(1023)

    event.recipes.gtceu.chemical_reactor("sodium_ruthenate_to_ruthenium_tetroxide")
        .itemInputs("6x gtceu:sodium_ruthenate_dust")
        .inputFluids("gtceu:chlorine 2000", "minecraft:water 2000")
        .itemOutputs("5x gtceu:ruthenium_tetroxide_dust")
        .outputFluids("gtceu:salt_water 2000")
        .duration(1575).EUt(480)

    event.recipes.gtceu.chemical_reactor("ruthenium_tetroxide_to_ruthenium")
        .itemInputs("5x gtceu:ruthenium_tetroxide_dust")
        .inputFluids("gtceu:hydrogen 8000")
        .itemOutputs("gtceu:ruthenium_dust")
        .outputFluids("minecraft:water 4000")
        .duration(300).EUt(30)

    // Osmium
    event.recipes.gtceu.chemical_bath("bathe_rarest_metal_mixture")
        .itemInputs("gtceu:rarest_metal_mixture_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .itemOutputs("gtceu:iridium_metal_residue_dust")
        .outputFluids("gtceu:acidic_osmium_solution 1000")
        .duration(100).EUt(30)

    event.recipes.gtceu.distillation_tower("distill_acidic_osmium_solution")
        .inputFluids("gtceu:acidic_osmium_solution 2000")
        .itemOutputs("gtceu:osmium_tetroxide_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .duration(150).EUt(7680)

    event.recipes.gtceu.chemical_reactor("osmium_tetroxide_to_osmium")
        .itemInputs("5x gtceu:osmium_tetroxide_dust")
        .inputFluids("gtceu:hydrogen 8000")
        .itemOutputs("gtceu:osmium_dust")
        .outputFluids("minecraft:water 4000")
        .duration(300).EUt(30)

    // Iridium
    event.recipes.gtceu.electric_blast_furnace("iridium_metal_residue_to_iridium_dioxide_residue")
        .itemInputs("4x gtceu:sodium_peroxide_dust", "gtceu:iridium_metal_residue_dust")
        .itemOutputs("3x gtceu:iridium_dioxide_residue_dust", "2x gtceu:sodium_dust")
        .duration(200).EUt(120)
        .blastFurnaceTemp(1048)

    event.recipes.gtceu.mixer("acidic_iridium_dioxide_solution")
        .itemInputs("3x gtceu:iridium_dioxide_residue_dust")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .outputFluids("gtceu:acidic_iridium_dioxide_solution 4000")
        .duration(300).EUt(30)

    event.recipes.gtceu.chemical_reactor("ammonium_hexachloroiridiate")
        .itemInputs("gtceu:ammonium_chloride_dust")
        .inputFluids("gtceu:acidic_iridium_dioxide_solution 4000")
        .itemOutputs("2x gtceu:ammonium_hexachloroiridiate_dust", "gtceu:small_platinum_group_residue_dust")
        .outputFluids("minecraft:water 2000")
        .duration(300).EUt(30)

    event.recipes.gtceu.chemical_reactor("ammonium_hexachloroiridiate_to_small_iridium")
        .itemInputs("2x gtceu:ammonium_hexachloroiridiate_dust")
        .inputFluids("gtceu:hydrogen 3000")
        .circuit(1)
        .itemOutputs("gtceu:small_iridium_dust")
        .outputFluids("gtceu:hydrochloric_acid 4500", "gtceu:ammonia 500")
        .duration(37.5).EUt(7680)

    event.recipes.gtceu.large_chemical_reactor("ammonium_hexachloroiridiate_to_iridium")
        .itemInputs("8x gtceu:ammonium_hexachloroiridiate_dust")
        .inputFluids("gtceu:hydrogen 12000")
        .circuit(2)
        .itemOutputs("gtceu:iridium_dust")
        .outputFluids("gtceu:hydrochloric_acid 18000", "gtceu:ammonia 2000")
        .duration(150).EUt(7680)

    // Processing down new ores
    var platOres = [
        ["tornroosite", 6, "telluric_nickel"],
        ["geerite", 2, "sulfuric_copper"],
        ["roxbyite", 4, "sulfuric_copper"],
        ["anilite", 2, "sulfuric_copper"],
        ["umangite", 2, "selenic_copper"],
        ["hrabakite", 2, "sulfuric_nickel"],
        ["jinxiuite", 4, "sulfuric_nickel"],
        ["ferhodsite", 6, "sulfuric_copper"],
        ["sugakiite", 2, "sulfuric_nickel"],
        ["oosterboschite", 4, "sulfuric_copper"],
        ["gortdrumite", 4, "sulfuric_copper"],
        ["yarrowite", 2, "sulfuric_copper"],
        ["klockmannite", 2, "selenic_copper"],
        ["grokhovskyite", 2, "sulfuric_copper"],
        ["haycockite", 2, "sulfuric_copper"],
        ["gallite", 2, "sulfuric_copper"],
        ["roquesite", 2, "sulfuric_copper"],
        ["omariniite", 4, "sulfuric_copper"],
        ["mooihoekite", 2, "sulfuric_copper"],
        ["kesterite", 2, "sulfuric_copper"],
        ["stannite", 2, "sulfuric_copper"],
        ["mohite", 2, "sulfuric_copper"],
        ["idaite", 2, "sulfuric_copper"],
        ["nekrasovite", 4, "sulfuric_copper"],
        ["colusite", 2, "sulfuric_copper"],
        ["germanite", 2, "sulfuric_copper"],
        ["renierite", 2, "sulfuric_copper"],
        ["hemusite", 2, "sulfuric_copper"],
        ["catamarcaite", 2, "sulfuric_copper"],
        ["lautite", 2, "sulfuric_copper"],
        ["dzhezkazganite", 2, "sulfuric_copper"],
        ["cubanite", 2, "sulfuric_copper"],
        ["sulvanite", 2, "sulfuric_copper"],
        ["vulcanite", 2, "telluric_copper"],
        ["proxitwelvefoldite", 4, "telluric_nickel"],
        ["kuvaevite", 6, "sulfuric_nickel"],
        ["millerite", 2, "sulfuric_nickel"],
        ["braggite", 4, "sulfuric_nickel"],
        ["grimmite", 2, "sulfuric_nickel"],
        ["violarite", 2, "sulfuric_nickel"],
        ["carrollite", 2, "sulfuric_copper"],
        ["cuproiridsite", 6, "sulfuric_copper"],
        ["cuprorhodsite", 6, "sulfuric_copper"],
        ["polydymite", 2, "sulfuric_nickel"],
        ["tarkianite", 2, "sulfuric_copper"],
        ["castaingite", 2, "sulfuric_copper"],
        ["melonite", 2, "telluric_nickel"],
        ["merenskyite", 4, "telluric_nickel"],
        ["ullmannite", 2, "sulfuric_nickel"],
        ["muckeite", 2, "sulfuric_nickel"],
        ["tetrahedrite_fe", 2, "sulfuric_copper"],
        ["tetrahedrite_cd", 2, "sulfuric_copper"],
        ["tetrahedrite_hg", 2, "sulfuric_copper"],
        ["tetrahedrite_mn", 2, "sulfuric_copper"],
        ["tetrahedrite_ni", 2, "sulfuric_copper"],
        ["goldfieldite", 4, "sulfuric_copper"],
        ["polybasite", 2, "sulfuric_copper"],
        ["sinnerite", 2, "sulfuric_copper"],
        ["hansblockite", 2, "selenic_copper"],
        ["zhonghongite", 4, "sulfuric_copper"],
        ["paarite", 2, "sulfuric_copper"],
        ["gladite", 2, "sulfuric_copper"],
        ["luxembourgite", 2, "selenic_copper"],
        ["berryite", 2, "sulfuric_copper"],
        ["cuprobismutite", 2, "sulfuric_copper"],
        ["proudite", 2, "selenic_copper"],
        ["enargite", 2, "sulfuric_copper"],
        ["petrukite", 2, "sulfuric_copper"],
        ["briartite", 2, "sulfuric_copper"],
        ["luzonite", 2, "sulfuric_copper"],
        ["daomanite", 4, "sulfuric_copper"],
        ["nuwaite", 2, "sulfuric_nickel"],
        ["ciriottiite", 2, "sulfuric_copper"],
        ["larosite", 2, "sulfuric_copper"]
    ]

    platOres.forEach(ore => {
        event.recipes.gtceu.chemical_reactor(`kubejs:platline/${ore[0]}_to_sludge`)
            .itemInputs(`1x gtceu:purified_${ore[0]}_ore`)
            .inputFluids("gtceu:nitric_acid 100")
            .itemOutputs(`${ore[1]}x gtceu:platinum_group_sludge_dust`)
            .outputFluids(`gtceu:${ore[2]}_solution`)
            .duration(50)
            .EUt(GTValues.VA[GTValues.LV])
    })
})
