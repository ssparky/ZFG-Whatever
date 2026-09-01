StartupEvents.registry("block", event => {
    // COOLERS
    event.create("water_cooler", "fission_cooler")
        .displayName("Water Cooler").coolerTemperature(275).coolantUsagePerTick(10)
        .requiredCoolantMaterialId("minecraft:water").outputCoolantFluidId("gtceu:steam").texture("kubejs:block/fission/water_cooler");

    // FISSION RODS
    event.create("uranium_235_fuel_rod", "fission_fuel_rod")
        .displayName("U-235 Fuel Rod").tier(1).baseHeatProduction(50).durationTicks(1200).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:uranium_235_nugget").outputKey("gtceu:depleted_uranium_235_nugget").texture("kubejs:block/fission/uranium_235_fuel_rod"); // TODO: register depleted output item for further processing

    // MODERATORS
    event.create("graphite_moderator", "fission_moderator") // TODO: figure out calls for other properties (e.g. parallels)
        .displayName("Graphite Moderator").euBoost(15).fuelDiscount(5)
        .texture("kubejs:block/fission/graphite_moderator");

    // BREEDER BLANKETS
    event.create("uranium_238_blanket_rod", "fission_blanket")
        .displayName("U-238 Blanket Rod").durationTicks(2400).amountPerCycle(1)
        .inputKey("gtceu:uranium_nugget") // TODO: figure out item output call (evidently not .outputKey or .addOutput, those throw errors)
        //.outputKey("gtceu:plutonium_nugget")  // Output material registry entry
        // Dynamic Outputs: .addOutput(RegistryKey, Weight, Instability)
        // .addOutput("gtceu:plutonium_nugget", 70, 1)    
        // .addOutput("gtceu:plutonium_241_nugget", 20, 3) 
        // .addOutput("gtceu:plutonium_238_nugget", 10, 4) // High instability means higher output if neutronBias matches
        .texture("kubejs:block/fission/uranium_238_blanket_rod"); // No active texture?

    // SALT LINERS
    event.create("enriched_naquadah_msr_liner", "msr_core_liner")
        .displayName("Nq+ MSR Core Liner").tier(2).fluidFlowRate(40).heatPerMb(15.5)
        .inputFluidId("gtceu:enriched_naquadah").outputFluidId("gtceu:naquadah").texture("phoenix_fission:block/fission/enriched_naquadah_liner");
})