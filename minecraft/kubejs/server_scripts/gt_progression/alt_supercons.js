ServerEvents.recipes(event => {
    // LV
    event.recipes.gtceu.mixer("kubejs:gt/vanadium_electrotine_mixer")
        .itemInputs("2x #forge:dusts/vanadium", "1x #forge:dusts/electrotine")
        .itemOutputs("3x gtceu:vanadium_electrotine_dust")
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.alloy_smelter("kubejs:gt/vanadium_electrotine_alloy")
        .itemInputs("2x #forge:dusts/vanadium", "1x #forge:dusts/electrotine")
        .itemOutputs("3x gtceu:vanadium_electrotine_ingot")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(140)

    // MV
    event.recipes.gtceu.large_chemical_reactor("kubejs:gt/lithium_intercalated_graphite")
        .itemInputs("1x gtceu:lithium_dust", "3x gtceu:graphite_dust")
        .notConsumable("1x gtceu:diamond_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("4x gtceu:lithium_intercalated_graphite_dust")
        .outputFluids("gtceu:dilute_nitric_acid 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(220)

    // HV
    // N/A

    // EV
    event.recipes.gtceu.chemical_reactor("kubejs:gt/zirconium_nitride")
        .itemInputs("1x gtceu:zirconium_dust")
        .inputFluids("gtceu:nitrogen 1000")
        .itemOutputs('2x gtceu:zirconium_nitride_dust')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)

    // IV
    // N/A

    // LuV
    event.recipes.gtceu.large_chemical_reactor("kubejs:gt/ytterbium_intercalated_graphite")
        .itemInputs("1x gtceu:ytterbium_dust", "6x gtceu:graphite_dust")
        .chancedInput("3x gtceu:graphene_foil", 4500, 0)
        .inputFluids("gtceu:fluorosulfuric_acid 2000")
        .itemOutputs("7x gtceu:ytterbium_intercalated_graphite_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(410)
    
    // ZPM
    // N/A

    // UV TODO

    // UHV
    
    // UEV

    // UIV

    // UXV

    // OpV

    // MAX
})