// priority: 20
ServerEvents.tags("item", event => {
    /** WASHING */
    var sulfAcidWash = [
        "churchite_y", "chinleite_ce", "tveitite_y", "bazzite", "nacareniobsite_nd", "monazite_nd", "hezuolinite", "retzian_ce", "remondite_ce", "xenotime_gd", "mendeleevite_ce",
        "levinsonite_y", "agardite_dy", "retzian_la", "gadolinite_nd", "zircon", "voglite", "gagarinite_ce", "agardite_nd", "agardite_y", "aiolosite", "uranopolycrase",
        "belovite_ce", "olgite", "xenotime_yb", "monazite_gd", "kolbeckite", "thulite", "chiluite", "deveroite_ce", "juonniite", "brucite", "chinleite_y", "nacareniobsite_ce",
        "heamanite_ce", "schiavinatoite", "agardite_ce", "thorianite", "chinleite_nd", "seeligerite", "alwilkinsite_y", "mendeleevite_nd", "tancaite_ce", "fergusonite_ce",
        "gadolinite_ce", "agardite_la", "euxinite_y", "retzian_nd", "monazite_ce", "fergusonite_y", "brannerite", "gagarinite_y", "churchite_nd", "monazite_sm", "churchite_dy",
        "clinosulphur", "xenotime_y", "neptunite", "armstrongite", "enalite", "fergusonite_nd", "moydite_y", "thorutite", "gadolinite_y", "remondite_la"
    ]
    sulfAcidWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/sulfuric_acid", `gtceu:crushed_${ore}_ore`)
    })

    var persulfateWash = [
        "algodonite", "briartite", "foordite", "ebnerite", "aluminium", "bakakinite", "tetrahedrite_ni", "hexahydrite", "petewilliamsite", "cobalt", "tetrahedrite_cd",
        "sohngeite", "iron", "tetrahedrite_mn", "gallite", "tetrahedrite", "zincochromite", "phosphophyllite", "ilmenite", "proxidecagonite", "tazieffite", "cobaltpentlandite",
        "yarrowite", "bixbyite_mn", "stilleite", "muscovite", "zincsilite", "cesiodymite", "glaucodot", "nolanite", "lehmannite", "cuprobismutite", "sakuraiite", "berlinite",
        "larosite", "cerite_ceca", "ajoite", "cylindrite", "natanite", "kinoite", "domeykite", "annite", "pentlandite", "stibnite", "oregonite", "troilite", "chiastolite",
        "omariniite", "bauxite", "ishiharaite", "utahite", "bosiite", "goldmanite", "phosphosiderite", "scottyite", "padparadscha", "takovite", "hochleitnerite",
        "jonlarsenite", "matsubaraite", "mixite", "tetrahedrite_fe", "umangite", "cupalite", "hopeite", "malachite", "chamosite", "diadochite", "aurorite", "decagonite",
        "tin", "magneliite", "sphalerite", "xanthiosite", "limonite", "stannite", "hoslite", "dritsite", "goldfieldite", "fluellite", "grimmite", "trolleite", "icosahedrite",
        "cuprite", "vauxite", "cobaltite", "corundum", "yvonite", "paragonite", "tetrahedrite_hg", "cuprostibite"
    ]
    persulfateWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/sodium_persulfate", `gtceu:crushed_${ore}_ore`)
    })

    var chloricAcidWash = [
        "betpakdalite_nana", "stangersite", "castaingite", "datolite", "tantalcarbide", "dzhezkazganite", "novikovite", "gedrite", "breyite", "dulanggouite", "tuliokite",
        "bussenite", "kolicite", "bicapite", "althupite", "itsiite", "uranocircite", "garmite", "mozgovaite", "johnsenite_ce", "hibschite", "indite", "maxixe", "manganvesuvianite",
        "antigorite", "schizolite", "tarkianite", "niobocarbide", "alexandrite", "triplite", "magnesiotaaffeite_2n2s", "zavaritskite", "dravite", "cymophane", "bismite", "oyonite",
        "grossite", "pezzottaite_cs", "rhodochrosite", "lizardite", "dolomite", "coconinoite", "artinite", "perite", "nephrite", "chrysoberyl", "spinel", "ikaite", "polyphite",
        "usovite", "senkevichite", "veenite", "hawleyite", "bismuthinite", "magnesiotaaffeite_6n3s", "rathite", "warkite", "vayrynenite", "uranosilite", "russellite", "tiptopite",
        "epistolite", "jadeite", "joseite", "carnallite", "riebeckite", "isokite", "nickolayite", "gortdrumite", "siderite", "chukhrovite_y", "bearsite", "wagnerite", "adrianite",
        "putnisite", "rheniite", "eifelite", "sanidine"
    ]
    chloricAcidWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/hydrochloric_acid", `gtceu:crushed_${ore}_ore`)
    })

    var mercuryWash = [
        "babkinite", "tungstate", "bogdanovite", "fischesserite", "colusite", "xanthoconite", "bouazzerite", "acanthite", "interliveingite", "vanadinite", "auricupride", "alburnite",
        "stephanite", "bieberite", "atokite", "cervelleite", "stalderite", "mohite", "copper", "kegelite", "minium", "cooperite", "nickel", "tetraferroplatinum", "cadsulfohite",
        "spryite", "eta_bronze", "crocoite", "burgessite", "platinum", "carlinite", "skaergaardite", "laforetite", "magnetite", "lautite", "allargentum", "alamosite", "glucine",
        "silver", "chalcopyrite", "manganite", "girdite", "bornite", "hexamolybdenum", "pyrargyrite", "nekrasovite", "niggliite", "xuwenyuanite", "maldonite", "polybasite",
        "anyuiite", "aguilarite", "galena", "gold", "cabriite", "yarlongite"
    ]
    mercuryWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/mercury", `gtceu:crushed_${ore}_ore`)
    })

    var nitricWash = [
        "yixunite", "sopcheite", "cuprorhodsite", "fleetite", "genkinite", "hexaferrum", "osarsite", "rutheniridosmine", "mayingite", "selenolaurite", "rhodplumsite", "cuproiridsite",
        "ruthenarsenite", "ruarsite", "ferhodsite", "mertieite", "testibiopalladite", "polarite", "chengdeite", "gaotaiite", "xingzhongite", "jedwabite", "merenskyite", "lepersonnite_nd",
        "erlichmanite", "driekopite", "kuvaevite", "laurite", "lepersonnite_gd"
    ]
    nitricWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/nitric_acid", `gtceu:crushed_${ore}_ore`)
    })

    var fluoricAcidWash = [
        "fullerite", "enquedire", "enquedite", "tartarosite", "enquedine"
    ]
    fluoricAcidWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/hydrofluoric_acid", `gtceu:crushed_${ore}_ore`)
    })

    var butadieneWash = [
        "bromargyrite", "chlorargyrite", "iodargyrite"
    ]
    butadieneWash.forEach(ore => {
        event.add("gtceu:washedin", `gtceu:crushed_${ore}_ore`)
        event.add("gtceu:washedin/butadiene", `gtceu:crushed_${ore}_ore`)
    })

    /** ELECTROMAGNETIC SEP */
    var separated = [
        "haitaite_la", "diaspore", "dypingite", "bastnasite", "manganite", "nickel", "umangite", "forsterite", "chrysoprase", "augite", "sinoite", "ilvaite", "ciprianite",
        "hexaferrum", "golden_sheen_sapphire", "mooihoekite", "carpathite", "pyrite", "ziminaite", "cohenite", "bilibinskite", "idaite", "aluminite", "gadolinite_nd",
        "majorite", "franconite", "ojuelaite", "cattierite", "monazite", "quintinite", "merenskyite", "antozonite", "rhodochrosite", "yagiite", "haycockite", "ullmannite",
        "millerite", "fleetite", "brucite", "granitic_mineral_sand", "florenskyite", "wangxibinite", "moabite", "chukanovite", "aragonite", "braggite", "itelmenite",
        "roquesite", "davidite_la", "tantalcarbide", "davidite_ce", "paddlewheelite", "agate", "violarite", "wakefieldite_nd", "andesine", "rosasite", "klockmannite",
        "anthoinite", "honessite", "iseite", "frohbergite", "chengdeite", "goshenite", "polydymite", "lindsleyite", "vitimite", "ningyoite", "jamborite", "hauyne",
        "wakefieldite_y", "niggliite", "anglesite", "cebaite_nd", "lollingite", "arsenopyrite", "honeaite", "gadolinite_y", "leucite", "thalfenisite", "chlorocalcite",
        "davidite_y", "xingzhongite", "magnetite", "valleriite", "nephrite", "yixunite", "proudite", "coalingite", "cubanite", "grimmite", "jasper", "cebaite_ce",
        "isomertieite", "roselite", "driekopite", "nisnite", "ilmenite", "bogdanovite", "sampleite", "thortveitite", "maslovite", "calomel", "bianchiniite", "goethite",
        "tarkianite", "nekrasovite", "rutheniridosmine", "shannonite", "tornroosite", "herkimer_diamond", "wakefieldite_ce", "aquamarine", "dreyerite", "wakefieldite_la",
        "shortite", "sakhaite", "grammatikopoulosite", "trevorite", "nickolayite", "spriggite", "skaergaardite", "yarlongite", "antitaenite", "euxenite_y", "laurentianite",
        "tazzoliite", "schaurteite", "selenolaurite", "nuwaite", "vyalsovite", "ferrodimolybdenite", "roxbyite", "cobaltpentlandite", "uakitite", "vanadium_magnetite",
        "anhydrite", "kuvaevite", "epidote", "clintonite", "ruarsite", "hematite", "anorthoclase", "lazulite", "tin", "patronite", "polarite", "sanidine", "gaotaiite",
        "clinochrysotile", "wardite", "hexamolybdenum", "charmarite", "rotemite", "kosnarite", "transjordanite", "peridot", "oregonite", "bazirite", "cuprospinel",
        "chalcomenite", "glauconite_sand", "yellow_limonite", "nullaginite", "melonite", "stannite", "hawleyite", "pentlandite", "heliodor", "mayingite", "ulvospinel",
        "actinolite", "hansblockite", "algodonite", "arcanite", "stefanweissite", "gadolinite_ce", "vimsite", "nolanite", "hiddenite", "kishonite", "muckeite", "fayalite",
        "vicanite_ce", "aventurine", "red_beryl", "bixbyite_mn", "xenophyllite", "umbite", "naquadah", "badalovite", "niobocarbide", "cattiite", "juanite", "ceylonite",
        "chromite", "stichtite", "calaverite", "basaltic_mineral_sand", "berzeliite", "topazolite", "vulcanite"
    ]
    separated.forEach(ore => {
        event.add("gtceu:seperatable", `gtceu:pure_${ore}_dust`)
        event.add("gtceu:seperatable", `gtceu:purified_${ore}_ore`)
    })

    /** CUSTOM OREPROC */
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

    // Nq Line
    var NaqOres = [
        "enquedite", "enquedine", "enquedire", "kaemanite_rb", "kaemanite_cs", "kaemanite_ke", "queryl", "quarate", "xenocage"
    ]

    NaqOres.forEach(ore => {
        event.add("gtceu:oreproc", `gtceu:purified_${ore}_ore`)
        event.add("gtceu:oreproc/naqline", `gtceu:purified_${ore}_ore`)
        event.add("gtceu:oreproc", `gtceu:${ore}_dust`)
        event.add("gtceu:oreproc/naqline", `gtceu:${ore}_dust`)
    })

});