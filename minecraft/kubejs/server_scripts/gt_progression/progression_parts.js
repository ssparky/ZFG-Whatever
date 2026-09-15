ServerEvents.recipes(event => {
    // Heating coils
    // Cupronickel
    event.remove({id: "gtceu:assembler/coil_cupronickel"})
    event.recipes.gtceu.assembler("kubejs:coil_cupronickel")
        .itemInputs("8x gtceu:cupronickel_double_wire", "8x gtceu:bronze_foil", "16x gtceu:corundum_dust")
        .inputFluids("gtceu:tin_alloy 144")
        .itemOutputs("gtceu:cupronickel_coil_block")
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.assembler("kubejs:coil_cupronickel_alt")
        .itemInputs("8x gtceu:cupronickel_double_wire", "8x gtceu:bronze_foil", "16x gtceu:bauxite_dust")
        .inputFluids("gtceu:tin_alloy 144")
        .itemOutputs("gtceu:cupronickel_coil_block")
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.LV])

    // Kanthal
    event.remove({id: "gtceu:assembler/coil_kanthal"})
    event.recipes.gtceu.assembler("kubejs:coil_kanthal")
        .itemInputs("8x gtceu:kanthal_double_wire", "8x gtceu:aluminium_foil", "16x gtceu:magnesia_dust")
        .inputFluids("gtceu:copper 144")
        .itemOutputs("gtceu:kanthal_coil_block")
        .duration(15*20)
        .EUt(GTValues.VA[GTValues.MV])

    // Nichrome
    event.remove({id: "gtceu:assembler/coil_nichrome"})
    event.recipes.gtceu.assembler("kubejs:coil_nichrome")
        .itemInputs("8x gtceu:nichrome_double_wire", "8x gtceu:stainless_steel_foil", "16x gtceu:beryllium_oxide_foil")
        .inputFluids("gtceu:aluminium 144")
        .itemOutputs("gtceu:nichrome_coil_block")
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.HV])

    // RTM Alloy
    event.remove({id: "gtceu:assembler/coil_rtm_alloy"})
    event.recipes.gtceu.assembler("kubejs:coil_rtm_alloy")
        .itemInputs("8x gtceu:rtm_alloy_double_wire", "8x gtceu:vanadium_steel_foil", "16x gtceu:fine_borosilicate_glass_wire")
        .inputFluids("gtceu:nichrome 144")
        .itemOutputs("gtceu:rtm_alloy_coil_block")
        .duration(25*20)
        .EUt(GTValues.VA[GTValues.EV])

    // HSS-G
    event.remove({id: "gtceu:assembler/coil_hssg"})
    event.recipes.gtceu.assembler("kubejs:coil_hssg")
        .itemInputs("8x gtceu:hssg_double_wire", "8x gtceu:tungsten_carbide_foil", "16x gtceu:fine_yttrium_barium_cuprate_wire")
        .inputFluids("gtceu:tungsten 144")
        .itemOutputs("gtceu:hssg_coil_block")
        .duration(30*20)
        .EUt(GTValues.VA[GTValues.IV])

    // Naquadah
    event.remove({id: "gtceu:assembler/coil_naquadah"})
    event.recipes.gtceu.assembler("kubejs:coil_naquadah")
        .itemInputs("8x gtceu:naquadah_double_wire", "8x gtceu:osmium_foil", "16x gtceu:niobium_nitride_foil")
        .inputFluids("gtceu:tungsten_steel 144")
        .itemOutputs("gtceu:naquadah_coil_block")
        .duration(35*20)
        .EUt(GTValues.VA[GTValues.LuV])

    // Trinium
    event.remove({id: "gtceu:assembler/coil_trinium"})
    event.recipes.gtceu.assembler("kubejs:coil_trinium")
        .itemInputs("8x gtceu:trinium_double_wire", "8x gtceu:enriched_naquadah_foil", "16x gtceu:molybdenum_disilicide_spring")
        .inputFluids("gtceu:naquadah 144")
        .itemOutputs("gtceu:trinium_coil_block")
        .duration(40*20)
        .EUt(GTValues.VA[GTValues.LuV])

    // Tritanium
    event.remove({id: "gtceu:assembler/coil_tritanium"})
    event.recipes.gtceu.assembler("kubejs:coil_tritanium")
        .itemInputs("8x gtceu:tritanium_double_wire", "8x gtceu:naquadria_foil", "16x gtceu:molybdenum_disilicide_spring") // TODO: Replace with HfCN or similar when added
        .inputFluids("gtceu:trinium 144")
        .itemOutputs("gtceu:tritanium_coil_block")
        .duration(45*20)
        .EUt(GTValues.VA[GTValues.LuV])

    // (... future coils to be implemented)

    // Quartzite -> Any quartz
    event.replaceInput({id:"gtceu:shaped/emitter_lv"}, "gtceu:quartzite_gem", "#forge:gems/quartz_like")
    event.replaceInput({id:"gtceu:shaped/sensor_lv"}, "gtceu:quartzite_gem", "#forge:gems/quartz_like")
    event.remove({id:"gtceu:assembler/emitter_lv"}); event.remove({id: "gtceu:assembler/sensor_lv"})
    event.recipes.gtceu.assembler("emitter_lv")
        .itemInputs("4x gtceu:brass_rod", "2x gtceu:tin_single_cable", "2x #gtceu:circuits/lv", "1x #forge:gems/quartz_like")
        .circuit(1)
        .itemOutputs("1x gtceu:lv_emitter")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.assembler("sensor_lv")
        .itemInputs("1x gtceu:brass_rod", "4x gtceu:steel_plate", "1x #gtceu:circuits/lv", "1x #forge:gems/quartz_like")
        .itemOutputs("1x gtceu:lv_sensor")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.replaceInput({id:"gtceu:shaped/comparator_quartzite"}, "gtceu:quartzite_gem", "#forge:gems/quartz_like")
    event.replaceInput({id:"gtceu:shaped/daylight_detector_quartzite"}, "gtceu:quartzite_gem", "#forge:gems/quartz_like")
    event.remove({id:"gtceu:assembler/comparator_quartzite"})
    event.recipes.gtceu.assembler("comparator_quartzite")
        .itemInputs("3x minecraft:redstone_torch", "1x #forge:gems/quartz_like")
        .inputFluids("gtceu:concrete 144")
        .itemOutputs("1x minecraft:comparator")
        .duration(100)
        .EUt(1)
})