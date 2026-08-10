// priority: 100
GTCEuStartupEvents.registry('gtceu:material', event => {
    // Before ore creation, quickly setup some common shorthand materials (like GT's built-in phosphate and silicon dioxide dusts)
    event.create("sulfate").dust().iconSet(GTMaterialIconSet.DULL).color(0xB9AB52).secondaryColor(0x6A3E08).formula("SO4").components("1x sulfur", "4x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
    event.create("arsenate").dust().iconSet(GTMaterialIconSet.DULL).color(0xB086BF).secondaryColor(0x6A083B).formula("AsO4").components("1x arsenic", "4x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
    event.create("vanadate").dust().iconSet(GTMaterialIconSet.SHINY).color(0x385B52).secondaryColor(0x1F2232).formula("VO4").components("1x vanadium", "4x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("ammonium").fluid().iconSet(GTMaterialIconSet.DULL).color(0xA46F66).secondaryColor(0x262B4C).formula("NH4").components("1x nitrogen", "4x hydrogen").flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("selenite").dust().iconSet(GTMaterialIconSet.DULL).color(0xA7D134).secondaryColor(0x516B48).formula("SeO3").components("1x selenium", "3x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
    event.create("tellurite").dust().iconSet(GTMaterialIconSet.METALLIC).color(0xAA6696).secondaryColor(0x592C56).formula("TeO3").components("1x tellurium", "3x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
    event.create("borate").dust().iconSet(GTMaterialIconSet.DULL).color(0x878265).secondaryColor(0x385346).formula("BO3").components("1x boron", "3x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("orthosilicate").dust().iconSet(GTMaterialIconSet.DULL).color(0xAEADA4).secondaryColor(0x09146E).formula("SiO4").components("1x silicon", "4x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("pyrosilicate").dust().iconSet(GTMaterialIconSet.DULL).color(0xAEADA4).secondaryColor(0x70350A).formula("Si2O7").components("2x silicon", "7x oxygen").flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
})