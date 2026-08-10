// priority: 20
ServerEvents.tags("item", event => {
    // Platline
    var platOres = [
        "tornroosite", "geerite", "roxbyite", "anilite", "umangite", "hrabakite", "jinxuite", "ferhodsite", "sugakiite", "oosterboschite", "gortdrumite", "yarrowite",
        "klockmannite", "grokhovskyite", "haycockite", "gallite", "roquesite", "omariniite", "mooihoekite", "kesterite", "stannite", "mohite", "idaite", "nekrasovite",
        "colusite", "germanite", "renierite", "hemusite", "catamarcaite", "lautite", "dzhezkazganite", "cubanite", "sulvanite", "vulcanite", "proxitwelvefoldite",
        "kuvaevite", "millerite", "braggite", "grimmite", "violarite", "carrollite", "cuproiridsite", "cuprorhodsite", "polydymite", "tarkianite", "castaingite",
        "melonite", "merenskyite", "ullmannite", "muckeite", "tetrahedrite_fe", "tetrahedrite_cd", "tetrahedrite_hg", "tetrahedrite_mn", "tetrahedrite_ni",
        "goldfieldite", "polybasite", "sinnerite", "hansblockite", "zhonghongite", "paarite", "gladite", "luxembourgite", "berryite", "cuprobismutite", "proudite",
        "enargite", "petrukite", "briartite", "luzonite", "daomanite", "nuwaite", "ciriottiite", "larosite",

        "tetrahedrite", "bornite", "pentlandite", "chalcopyrite", "chalcocite", "cooperite"
    ]

    platOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:purified_${ore}_ore`)
        event.add("gtceu:oreproc/platline", `gtceu:purified_${ore}_ore`)
    })
    
    // Indium
    var indiOres = [
        "galena", "sphalerite", "alburnite", "xuwenyuanite", "acanthite", "spryite", "argentite", "aguilarite", "cervelleite", "fischesserite", "sopcheite", "ruizhongite",
        "laforetite", "empressite", "sylvanite", "pyrargyrite", "xanthoconite", "samsonite", "laffittite", "stephanite", "quadratite", "manganoquadratite", "interliveingite",
        "rathite", "veenite", "sartorite", "heptasartorite", "polloneite", "boulangerite", "buynite", "cylindrite", "oscarkempffite", "diaphorite", "jordanite", "geocronite", 
        "stilleite"
    ]

    indiOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:purified_${ore}_ore`)
        event.add("gtceu:oreproc/indium", `gtceu:purified_${ore}_ore`)
    })

    // Earthline
    var REEOres = [
        "xenotime_y", "xenotime_gd", "xenotime_yb", "monazite", "monazite_ce", "monazite_nd", "monazite_sm", "monazite_gd", "wakefieldite_y", "wakefieldite_la", "wakefieldite_ce", 
        "wakefieldite_nd", "bastnasite_y", "bastnasite_la", "bastnasite", "bastnasite_nd", "thortveitite", "kolbeckite", "fergusonite_y", "fergusonite_ce", "fergusonite_nd",
        "chinleite_y", "chinleite_ce", "chinleite_nd", "gadolinite_y", "gadolinite_ce", "gadolinite_nd", "churchite_y", "churchite_nd", "churchite_dy", "ixiolite_sc",
        "heftetjernite", "tritomite_y", "tritomite_ce", "pilawite_y", "samarskite_y", "samarskite_yb", "gagarinite_y", "gagarinite_ce", "aeschynite_y", "aeschynite_ce",
        "aeschynite_nd", "tantalaeschynite_ce", "loparite", "enalite", "allanite_y", "allanite_la", "allanite_ce", "allanite_sm", "heamanite_ce", "belovite_ce",
        "bazzite", "juonniite", "warkite", "nybergite", "moydite_y", "yttrotungstite_y", "yttrotungstite_ce", "ancylite_la", "ancylite_ce", "retzian_la",
        "retzian_ce", "retzian_nd", "ningyoite", "perchukite_y", "deveroite_ce", "cerite_ceca", "kampelite", "kangite", "panguite", "mckelveyite_y", "mckelveyite_nd", "agardite_y", 
        "agardite_la", "agardite_ce", "agardite_nd", "agardite_dy", "miserite", "thalenite_y", "alwilkinsite_y", "fluorplumbopyrochlore", "hydroxynatropyrochlore", "pyrochlore",
        "oxycalciopyrochlore", "uranopolycrase", "tranquillityite", "roumaite", "olgite", "hezuolinite", "nacareniobsite_ce", "nacareniobsite_nd", "remondite_la", "remondite_ce",
        "cebaite_ce", "cebaite_nd", "tancaite_ce", "davidite_y", "davidite_ce", "davidite_la", "oftedalite", "saryarkite_y", "tveitite_y", "euxenite_y", "levinsonite_y",
        "micheelsenite", "mineevite_y", "chukhrovite_y", "chukhrovite_ce", "chukhrovite_nd", "chukhrovite_ca", "stefanweissite", "mendeleevite_ce", "mendeleevite_nd",
        "phosinaite_ce", "vicanite_ce", "haitaite_la", "loveringite", "orthojoaquinite_la", "orthojoaquinite_ce", "joaquinite_ce", "strontiojoaquinite", "dualite", "johnsenite_ce",
        "francoisite_ce", "francoisite_nd", "lepersonnite_nd", "lepersonnite_gd", "yttrofluorite", "yttrocerite", "fluorapatite", "apatite", "hydroxylapatite", "fullers_earth",
        "granitic_mineral_sand", "basaltic_mineral_sand", "bentonite"
    ]

    REEOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:refined_${ore}_ore`)
        event.add("gtceu:oreproc/earthline", `gtceu:refined_${ore}_ore`)
    })

    // Tungsten line
    var tungOres = [
        "tungstate", "scheelite", "hubnerite", "ferberite", "krasnoselskite", "stolzite", "russellite", "tungstite", "hydrotungstite", "yttrotungstite_ce", "yttrotungstite_y",
        "anthoinite", "tungstenite", "catamarcaite", "ootannite", "ophirite", "uranotungstite", "natrowalentaite", "johnsenite_ce"
    ]

    tungOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:${ore}_dust`)
        event.add("gtceu:oreproc/tungsten", `gtceu:${ore}_dust`)
    })

    // Titanium/Zirconium line
    var titZirOres = [
        "wangxibinite", "toledoite", "florenskyite", "hongquiite", "magneliite", "ulvospinel", "carmeltazite", "ilmenite", "griffinite", "botuobinskite", "heamanite_ce", "perovskite",
        "lakargiite", "loparite", "panguite", "macedonite", "lindsleyite", "loveringite", "davidite_la", "davidite_ce", "davidite_y", "kangite", "rutile", "tantalaeschynite_ce",
        "tivanite", "anatase", "brookite", "aeschynite_nd", "aeschynite_ce", "aeschynite_y", "uranopolycrase", "euxenite_y", "thorutite", "brannerite", "stefanweissite", "zirconolite",
        "laachite", "tazzoliite", "mannardite", "priderite", "asbecasite", "bianchiniite", "sabinaite", "azoproite", "zircosulfate", "calamaite", "lehmannite", "hochleitnerite",
        "sperlingite", "rubinite", "titanite", "tranquillityite", "bortolanite", "roumaite", "kochite", "saamite", "epistolite", "innelite", "polyphite", "bussenite", "matsubaraite",
        "hezuolinite", "benitoite", "orthojoaquinite_la", "strontiojoaquinite", "orthojoaquinite_ce", "joaquinite_ce", "korobitsynite", "lovozerite", "labyrinthite", "dualite",
        "grossmanite", "astrophyllite", "umbite", "senkevichite", "jonesite", "neptunite", "qeltite", "rippite", "kosnarite", "zircon", "gittinsite", "burpalite", "bazirite",
        "oneillite", "johnsenite_ce", "aqualite", "lemoynite", "armstrongite", "hafnon"
    ]

    titZirOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:${ore}_dust`)
        event.add("gtceu:oreproc/titanium_zirconium", `gtceu:${ore}_dust`)
    })

    // Niobium/Tantalum line

    // Molybdenum/Rhenium line
    var MoReOres = [
        "dzhezkazganite", "tarkianite", "rheniite", "nickolayite", "monipite", "hemusite", "ferrodimolybdenite", "castaingite", "molybdenite", "parkinsonite",
        "mosesite", "majindeite", "iseite", "raydemarkite", "mourite", "molybdomenite", "rhabdoborite_mo", "novikovite", "chiluite", "downsite", "powellite",
        "wulfenite", "huenite", "tancaite_ce", "betpakdalite_nana", "hereroite", "sarrochite", "melkovite"
    ]

    MoReOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:purified_${ore}_ore`)
        event.add("gtceu:oreproc/molybdenum_rhenium", `gtceu:purified_${ore}_ore`)
    })

    // Uranium/Thorium line

});