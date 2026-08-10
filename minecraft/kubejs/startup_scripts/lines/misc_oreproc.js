// priority: -100
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("manganese_chloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xF8D6FB).secondaryColor(0xDFA0CF)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x manganese", "2x chlorine")

    GTMaterials.Iron2Chloride.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Iron2Chloride.setMaterialARGB(0xC5E1A5)

    event.create("cobalt_chloride").dust().iconSet(GTMaterialIconSet.FINE).color(0x669DBD).secondaryColor(0x3D6594)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x cobalt", "2x chlorine")

    event.create("lead_chloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xFCFFE2).secondaryColor(0xF9DEB6)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x lead", "2x chlorine")

    event.create("bismuth_chloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xE2D597).secondaryColor(0xC1BD80)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x bismuth", "3x chlorine")

    event.create("tungsten_trioxide").dust().iconSet(GTMaterialIconSet.ROUGH).color(0x8C8C46).secondaryColor(0x484D1C)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x tungsten", "3x oxygen")

    event.create("cerium_trichloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xEFF0E1).secondaryColor(0xC4C4A9)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x cerium", "3x chlorine") // TODO: CeCl3 to Ce in earthline processing file

    event.create("yttrium_trichloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xE6E6E6).secondaryColor(0xC4C4A9)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x yttrium", "3x chlorine")

    event.create("titanium_dioxide_mix").dust().iconSet(GTMaterialIconSet.DULL).color(0x6D3511).secondaryColor(0x472218)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING).components("7x rutile", "4x brookite", "2x anatase")

    event.create("zirconium_tetrachloride").dust().iconSet(GTMaterialIconSet.FINE).color(0xFFD9A4).secondaryColor(0xC29D7A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x zirconium", "4x chlorine")

    event.create("hafnium_tetraiodide").dust().iconSet(GTMaterialIconSet.FINE).color(0xF18368).secondaryColor(0xB54A24)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x hafnium", "4x iodine")

    event.create("zirconia").dust().iconSet(GTMaterialIconSet.DULL).color(0xFFF4A4).secondaryColor(0xC29D7A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x zirconium", "2x oxygen")

    event.create("hafnia").dust().iconSet(GTMaterialIconSet.DULL).color(0xF18368).secondaryColor(0xB54A24)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x hafnium", "2x oxygen")

    event.create("niobium_pentoxide").dust().iconSet(GTMaterialIconSet.DULL).color(0xF1D1EF).secondaryColor(0xB275A2)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("2x niobium", "5x oxygen")

    event.create("beryllium_oxide").ingot().iconSet(GTMaterialIconSet.DULL).color(0xA8DD9B).secondaryColor(0x436144)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x beryllium", "1x oxygen")

    event.create("molybdenum_trioxide").dust().iconSet(GTMaterialIconSet.DULL).color(0x9EA6C9).secondaryColor(0x64687A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x molybdenum", "3x oxygen")

    event.create("rhenium_heptoxide").dust().iconSet(GTMaterialIconSet.DULL).color(0xD6FF64).secondaryColor(0x7F863E)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x rhenium", "7x oxygen")

    event.create("rhenium_dioxide").dust().iconSet(GTMaterialIconSet.DULL).color(0x29293C).secondaryColor(0x14171E)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x rhenium", "2x oxygen")

    event.create("molybdenum_sludge").dust().iconSet(GTMaterialIconSet.SAND).color(0x1F2028).secondaryColor(0x111111)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x molybdenum", "2x sulfur", "1x rare_earth")

    event.create("molybdenum_oxide_slag").dust().iconSet(GTMaterialIconSet.FINE).color(0x313447).secondaryColor(0x18171C)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x molybdenum", "3x oxygen", "1x rare_earth")

    event.create("impure_molybdenum_trioxide").dust().iconSet(GTMaterialIconSet.FINE).color(0x3D605A).secondaryColor(0x272433)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("1x molybdenum", "3x oxygen", "1x rare_earth")

    event.create("ammonium_orthomolybdate").dust().iconSet(GTMaterialIconSet.FINE).color(0xADC3CD).secondaryColor(0x998EAF)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x ammonium", "1x molybdenum", "4x oxygen")

    event.create("ammonium_dimolybdate").dust().iconSet(GTMaterialIconSet.FINE).color(0xADC3CD).secondaryColor(0x998EAF)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x ammonium", "2x molybdenum", "7x oxygen")

    event.create("iron_ii_fluoride").dust().iconSet(GTMaterialIconSet.FINE).color(0xC5E1A5).secondaryColor(0xB2D8B2)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x iron", "2x fluorine")

    event.create("manganese_ii_fluoride").dust().iconSet(GTMaterialIconSet.FINE).color(0xF8D6FB).secondaryColor(0xDFA0CF)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING).components("1x manganese", "2x fluorine")

    event.create("hydrogen_heptafluorotantalate").fluid().iconSet(GTMaterialIconSet.FINE).color(0xD3D1F1).secondaryColor(0x543E7F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x hydrogen", "1x tantalum", "7x fluorine")

    event.create("hydrogen_pentafluorooxyniobate").fluid().iconSet(GTMaterialIconSet.FINE).color(0xD3D1F1).secondaryColor(0x543E7F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION).components("2x hydrogen", "1x niobium", "5x fluorine", "1x oxygen")
})