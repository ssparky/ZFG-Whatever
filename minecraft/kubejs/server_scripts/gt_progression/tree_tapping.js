ServerEvents.recipes(event => {
    /** Tap machine recipes */ 
    // const steamInputs = [
    //     ["lp", "gtceu:bronze_brick_casing", "gtceu:bronze_small_fluid_pipe", "gtceu:small_bronze_gear", "minecraft:piston", "gtceu:bronze_plate"],
    //     ["hp", "gtceu:lp_steam_tree_tap", "gtceu:tin_alloy_small_fluid_pipe", "gtceu:small_steel_gear", "gtceu:steel_plate", "gtceu:wrought_iron_plate"]
    // ]

    // steamInputs.forEach(tier => {
    //     event.shaped(`gtceu:${tier[0]}_steam_tree_tap`, [
    //         "ECE",
    //         "BAB",
    //         "EDE"
    //     ], {
    //         A: tier[1],
    //         B: tier[2],
    //         C: tier[3],
    //         D: tier[4],
    //         E: tier[5]
    //     }).id(`kubejs:craft_${tier[0]}_steam_tree_tap`)
    // })

    const elecInputs = [
        ["lv", "gtceu:tin_single_cable", "gtceu:steel_plate", "gtceu:invar_screw"],
        ["mv", "gtceu:copper_single_cable", "gtceu:aluminium_plate", "gtceu:electrum_screw"],
        ["hv", "gtceu:gold_single_cable", "gtceu:stainless_steel_plate", "gtceu:platinum_screw"],
        ["ev", "gtceu:aluminium_single_cable", "gtceu:titanium_plate", "gtceu:ultimet_screw"],
        ["iv", "gtceu:platinum_single_cable", "gtceu:tungsten_steel_plate", "gtceu:vanaderbium_screw"],
        ["luv", "gtceu:niobium_titanium_single_cable", "gtceu:rhodium_plated_palladium_plate", "gtceu:ruridit_screw"],
        ["zpm", "gtceu:vanadium_gallium_single_cable", "gtceu:naquadah_alloy_plate", "gtceu:naquadah_alloy_screw"],
        ["uv", "gtceu:yttrium_barium_cuprate_single_cable", "gtceu:darmstadtium_plate", "gtceu:tritanium_screw"],
        ["uhv", "gtceu:europium_single_cable", "gtceu:neutronium_plate", "gtceu:hssx_screw"], //TODO plates and such from here
        ["uev", "gtceu:red_alloy_single_cable", "gtceu:iron_plate", "gtceu:neutronium_screw"],
        ["uiv", "gtceu:tiberium_single_cable", "gtceu:iron_plate", "gtceu:meta_null_screw"],
        ["uxv", "gtceu:chromatic_steel_single_cable", "gtceu:iron_plate", "gtceu:iron_screw"],
        ["opv", "gtceu:red_alloy_single_cable", "gtceu:iron_plate", "gtceu:iron_screw"],
    ]

    elecInputs.forEach(tier => {
        event.shaped(`gtceu:${tier[0]}_tree_tap`, [
            "FBF",
            "EAE",
            "DCD"
        ], {
            A: `gtceu:${tier[0]}_machine_hull`,
            B: `gtceu:${tier[0]}_electric_pump`,
            C: `#gtceu:circuits/${tier[0]}`,
            D: tier[1],
            E: tier[2],
            F: tier[3]
        })
    })

    /** Output processing recipes */ 
    // Tree oil
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_tree_oil")
        .inputFluids("gtceu:tree_oil 24")
        .outputFluids("gtceu:lubricant 12")
        .EUt(24)
        .duration(1.6*20)

    // Tree Sap
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_tree_sap")
        .inputFluids("gtceu:tree_sap 250")
        .outputFluids("minecraft:water 250")
        .itemOutputs("gtceu:tiny_sugar_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_maple_tree_sap")
        .inputFluids("gtceu:tree_sap_maple 250")
        .outputFluids("minecraft:water 250")
        .itemOutputs("2x gtceu:small_sugar_dust", "rusticdelight:syrup")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_tree_sap")
        .inputFluids("gtceu:tree_sap 1000")
        .outputFluids("minecraft:water 850", "gtceu:ethanol 50", "gtceu:methanol 100")
        .itemOutputs("gtceu:small_sugar_dust")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(140)
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_maple_tree_sap")
        .inputFluids("gtceu:tree_sap_maple 1000")
        .outputFluids("minecraft:water 850", "gtceu:ethanol 50", "gtceu:methanol 100")
        .itemOutputs("3x minecraft:sugar")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(140)

    // Resin
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_tree_resin")
        .inputFluids("gtceu:tree_resin 500")
        .outputFluids("gtceu:turpentine 150")
        .itemOutputs("gtceu:small_rosin_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_pine_tree_resin")
        .inputFluids("gtceu:tree_resin_pine 250")
        .outputFluids("gtceu:turpentine 250")
        .itemOutputs("gtceu:rosin_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.combustion_generator("kubejs:misc/burn_turpentine")
        .inputFluids("gtceu:turpentine 1")
        .duration(30)
        .EUt(-GTValues.V[GTValues.LV])
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_tree_resin")
        .inputFluids("gtceu:tree_resin 1000")
        .outputFluids("minecraft:water 640", "gtceu:pinene 150", "gtceu:carene 75", "gtceu:camphene 55", "gtceu:limonene 40", "gtceu:terpinolene 30", "gtceu:cymene 10")
        .itemOutputs("gtceu:rosin_dust")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(180)
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_pine_tree_resin")
        .inputFluids("gtceu:tree_resin_pine 1000")
        .outputFluids("minecraft:water 150", "gtceu:pinene 350", "gtceu:carene 175", "gtceu:camphene 125", "gtceu:limonene 100", "gtceu:terpinolene 70", "gtceu:cymene 30")
        .itemOutputs("4x gtceu:rosin_dust")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(180)
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_rosin_processing")
        .itemInputs("gtceu:rosin_dust")
        .inputFluids("gtceu:hydrochloric_acid 200")
        .outputFluids("gtceu:abietic_acid 100", "gtceu:acetic_acid 65", "gtceu:formic_acid 35", "gtceu:diluted_hydrochloric_acid 400")
        .itemOutputs("gtceu:sticky_resin")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    // Latex
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_tree_latex")
        .inputFluids("gtceu:tree_latex 500")
        .outputFluids("gtceu:glue 25")
        .itemOutputs("3x gtceu:raw_rubber_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(220)
    event.recipes.gtceu.centrifuge("kubejs:misc/centrifuge_rubber_tree_latex")
        .inputFluids("gtceu:tree_latex_rubber 250")
        .outputFluids("gtceu:glue 75")
        .itemOutputs("6x gtceu:raw_rubber_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(220)

    // Essential Oil
    event.recipes.gtceu.distillation_tower("kubejs:misc/distill_tree_essential_oil")
        .inputFluids("gtceu:tree_essential_oil 1000")
        .outputFluids("minecraft:water 350", "gtceu:cumene 100", "gtceu:pinene 50", "gtceu:camphene 250", "gtceu:limonene 100", "gtceu:acetic_acid 70", "gtceu:methanol 80")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(210)

    //** Tapping recipes (mod, tree, main, mainMult, sec, secMult, optItem) */  // Possible TODO: mushroom tapping?
    const Trees = [
        ["minecraft", "oak", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null], 
        ["minecraft", "spruce", "gtceu:tree_resin", 20, "gtceu:tree_oil", 5, null],
        ["minecraft", "birch", "gtceu:tree_sap", 35, "gtceu:wood_tar", 10, null],
        ["minecraft", "jungle", "gtceu:tree_sap", 30, "gtceu:tree_latex", 10, null], 
        ["minecraft", "acacia", "gtceu:tree_oil", 20, "gtceu:tree_sap", 5, null],
        ["minecraft", "dark_oak", "gtceu:tree_oil", 25, "gtceu:tree_sap", 5, null],
        ["minecraft", "mangrove", "gtceu:tree_sap", 15, "gtceu:tree_oil", 10, null],
        ["minecraft", "cherry", "gtceu:tree_sap", 40, "gtceu:tree_oil", 10, null],
        ["natures_spirit", "redwood", "gtceu:tree_resin", 15, "gtceu:tree_oil", 5, null], 
        ["natures_spirit", "sugi", "gtceu:tree_resin", 10, "gtceu:tree_essential_oil", 10, null], 
        ["natures_spirit", "wisteria", "gtceu:tree_sap", 20, "gtceu:tree_essential_oil", 15, null],
        ["natures_spirit", "fir", "gtceu:tree_resin", 35, "gtceu:tree_essential_oil", 5, null], 
        ["natures_spirit", "willow", "gtceu:tree_sap", 25, "gtceu:tree_oil", 10, null],
        ["natures_spirit", "aspen", "gtceu:tree_sap", 35, "gtceu:tree_oil", 10, null],
        ["natures_spirit", "maple", "gtceu:tree_sap_maple", 50, "gtceu:tree_oil", 0, null], 
        ["natures_spirit", "cypress", "gtceu:tree_resin", 10, "gtceu:tree_oil", 10, null], 
        ["natures_spirit", "olive", "gtceu:tree_oil", 50, "gtceu:tree_sap", 15, null],
        ["natures_spirit", "joshua", "gtceu:tree_oil", 15, "gtceu:tree_sap", 5, null],
        ["natures_spirit", "ghaf", "gtceu:tree_oil", 20, "gtceu:tree_sap", 5, null],
        ["natures_spirit", "palo_verde", "gtceu:tree_oil", 25, "gtceu:tree_sap", 15, null],
        ["natures_spirit", "coconut", "gtceu:tree_oil", 40, "gtceu:tree_sap", 5, null],
        ["natures_spirit", "cedar", "gtceu:tree_resin", 15, "gtceu:tree_oil", 5, null], 
        ["natures_spirit", "larch", "gtceu:tree_resin", 50, "gtceu:tree_oil", 0, null], 
        ["natures_spirit", "mahogany", "gtceu:tree_oil", 40, "gtceu:tree_oil", 0, null], 
        ["natures_spirit", "saxaul", "gtceu:tree_oil", 35, "gtceu:tree_oil", 0, null], 
        ["architects_palette", "twisted", "gtceu:tree_sap", 5, "gtceu:tree_oil", 5, "gtceu:tiny_arsenic_dust"],
        ["twilightforest", "twilight_oak", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null],
        ["twilightforest", "canopy", "gtceu:tree_oil", 20, "gtceu:tree_sap", 5, null],
        ["twilightforest", "mangrove", "gtceu:tree_sap", 15, "gtceu:tree_oil", 10],
        ["twilightforest", "time", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null],
        ["twilightforest", "transformation", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null],
        ["twilightforest", "mining", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null],
        ["twilightforest", "sorting", "gtceu:tree_oil", 15, "gtceu:tree_sap", 10, null],
        ["deeperdarker", "echo", "gtceu:tree_resin", 10, "gtceu:tree_essential_oil", 10, "gtceu:tiny_echo_shard_dust"],
        ["undergarden", "wigglewood", "gtceu:tree_resin", 15, "gtceu:tree_sap", 15, "starcatcher:worm"],
        ["undergarden", "grongle", "gtceu:tree_essential_oil", 40, "gtceu:tree_sap", 10, "undergarden:gronglet"],
        ["tconstruct", "greenheart", "tconstruct:earth_slime", 50, "gtceu:tree_essential_oil", 5, "minecraft:slime_ball"],
        ["tconstruct", "skyroot", "tconstruct:sky_slime", 50, "gtceu:tree_essential_oil", 5, "tconstruct:sky_slime_ball"],
        ["tconstruct", "enderbark", "tconstruct:ender_slime", 50, "gtceu:tree_essential_oil", 5, "tconstruct:ender_slime_ball"],
        ["gtceu", "rubber", "gtceu:tree_latex_rubber", 50, "gtceu:tree_oil", 10, "gtceu:sticky_resin"], 
        ["regions_unexplored", "alpha", "gtceu:tree_oil", 10, "gtceu:tree_sap", 5, null],
        ["regions_unexplored", "ashen", "gtceu:wood_tar", 10, "gtceu:tree_oil", 0, "gtceu:ash_dust"],
        ["regions_unexplored", "bamboo", "gtceu:tree_sap", 15, "gtceu:tree_oil", 5, null],
        ["regions_unexplored", "silver_birch", "gtceu:tree_sap", 35, "gtceu:wood_tar", 10, null],
        ["regions_unexplored", "small_oak", "gtceu:tree_oil", 10, "gtceu:tree_sap", 5, null],
        ["regions_unexplored", "baobab", "gtceu:tree_sap", 40, "gtceu:tree_oil", 10, null],
        ["regions_unexplored", "blackwood", "gtceu:tree_oil", 30, "gtceu:tree_oil", 0, null],
        ["regions_unexplored", "brimwood", "gtceu:wood_tar", 30, "minecraft:lava", 20, null],
        ["regions_unexplored", "cobalt", "gtceu:tree_oil", 20, "gtceu:tree_essential_oil", 5, "gtceu:tiny_cobalt_dust"],
        ["regions_unexplored", "cypress", "gtceu:tree_resin", 10, "gtceu:tree_oil", 10],
        ["regions_unexplored", "dead", "gtceu:wood_tar", 10, "gtceu:tree_oil", 0, "gtceu:dark_ash_dust"],
        ["regions_unexplored", "eucalyptus", "gtceu:tree_essential_oil", 50, "gtceu:tree_sap", 15, null], 
        ["regions_unexplored", "joshua", "gtceu:tree_oil", 15, "gtceu:tree_sap", 5, null],
        ["regions_unexplored", "kapok", "gtceu:tree_oil", 20, "gtceu:tree_latex", 15,null],
        ["regions_unexplored", "larch", "gtceu:tree_resin", 50, "gtceu:tree_oil", 5, null], 
        ["regions_unexplored", "magnolia", "gtceu:tree_essential_oil", 40, "gtceu:tree_sap", 20, null],
        ["regions_unexplored", "maple", "gtceu:tree_sap_maple", 50, "gtceu:tree_oil", 0, null],
        ["regions_unexplored", "mauve", "gtceu:tree_oil", 35, "gtceu:tree_sap", 15, null],
        ["regions_unexplored", "palm", "gtceu:tree_oil", 50, "gtceu:tree_sap", 5, null],
        ["regions_unexplored", "pine", "gtceu:tree_resin_pine", 50, "gtceu:tree_essential_oil", 10],
        ["regions_unexplored", "redwood", "gtceu:tree_resin", 15, "gtceu:tree_oil", 5],
        ["regions_unexplored", "socotra", "gtceu:tree_oil", 35, "gtceu:tree_sap", 30],
        ["regions_unexplored", "willow", "gtceu:tree_sap", 25, "gtceu:tree_oil", 10, null],
    ]

    const Screws = [
        ["wood", 8000],
        ["copper", 6600],
        ["iron", 3000],
        ["steel", 1500],
        ["aluminium", 1500],
        ["titanium", 750],
        ["iridium", 100],
        ["neutronium", 0],
    ]

    Trees.forEach(tree => {
        Screws.forEach(screw => {
            var tree_recipe = event.recipes.gtceu.tapping(`kubejs:misc/tap_${tree[0]}_${tree[1]}_${screw[0]}`)
            if(screw[1] > 0) {
                tree_recipe.chancedInput(`gtceu:${screw[0]}_screw`, screw[1], 0)
            }
            else {
                tree_recipe.notConsumable(`gtceu:${screw[0]}_screw`)
            }
            tree_recipe.notConsumable(`${tree[0]}:${tree[1]}_log`)
            tree_recipe.adjacentBlocks(`${tree[0]}:${tree[1]}_log`) // An OR condition would be great here but fuckkkkk. Don't even try .adjacentBlockTag man that shit bricks your entire game.
            tree_recipe.outputFluidsRanged(tree[2], tree[3]*0.5, tree[3]*2)
            tree_recipe.outputFluidsRanged(tree[4], tree[5]*0.25, tree[5]*1.5)
            if(tree[6] == null) {
                tree_recipe.chancedOutput("gtceu:tiny_wood_dust", 6500, 0)
            }
            else {
                tree_recipe.chancedOutput(tree[6], 6500, 0)
            }
            tree_recipe.duration(600)
            tree_recipe.EUt(GTValues.VHA[GTValues.ULV])
        })
    })
})