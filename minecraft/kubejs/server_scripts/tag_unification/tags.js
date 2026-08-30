// priority: 10
ServerEvents.tags("item", event => {
    // AE2 SkyStone dust tag
    event.add("forge:dusts/sky_stone", "ae2:sky_dust")

    // Remove violet diamond from common tag to prevent normal diamonds crafting into violet blocks
    event.remove("c:diamonds", "infinite_abyss:violet_diamond")

    // Various gems
    var dupeGems = [
        ["infinite_abyss:violet_diamond", "diamond"],
        ["infinite_abyss:opal", "opal"],
        ["infinite_abyss:cursed_opal", "opal"],
        ["infinite_abyss:violet_diamond", "diamond_like"],
        ["infinite_abyss:opal", "opal_like"],
        ["infinite_abyss:cursed_opal", "opal_like"],

        ["minecraft:diamond", "diamond_like"],
        ["gtceu:pink_diamond_gem", "diamond_like"],
        ["gtceu:bort_gem", "diamond_like"],
        ["gtceu:ballas_gem", "diamond_like"],
        ["gtceu:corundum_gem", "corundum_like"],
        ["gtceu:sapphire_gem", "corundum_like"],
        ["gtceu:pink_sapphire_gem", "corundum_like"],
        ["gtceu:geuda_gem", "corundum_like"],
        ["gtceu:padparadscha_gem", "corundum_like"],
        ["gtceu:green_sapphire_gem", "corundum_like"],
        ["gtceu:ruby_gem", "corundum_like"],
        ["gtceu:prasiolite_gem", "quartz_like"],
        ["gtceu:agate_gem", "quart_likez"],
        ["gtceu:jasper_gem", "quartz_like"],
        ["gtceu:chrysoprase_gem", "quartz_like"],
        ["gtceu:citrine_gem", "quartz_like"],
        ["gtceu:quartzite_gem", "quartz_like"],
        ["gtceu:herkimer_diamond_gem", "quartz_like"],
        ["gtceu:rose_quartz_gem", "quartz_like"],
        ["gtceu:milky_quartz_gem", "quartz_like"],
        ["gtceu:certus_quartz_gem", "quartz_like"],
        ["ae2:certus_quartz_crystal", "quartz_like"],
        ["gtceu:smoky_quartz_gem", "quartz_like"],
        ["gtceu:helenite_gem", "quartz_like"],
        ["minecraft:quartz", "quartz_like"],
        ["gtceu:aventurine_gem", "quartz_like"],
        ["gtceu:chalcedony_gem", "quartz_like"],
        ["gtceu:moldavite_gem", "quartz_like"],
        ["gtceu:sard_gem", "quartz_like"],
        ["gtceu:onyx_gem", "quartz_like"],
        ["minecraft:amethyst_shard", "quartz_like"],
        ["gtceu:opal_gem", "opal_like"],
        ["gtceu:black_opal_gem", "opal_like"],
        ["gtceu:fire_opal_gem", "opal_like"],
        ["gtceu:moss_opal_gem", "opal_like"],
        ["gtceu:beryl_gem", "beryl_like"],
        ["gtceu:morganite_gem", "beryl_like"],
        ["gtceu:red_beryl_gem", "beryl_like"],
        ["gtceu:goshenite_gem", "beryl_like"],
        ["minecraft:emerald", "beryl_like"],
        ["gtceu:heliodor_gem", "beryl_like"],
        ["gtceu:maxixe_gem", "beryl_like"],
        ["gtceu:aquamarine_gem", "beryl_like"]

    ]
    dupeGems.forEach(gem => {
        event.add("forge:gems", gem[0])
        event.add(`forge:gems/${gem[1]}`, gem[0])
    })

    // Various ingots
    var dupeIngots = [
        ["undergarden:froststeel_ingot", "steel"]
    ]
    dupeIngots.forEach(got => {
        event.add("forge:ingots", got[0])
        event.add(`forge:ingots/${got[1]}`, got[0])
    })

    // Lenses
    var lensGems = [
        ["achroite", "white"],["carobbiite", "white"],["eakerite", "white"],["fluellite", "white"],["herkimer_diamond", "white"],
        ["londonite", "white"],["moissanite", "white"],["molybdomenite", "white"],["qingsongite", "white"],["scholzite", "white"],

        ["blodite", "orange"],["chondrodite", "orange"],["crocoite", "orange"],["friedelite", "orange"],["golden_sheen_sapphire", "orange"],
        ["greenockite", "orange"],["hancockite", "orange"],["hessonite", "orange"],["hummerite", "orange"],["inyolite", "orange"],
        ["joaquinite_ce", "orange"],["marshite", "orange"],["monazite_ce", "orange"],["natanite", "orange"],["orpiment", "orange"],
        ["pezzottaite_cs", "orange"],["pharmacosiderite", "orange"],["sarcolite", "orange"],["sayrite", "orange"],["tancaite", "orange"],
        ["ushkovite", "orange"],["vesuvianite", "orange"],["wagnerite", "orange"],["xanthoconite", "orange"],["xenotime_y", "orange"],

        ["chudobaite", "magenta"],["elbaite", "magenta"],["erythrite", "magenta"],["pink_sapphire", "magenta"],["red_beryl", "magenta"],
        ["thulite", "magenta"],["umbalite", "magenta"],

        ["aquamarine", "light_blue"],["balyakinite", "light_blue"],["bazzite", "light_blue"],["beryl", "light_blue"],["celestine", "light_blue"],
        ["chenite", "light_blue"],["gordaite", "light_blue"],["kosnarite", "light_blue"],["larimar", "light_blue"],["nissonite", "light_blue"],

        ["asbecasite", "yellow"],["berzeliite", "yellow"],["billietite", "yellow"],["butlerite", "yellow"],["challacolloite", "yellow"],
        ["chrysoberyl", "yellow"],["citrine", "yellow"],["cymophane", "yellow"],["epistolite", "yellow"],["formicaite", "yellow"],
        ["goyazite", "yellow"],["greenlizardite", "yellow"],["heliodor", "yellow"],["hibschite", "yellow"],["kleinite", "yellow"],
        ["milarite", "yellow"],["pottsite", "yellow"],["pyromorphite", "yellow"],["rabbittite", "yellow"],["seeligerite", "yellow"],
        ["sweetite", "yellow"],["vanuralite", "yellow"],["vicanite_ce", "yellow"],

        ["alexandrite", "lime"],["anorpiment", "lime"],["axinite_mn", "lime"],["belloite", "lime"],["belovite_ce", "lime"],
        ["bouazzerite", "lime"],["californite", "lime"],["datolite", "lime"],["diaoyudaoite", "lime"],["diopside", "lime"],
        ["ekanite", "lime"],["epidote", "lime"],["forsterite", "lime"],["gibbsite", "lime"],["hiddenite", "lime"],["kolbeckite", "lime"],
        ["lizardite", "lime"],["linekite", "lime"],["pectolite", "lime"],["peridot", "lime"],["pharmacoalumite", "lime"],
        ["prasiolite", "lime"],["rhodizite", "lime"],["tychite", "lime"],["voglite", "lime"],["wardite", "lime"],

        ["allactite", "pink"],["behierite", "pink"],["diaspore", "pink"],["gayite", "pink"],["hackmanite", "pink"],["kunzite", "pink"],
        ["leucite", "pink"],["monazite_nd", "pink"],["morganite", "pink"],["padparadscha", "pink"],["phosphosiderite", "pink"],
        ["pink_diamond", "pink"],["rose_quartz", "pink"],["schizolite", "pink"],["vayrynenite", "pink"],["pezzottaite_ke", "pink"],

        ["anglesite", "gray"],["hydroxylapatite", "gray"],["ilvaite", "gray"],["magnolite", "gray"],["musgravite", "gray"],
        ["wakefieldite_ce", "gray"],

        ["aragonite", "light_gray"],["dolomite", "light_gray"],["goshenite", "light_gray"],["liottite", "light_gray"],["phosgenite", "light_gray"],
        ["smamite", "light_gray"],["ulexite", "light_gray"],

        ["borcarite", "cyan"],["chalcomenite", "cyan"],["chalcophyllite", "cyan"],["chrysoprase", "cyan"],["cyprine", "cyan"],
        ["euclase", "cyan"],["haydeeite", "cyan"],["indicolite", "cyan"],["labradorite", "cyan"],["langite", "cyan"],["lazulite", "cyan"],
        ["maxixe", "cyan"],["polyarsite", "cyan"],["rotemite", "cyan"],["turquoise", "cyan"],["vauxite", "cyan"],["phosphohyllite", "cyan"],

        ["antozonite", "purple"],["axinite_mg", "purple"],["benitoite", "purple"],["creedite", "purple"],["fluorapatite", "purple"],
        ["hexagonite", "purple"],["putnisite", "purple"],["sugilite", "purple"],["taaffeite", "purple"],["tanzanite", "purple"],
        ["iodapatite", "purple"],

        ["afghanite", "blue"],["agaite", "blue"],["azurite", "blue"],["ceylonite", "blue"],["clinoclase", "blue"],["diaboleite", "blue"],
        ["geuda", "blue"],["hauyne", "blue"],["kinoite", "blue"],["melanite", "blue"],

        ["anatase", "brown"],["axinite_fe", "brown"],["bixbyite_fe", "brown"],["chalcedony", "brown"],["corkite", "brown"],["enstatite", "brown"],
        ["hubeite", "brown"],["humite", "brown"],["iranite", "brown"],["modraite", "brown"],["painite", "brown"],["perovskite", "brown"],
        ["retzian_ce", "brown"],["retzian_la", "brown"],["romerite", "brown"],["siderite", "brown"],["smoky_quartz", "brown"],
        ["stolzite", "brown"],["zirconolite", "brown"], ["bromapatite", "brown"],

        ["actinolite", "green"],["carraraite", "green"],["cesiodymite", "green"],["clinochlore", "green"],["cornwallite", "green"],
        ["demantoid", "green"],["euchroite", "green"],["fluorite", "green"],["gadolinite_y", "green"],["goldmanite", "green"],
        ["helenite", "green"],["jensenite", "green"],["knorringite", "green"],["loveringite", "green"],["mariinskite", "green"],
        ["nephrite", "green"],["paddlewheelite", "green"],["phlogopite", "green"],["piypite", "green"],["rajite", "green"],["titanite", "green"],
        ["torbernite", "green"],["tsavorite", "green"],["verdelite", "green"],["dioptase", "green"],

        ["brookite", "red"],["cuprite", "red"],["flurlite", "red"],["lorandite", "red"],["manganvesuvianite", "red"],["maxwellite", "red"],
        ["mesaite", "red"],["mozartite", "red"],["pyrargyrite", "red"],["rhodochrosite", "red"],["roselite", "red"],["rubellite", "red"],
        ["spinel", "red"],["vanadinite", "red"],["villiaumite", "red"],["zircon", "red"], ["pezzottaite_rb", "red"],

        ["annite", "black"],["bixbyite_mn", "black"],["braunite", "black"],["chambersite", "black"],["kulanite", "black"],["loparite", "black"],
        ["mannardite", "black"],["moroxite", "black"],["voltaite", "black"]
    ]
    lensGems.forEach(lens => {
        event.add("forge:lenses", `gtceu:${lens[0]}_lens`)
        event.add(`forge:lenses/${lens[1]}`, `gtceu:${lens[0]}_lens`)
    })

    // Remove wood slab tag from treated wood for manual plate recipe
    event.remove("minecraft:wooden_slabs", "gtceu:treated_wood_slab")

    // Overworld worldgen tags
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:travertine")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:chert")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:kaolin")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:sandy_soil")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:chalk")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:argillite")

    // Tree tapping tags
    event.add("kubejs:tree_tap/oak_item", ["minecraft:oak_log", "minecraft:oak_wood",
        "minecraft:dark_oak_log", "minecraft:dark_oak_wood",
        "twilightforest:twilight_oak_log", "twilightforest:twilight_oak_wood",
        "twilightforest:time_log", "twilightforest:time_wood", "twilightforest:time_log_core",
        "twilightforest:transformation_log", "twilightforest:transformation_wood", "twilightforest:transformation_log_core",
        "twilightforest:mining_log", "twilightforest:mining_wood", "twilightforest:mining_log_core",
        "twilightforest:sorting_log", "twilightforest:sorting_wood", "twilightforest:sorting_log_core",
        "regions_unexplored:alpha_log", "regions_unexplored:small_oak_log"])
    event.add("kubejs:tree_tap/spruce_item", ["minecraft:spruce_log", "minecraft:spruce_wood"])
    event.add("kubejs:tree_tap/birch_item", ["minecraft:birch_log", "minecraft:birch_wood",
        "regions_unexplored:silver_birch_log", "regions_unexplored:silver_birch_wood"
    ])
    event.add("kubejs:tree_tap/jungle_item", ["minecraft:jungle_log", "minecraft:jungle_wood"])
    event.add("kubejs:tree_tap/acacia_item", ["minecraft:acacia_log", "minecraft:acacia_wood"])
    event.add("kubejs:tree_tap/mangrove_item", ["minecraft:mangrove_log", "minecraft:mangrove_wood",
        "twilightforest:mangrove_log", "twilightforest:mangrove_wood"
    ])
    event.add("kubejs:tree_tap/cherry_item", ["minecraft:cherry_log", "minecraft:cherry_wood"])
    event.add("kubejs:tree_tap/redwood_item", ["natures_spirit:redwood_log", "natures_spirit:redwood_wood",
        "regions_unexplored:redwood_log", "regions_unexplored:redwood_wood"
    ])
    event.add("kubejs:tree_tap/sugi_item", ["natures_spirit:sugi_log", "natures_spirit:sugi_wood"])
    event.add("kubejs:tree_tap/wisteria_item", ["natures_spirit:wisteria_log", "natures_spirit:wisteria_wood"])
    event.add("kubejs:tree_tap/fir_item", ["natures_spirit:fir_log", "natures_spirit:fir_wood"])
    event.add("kubejs:tree_tap/willow_item", ["natures_spirit:willow_log", "natures_spirit:willow_wood",
        "regions_unexplored:willow_log", "regions_unexplored:willow_wood"
    ])
    event.add("kubejs:tree_tap/aspen_item", ["natures_spirit:aspen_log", "natures_spirit:aspen_wood"])
    event.add("kubejs:tree_tap/maple_item", ["natures_spirit:maple_log", "natures_spirit:maple_wood",
        "regions_unexplored:maple_log", "regions_unexplored:maple_wood"
    ])
    event.add("kubejs:tree_tap/cypress_item", ["natures_spirit:cypress_log", "natures_spirit:cypress_wood",
        "regions_unexplored:cypress_log", "regions_unexplored:cypress_wood"
    ])
    event.add("kubejs:tree_tap/olive_item", ["natures_spirit:olive_log", "natures_spirit:olive_wood"])
    event.add("kubejs:tree_tap/joshua_item", ["natures_spirit:joshua_log", "natures_spirit:joshua_wood",
        "regions_unexplored:joshua_log", "regions_unexplored:joshua_wood"
    ])
    event.add("kubejs:tree_tap/ghaf_item", ["natures_spirit:ghaf_log", "natures_spirit:ghaf_wood"])
    event.add("kubejs:tree_tap/palo_verde_item", ["natures_spirit:palo_verde_log", "natures_spirit:palo_verde_wood"])
    event.add("kubejs:tree_tap/coconut_item", ["natures_spirit:cpconut_log", "natures_spirit:coconut_wood"])
    event.add("kubejs:tree_tap/cedar_item", ["natures_spirit:cedar_log", "natures_spirit:cedar_wood", ])
    event.add("kubejs:tree_tap/larch_item", ["natures_spirit:larch_log", "natures_spirit:larch_wood", 
        "regions_unexplored:larch_log", "regions_unexplored:larch_wood"
    ])
    event.add("kubejs:tree_tap/mahogany_item", ["natures_spirit:mahogany_log", "natures_spirit:mahogany_wood"])
    event.add("kubejs:tree_tap/saxaul_item", ["natures_spirit:saxaul_log", "natures_spirit:saxaul_wood"])
    event.add("kubejs:tree_tap/twisted_item", ["architects_palette:twisted_log", "architects_palette:twisted_wood"])
    event.add("kubejs:tree_tap/canopy_item", ["twilightforest:canopy_log", "twilightforest:canopy_wood"])
    event.add("kubejs:tree_tap/darkwood_item", ["twilightforest:dark_log", "twilightforest:dark_wood", 
        "regions_unexplored:blackwood_log", "regions_unexplored:blackwood_wood"
    ])
    event.add("kubejs:tree_tap/echo_item", ["deeperdarker:echo_log", "deeperdarker:echo_wood"])
    event.add("kubejs:tree_tap/wigglewood_item", ["undergarden:wigglewood_log", "undergarden:wigglewood_wood"])
    event.add("kubejs:tree_tap/grongle_item", ["undergarden:grongle_log", "undergarden:grongle_wood"])
    event.add("kubejs:tree_tap/greenheart_item", ["tconstruct:greenheart_log", "undergarden:greenheart_wood"])
    event.add("kubejs:tree_tap/skyroot_item", ["tconstruct:skyroot_log", "undergarden:skyroot_wood"])
    event.add("kubejs:tree_tap/enderbark_item", ["tconstruct:enderbark_log", "undergarden:enderbark_wood"])
    event.add("kubejs:tree_tap/rubber_item", ["gtceu:rubber_log", "gtceu:rubber_wood"])
    event.add("kubejs:tree_tap/ashen_item", ["regions_unexplored:ashen_log", "regions_unexplored_ashen_wood",
        "regions_unexplored:dead_log", "regions_unexplored:dead_wood"
    ])
    event.add("kubejs:tree_tap/bamboo_item", ["regions_unexplored:bamboo_log", "dtru:bamboo_branch"])
    event.add("kubejs:tree_tap/baobab_item", ["regions_unexplored:baobab_log", "regions_unexplored:baobab_wood"])
    event.add("kubejs:tree_tap/brimwood_item", ["regions_unexplored:brimwood_log", "regions_unexplored:brimwood_wood"])
    event.add("kubejs:tree_tap/cobalt_item", ["regions_unexplored:cobalt_log", "regions_unexplored:cobalt_wood"])
    event.add("kubejs:tree_tap/eucalyptus_item", ["regions_unexplored:eucalyptus_log", "regions_unexplored:eucalyptus_wood"])
    event.add("kubejs:tree_tap/kapok_item", ["regions_unexplored:kapok_log", "regions_unexplored:kapok_wood"])
    event.add("kubejs:tree_tap/magnolia_item", ["regions_unexplored:magnolia_log", "regions_unexplored:magnolia_wood"])
    event.add("kubejs:tree_tap/mauve_item", ["regions_unexplored:mauve_log", "regions_unexplored:mauve_wood"])
    event.add("kubejs:tree_tap/palm_item", ["regions_unexplored:palm_log", "regions_unexplored:palm_wood"])
    event.add("kubejs:tree_tap/pine_item", ["regions_unexplored:pine_log", "regions_unexplored:pine_wood"])
    event.add("kubejs:tree_tap/socotra_item", ["regions_unexplored:socotra_log", "regions_unexplored:socotra_wood"])

});

ServerEvents.tags("block", event => {
    // Overworld worldgen tags
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:travertine")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:chert")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:kaolin")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:sandy_soil")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:chalk")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:argillite")

    // Tree tap tags
    event.add("kubejs:tree_tap/oak", ["minecraft:oak_log", "minecraft:oak_wood", "dynamictrees:oak_branch", 
        "minecraft:dark_oak_log", "minecraft:dark_oak_wood", "dynamictrees:dark_oak_branch",
        "twilightforest:twilight_oak_log", "twilightforest:twilight_oak_wood", "dttwilightforest:twilight_oak_branch",
        "twilightforest:time_log", "twilightforest:time_wood", "twilightforest:time_log_core", "dttwilightforest:time_branch",
        "twilightforest:transformation_log", "twilightforest:transformation_wood", "twilightforest:transformation_log_core", "dttwilightforest:tranformation_branch",
        "twilightforest:mining_log", "twilightforest:mining_wood", "twilightforest:mining_log_core", "dttwilightforest:mining_branch",
        "twilightforest:sorting_log", "twilightforest:sorting_wood", "twilightforest:sorting_log_core", "dttwilightforest:sorting_branch",
        "regions_unexplored:alpha_log", "regions_unexplored:small_oak_log"])
    event.add("kubejs:tree_tap/spruce", ["minecraft:spruce_log", "minecraft:spruce_wood", "dynamictrees:spruce_branch"])
    event.add("kubejs:tree_tap/birch", ["minecraft:birch_log", "minecraft:birch_wood", "dynamictrees:birch_branch",
        "regions_unexplored:silver_birch_log", "regions_unexplored:silver_birch_wood", "dtru:silver_birch_branch"
    ])
    event.add("kubejs:tree_tap/jungle", ["minecraft:jungle_log", "minecraft:jungle_wood", "dynamictrees:jungle_branch"])
    event.add("kubejs:tree_tap/acacia", ["minecraft:acacia_log", "minecraft:acacia_wood", "dynamictrees:acacia_branch"])
    event.add("kubejs:tree_tap/mangrove", ["minecraft:mangrove_log", "minecraft:mangrove_wood", "dynamictrees:mangrove_branch",
        "twilightforest:mangrove_log", "twilightforest:mangrove_wood", "dttwilightforest:mangrove_branch"
    ])
    event.add("kubejs:tree_tap/cherry", ["minecraft:cherry_log", "minecraft:cherry_wood", "dynamictrees:cherry_branch"])
    event.add("kubejs:tree_tap/redwood", ["natures_spirit:redwood_log", "natures_spirit:redwood_wood", "dtnatures_spirit:redwood_branch",
        "regions_unexplored:redwood_log", "regions_unexplored:redwood_wood", "dtru:redwood_branch"
    ])
    event.add("kubejs:tree_tap/sugi", ["natures_spirit:sugi_log", "natures_spirit:sugi_wood", "dtnatures_spirit:sugi_branch"])
    event.add("kubejs:tree_tap/wisteria", ["natures_spirit:wisteria_log", "natures_spirit:wisteria_wood", "dtnatures_spirit:wisteria_branch"])
    event.add("kubejs:tree_tap/fir", ["natures_spirit:fir_log", "natures_spirit:fir_wood", "dtnatures_spirit:fir_branch"])
    event.add("kubejs:tree_tap/willow", ["natures_spirit:willow_log", "natures_spirit:willow_wood", "dtnatures_spirit:willow_branch",
        "regions_unexplored:willow_log", "regions_unexplored:willow_wood", "dtru:willow_branch"
    ])
    event.add("kubejs:tree_tap/aspen", ["natures_spirit:aspen_log", "natures_spirit:aspen_wood", "dtnatures_spirit:aspen_branch"])
    event.add("kubejs:tree_tap/maple", ["natures_spirit:maple_log", "natures_spirit:maple_wood", "dtnatures_spirit:maple_branch",
        "regions_unexplored:maple_log", "regions_unexplored:maple_wood", "dtru:maple_branch"
    ])
    event.add("kubejs:tree_tap/cypress", ["natures_spirit:cypress_log", "natures_spirit:cypress_wood", "dtnatures_spirit:cypress_branch",
        "regions_unexplored:cypress_log", "regions_unexplored:cypress_wood", "dtru:cypress_branch"
    ])
    event.add("kubejs:tree_tap/olive", ["natures_spirit:olive_log", "natures_spirit:olive_wood", "dtnatures_spirit:olive_branch"])
    event.add("kubejs:tree_tap/joshua", ["natures_spirit:joshua_log", "natures_spirit:joshua_wood", "dtnatures_spirit:joshua_branch",
        "regions_unexplored:joshua_log", "regions_unexplored:joshua_wood", "dtru:joshua_branch"
    ])
    event.add("kubejs:tree_tap/ghaf", ["natures_spirit:ghaf_log", "natures_spirit:ghaf_wood", "dtnatures_spirit:ghaf_branch"])
    event.add("kubejs:tree_tap/palo_verde", ["natures_spirit:palo_verde_log", "natures_spirit:palo_verde_wood", "dtnatures_spirit:palo_verde_branch"])
    event.add("kubejs:tree_tap/coconut", ["natures_spirit:cpconut_log", "natures_spirit:coconut_wood", "dtnatures_spirit:coconut_branch"])
    event.add("kubejs:tree_tap/cedar", ["natures_spirit:cedar_log", "natures_spirit:cedar_wood", "dtnatures_spirit:cedar_branch"])
    event.add("kubejs:tree_tap/larch", ["natures_spirit:larch_log", "natures_spirit:larch_wood", "dtnatures_spirit:larch_branch",
        "regions_unexplored:larch_log", "regions_unexplored:larch_wood", "dtru:larch_branch"
    ])
    event.add("kubejs:tree_tap/mahogany", ["natures_spirit:mahogany_log", "natures_spirit:mahogany_wood", "dtnatures_spirit:mnahogany_branch"])
    event.add("kubejs:tree_tap/saxaul", ["natures_spirit:saxaul_log", "natures_spirit:saxaul_wood", "dtnatures_spirit:saxaul_branch"])
    event.add("kubejs:tree_tap/twisted", ["architects_palette:twisted_log", "architects_palette:twisted_wood"])
    event.add("kubejs:tree_tap/canopy", ["twilightforest:canopy_log", "twilightforest:canopy_wood", "dttwilightforest:canopy_branch"])
    event.add("kubejs:tree_tap/darkwood", ["twilightforest:dark_log", "twilightforest:dark_wood", "dttwilightforest:dark_branch",
        "regions_unexplored:blackwood_log", "regions_unexplored:blackwood_wood", "dtru:blackwood_branch"
    ])
    event.add("kubejs:tree_tap/echo", ["deeperdarker:echo_log", "deeperdarker:echo_wood"])
    event.add("kubejs:tree_tap/wigglewood", ["undergarden:wigglewood_log", "undergarden:wigglewood_wood"])
    event.add("kubejs:tree_tap/grongle", ["undergarden:grongle_log", "undergarden:grongle_wood"])
    event.add("kubejs:tree_tap/greenheart", ["tconstruct:greenheart_log", "undergarden:greenheart_wood", "dttconstruct:greenheart_branch"])
    event.add("kubejs:tree_tap/skyroot", ["tconstruct:skyroot_log", "undergarden:skyroot_wood", "dttconstruct:skyroot_branch"])
    event.add("kubejs:tree_tap/enderbark", ["tconstruct:enderbark_log", "undergarden:enderbark_wood", "dttconstruct:enderbark_branch"])
    event.add("kubejs:tree_tap/rubber", ["gtceu:rubber_log", "gtceu:rubber_wood", "rubberdt:rubber_branch"])
    event.add("kubejs:tree_tap/ashen", ["regions_unexplored:ashen_log", "regions_unexplored_ashen_wood",
        "regions_unexplored:dead_log", "regions_unexplored:dead_wood"
    ])
    event.add("kubejs:tree_tap/bamboo", ["regions_unexplored:bamboo_log", "dtru:bamboo_branch"])
    event.add("kubejs:tree_tap/baobab", ["regions_unexplored:baobab_log", "regions_unexplored:baobab_wood", "dtru:baobab_branch"])
    event.add("kubejs:tree_tap/brimwood", ["regions_unexplored:brimwood_log", "regions_unexplored:brimwood_wood", "dtru:brimwood_branch"])
    event.add("kubejs:tree_tap/cobalt", ["regions_unexplored:cobalt_log", "regions_unexplored:cobalt_wood", "dtru:cobalt_branch"])
    event.add("kubejs:tree_tap/eucalyptus", ["regions_unexplored:eucalyptus_log", "regions_unexplored:eucalyptus_wood", "dtru:eucalyptus_branch"])
    event.add("kubejs:tree_tap/kapok", ["regions_unexplored:kapok_log", "regions_unexplored:kapok_wood", "dtru:kapok_branch"])
    event.add("kubejs:tree_tap/magnolia", ["regions_unexplored:magnolia_log", "regions_unexplored:magnolia_wood", "dtru:magnolia_branch"])
    event.add("kubejs:tree_tap/mauve", ["regions_unexplored:mauve_log", "regions_unexplored:mauve_wood", "dtru:mauve_branch"])
    event.add("kubejs:tree_tap/palm", ["regions_unexplored:palm_log", "regions_unexplored:palm_wood", "dtru:palm_branch"])
    event.add("kubejs:tree_tap/pine", ["regions_unexplored:pine_log", "regions_unexplored:pine_wood", "dtru:pine_branch"])
    event.add("kubejs:tree_tap/socotra", ["regions_unexplored:socotra_log", "regions_unexplored:socotra_wood", "dtru:socotra_branch"])

})