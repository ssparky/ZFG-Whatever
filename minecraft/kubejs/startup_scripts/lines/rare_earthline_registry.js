// priority: -30
// Registers materials needed in the REE processing line (HEAVILY TODO)

// REF: .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
const $FluidAttributes = Java.loadClass("com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes")

GTCEuStartupEvents.registry('gtceu:material', event => {
    // MAIN LINE (up to light/medium/heavy filtrates)
    event.create("purified_ree_sands").dust().iconSet(GTMaterialIconSet.SAND).color(0xE6CA9D).secondaryColor(0x91654F).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("heavy_mineral_tailings").dust().iconSet(GTMaterialIconSet.SHINY).color(0x8B3737).secondaryColor(0x520909).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("8x rutile", "2x ilmenite", "6x zircon", "1x hafnon")
    event.create("concentrated_ree_sands").dust().iconSet(GTMaterialIconSet.SAND).color(0xECDBBE).secondaryColor(0xBA9164).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ree_sulfate_sludge").fluid().iconSet(GTMaterialIconSet.DULL).color(0xEBA337).secondaryColor(0x8A560C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("silicon_tetrafluoride").dust().iconSet(GTMaterialIconSet.DULL).color(0xF45F5F).secondaryColor(0x703A13).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x silicon", "4x fluorine") // TODO: Hexafluorosilicic acid(?), include acid flag if done
    event.create("thorium_phosphate").dust().iconSet(GTMaterialIconSet.FINE).color(0x3B4B30).secondaryColor(0x192C20).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("1x thorium_232", "3x phosphate")
    event.create("ree_hydroxide_residue").dust().iconSet(GTMaterialIconSet.DULL).color(0x799483).secondaryColor(0x48675D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("thorium_pyrophosphate").dust().iconSet(GTMaterialIconSet.SHINY).color(0x709B5E).secondaryColor(0x0D5017).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x thorium_232", "2x phosphorus", "7x oxygen")
    event.create("radium_phosphate").dust().iconSet(GTMaterialIconSet.FINE).color(0x8C6F94).secondaryColor(0x462056).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("1x radium", "3x phosphate")
    event.create("ree_hydroxide_solution").fluid().iconSet(GTMaterialIconSet.DULL).color(0xAABBB7).secondaryColor(0x789797).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("aluminium_sulfate").dust().iconSet(GTMaterialIconSet.DULL).color(0xD1D1D1).secondaryColor(0x61817C).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x aluminium", "3x sulfate")
    event.create("aluminium_chloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xF2E35C).secondaryColor(0x887F2C).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x aluminium", "3x chlorine")
    event.create("iron_iii_sulfate").dust().iconSet(GTMaterialIconSet.SAND).color(0xFFC0DA).secondaryColor(0x784259).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x iron", "3x sulfate", "1x water")
    event.create("thorium_tetrachloride").dust().iconSet(GTMaterialIconSet.SAND).color(0xA4B558).secondaryColor(0x585D1F).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x thorium_232", "4x chlorine", "1x water")
    event.create("ree_hydroxide_concentrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0xC6E4B8).secondaryColor(0x64946D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("uranium_filtrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0x95DD7B).secondaryColor(0x327B3F).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ammonium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xFFFFFF).secondaryColor(0x81AF78).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x ammonium", "2x carbon", "4x oxygen") 
    event.create("ree_oxalate_mix").dust().iconSet(GTMaterialIconSet.DULL).color(0xD8D8D8).secondaryColor(0x929560).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ree_oxide_mix").dust().iconSet(GTMaterialIconSet.FINE).color(0xDAB98E).secondaryColor(0x6F6941).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("tantalum_pentoxide").dust().iconSet(GTMaterialIconSet.FINE).color(0x5F4FA8).secondaryColor(0x272041).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x tantalum", "5x oxygen") // Temp decomp until Nb/Ta line setup
    event.create("yttria").dust().iconSet(GTMaterialIconSet.FINE).color(0xF1FBCB).secondaryColor(0x96A582).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x yttrium", "3x oxygen")
    event.create("scandia").dust().iconSet(GTMaterialIconSet.FINE).color(0xC4FFC2).secondaryColor(0x3F5D43).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x scandium", "3x oxygen")
    event.create("ree_nitrate_solution").fluid().iconSet(GTMaterialIconSet.DULL).color(0xE5E977).secondaryColor(0x6A7D56).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("cerium_trioxide").dust().iconSet(GTMaterialIconSet.FINE).color(0xFDD225).secondaryColor(0xAF9B17).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x cerium", "3x oxygen")
    event.create("tributyl_phosphate").fluid().iconSet(GTMaterialIconSet.DULL).color(0xDABB5D).secondaryColor(0x782222).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("12x carbon", "27x hydrogen", "4x oxygen", "1x phosphorus") // TODO: Line
    event.create("nitric_ree_tbp_mix").fluid().iconSet(GTMaterialIconSet.DULL).color(0xDBB16D).secondaryColor(0x693737).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("dilute_nitric_acid").liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID)).iconSet(GTMaterialIconSet.DULL).color(0xA3A044).secondaryColor(0x574D23).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x nitric_acid", "1x water")// TODO: Distill. decomp
    event.create("nitric_tbp_residue").fluid().iconSet(GTMaterialIconSet.DULL).color(0x9C8143).secondaryColor(0x683232).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("2x tributyl_phosphate", "1x dilute_nitric_acid")
    event.create("light_ree_nitrate_filtrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0xD0F380).secondaryColor(0x2C3B28).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("middle_ree_nitrate_filtrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0x6F9958).secondaryColor(0x212C21).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("heavy_ree_nitrate_filtrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0x3E4C35).secondaryColor(0x171D18).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Light REE Lines
    // La
    event.create("lanthanum_rich_aqueous_phase").fluid().iconSet(GTMaterialIconSet.DULL).color(0xB3875C).secondaryColor(0x53442B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("light_ree_residue").fluid().iconSet(GTMaterialIconSet.DULL).color(0x7A7CCD).secondaryColor(0x2F3056).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("lanthanum_nitrate_solution").fluid().iconSet(GTMaterialIconSet.DULL).color(0xDDB64A).secondaryColor(0x8D8438).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("lanthanum_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xC5C5C5).secondaryColor(0x76513D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x lanthanum", "6x carbon", "12x oxygen")
    event.create("lanthana").dust().iconSet(GTMaterialIconSet.DULL).color(0xF7CCA7).secondaryColor(0xCCA48C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x lanthanum", "3x oxygen")
    event.create("lanthanum_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xFAEBDF).secondaryColor(0x618C85).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x lanthanum", "3x fluorine")
    // Ce
    event.create("ceria").dust().iconSet(GTMaterialIconSet.DULL).color(0xFEFCA3).secondaryColor(0xBBC293).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x cerium", "2x oxygen")
    // Pr
    event.create("praseodymium_nitrate_tbp_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0x9CEEAE).secondaryColor(0x689B7E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("neodymium_rich_sludge").fluid().iconSet(GTMaterialIconSet.DULL).color(0x706382).secondaryColor(0x382A3D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("praseodymium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xA3FF3A).secondaryColor(0x6AD754).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x praseodymium", "3x nitrogen", "9x oxygen", "2x water")
    event.create("praseodymium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xBFFBB0).secondaryColor(0x667F69).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x praseodymium", "6x carbon", "12x oxygen")
    event.create("praseodymia").dust().iconSet(GTMaterialIconSet.DULL).color(0x8DF4D1).secondaryColor(0x56A295).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x praseodymium", "3x oxygen")
    event.create("praseodymium_oxide").dust().iconSet(GTMaterialIconSet.DULL).color(0x5A3619).secondaryColor(0x361B08).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("6x praseodymium", "11x oxygen")
    event.create("praseodymium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0x67CA74).secondaryColor(0x2A5127).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x praseodymium", "3x fluorine")
    // Nd
    event.create("neodymium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xF175EB).secondaryColor(0x7C507C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x neodymium", "3x nitrogen", "9x oxygen", "6x water")
    event.create("samarium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xE6D781).secondaryColor(0x7D794A).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x samarium", "3x nitrogen", "9x oxygen", "6x water")
    event.create("neodymium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xE04171).secondaryColor(0x7E2C47).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x neodymium", "6x carbon", "12x oxygen")
    event.create("samarium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xEEE84D).secondaryColor(0x826E1A).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x samarium", "6x carbon", "12x oxygen")
    event.create("neodymia").dust().iconSet(GTMaterialIconSet.DULL).color(0x87A1E9).secondaryColor(0x5F88A5).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x neodymium", "3x oxygen")
    event.create("samaria").dust().iconSet(GTMaterialIconSet.DULL).color(0xF1EBA6).secondaryColor(0xA9A994).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x samarium", "3x oxygen")
    event.create("neodymium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xCD21EF).secondaryColor(0xA82CAD).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x neodymium", "3x fluorine")
    event.create("lithium_fluoride").dust().iconSet(GTMaterialIconSet.GLASS).color(0xBABABA).secondaryColor(0x867B53).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x lithium", "1x fluorine")

    // Pm Line
    // TODO

    // Middle REE Lines
    // Sm
    event.create("ammonium_sulfate").dust().iconSet(GTMaterialIconSet.ROUGH).color(0xD3D3D3).secondaryColor(0xC8C98B).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("2x ammonium", "1x sulfate")
    event.create("samarium_ammonium_sulfate_hydrate").dust().iconSet(GTMaterialIconSet.BRIGHT).color(0xAA9E58).secondaryColor(0x5D5622).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("middle_ree_residue").fluid().iconSet(GTMaterialIconSet.DULL).color(0x668FA7).secondaryColor(0x49668E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ammonium_nitrate").dust().iconSet(GTMaterialIconSet.ROUGH).color(0xB9D4E6).secondaryColor(0x9AB4C9).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x ammonium", "1x nitrogen", "3x oxygen")
    event.create("samarium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xFEF26B).secondaryColor(0xBFAE4B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x samarium", "3x fluorine")
    event.create("reduced_samarium_mix").fluid().iconSet(GTMaterialIconSet.SHINY).color(0xDFEE87).secondaryColor(0xBC7641).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("samarium_sludge").fluid().iconSet(GTMaterialIconSet.DULL).color(0xEED887).secondaryColor(0xA1895C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Eu
    event.create("zinc_amalgam").fluid().iconSet(GTMaterialIconSet.METALLIC).color(0x929292).secondaryColor(0x3E3744).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("1x zinc", "1x mercury")
    //event.create("sodium_carbonate").dust().iconSet(GTMaterialIconSet.FINE).color(0xE2E2E2).secondaryColor(0xD4CECE).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x sodium", "1x carbon", "3x oxygen")
    event.create("europium_carbonate").dust().iconSet(GTMaterialIconSet.ROUGH).color(0xCFFFFF).secondaryColor(0x9BBEB9).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x europium", "3x carbon", "9x oxygen")
    event.create("zinc_carbonate").dust().iconSet(GTMaterialIconSet.DULL).color(0xDDDDDD).secondaryColor(0xC1B7B7).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x zinc", "1x carbon", "3x oxygen")
    event.create("mercuric_gadolinium_nitrate_sludge").fluid().iconSet(GTMaterialIconSet.SHINY).color(0xA5A0BF).secondaryColor(0x403C44).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("europia").dust().iconSet(GTMaterialIconSet.DULL).color(0xF4C5F6).secondaryColor(0xB09CB2).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x europium", "3x oxygen")
    event.create("europium_trichloride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xF3F38B).secondaryColor(0x77755D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x europium", "3x chlorine")
    event.create("molten_europium_salt").fluid().iconSet(GTMaterialIconSet.SHINY).color(0xABBA9A).secondaryColor(0x62684C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Gd
    event.create("gadolinium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xD5DDAA).secondaryColor(0x87906B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x gadolinium", "3x nitrogen", "9x oxygen")
    event.create("terbium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0x8DEC68).secondaryColor(0x489143).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x terbium", "3x nitrogen", "9x oxygen")
    event.create("sodium_amalgam").fluid().iconSet(GTMaterialIconSet.SHINY).color(0xD0B4D4).secondaryColor(0x85768E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x sodium", "1x mercury")
    event.create("gadolinium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xD7CADF).secondaryColor(0x796D7E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x gadolinium", "6x carbon", "12x oxygen")
    event.create("terbium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xB1E8A9).secondaryColor(0x93B485).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x terbium", "6x carbon", "12x oxygen")
    event.create("gadolinia").dust().iconSet(GTMaterialIconSet.DULL).color(0xFFE3CE).secondaryColor(0xCFB8AE).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x gadolinium", "3x oxygen")
    event.create("terbia").dust().iconSet(GTMaterialIconSet.DULL).color(0xD6EEC2).secondaryColor(0x6A7861).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x terbium", "3x oxygen")
    event.create("gadolinium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xFFE5B1).secondaryColor(0x536A6B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x gadolinium", "3x fluorine")

    // Heavy REE Lines
    // Tb
    event.create("sodium_polystyrene_sulfonate").polymer().fluid().iconSet(GTMaterialIconSet.DULL).color(0xEC9A36).secondaryColor(0x882909).flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL).components("8x carbon", "7x hydrogen", "1x sulfur", "3x oxygen", "1x sodium")
    event.create("triammonium_citrate").dust().iconSet(GTMaterialIconSet.SHINY).color(0xFFE5FF).secondaryColor(0xB5C6D2).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("6x carbon", "17x hydrogen", "3x nitrogen", "7x oxygen")
    event.create("terbium_citrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xDAFF36).secondaryColor(0x6ECC64).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x terbium", "6x carbon", "5x hydrogen", "7x oxygen")
    // Tb-poor ion exchange resin
    event.create("citric_acid").dust().iconSet(GTMaterialIconSet.FINE).color(0xF5E6BA).secondaryColor(0xECD347).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("6x carbon", "8x hydrogen", "7x oxygen")
    event.create("terbium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0x64EE95).secondaryColor(0x37906C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x terbium", "3x fluorine")
    event.create("aluminium_fluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xF094A7).secondaryColor(0x7C9FA5).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x aluminium", "3x fluorine")
    // Dy
    event.create("ethylenediaminetetraacetic_acid").dust().iconSet(GTMaterialIconSet.FINE).color(0xCBE8FF).secondaryColor(0x347281).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("10x carbon", "16x hydrogen", "2x nitrogen", "8x oxygen")
    event.create("dysprosium_edta_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0x6C80A1).secondaryColor(0x352F58).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Dy-poor ion exchange resin
    event.create("dysprosium_trichloride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xF1F890).secondaryColor(0x5E624C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x dysprosium", "3x chlorine")
    event.create("dysprosia").dust().iconSet(GTMaterialIconSet.DULL).color(0xCADEA1).secondaryColor(0x64714A).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x dysprosium", "3x oxygen")
    // Ho
    event.create("holmium_edta_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0x89C0A8).secondaryColor(0x356548).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Ho-poor ion exchange resin
    event.create("oxalic_acid").dust().iconSet(GTMaterialIconSet.FINE).color(0xC0C0C0).secondaryColor(0x939393).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x hydrogen", "2x carbon", "4x oxygen")
    event.create("oxalic_acid_solution").liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID)).iconSet(GTMaterialIconSet.DULL).color(0xCCCCCC).secondaryColor(0x848484).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("1x oxalic_acid", "1x water")
    event.create("holmium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xF8FB64).secondaryColor(0x85844D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x holmium", "6x carbon", "12x oxygen")
    event.create("holmia").dust().iconSet(GTMaterialIconSet.DULL).color(0xE6D287).secondaryColor(0xCA6E94).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x holmium", "3x oxygen")
    event.create("holmium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xC3B56F).secondaryColor(0x67603E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x holmium", "3x fluorine")
    // Er
    event.create("erbium_dtpa_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0xBC62B0).secondaryColor(0x5D1D60).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Er-poor ion exchange resin
    event.create("erbium_nitrate").dust().iconSet(GTMaterialIconSet.FINE).color(0xE098A4).secondaryColor(0x6B4259).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x erbium", "3x nitrogen", "9x oxygen")
    event.create("acidic_dtpa_solution").liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID)).iconSet(GTMaterialIconSet.DULL).color(0x8460A9).secondaryColor(0x53135F).flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("1x diethylenetriaminepentaacetic_acid", "1x dilute_nitric_acid")
    event.create("erbium_magnesium_nitrate").dust().iconSet(GTMaterialIconSet.FINE).color(0xDEBFCB).secondaryColor(0x5C505C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x erbium", "3x magnesium", "12x nitrogen", "36x oxygen")
    event.create("erbium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0xD56FBD).secondaryColor(0x8C3786).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x erbium", "3x fluorine")
    event.create("magnesium_nitrate").dust().iconSet(GTMaterialIconSet.FINE).color(0x877B89).secondaryColor(0x3D383D).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x magnesium", "2x nitrogen", "6x oxygen")
    event.create("erbia").dust().iconSet(GTMaterialIconSet.DULL).color(0xF4B3E2).secondaryColor(0xA570AC).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x erbium", "3x oxygen")
    // Tm
    event.create("fluorosulfuric_acid").liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID)).iconSet(GTMaterialIconSet.DULL).color(0xA9DE7B).secondaryColor(0x47612A).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x hydrogen", "1x sulfur", "3x oxygen", "1x fluorine")
    event.create("thulium_dtpa_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0x36296A).secondaryColor(0x17093C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Tm-poor ion exchange resin
    event.create("thulium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0x35323F).secondaryColor(0x140F1E).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x thulium", "6x carbon", "12x oxygen")
    event.create("thulia").dust().iconSet(GTMaterialIconSet.DULL).color(0x92B897).secondaryColor(0x3B4B3D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x thulium", "3x oxygen")
    event.create("thulium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0x467777).secondaryColor(0x23274F).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x thulium", "3x fluorine")
    // Yb
    event.create("ytterbium_amalgam").fluid().iconSet(GTMaterialIconSet.DULL).color(0x757365).secondaryColor(0x313220).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x ytterbium", "1x mercury")
    // Yb-poor ion exchange resin
    event.create("dirty_ytterbium_oxalate_solution").fluid().iconSet(GTMaterialIconSet.DULL).color(0x3D322B).secondaryColor(0x443F3F).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ytterbium_oxalate").dust().iconSet(GTMaterialIconSet.FINE).color(0xB4A590).secondaryColor(0x665650).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x ytterbium", "6x carbon", "12x oxygen")
    event.create("ytterbia").dust().iconSet(GTMaterialIconSet.DULL).color(0xDFD4C1).secondaryColor(0x81786C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x ytterbium", "3x oxygen")
    // Lu
    event.create("2_hydroxyisobutyric_acid").dust().iconSet(GTMaterialIconSet.DULL).color(0xC49494).secondaryColor(0x83645C).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("lutetium_hiba_complex").dust().iconSet(GTMaterialIconSet.SAND).color(0xB090C9).secondaryColor(0x562E3B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    // Depleted ion exchange resin (+HCl, small sulfonated polystyrene -> new resin)
    event.create("yttrium_nitrate").dust().iconSet(GTMaterialIconSet.DULL).color(0xB0B684).secondaryColor(0x727F59).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x yttrium", "3x nitrogen", "9x oxygen")
    event.create("lutetium_trifluoride").dust().iconSet(GTMaterialIconSet.SHINY).color(0x73C0C4).secondaryColor(0x41718B).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x lutetium", "3x fluorine")
    event.create("lutecia").dust().iconSet(GTMaterialIconSet.DULL).color(0xB3CAE7).secondaryColor(0x6C849A).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x lutetium", "3x oxygen")

    // Uranium filtrate mini-line
    // TODO

    // Solvents and such lines
    // TBP: [Phosphoryl Chloride] + [Butanol]
    // Phosphoryl Chloride: [Phosphorus Trichloride] + Oxygen
    // Phosphorus Trichloride: Phosphorus + Chlorine
    // Butanol: Butyraldehyde + Hydrogen
    event.create("butanol").fluid().iconSet(GTMaterialIconSet.DULL).color(0x34251C).secondaryColor(0x443F3F).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).formula("C4H9OH").components("4x carbon", "10x hydrogen", "1x oxygen")
    event.create("phosphorus_trichloride").fluid().iconSet(GTMaterialIconSet.DULL).color(0xCFB068).secondaryColor(0x5E2222).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x phosphorus", "3x chlorine")
    event.create("phosphoryl_chloride").fluid().iconSet(GTMaterialIconSet.FINE).color(0xC6E75C).secondaryColor(0x84512D).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x phosphorus", "1x oxygen", "3x chlorine")

    // Sodium Polystyrene Sulfonate: [Polystyrene] + Sulfur Trioxide + Sodium
    // Polystyrene: Styrene + Oxygen (polymerization) + [Ferrocene Cat.]
    // Ferrocene: [Cyclopentadiene] + Iron
    event.create("cyclopentadiene").liquid().iconSet(GTMaterialIconSet.DULL).color(0xD7F2EC).secondaryColor(0x97BCB6).components("5x carbon", "6x hydrogen")
    event.create("ferrocene").dust().iconSet(GTMaterialIconSet.FINE).color(0xFCBF3A).secondaryColor(0x922813).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x iron", "10x carbon", "10x hydrogen")
    event.create("polystyrene").polymer().fluid().iconSet(GTMaterialIconSet.DULL).color(0xE4E2E1).secondaryColor(0xB6B1B1).flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL).components("1x styrene")

    // Citric Acid: [Calcium Citrate] + Sulfuric Acid
    // Calcium Citrate: [Bacterial Citric Acid Filtrate] + Calcium Hydroxide
    // Bacterial Citric Acid Filtrate: Bacteria + Sugar (fermenter)
    event.create("bacterial_citric_acid_filtrate").fluid().iconSet(GTMaterialIconSet.DULL).color(0x55671C).secondaryColor(0x364724).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("calcium_citrate").fluid().iconSet(GTMaterialIconSet.FINE).color(0xEDC081).secondaryColor(0xC49F89).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).formula("Ca3(C6H5O7)2").components("3x calcium", "12x carbon", "10x hydrogen", "14x oxygen")

    // EDTA: [Tetrasodium EDTA] + Hydrochloric Acid
    // Tetrasodium EDTA: [Ethylenediamene] + Formaldehyde + [Sodium Cyanide]
    // Ethylenediamene + Diethyltriamene + Triethylenetetramine: [Ethylamine Mix] (distillation)
    // Ethylamine mix: 1,2-dichloroethane + ammonia + water(cat) @ fairly high temp, need to modify builtin recipe (dichloroethane + ammonia = diethyl(ene)triamine)
    // DTPA: [Diethylenetriamine] + [Sodium Cyanide] + Formaldehyde OR Diethylenetriamine + Glyconitrile
    // Sodium Cyanide: Sodium Hydroxide + Formamide
    event.create("tetrasodium_edta").dust().iconSet(GTMaterialIconSet.DULL).color(0xBACCBB).secondaryColor(0x997889).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("10x carbon", "12x hydrogen", "2x nitrogen", "4x sodium", "8x oxygen")
    event.create("ethylamine_mix").fluid().iconSet(GTMaterialIconSet.DULL).color(0x648C94).secondaryColor(0x5C5252).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("ethylenediamene").fluid().iconSet(GTMaterialIconSet.DULL).color(0x65B17E).secondaryColor(0x667349).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).formula("C2H4(NH2)2").components("2x carbon", "8x hydrogen", "2x nitrogen")
    event.create("triethylenetetramine").fluid().iconSet(GTMaterialIconSet.DULL).color(0x507FA1).secondaryColor(0x443141).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("6x carbon", "18x hydrogen", "4x nitrogen")
    event.create("sodium_cyanide").dust().iconSet(GTMaterialIconSet.ROUGH).color(0xB6B289).secondaryColor(0x837F6E).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).formula("NaCN").components("1x sodium", "1x carbon", "1x nitrogen")

    // Oxalic Acid
    event.create("oxalic_acid_dihydrate").dust().iconSet(GTMaterialIconSet.FINE).color(0xC7D8DE).secondaryColor(0x939DA4).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).formula("H2C2O4 · 2H2O").components("1x oxalic_acid", "2x water")
    event.create("vanadium_pentoxide").dust().iconSet(GTMaterialIconSet.ROUGH).color(0xF9D44C).secondaryColor(0xC09F0F).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).formula("V2O5").components("2x vanadium", "5x oxygen")
    
    // HIBA: [Acetone Cyanohydrin] + Sulfuric Acid(cat) + Water
    // Acetone Cyanohydrin: [Sodium Cyanide] + Acetone + Acid(any, needs to donate H+)
    // NaCN + (CH3)2CO + HCl -> C4H7NO + NaCl
    event.create("acetone_cyanohydrin").fluid().iconSet(GTMaterialIconSet.FINE).color(0x5199E1).secondaryColor(0x336572).flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("4x carbon", "7x hydrogen", "1x nitrogen", "1x oxygen")

    // Zinc Amalgam
    event.create("mercury_dichloride").dust().iconSet(GTMaterialIconSet.DULL).color(0xFFEEDD).secondaryColor(0xAA9988).flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x mercury", "2x chlorine")
})