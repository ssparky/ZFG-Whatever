// priority: -30

Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    // Alternate Superconductors
    // LV - Vanadium + Electrotine (both materials are obtainable late-lv, but have little use. This gives them some use, as this SC wont require an EBF unlike MnP)
    event.create("vanadium_electrotine")
        .ingot().fluid()
        .color(0x1C4164).secondaryColor(0x1D2B4B)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components("2x vanadium", "1x electrotine")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .cableProperties(GTValues.V[GTValues.LV], 2, 0, true) // Format: voltage, amperage, loss, superconductor

    // MV - C3Li 
    event.create("lithium_intercalated_graphite")
        .ingot().fluid()
        .color(0x8DADA1).secondaryColor(0x626864)
        .iconSet(GTMaterialIconSet.DULL)
        .components("1x lithium", "3x graphite")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.MV], 1, 0, true)

    // HV - Nb3Sn (Provides early use for niobium, which can be reasonably obtained by this point)
    event.create("niobium_tin")
        .ingot().fluid()
        .color(0xBA9CA1).secondaryColor(0x452C30)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components("3x niobium", "1x tin")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .cableProperties(GTValues.V[GTValues.HV], 4, 0, true)
        .blastTemp(1500, "low", GTValues.VHA[GTValues.EV], 400)

    // EV - ZrN
    event.create("zirconium_nitride")
        .ingot().fluid()
        .color(0xBA9CA1).secondaryColor(0x452C30)
        .iconSet(GTMaterialIconSet.DULL)
        .components("1x zirconium", "1x nitrogen")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.EV], 4, 0, true)
        .blastTemp(2200, "mid", GTValues.VHA[GTValues.IV], 600)

    // IV - GdBa2Cu3O7 (YBCO exists in GT but is for some reason not an SC? So we use this instead.)
    event.create("gadolinium_barium_cuprate")
        .ingot().fluid()
        .color(0x6B4A36).secondaryColor(0x4D2715)
        .iconSet(GTMaterialIconSet.SHINY)
        .components("1x gadolinium", "2x barium", "3x copper", "7x oxygen")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.IV], 8, 0, true)
        .blastTemp(4000, "mid", GTValues.VA[GTValues.IV], 800)

    // LuV - C6Yb (Reasonably easy SC, mainly rewards having done the whole earthline)
    event.create("ytterbium_intercalated_graphite")
        .ingot().fluid()
        .color(0xE3DB93).secondaryColor(0x85875A)
        .iconSet(GTMaterialIconSet.SHINY)
        .components("1x ytterbium", "6x graphite")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.LuV], 8, 0, true)
        .blastTemp(5500, "high", GTValues.VHA[GTValues.ZPM], 1000)

    // ZPM - Bi2Sr2Ca2Cu3O10
    event.create("bismuth_strontium_calcium_cuprate")
        .ingot().fluid()
        .color(0x5ADEBA).secondaryColor(0x3BB594)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components("2x bismuth", "2x strontium", "2x calcium", "3x copper", "10x oxygen")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.ZPM], 16, 0, true)
        .blastTemp(7000, "higher", GTValues.VHA[GTValues.UV], 1200)

    // UV - FeSe:SrTiO3
    event.create("iron_selenide_on_strontium_titanate")
        .ingot().fluid()
        .color(0xC07569).secondaryColor(0x892A13)
        .iconSet(GTMaterialIconSet.DULL)
        .components("1x iron", "1x selenium", "1x strontium", "1x titanium", "3x oxygen")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.UV], 24, 0, true)
        .blastTemp(7700, "higher", GTValues.VA[GTValues.UV], 1200)

    // UHV - TODO

    // UEV - C60Cs2Rb
    event.create("caesium_rubidium_fullerene")
        .ingot().fluid()
        .color(0xEB5B73).secondaryColor(0xB42735)
        .iconSet(GTMaterialIconSet.FINE)
        .components("2x caesium", "1x rubidium", "1x fullerite")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.UEV], 96, 0, true)

    // UIV - LaH10
    event.create("lanthanum_decahydride")
        .ingot().fluid()
        .color(0xFE8235).secondaryColor(0x435374)
        .iconSet(GTMaterialIconSet.FINE)
        .components("1x lanthanum", "10x hydrogen")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UIV], 128, 0, true)

    // UXV - TODO (maybe some ???:ReH9 or similar?)

    // OpV - TODO

    // MAX - TODO (probably some made-up superalloy with fake elements, something like "Finalite" or something)
     
    // Random progression-related materials
    event.create("scandium_yttrium_ytterbium")
        .ingot().fluid()
        .color(0x417D52).secondaryColor(0x093D1D)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components("10x scandium", "7x yttrium", "2x ytterbium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR
        )
        .blastTemp(4600, "high", GTValues.VA[GTValues.EV], 500)
        .itemPipeProperties(512, 8)
        .rotorStats(150, 240, 5.0, 2300)
        .toolStats(ToolProperty.Builder.of(14.0, 6.5, 5012, 4, [
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.SHOVEL,
            GTToolType.AXE,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SAW,
            GTToolType.HARD_HAMMER,
            GTToolType.WRENCH,
            GTToolType.FILE,
            GTToolType.CROWBAR,
            GTToolType.SCREWDRIVER,
            GTToolType.MORTAR,
            GTToolType.WIRE_CUTTER,
            GTToolType.SCYTHE,
            GTToolType.KNIFE,
            GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV,
            GTToolType.CHAINSAW_LV,
            GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV,
            GTToolType.BUZZSAW,
            GTToolType.SCREWDRIVER_LV,
            GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV, GTToolType.WIRE_CUTTER_IV
        ]).enchantability(20).build())
        .armorStats(ArmorProperty.Builder.of(33, [5,10,8,5]).toughness(3.0).knockbackResistance(0.2).build())

    // ZFG 10 mats imported
    event.create("tiberium")
        .ingot().fluid()
        .element(GTElements.get("tiberium"))
        .color(0x45DA40).secondaryColor(0x14831F).iconSet("bright")
        .blastTemp(15000, "highest", GTValues.VHA[GTValues.UIV], 600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(8388608*4, 64, 128, false);

    event.create("raw_tiberium")
        .gem()
        .color(0x27C721).secondaryColor(0x067110).iconSet("certus")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x calcium", "4x iron", "1x tiberium", "1x silicon_dioxide", "4x phosphate")
        .formula("Ca2Fe4?(SiO2)(PO4)4")

    event.create("taranium")
        .ingot().fluid()
        .element(GTElements.get("taranium"))
        .color(0xDA40DA).secondaryColor(0x831474).iconSet("bright")
        .blastTemp(10000, "higher", GTValues.VA[GTValues.UHV], 400)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL)

    event.create("promethium_technetium_tiberate") // UIV Hull
        .ingot().fluid()
        .components("4x promethium", "3x technetium", "6x tiberium")
        .color(0xBEFBAD).secondaryColor(0x0B6136).iconSet("dull")

    event.create("green_steel") // EV SC
        .ingot().fluid()
        .components("1x scandium", "1x emerald", "4x black_steel", "2x steel")
        .color(0x3B8844).secondaryColor(0x155527).iconSet("metallic")
        .blastTemp(1813, "low", GTValues.VHA[GTValues.EV], 600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(2048, 4, 0, true);

    event.create("chromatic_steel") // UXV Cable
        .ingot().fluid()
        .components("1x red_steel", "1x blue_steel", "1x green_steel")
        .color(0xD9D9D9).secondaryColor(0x1F1F1F).iconSet("metallic")
        .blastTemp(15780, "highest", GTValues.VA[GTValues.UIV], 900)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(134217728, 128, 512, false);

    event.create("hssx") // ZPM/UV/UHV electrode
        .ingot().fluid()
        .color(0x44E48C).secondaryColor(0x058263).iconSet("metallic")
        .components("3x green_steel", "6x hsse", "2x hsss", "5x praseodymium", "2x tritanium", "7x selenium")
        .rotorStats(330, 170, 9.0, 4700)
        .blastTemp(8000, "highest", GTValues.VA[GTValues.ZPM], 800)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROUND)

    event.create("vanaderbium")
        .ingot().fluid()
        .color(0x9F71C2).secondaryColor(0x271252).iconSet("metallic")
        .components("6x vanadium", "1x erbium")
        .formula("V6Er")
        .itemPipeProperties(8192, 4)
        .rotorStats(120, 225, 6.0, 2700)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 240)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROTOR)

    event.create("polypropylene")
        .fluid().polymer()
        .color(0xda5653).secondaryColor(0x772929).iconSet("dull")
        .formula("(C3H6)n")
        .itemPipeProperties(1024, 6)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("acrylonitrile")
        .fluid().color(0x8D8791)
        .formula("C3H3N")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("acrylic_acid")
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
        .color(0x7A8376)
        .formula("C3H4O2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    
    event.create("polyacrylonitrile")
        .fluid().polymer()
        .color(0xffffff).secondaryColor(0xaeaeae).iconSet("dull")
        .formula("(CH2CHCN)n")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("tiberium_seed")
        .dust()
        .color(0xD6FED6).secondaryColor(0x8FBEA7).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Lubes
    event.create("trichlorosilane")
        .fluid()
        .color(0xD1E07A)
        .iconSet("dull")
        .formula("HSiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("chloropropyltrichlorosilane")
        .fluid()
        .color(0x91C15A)
        .iconSet("dull")
        .formula("C3H6ClSiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("trifluoropropyltrichlorosilane")
        .fluid()
        .color(0x7FE3E8)
        .iconSet("dull")
        .formula("C3H5F3SiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("gtceu:silicone_lubricant")
        .fluid()
        .color(0xBBCCC6).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(C2H6OSi)(C6H11F3OSi)")

    event.create("ultra_pure_water")
        .fluid()
        .color(0xADC4DA).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x hydrogen", "1x oxygen")
        .formula("H2O")

    // Rubbers
    event.create("acetylene")
        .fluid()
        .color(0xB58AB6)
        .iconSet("dull")
        .formula("C2H2")

    event.create("vinylacetylene")
        .fluid()
        .color(0xD27A3A)
        .iconSet("dull")
        .formula("C4H4")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("chloroprene")
        .fluid()
        .color(0xCFE16C)
        .iconSet("dull")
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("potassium_persulfate")
        .dust()
        .color(0xC4E3FF).secondaryColor(0x84A1BB)
        .iconSet("dull")
        .formula("K2S2O8")
        .components("2x potassium", "2x sulfur", "8x oxygen");

    event.create("polychloroprene")
        .fluid()
        .color(0x3A7F6E)
        .iconSet("dull")
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("neoprene")
        .polymer().fluid()
        .color(0x487AF8).secondaryColor(0x1D2730).iconSet("dull") // In reference to wiki image of dry suit
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("sodium_stearate")
        .dust()
        .color(0xF5F2E8).secondaryColor(0xBFA2C7)
        .iconSet("dull")
        .formula("C18H35NaO2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("nbr_latex")
        .fluid()
        .color(0xF3E7C6)
        .iconSet("dull")
        .formula("(C4H6)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("nitrile_rubber")
        .polymer().fluid()
        .color(0xD5C3DC).secondaryColor(0x1D191E).iconSet("dull")
        .formula("(C4H6)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("anhydrous_rhodium_chloride")
        .dust()
        .color(0x8B1A1A).secondaryColor(0x5D1010)
        .iconSet("shiny")
        .formula("RhCl3")
        .components("1x rhodium", "3x chlorine");

    event.create("rhodium_chloride_hydrate")
        .dust()
        .color(0xB62424).secondaryColor(0x7F1212)
        .iconSet("shiny")
        .formula("RhCl3·3(H2O)")
        .components("1x rhodium", "3x chlorine", "3x water");

    event.create("triphenylphosphine")
        .dust()
        .color(0xD5ADEF).secondaryColor(0x9C73B8)
        .iconSet("dull")
        .formula("C18H15P")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("wilkinsons_catalyst")
        .dust()
        .color(0xD6368C).color(0xA01A62)
        .iconSet("shiny")
        .formula("RhCl(P(C6H5)3)3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("hydrogenated_nitrile_rubber")
        .polymer().fluid()
        .color(0xB5ABB9).secondaryColor(0x1B191E).iconSet("dull")
        .formula("(C4H8)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    // Advanced Solders
    // TODO: mixer, ABS | processing lines
    event.create("advanced_soldering_alloy")
        .ingot()
        .fluid()
        .color(0x74b59b)
        .iconSet("dull")
        .components("15x bismuth", "11x tin", "9x zinc", "4x germanium")

    event.create("living_solder_base")
        .dust()
        .liquid(2896)
        .color(0xafb4c7).secondaryColor(0x675f5a)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components(GTMaterials.RoseGold.multiply(5), GTMaterials.TinAlloy.multiply(12), GTMaterials.Gallium.multiply(11), GTMaterials.Molybdenum.multiply(7))

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xD20D17)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.get("living_solder_base").multiply(7), GTMaterials.Meat.multiply(3))

    event.create("universal_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0x7B34FF)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("5x green_steel", "4x rubidium", "16x tin_alloy", "12x bismuth", "8x indium", "20x neutronium", "6x germanium", "4x tellurium")

    //
    event.create("aetherium")
        .ingot().fluid()
        .element(GTElements.get("aetherium"))
        .color(0x3989cd).secondaryColor(0xcd8939).iconSet("magic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
    event.create("mana")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("mana"))
        .iconSet("mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("hyperdegenerate_matter")
        .element(GTElements.get("hyperdegenerate_matter"))
        .color(0xffffff).iconSet("hyperdegenerate_matter")
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
    event.create("infinity")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet("infinity")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FOIL)
    event.create("meta_null")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x13081a).secondaryColor(0x000000)
        .iconSet("meta_null")
        .element(GTElements.get("meta_null"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
        .fluidPipeProperties(15000, 1500, true, true, true, true)

})