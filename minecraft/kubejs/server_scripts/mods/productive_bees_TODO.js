ServerEvents.recipes(event => {
    // Remove "normal" centrifuge recipes
    event.remove({type: "productivebees:centrifuge"})
    event.remove({type: "productivebees:powered_centrifuge"})
    event.remove({type: "productivebees:heated_centrifuge"})

    // Non-standard format combs
    event.recipes.gtceu.centrifuge("kubejs:prod_bees/vanilla_comb")
        .itemInputs("minecraft:honeycomb")
        .itemOutputs("productivebees:wax")
        .outputFluids("productivebees:honey 400")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge("kubejs:prod_bees/vanilla_comb_block")
        .itemInputs("minecraft:honeycomb_block")
        .outputFluids("productivebees:honey 400")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.centrifuge("kubejs:prod_bees/ghostly_comb")
        .itemInputs("productivebees:honeycomb_ghostly")
        .chancedOutput("minecraft:ghast_tear", 500, 0)
        .itemOutputs("productivebees:wax")
        .outputFluids("productivebees:honey 200")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge("kubejs:prod_bees/ghostly_comb_block")
        .itemInputs("productivebees:comb_ghostly")
        .chancedOutput("4x minecraft:ghast_tear", 500, 0)
        .outputFluids("productivebees:honey 800")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.centrifuge("kubejs:prod_bees/milky_comb")
        .itemInputs("productivebees:honeycomb_milky")
        .itemOutputs("productivebees:wax")
        .outputFluids("minecraft:milk 400")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge("kubejs:prod_bees/milky_comb_block")
        .itemInputs("productivebees:comb_milky")
        .outputFluids("minecraft:milk 1600")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.centrifuge("kubejs:prod_bees/powdery_comb")
        .itemInputs("productivebees:honeycomb_powdery")
        .chancedOutput("minecraft:gunpowder", 5000, 0)
        .itemOutputs("productivebees:wax")
        .outputFluids("productivebees:honey 200")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge("kubejs:prod_bees/powdery_comb_block")
        .itemInputs("productivebees:comb_powdery")
        .chancedOutput("4x minecraft:gunpowder", 5000, 0)
        .outputFluids("productivebees:honey 800")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    // Process combs in GT machines (mat, output, chance, count)
    const combs = [
        ["sheldonite", "gtceu:raw_cooperite", 80, 1],
        ["soulsteel", "tconstruct:soulsteel_nugget", 100, 3],
        ["sculk", "minecraft:echo_shard", 30, 1],
        ["zinc", "gtceu:zinc_dust", 40, 1],
        ["diamond", "minecraft:diamond", 20, 1],
        ["pyrolusite", "gtceu:raw_pyrolusite", 80, 1],
        ["platinum", "gtceu:platinum_dust", 40, 1],
        ["opal", "gtceu:opal_gem", 50, 1],
        ["withered", "productivebees:wither_skull_chip", 30, 1],
        ["phosphophyllite", "gtceu:phosphophyllite_gem", 50, 1],
        ["skeletal", "minecraft:bone_meal", 70, 1],
        ["tantalite", "gtceu:raw_tantalite", 80, 1],
        ["slimy", "minecraft:slime_ball", 20, 1],
        ["molybdenum", "gtceu:molybdenum_dust", 40, 1],
        ["euclase", "gtceu:euclase_gem", 50, 1],
        ["tricalcium_phosphate", "gtceu:raw_tricalcium_phosphate", 80, 1],
        ["aquamarine", "gtceu:aquamarine_gem", 50, 1],
        ["magmatic", "minecraft:magma_cream", 30, 1],
        ["invar", "gtceu:invar_nugget", 100, 5],
        ["chrysoprase", "gtceu:chrysoprase_gem", 50, 1],
        ["cobaltite", "gtceu:raw_cobaltite", 80, 1],
        ["cinnabar", "gtceu:cinnabar_dust", 50, 1],
        ["realgar", "gtceu:raw_realgar", 80, 1],
        ["manyullyn", "tconstruct:manyullyn_nugget", 100, 3],
        ["fluorite", "gtceu:fluorite_gem", 50, 1],
        ["warped", "minecraft:warped_fungus", 70, 1],
        ["tungsten", "gtceu:tungsten_dust", 40, 1],
        ["chromite", "gtceu:raw_chromite", 80, 1],
        ["agate", "gtceu:agate_gem", 50, 1],
        ["redstone", "minecraft:redstone", 50, 2],
        ["silky", "minecraft:string", 50, 1],
        ["naquadah", "gtceu:naquadah_dust", 40, 1],
        ["amethyst_bronze", "tconstruct:amethyst_bronze_nugget", 100, 5],
        ["silver", "gtceu:silver_dust", 40, 1],
        ["radioactive", "gtceu:uranium_dust", 40, 1],
        ["spacial", "ae2:certus_quartz_dust", 50, 1],
        ["citrine", "gtceu:citrine_gem", 50, 1],
        ["nickel", "gtceu:nickel_dust", 40, 1],
        ["sticky_resin", "gtceu:sticky_resin", 100, 1],
        ["crystalline", "minecraft:quartz", 50, 2],
        ["queens_slime", "tconstruct:queens_slime_nugget", 100, 3],
        ["amethyst", "minecraft:amethyst_shard", 50, 1],
        ["topaz", "gtceu:topaz_gem", 50, 1],
        ["pyrope", "gtceu:pyrope_gem", 50, 1],
        ["tin", "gtceu:tin_dust", 40, 1],
        ["iron", "gtceu:iron_dust", 40, 1],
        ["black_opal", "gtceu:black_opal_gem", 50, 1],
        ["red_shroom", "minecraft:red_mushroom", 70, 1],
        ["hepatizon", "tconstruct:hepatizon_nugget", 100, 3],
        ["flux", "fluxnetworks:flux_dust", 50, 1],
        ["zircon", "gtceu:zircon_gem", 50, 1],
        ["vanadium_magnetite", "gtceu:raw_vanadium_magnetite", 80, 1],
        ["draconic", "productivebees:draconic_dust", 30, 1],
        ["bronze", "gtceu:bronze_nugget", 100, 5],
        ["peridot", "gtceu:peridot_gem", 50, 1],
        ["electrum", "gtceu:electrum_nugget", 100, 5],
        ["moldavite", "gtceu:moldavite_gem", 50, 1],
        ["sunstone", "gtceu:sunstone_gem", 50, 1],
        ["fluix", "ae2:fluix_crystal", 20, 1],
        ["palladium", "gtceu:palladium_dust", 40, 1],
        ["sodalite", "gtceu:sodalite_gem", 50, 1],
        ["ichor_slimy", "tconstruct:ichor_slime_ball", 50, 1],
        ["glowing", "minecraft:glowstone_dust", 100, 1],
        ["blazing", "minecraft:blaze_powder", 30, 1],
        ["titanium", "gtceu:titanium_dust", 40, 1],
        ["knightslime", "tconstruct:knightslime_nugget", 100, 3],
        ["benitoite", "gtceu:benitoite_gem", 50, 1],
        ["brown_shroom", "minecraft:brown_mushroom", 70, 1],
        ["rose_gold", "gtceu:rose_gold_nugget", 100, 3],
        ["bismuth", "gtceu:bismuth_dust", 40, 1],
        ["lapis", "minecraft:lapis_lazuli", 50, 1],
        ["zombie", "minecraft:rotten_flesh", 60, 1],
        ["copper", "gtceu:copper_dust", 40, 1],
        ["ender_slimy", "tconstruct:ender_slime_ball", 50, 1],
        ["spinel", "gtceu:spinel_gem", 50, 1],
        ["crimson", "minecraft:crimson_fungus", 70, 1],
        ["emerald", "minecraft:emerald", 20, 1],
        ["sky_steel", "gtceu:sky_steel_nugget", 100, 3],
        ["rose_quartz", "gtceu:rose_quartz_gem", 50, 1],
        ["malachite", "gtceu:malachite_gem", 50, 1],
        ["heliodor", "gtceu:heliodor_gem", 50, 1],
        ["brass", "gtceu:brass_nugget", 100, 5],
        ["bauxite", "gtceu:raw_bauxite", 80, 1],
        ["lepidolite", "gtceu:raw_lepidolite", 80, 1],
        ["bastnasite", "gtceu:raw_bastnasite", 80, 1],
        ["onyx", "gtceu:onyx_gem", 50, 1],
        ["kunzite", "gtceu:kunzite_gem", 50, 1],
        ["ruby", "gtceu:ruby_gem", 50, 1],
        ["scheelite", "gtceu:raw_scheelite", 80, 1],
        ["sapphire", "gtceu:sapphire_gem", 50, 1],
        ["silicon", "gtceu:silicon_dust", 40, 1],
        ["electrotine", "gtceu:raw_electrotine", 80, 1],
        ["steel", "gtceu:steel_nugget", 100, 8],
        ["pig_iron", "tconstruct:pig_iron_nugget", 100, 3],
        ["green_sapphire", "gtceu:green_sapphire_gem", 50, 1],
        ["ilmenite", "gtceu:raw_ilmenite", 80, 1],
        ["sky_slime", "tconstruct:sky_slime_ball", 50, 1],
        ["graphite", "gtceu:raw_graphite", 80, 1],
        ["sphalerite", "gtceu:raw_sphalerite", 80, 1],
        ["netherite", "minecraft:netherite_scrap", 10, 1],
        ["osmium", "gtceu:osmium_dust", 10, 1],
        ["apatite", "gtceu:apatite_gem", 50, 1],
        ["gold", "gtceu:gold_dust", 40, 1],
        ["turquoise", "gtceu:turquoise_gem", 50, 1],
        ["tetrahedrite", "gtceu:raw_tetrahedrite", 80, 1],
        ["alexandrite", "gtceu:alexandrite_gem", 50, 1],
        ["neodymium", "gtceu:neodymium_dust", 40, 1],
        ["sulfur", "gtceu:sulfur_dust", 100, 1],
        ["tanzanite", "gtceu:tanzanite_gem", 50, 1],
        ["stibnite", "gtceu:raw_stibnite", 80, 1],
        ["iridium", "gtceu:iridium_dust", 10, 1],
        ["cobalt", "gtceu:cobalt_dust", 40, 1],
        ["morganite", "gtceu:morganite_gem", 50, 1],
        ["barite", "gtceu:raw_barite", 80, 1],
        ["pyrochlore", "gtceu:raw_pyrochlore", 80, 1],
        ["coal", "minecraft:coal", 60, 1],
        ["slimesteel", "tconstruct:slimesteel_nugget", 100, 3],
        ["tungstate", "gtceu:raw_tungstate", 80, 1],
        ["neutronium", "gtceu:neutronium_nugget", 2, 1],
        ["ender", "minecraft:ender_pearl", 20, 1],
        ["lead", "gtceu:lead_dust", 40, 1],
        ["galena", "gtceu:raw_galena", 80, 1],
        ["obsidian", "gtceu:obsidian_dust", 50, 3]

    ]

    combs.forEach(comb => {
        event.recipes.gtceu.centrifuge(`kubejs:prod_bees/${comb[0]}_comb`)
            .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:${comb[0]}"}}`).strongNBT())
            .chancedOutput(`${comb[3]}x ${comb[1]}`, comb[2]*100, 0)
            .itemOutputs("productivebees:wax")
            .outputFluids("productivebees:honey 200")
            .EUt(GTValues.VA[GTValues.LV])
            .duration(300)

        event.recipes.gtceu.thermal_centrifuge(`kubejs:prod_bees/${comb[0]}_comb_block`)
            .itemInputs(Item.of('productivebees:configurable_comb', `{EntityTag:{type:"productivebees:${comb[0]}"}}`).strongNBT())
            .chancedOutput(`${comb[3]*4}x ${comb[1]}`, comb[2]*100, 0)
            .outputFluids("productivebees:honey 800")
            .EUt(GTValues.VA[GTValues.MV])
            .duration(200)
    })

    // Other special cases
    // EXP
    event.recipes.gtceu.centrifuge(`kubejs:prod_bees/experience_comb`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:experience"}}`).strongNBT())
        .itemOutputs("productivebees:wax")
        .outputFluids("sophisticatedcore:xp_still 400")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge(`kubejs:prod_bees/experience_comb_block`)
        .itemInputs(Item.of('productivebees:configurable_comb', `{EntityTag:{type:"productivebees:experience"}}`).strongNBT())
        .outputFluids("sophisticatedcore:xp_still 1600")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
    // Oil(sands)
    event.recipes.gtceu.centrifuge(`kubejs:prod_bees/oilsands_comb`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:oilsands"}}`).strongNBT())
        .chancedOutput("minecraft:sand", 2000, 0)
        .itemOutputs("productivebees:wax")
        .outputFluids("gtceu:oil_medium 300")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge(`kubejs:prod_bees/oilsands_comb_block`)
        .itemInputs(Item.of('productivebees:configurable_comb', `{EntityTag:{type:"productivebees:oilsands"}}`).strongNBT())
        .chancedOutput("4x minecraft:sand", 2000, 0)
        .outputFluids("gtceu:oil_medium 1200")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
    // Prismarine
    event.recipes.gtceu.centrifuge(`kubejs:prod_bees/prismarine_comb`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:prismarine"}}`).strongNBT())
        .chancedOutput("minecraft:prismarine_shard", 2000, 0)
        .chancedOutput("minecraft:prismarine_crystals", 500, 0)
        .itemOutputs("productivebees:wax")
        .outputFluids("productivebees:honey 200")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge(`kubejs:prod_bees/prismarine_comb_block`)
        .itemInputs(Item.of('productivebees:configurable_comb', `{EntityTag:{type:"productivebees:prismarine"}}`).strongNBT())
        .chancedOutput("4x minecraft:prismarine_shard", 2000, 0)
        .chancedOutput("4x minecraft:prismarine_crystals", 500, 0)
        .outputFluids("productivebees:honey 800")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
    // Frosty
    event.recipes.gtceu.centrifuge(`kubejs:prod_bees/frosty_comb`)
        .itemInputs(Item.of('productivebees:configurable_honeycomb', `{EntityTag:{type:"productivebees:frosty"}}`).strongNBT())
        .chancedOutput("3x minecraft:snowball", 10000, 0)
        .chancedOutput("minecraft:ice", 4000, 0)
        .itemOutputs("productivebees:wax")
        .outputFluids("productivebees:honey 200")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
    event.recipes.gtceu.thermal_centrifuge(`kubejs:prod_bees/frosty_comb_block`)
        .itemInputs(Item.of('productivebees:configurable_comb', `{EntityTag:{type:"productivebees:frosty"}}`).strongNBT())
        .chancedOutput("12x minecraft:snowball", 10000, 0)
        .chancedOutput("4x minecraft:ice", 4000, 0)
        .outputFluids("productivebees:honey 800")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
})