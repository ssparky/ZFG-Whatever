ServerEvents.recipes(event => {

    event.recipes.gtceu.macerator("kubejs:ap/monazite_rod_macerator")
        .itemInputs("architects_palette:monazite_rod")
        .chancedOutput("gtceu:monazite_ce_dust", 9500, 0)
        .chancedOutput("gtceu:monazite_dust", 7500, 0)
        .chancedOutput("gtceu:monazite_nd_dust", 4500, 0)
        .chancedOutput("gtceu:monazite_sm_dust", 2200, 0)
        .chancedOutput("gtceu:monazite_gd_dust", 1000, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
})