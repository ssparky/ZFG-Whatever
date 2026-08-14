/**
 * Singleblock registry.
 * This is the place where the Atomic Reconstructor machine/recipe type is defined
 * and custom Parallel Control hatches.
 */
const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")

// Singleblock recipe types
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("atomic_reconstruction")
        .category("reconstruction")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_LATHE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
    
    event.create("soul_binding")
        .category("binding")
        .setEUIO("in")
        .setMaxIOSize(2, 2, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_LATHE, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.CENTRIFUGE)

    event.create("polymerization")
        .category("polymerizing")
        .setEUIO("in")
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        // .setProgressBar(MoniGuiTextures.PROGRESS_BAR_RECONSTRUCTION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create("tapping")
        .category("tapping")
        .setEUIO("in")
        .setMaxIOSize(2, 1, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRUDER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CUT)
})

// Singleblock machines
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("atomic_reconstructor", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Atomic Reconstructor`)
                .recipeType("atomic_reconstruction")
                .workableTieredHullModel("gtceu:block/machines/reconstructor")
        )

    event.create("soul_binder", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Soul Binder`)
                .recipeType("soul_binding")
                .workableTieredHullModel("gtceu:block/machines/soul_binder")
        )

    event.create("polymerization_chamber", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Polymerization Chamber`)
                .recipeType("polymerization")
                .workableTieredHullModel("gtceu:block/machines/polymerizer")
        )

    // event.create("steam_tree_tap", "steam") // Steam machines can't handle fluids at all :(
    //     .hasHighPressure(true)
    //     .definition((hp, builder) =>
    //         builder
    //             .recipeType("tapping")
    //             .workableSteamHullModel(hp, "gtceu:block/machines/tree_tap")
    //     )

    event.create("tree_tap", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Tree Tap`)
                .recipeType("tapping")
                .workableTieredHullModel("gtceu:block/machines/tree_tap")
        )
})

