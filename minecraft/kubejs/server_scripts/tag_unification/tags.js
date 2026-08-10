// priority: 10
ServerEvents.tags("item", event => {
    // AE2 SkyStone dust tag
    event.add("forge:dusts/sky_stone", "ae2:sky_dust")

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
        ["pink_diamond", "pink"],["rose_quartz", "pink"],["schizolite", "pink"],["vayrynenite", "pink"],

        ["anglesite", "gray"],["hydroxylapatite", "gray"],["ilvaite", "gray"],["magnolite", "gray"],["musgravite", "gray"],
        ["wakefieldite_ce", "gray"],

        ["aragonite", "light_gray"],["dolomite", "light_gray"],["goshenite", "light_gray"],["liottite", "light_gray"],["phosgenite", "light_gray"],
        ["smamite", "light_gray"],["ulexite", "light_gray"],

        ["borcarite", "cyan"],["chalcomenite", "cyan"],["chalcophyllite", "cyan"],["chrysoprase", "cyan"],["cyprine", "cyan"],
        ["euclase", "cyan"],["haydeeite", "cyan"],["indicolite", "cyan"],["labradorite", "cyan"],["langite", "cyan"],["lazulite", "cyan"],
        ["maxixe", "cyan"],["polyarsite", "cyan"],["rotemite", "cyan"],["turquoise", "cyan"],["vauxite", "cyan"],["phosphohyllite", "cyan"],

        ["antozonite", "purple"],["axinite_mg", "purple"],["benitoite", "purple"],["creedite", "purple"],["fluorapatite", "purple"],
        ["hexagonite", "purple"],["putnisite", "purple"],["sugilite", "purple"],["taaffeite", "purple"],["tanzanite", "purple"],

        ["afghanite", "blue"],["agaite", "blue"],["azurite", "blue"],["ceylonite", "blue"],["clinoclase", "blue"],["diaboleite", "blue"],
        ["geuda", "blue"],["hauyne", "blue"],["kinoite", "blue"],["melanite", "blue"],

        ["anatase", "brown"],["axinite_fe", "brown"],["bixbyite_fe", "brown"],["chalcedony", "brown"],["corkite", "brown"],["enstatite", "brown"],
        ["hubeite", "brown"],["humite", "brown"],["iranite", "brown"],["modraite", "brown"],["painite", "brown"],["perovskite", "brown"],
        ["retzian_ce", "brown"],["retzian_la", "brown"],["romerite", "brown"],["siderite", "brown"],["smoky_quartz", "brown"],
        ["stolzite", "brown"],["zirconolite", "brown"],

        ["actinolite", "green"],["carraraite", "green"],["cesiodymite", "green"],["clinochlore", "green"],["cornwallite", "green"],
        ["demantoid", "green"],["euchroite", "green"],["fluorite", "green"],["gadolinite_y", "green"],["goldmanite", "green"],
        ["helenite", "green"],["jensenite", "green"],["knorringite", "green"],["loveringite", "green"],["mariinskite", "green"],
        ["nephrite", "green"],["paddlewheelite", "green"],["phlogopite", "green"],["piypite", "green"],["rajite", "green"],["titanite", "green"],
        ["torbernite", "green"],["tsavorite", "green"],["verdelite", "green"],["dioptase", "green"],

        ["brookite", "red"],["cuprite", "red"],["flurlite", "red"],["lorandite", "red"],["manganvesuvianite", "red"],["maxwellite", "red"],
        ["mesaite", "red"],["mozartite", "red"],["pyrargyrite", "red"],["rhodochrosite", "red"],["roselite", "red"],["rubellite", "red"],
        ["spinel", "red"],["vanadinite", "red"],["villiaumite", "red"],["zircon", "red"],

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

});

ServerEvents.tags("block", event => {
    // Overworld worldgen tags
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:travertine")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:chert")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:kaolin")
    event.add("minecraft:stone_ore_replaceables", "natures_spirit:sandy_soil")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:chalk")
    event.add("minecraft:stone_ore_replaceables", "regions_unexplored:argillite")
})