ServerEvents.recipes(event => {
    // Swap out thorium in deepslate processing
    event.remove({id: "gtceu:macerator/macerate_deepslate"})
    event.recipes.gtceu.macerator("kubejs:misc/macerate_deepslate")
        .itemInputs("minecraft:deepslate")
        .itemOutputs("gtceu:deepslate_dust")
        .chancedOutput("gtceu:thorium_232_dust", 150, 0)
        .chancedOutput("gtceu:small_thorium_dust", 75, 0)
        .duration(20*7.5)
        .EUt(2)

    // RPP simple recipes
    // event.recipes.extendedfeatures.rock_processing_facility("kubejs:ef/rpp_process_stone")
    //     .itemInputs("minecraft:stone")
	// 	.inputFluids("gtceu:lubricant 576")
    //     .chancedOutput("gtceu:quartzite_dust", 5000, 0)
    //     .chancedOutput("gtceu:potassium_feldspar_dust", 5000, 0)
    //     .chancedOutput("gtceu:marble_dust", 4444, 0)
    //     .chancedOutput("gtceu:biotite_dust", 2222, 0)
    //     .chancedOutput("gtceu:metal_mixture_dust_dust", 5000, 0)
    //     .chancedOutput("gtceu:sodalite_dust", 1300, 0)
    //     .duration(100*20)
    //     .EUt(GTValues.VA[GTValues.EV])
    // event.recipes.extendedfeatures.rock_processing_facility("kubejs:ef/rpp_process_cobblestone")
    //     .itemInputs("minecraft:cobblestone")
	// 	.inputFluids("gtceu:lubricant 576")
    //     .chancedOutput("gtceu:quartzite_dust", 5000, 0)
    //     .chancedOutput("gtceu:potassium_feldspar_dust", 5000, 0)
    //     .chancedOutput("gtceu:marble_dust", 4444, 0)
    //     .chancedOutput("gtceu:biotite_dust", 2222, 0)
    //     .chancedOutput("gtceu:metal_mixture_dust_dust", 5000, 0)
    //     .chancedOutput("gtceu:sodalite_dust", 1300, 0)
    //     .duration(100*20)
    //     .EUt(GTValues.VA[GTValues.EV])
    // TODO: cant figure out how best to do this actually

    // TODO rock generator recipes

    // TODO rock dust processing recipes

})