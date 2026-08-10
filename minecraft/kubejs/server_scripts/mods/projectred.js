ServerEvents.recipes(event => {

    const projectred_ids = [
        "projectred_core",
        "projectred_integration",
        "projectred_transmission",
        "projectred_illumination"
    ]

    event.remove({id: "projectred_core:infused_silicon"})
    event.remove({id: "projectred_core:energized_silicon"})
    event.remove({id: "projectred_core:electrotine_silicon"})

    event.recipes.gtceu.autoclave("kubejs:pr/infused_silicon")
        .itemInputs("gtceu:silicon_wafer", "gtceu:red_alloy_dust")
        .itemOutputs("projectred_core:infused_silicon")
        .inputFluids("gtceu:hydrochloric_acid 125")
        .duration(400).EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.autoclave("kubejs:pr/energized_silicon")
        .itemInputs("gtceu:silicon_wafer", "minecraft:glowstone_dust")
        .itemOutputs("projectred_core:energized_silicon")
        .inputFluids("gtceu:hydrochloric_acid 125")
        .duration(400).EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.autoclave("kubejs:pr/electrotine_silicon")
        .itemInputs("gtceu:silicon_wafer", "gtceu:electrotine_dust")
        .itemOutputs("projectred_core:electrotine_silicon")
        .inputFluids("gtceu:hydrochloric_acid 125")
        .duration(400).EUt(GTValues.VA[GTValues.LV])

    event.remove({id: "projectred_core:plate"})
    event.recipes.gtceu.assembler("kubejs:pr/plate")
        .itemInputs("minecraft:stone_pressure_plate", "gtceu:resin_circuit_board")
        .inputFluids("gtceu:glue 100")
        .itemOutputs("projectred_core:plate")
        .duration(100).EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.assembler("kubejs:pr/plate_alt")
        .itemInputs("minecraft:stone_pressure_plate", "gtceu:plastic_circuit_board")
        .inputFluids("gtceu:glue 100")
        .itemOutputs("4x projectred_core:plate")
        .duration(100).EUt(GTValues.VA[GTValues.LV])

    event.remove({id: "projectred_core:screwdriver"})
    event.shaped("projectred_core:screwdriver", [
        " DA",
        "BAC",
        "EB "
    ], {
        A: "gtceu:wrought_iron_rod",
        B: "#c:blue_dyes",
        C: "#forge:tools/hammers",
        D: "#forge:tools/files",
        E: "gtceu:treated_wood_rod"
    }).id("kubejs:pr/screwdriver")

    event.replaceInput({id: "projectred_core:multimeter"}, "#c:black_dyes", "gtceu:steel_plate")
    event.replaceInput({id: "projectred_core:multimeter"}, "#forge:ingots/red_alloy", "gtceu:small_red_alloy_spring")
    event.replaceInput({id: "projectred_core:multimeter"}, "minecraft:glowstone", "#gtceu:batteries/lv")
    event.replaceInput({id: "projectred_core:multimeter"}, "#c:red_dyes", "gtceu:copper_plate")
    event.replaceInput({id: "projectred_core:multimeter"}, "#c:green_dyes", "gtceu:computer_monitor_cover")
    
})