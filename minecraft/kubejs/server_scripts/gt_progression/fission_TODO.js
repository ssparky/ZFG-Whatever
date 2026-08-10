ServerEvents.recipes(event => {
    // Casings
    // Fissile Heat Safe
    event.recipes.gtceu.assembler("kubejs:fission_heat_casing")
        .itemInputs("6x gtceu:hssg_plate", "1x gtceu:zircaloy_frame")
        .circuit(6)
        .itemOutputs("2x phoenix_fission:fissile_heat_safe_casing")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])

    // Fissile Reaction Safe
    event.recipes.gtceu.assembler("kubejs:fission_reaction_casing")
        .itemInputs("6x gtceu:zircaloy_plate", "1x gtceu:zircaloy_frame")
        .circuit(6)
        .itemOutputs("2x phoenix_fission:fissile_reaction_safe_casing")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])

    // Fissile Safe Gearbox
    event.recipes.gtceu.assembler("kubejs:fission_heat_gearbox")
        .itemInputs("4x gtceu:hssg_plate", "2x gtceu:hssg_gear", "1x gtceu:zircaloy_frame")
        .circuit(4)
        .itemOutputs("2x phoenix_fission:fissile_safe_gearbox_casing")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])

    // Controllers
    // Breeder

    // Fission

    // Molten Salt

    // Heat Exchanger

    // Parts
    // Stability Sensors

    // SCRAM Hatches

    // Nuke

    // Empty Reactor Component

    // Coolers (TODO)

    // Moderators (TODO)

    // Fuel Rods (TODO)

    // Blanket Rods (TODO)

    // Liners (TODO)

})