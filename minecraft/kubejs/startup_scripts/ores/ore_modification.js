// Priority: -150
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $FluidStorageKeys = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys")
const $FluidPipeProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties")
const $WireProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder");

GTCEuStartupEvents.registry("gtceu:material", event => {
    // Gregtech builtins and elemental ores - add oreprop
    let zincite_ore_prop = new $OreProperty(1, 1);
    zincite_ore_prop.setOreByProducts(GTMaterials.Iron, GTMaterials.Manganese)
    GTMaterials.Zincite.setProperty($PropertyKey.ORE, zincite_ore_prop)

    let borax_ore_prop = new $OreProperty(2, 1);
    borax_ore_prop.setOreByProducts(GTMaterials.Salt, GTMaterials.Boron, GTMaterials.RockSalt)
    GTMaterials.Borax.setProperty($PropertyKey.ORE, borax_ore_prop)

    let rutile_ore_prop = new $OreProperty(2, 1);
    rutile_ore_prop.setOreByProducts(GTMaterials.Iron, GTMaterials.Quartzite, GTMaterials.Rutile)
    GTMaterials.Rutile.setProperty($PropertyKey.ORE, rutile_ore_prop)

    let uvarovite_ore_prop = new $OreProperty(2, 2);
    uvarovite_ore_prop.setOreByProducts(GTMaterials.Calcium, GTMaterials.Chromium, GTMaterials.Silicon)
    GTMaterials.Uvarovite.setProperty($PropertyKey.ORE, uvarovite_ore_prop)

    let andradite_ore_prop = new $OreProperty(2, 2);
    andradite_ore_prop.setOreByProducts(GTMaterials.Calcium, GTMaterials.Iron, GTMaterials.Silicon)
    GTMaterials.Andradite.setProperty($PropertyKey.ORE, andradite_ore_prop)

    let rhenium_ore_prop = new $OreProperty(1, 1);
    rhenium_ore_prop.setOreByProducts(GTMaterials.Molybdenum, GTMaterials.Ruthenium, GTMaterials.Manganese)
    GTMaterials.Rhenium.setProperty($PropertyKey.ORE, rhenium_ore_prop)

    let cadmium_ore_prop = new $OreProperty(1, 1);
    cadmium_ore_prop.setOreByProducts(GTMaterials.Zinc, GTMaterials.Indium, GTMaterials.Cinnabar)
    GTMaterials.Cadmium.setProperty($PropertyKey.ORE, cadmium_ore_prop)

    let ruthenium_ore_prop = new $OreProperty(1, 1);
    ruthenium_ore_prop.setOreByProducts(GTMaterials.Iridium, GTMaterials.Rhodium, GTMaterials.Iridium)
    GTMaterials.Ruthenium.setProperty($PropertyKey.ORE, ruthenium_ore_prop)

    let osmium_ore_prop = new $OreProperty(1, 1);
    osmium_ore_prop.setOreByProducts(GTMaterials.Iridium, GTMaterials.Ruthenium, GTMaterials.Platinum)
    GTMaterials.Osmium.setProperty($PropertyKey.ORE, osmium_ore_prop)
    
    let rhodium_ore_prop = new $OreProperty(1, 1);
    rhodium_ore_prop.setOreByProducts(GTMaterials.Platinum, GTMaterials.Palladium, GTMaterials.Iridium)
    GTMaterials.Rhodium.setProperty($PropertyKey.ORE, rhodium_ore_prop)

    let iridium_ore_prop = new $OreProperty(1, 1);
    iridium_ore_prop.setOreByProducts(GTMaterials.Osmium, GTMaterials.Ruthenium, GTMaterials.Osmium)
    GTMaterials.Iridium.setProperty($PropertyKey.ORE, iridium_ore_prop)

    let phosphorus_ore_prop = new $OreProperty(2, 1);
    phosphorus_ore_prop.setOreByProducts(GTMaterials.Arsenic, GTMaterials.Antimony, GTMaterials.Bismuth)
    GTMaterials.Phosphorus.setProperty($PropertyKey.ORE, phosphorus_ore_prop)

    let mirabilite_ore_prop = new $OreProperty(2, 1);
    mirabilite_ore_prop.setOreByProducts(GTMaterials.Diorite, "alum_na", "chinleite_ce")
    GTMaterials.Mirabilite.setProperty($PropertyKey.ORE, mirabilite_ore_prop)

    let ferrosilite_ore_prop = new $OreProperty(2, 1);
    ferrosilite_ore_prop.setOreByProducts(GTMaterials.Spodumene, GTMaterials.Iron, GTMaterials.Kyanite)
    GTMaterials.Ferrosilite.setProperty($PropertyKey.ORE, ferrosilite_ore_prop)

});

GTCEuStartupEvents.materialModification(event => {
    // Change default ore compositions
    GTMaterials.Pentlandite.setComponents("6x nickel", "3x iron", "8x sulfur")
    GTMaterials.Cooperite.setComponents("1x platinum", "1x sulfur")
    GTMaterials.Tetrahedrite.setComponents("12x copper", "4x antimony", "13x sulfur")
    GTMaterials.Opal.setComponents("1x silicon_dioxide", "1x water")
    GTMaterials.Alunite.setComponents("1x potassium", "3x aluminium", "2x sulfate", "6x oxygen", "6x hydrogen")
    GTMaterials.Monazite.setComponents("1x lanthanum", "1x phosphate")
    GTMaterials.Lazurite.setComponents("7x sodium", "1x calcium", "6x aluminium", "6x silicon", "24x oxygen", "1x sulfate", "3x sulfur", "1x water")
    GTMaterials.Sodalite.setComponents("4x sodium", "3x silicon", "3x aluminium", "12x oxygen", "1x chlorine")
    GTMaterials.Apatite.setComponents("5x calcium", "3x phosphate", "1x chlorine")
    GTMaterials.Emerald.setComponents("1x beryl")
    GTMaterials.Sapphire.setComponents("1x corundum")
    GTMaterials.GreenSapphire.setComponents("1x corundum")
    GTMaterials.Ruby.setComponents("1x corundum", "1x chromium")
});