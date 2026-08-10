ServerEvents.recipes(event => {
    // Portable spatial storage
    event.remove({id:"spatialtoolscmp:portable_spatial_storage"})
    event.remove({id:"spatialtoolscmp:portable_spatial_cloner"})
    event.remove({id:"spatialtoolscmp:portable_spatial_replacer"})
    event.shaped("spatialtoolscmp:portable_spatial_storage", [
        "ABA",
        "CED",
        "AFA"
    ], {
        A: "ae2:spatial_pylon",
        B: "ae2:terminal",
        C: "ae2:import_bus",
        D: "ae2:export_bus",
        E: "ae2:spatial_io_port",
        F: "#gtceu:batteries/lv"
    }).id("kubejs:stcmp/spatial_storage")

    event.recipes.gtceu.autoclave("kubejs:stcmp/spatial_cloner")
        .itemInputs("spatialtoolscmp:portable_spatial_storage", "8x gtceu:ender_pearl_dust")
        .itemOutputs("spatialtoolscmp:portable_spatial_cloner")
        .inputFluids("gtceu:bismuth 576")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(600)

    event.recipes.gtceu.autoclave("kubejs:stcmp/spatial_replacer")
        .itemInputs("spatialtoolscmp:portable_spatial_storage", "8x gtceu:ender_eye_dust")
        .itemOutputs("spatialtoolscmp:portable_spatial_replacer")
        .inputFluids("gtceu:vibrant_alloy 576")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(600)

})