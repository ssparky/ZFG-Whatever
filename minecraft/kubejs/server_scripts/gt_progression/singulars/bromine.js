ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_tower("distill_to_brine")
        .inputFluids("gtceu:salt_water 8000")
        .outputFluids("gtceu:brine 3000", "minecraft:water 5000")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(400)

    event.recipes.gtceu.fluid_heater("heating_brine")
        .inputFluids("gtceu:brine 50")
        .outputFluids("gtceu:hot_brine 50")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.chemical_reactor("chlorinating_brine")
        .inputFluids("gtceu:hot_brine 2000", "gtceu:chlorine 1000")
        .outputFluids("gtceu:hot_chlorinated_brine 3000")
        .chancedOutput("gtceu:salt_dust", 7500, 0)
        .chancedOutput("gtceu:salt_dust", 3000, 0)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(60)

    event.recipes.gtceu.chemical_reactor("steaming_bromine_from_brine")
        .inputFluids("gtceu:hot_chlorinated_brine 1000", "gtceu:steam 4000")
        .outputFluids("gtceu:chlorinated_brine_waste 1000", "gtceu:impure_bromine")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(140)

    event.recipes.gtceu.electrolyzer("decomposing_brine_waste")
        .inputFluids("gtceu:chlorinated_brine_waste 1000")
        .outputFluids("gtceu:chlorine 1000")
        .itemOutputs("2x gtceu:sodium_hydroxide_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(60)

    event.recipes.gtceu.distillation_tower("distill_to_bromine")
        .inputFluids("gtceu:impure_bromine 2000")
        .outputFluids("gtceu:bromine 1500", "gtceu:salt_water 500")
        .chancedOutput("gtceu:iodine_dust", 2500, 0)
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(600)


    // Hydrobromic Acid (& Other similar acids for convenience) TODO: check for conflicts
    event.recipes.gtceu.chemical_reactor(`hydrobromic_acid`)
        .inputFluids(`gtceu:bromine 1000`, `gtceu:hydrogen 1000`)
        .outputFluids(`gtceu:hydrobromic_acid 1000`)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(80)
    // const solid_acids = [
    //     ["iodine", "iodic", GTValues.EV],
    //     ["astatine", "astatic", GTValues.ZPM],
    //     ["tennessine", "tennessic", GTValues.UHV]
    // ]
    // solid_acids.forEach(acid => {
    //     event.recipes.gtceu.chemical_reactor(`hydro${acid[1]}_acid`)
    //         .itemInputs(`1x gtceu:${acid[0]}_dust`)
    //         .inputFluids(`gtceu:hydrogen 1000`)
    //         .outputFluids(`gtceu:hydro${acid[1]}_acid 1000`)
    //         .EUt(GTValues.VA[acid[2]])
    //         .duration(80)
    // })
})