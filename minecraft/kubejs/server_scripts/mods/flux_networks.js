ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_bath("kubejs:fluxnet/flux_dust")
        .itemInputs("1x #forge:dusts/obsidian")
        .inputFluids("gtceu:redstone 288")
        .itemOutputs("fluxnetworks:flux_dust")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(220)

    event.replaceInput({id:"fluxnetworks:fluxconfigurator"}, "minecraft:obsidian", "gtceu:obsidian_plate")
    event.replaceInput({id:"fluxnetworks:fluxblock"}, "fluxnetworks:flux_core", "fluxnetworks:flux_dust")
    event.replaceInput({id:"fluxnetworks:fluxcore"}, "minecraft:obsidian", "gtceu:dense_obsidian_plate")
    event.replaceInput({id:"fluxnetworks:fluxcore"}, "minecraft:ender_eye", "gtceu:quantum_star")
    event.replaceInput({id:"fluxnetworks:basicfluxstorage"}, "#forge:glass_panes", "gtceu:ev_lapotronic_battery")
    event.replaceInput({id:"fluxnetworks:herculeanfluxstorage"}, "#forge:glass_panes", "gtceu:iv_lapotronic_battery")
    event.replaceInput({id:"fluxnetworks:gargantuanfluxstorage"}, "#forge:glass_panes", "gtceu:luv_lapotronic_battery")

    event.remove({id:"fluxnetworks:herculeanfluxstorage"})
    event.shaped("fluxnetworks:herculean_flux_storage", [
        "AAA",
        "B B",
        "AAA"
    ], {
        A: "fluxnetworks:basic_flux_storage",
        B: "gtceu:iv_lapotronic_battery"
    }).id("kubejs:fluxnet/herc_flux_storage_kys")

    event.remove({id:"fluxnetworks:gargantuanfluxstorage"})
    event.shaped("fluxnetworks:gargantuan_flux_storage", [
        "AAA",
        "B B",
        "AAA"
    ], {
        A: "fluxnetworks:herculean_flux_storage",
        B: "gtceu:luv_lapotronic_battery"
    }).id("kubejs:fluxnet/garg_flux_storage_kys")
})