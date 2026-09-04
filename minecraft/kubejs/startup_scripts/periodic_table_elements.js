const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

// Registry
GTCEuStartupEvents.registry('gtceu:material', event => {

    let addFluid = (mat, key, temp) => {
        let prop = new $FluidProperty()
        prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
        mat.setProperty(PropertyKey.FLUID, prop)
    }

    // Group 1
    GTMaterials.Rubidium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Francium.setProperty(PropertyKey.DUST, new $DustProperty());

    // Group 2
    GTMaterials.Strontium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Radium.setProperty(PropertyKey.DUST, new $DustProperty());

    // Group 3
    GTMaterials.Scandium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Praseodymium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Promethium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Gadolinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Terbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dysprosium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Erbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thulium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Ytterbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lutetium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Actinium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Protactinium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Neptunium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID, 913);
    GTMaterials.Curium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID, 1618);
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID, 1259);
    GTMaterials.Californium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID, 1173);
    GTMaterials.Einsteinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Einsteinium, $FluidStorageKeys.LIQUID, 1133);
    GTMaterials.Fermium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Fermium, $FluidStorageKeys.LIQUID, 1800);
    GTMaterials.Mendelevium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Mendelevium, $FluidStorageKeys.LIQUID, 1100);
    GTMaterials.Nobelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Nobelium, $FluidStorageKeys.LIQUID, 1100);
    GTMaterials.Lawrencium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 4
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID, 2125);
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Hafnium, $FluidStorageKeys.LIQUID, 2506);
    GTMaterials.Rutherfordium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    
    // Group 5
    GTMaterials.Dubnium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 6
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 7
    GTMaterials.Technetium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Rhenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Rhenium, $FluidStorageKeys.LIQUID, 3459);
    GTMaterials.Bohrium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 8
    GTMaterials.Hassium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 9
    GTMaterials.Meitnerium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 10
    
    // Group 11
    GTMaterials.Roentgenium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 12
    GTMaterials.Copernicium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 13
    GTMaterials.Thallium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 14
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 15
    GTMaterials.Moscovium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 16
    GTMaterials.Selenium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Livermorium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 17
    GTMaterials.Astatine.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Tennessine.setProperty(PropertyKey.INGOT, new $IngotProperty());

    // Group 18
    GTMaterials.Oganesson.setProperty(PropertyKey.INGOT, new $IngotProperty());


    // Blast Property example (TODO) doesnt work
    GTMaterials.Zirconium.setProperty($PropertyKey.BLAST, new $BlastProperty(5000, 'high', GTValues.VHA[GTValues.IV], 1200, -1, -1));
    GTMaterials.Hafnium.setProperty($PropertyKey.BLAST, new $BlastProperty(6400, 'higher', GTValues.VHA[GTValues.LuV], 1200, -1, -1));
    GTMaterials.Rhenium.setProperty($PropertyKey.BLAST, new $BlastProperty(7300, "highest", GTValues.VHA[GTValues.ZPM], 1100, -1, -1));

});

// Color Editing
GTCEuStartupEvents.materialModification(event => {
    GTMaterials.Scandium.setMaterialARGB(0x65CA7A)
    GTMaterials.Scandium.setMaterialSecondaryARGB(0x39483C)

    GTMaterials.Promethium.setMaterialARGB(0x2EE4AB)
    GTMaterials.Promethium.setMaterialSecondaryARGB(0x142D2D)

    GTMaterials.Ytterbium.setMaterialARGB(0xF0E1C8)
    GTMaterials.Ytterbium.setMaterialSecondaryARGB(0x727272)

    GTMaterials.Curium.setMaterialARGB(0x550BA4)
    GTMaterials.Curium.setMaterialSecondaryARGB(0x260F3C)

    GTMaterials.Berkelium.setMaterialARGB(0xA4480B)
    GTMaterials.Berkelium.setMaterialSecondaryARGB(0x3C230F)

    GTMaterials.Californium.setMaterialARGB(0x740909)
    GTMaterials.Californium.setMaterialSecondaryARGB(0x3C0F0F)

    GTMaterials.Copernicium.setMaterialARGB(0xB84728)
    GTMaterials.Copernicium.setMaterialSecondaryARGB(0x4F281F)

    GTMaterials.Nihonium.setMaterialARGB(0xE7B8E8)
    GTMaterials.Nihonium.setMaterialSecondaryARGB(0x2D2732)
})