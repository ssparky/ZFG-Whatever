StartupEvents.registry("block", event => {
    // // COOLERS
    // event.create("water_cooler", "phoenix_fission:fission_cooler")
    //     .displayName("Water Cooler")
    //     .tier(1)                                 // Determines explosion scaling and tier-matching logic
    //     .coolerTemperature(275)                // Active heat dissipation capacity (HU/t)
    //     .coolantUsagePerTick(10)                // Millibuckets of coolant fluid consumed per operation tick
    //     .requiredCoolantMaterialId("minecraft:water")  // Input fluid registry ID
    //     .outputCoolantFluidId("gtceu:steam")  // Output heated fluid registry ID
    //     .tintColor(0xFF7DE7FF)                  // Does nothing but nessecary, leave default
    //     .texture("kubejs:block/fission/water_cooler")  // Note: Requires a matching block and active block texture (active is appended to the end)       
    //     .maskTexture("kubejs:block/fission/cooler_mask"); // Optional mask texture layer

    // // FISSION RODS
    // event.create("uranium_235_fuel_rod", "phoenix_fission:fission_fuel_rod")
    //     .displayName("U-235 Fuel Rod")
    //     .tier(1)                                 // Controls internal multi-block priority and explosion tiers
    //     .baseHeatProduction(50)                 // Core HU/t heat produced before moderator modifiers
    //     .durationTicks(1200)                    // Lifetime in ticks before burning another cycle of fuel
    //     .amountPerCycle(1)                      // Quantity of fuel items consumed per cycle completion
    //     .neutronBias(1)                         // Interacts with nearby Breeder/Blanket rod output instability weights
    //     .fuelKey("gtceu:uranium_235_nugget")     // Input item ID (Supports tags or specific registry IDs)
    //     .outputKey("gtceu:lead_nugget") // Output waste item ID
    //     .texture("kubejs:block/fission/uranium_235_fuel_rod"); // Note: Requires a matching block and active block texture (active is appended to the end)

    // // MODERATORS
    // event.create("graphite_moderator", "phoenix_fission:fission_moderator")
    //     .displayName("Graphite Moderator")
    //     .tier(1)                                 // Primary moderator selection hierarchy weight
    //     .euBoost(15)                            // Scaling factor for increasing EU generation output
    //     .fuelDiscount(5)                        // Efficiency discount: Extends fuel rod duration ticks between cycles
    //     .texture("kubejs:block/fission/graphite_moderator");

    // // BREEDER BLANKETS
    // event.create("uranium_238_blanket_rod", "phoenix_fission:fission_blanket_rod")
    //     .displayName("U-238 Blanket Rod")
    //     .tier(1)                                 // Priority logic tier matching
    //     .durationTicks(2400)                    // Total tick lifetime per transformation cycle
    //     .amountPerCycle(1)                      // Item consumption rate per cycle completion
    //     .inputKey("gtceu:uranium_nugget")    // Target breedable material registry entry
    //     // Dynamic Outputs: .addOutput(RegistryKey, Weight, Instability)
    //     .addOutput("gtceu:plutonium_nugget", 70, 1)    
    //     .addOutput("gtceu:plutonium_241_nugget", 20, 3) 
    //     .addOutput("gtceu:plutonium_238_nugget", 10, 4) // High instability means higher output if neutronBias matches
    //     .texture("kubejs:block/fission/uranium_238_blanket_rod");

    // // SALT LINERS
    // event.create("enriched_naquadah_msr_liner", "phoenix_fission:msr_core_liner")
    //     .displayName("Nq+ MSR Core Liner")
    //     .tier(2)
    //     .fluidFlowRate(40)                      // Max mB/t fluid flow processing rate through the liner
    //     .heatPerMb(15.5)                        // Thermal energy generation constant per millibucket processed
    //     .inputFluidId("gtceu:enriched_naquadah") // Molten salt fuel blend input
    //     .outputFluidId("gtceu:naquadah")
    //     .texture("phoenix_fission:block/fission/enriched_naquadah_liner"); // Also needs an active texture
})