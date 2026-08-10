GTCEuStartupEvents.registry("gtceu:material", event => {
    // Misc materials that needed to be edited
    GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_DENSE, 
        GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR);
    
    // HM Platline
    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
})