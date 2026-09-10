ServerEvents.recipes(event => {
    // UO2/Th Line
    var UranThOres = [
        "haitaite_la", "davidite_ce", "davidite_la", "uranopolycrase", "euxenite_y", "thorutite", "brannerite", "fluorplumbopyrochlore", "uraninite", "pitchblende",
        "thorianite", "ekebergite", "mourite", "schoepite", "studtite", "billietite", "sayrite", "curite", "spriggite", "margaritasite", "carnotite", "finchite",
        "vanuralite", "uvanite", "chadwickite", "seelite", "piretite", "cliffordite", "tuliokite", "wyartite", "sharpite", "bayleyite", "rabbittite", "linekite",
        "paddlewheelite", "voglite", "lepersonnite_gd", "lepersonnite_nd", "uranopilite", "bobcookite", "alwilkinsite_y", "greenlizardite",
        "seaborgite", "zippeite", "oppenheimerite", "ootannite", "uranotungstite", "grayite", "ningyoite", "urphoite", "saryarkite_y", "ulrichite", "uranocircite",
        "torbernite", "przhevalskite", "uramphite", "uranospathite", "coconinoite", "upalite", "francoisite_nd", "francoisite_ce", "kivuite", "althupite",
        "mundite", "coffinite", "thorite", "enalite", "vicanite_ce", "uranophane", "barronite", "uranosilite", "phosinaite_ce", "ciprianiite", "ekanite", "uroxite"
    ]

    UranThOres.forEach(ore => {
        event.recipes.gtceu.chemical_bath(`kubejs:uranium/${ore}_adsorbtion`)
            .itemInputs(`gtceu:purified_${ore}_ore`)
            .inputFluids("gtceu:hypochlorous_acid 1000")
            .outputFluids("gtceu:uraninite_leachate 1000")
            .itemOutputs(`gtceu:refined_${ore}_ore`)
            .duration(600)
            .EUt(GTValues.VHA[GTValues.HV])
    })
    event.recipes.gtceu.centrifuge("kubejs:uranium/centrifuge_leachate")
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:uraninite_leachate 1000")
        .outputFluids("gtceu:hypochlorous_acid 500", "gtceu:uranium_filtrate 250", "minecraft:water 250")
        .itemOutputs("3x gtceu:uraninite_dust")
        .chancedOutput("3x gtceu:uraninite_dust", 6500, 0)
        .chancedOutput("3x gtceu:thorium_tetrachloride_dust", 2500, 0)
        .chancedOutput("gtceu:small_thorium_232_dust", 5000, 0)
        .chancedOutput("gtceu:small_thorium_dust", 1000, 0)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(480)
})