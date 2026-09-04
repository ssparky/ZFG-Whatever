StartupEvents.registry("block", event => {
    // COOLERS
    event.create("water_cooler", "fission_cooler")
        .displayName("Water Cooler").coolerTemperature(275).coolantUsagePerTick(10)
        .requiredCoolantMaterialId("minecraft:water").outputCoolantFluidId("gtceu:steam").texture("kubejs:block/fission/water_cooler");

    event.create("distilled_water_cooler", "fission_cooler")
        .displayName("Distilled Water Cooler").coolerTemperature(313).coolantUsagePerTick(10)
        .requiredCoolantMaterialId("gtceu:distilled_water").outputCoolantFluidId("gtceu:steam").texture("kubejs:block/fission/distilled_water_cooler");

    event.create("sodium_potassium_cooler", "fission_cooler")
        .displayName("Sodium-Potassium Cooler").coolerTemperature(900).coolantUsagePerTick(10)
        .requiredCoolantMaterialId("gtceu:sodium_potassium").outputCoolantFluidId("gtceu:steam").texture("kubejs:block/fission/sodium_potassium_cooler"); // TODO: Hot NaK output

    // FISSION RODS
    event.create("uranium_233_fuel_rod", "fission_fuel_rod")
        .displayName("U-233 Fuel Rod").tier(2).baseHeatProduction(80).durationTicks(1000).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:uranium_233_nugget").outputKey("gtceu:depleted_uranium_233_nugget").texture("kubejs:block/fission/uranium_233_fuel_rod");

    event.create("uranium_235_fuel_rod", "fission_fuel_rod")
        .displayName("U-235 Fuel Rod").tier(1).baseHeatProduction(50).durationTicks(1200).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:uranium_235_nugget").outputKey("gtceu:depleted_uranium_235_nugget").texture("kubejs:block/fission/uranium_235_fuel_rod");

    event.create("neptunium_236_fuel_rod", "fission_fuel_rod")
        .displayName("Np-236 Fuel Rod").tier(2).baseHeatProduction(60).durationTicks(1100).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:neptunium_236_nugget").outputKey("gtceu:depleted_neptunium_236_nugget").texture("kubejs:block/fission/neptunium_236_fuel_rod");

    event.create("plutonium_239_fuel_rod", "fission_fuel_rod")
        .displayName("Pu-239 Fuel Rod").tier(2).baseHeatProduction(90).durationTicks(900).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:plutonium_nugget").outputKey("gtceu:depleted_plutonium_239_nugget").texture("kubejs:block/fission/plutonium_239_fuel_rod");

    event.create("plutonium_241_fuel_rod", "fission_fuel_rod")
        .displayName("Pu-241 Fuel Rod").tier(2).baseHeatProduction(110).durationTicks(800).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:plutonium_241_nugget").outputKey("gtceu:depleted_plutonium_241_nugget").texture("kubejs:block/fission/plutonium_241_fuel_rod");

    event.create("americium_242_fuel_rod", "fission_fuel_rod")
        .displayName("Am-242 Fuel Rod").tier(3).baseHeatProduction(100).durationTicks(1400).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:americium_242_nugget").outputKey("gtceu:depleted_americium_242_nugget").texture("kubejs:block/fission/americium_242_fuel_rod");

    event.create("curium_245_fuel_rod", "fission_fuel_rod")
        .displayName("Cm-245 Fuel Rod").tier(3).baseHeatProduction(160).durationTicks(900).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:curium_245_nugget").outputKey("gtceu:depleted_curium_245_nugget").texture("kubejs:block/fission/curium_245_fuel_rod");

    event.create("californium_252_fuel_rod", "fission_fuel_rod")
        .displayName("Cf-252 Fuel Rod").tier(4).baseHeatProduction(240).durationTicks(740).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:californium_252_nugget").outputKey("gtceu:depleted_californium_252_nugget").texture("kubejs:block/fission/californium_252_fuel_rod");

    event.create("einsteinium_254_fuel_rod", "fission_fuel_rod")
        .displayName("Es-254 Fuel Rod").tier(5).baseHeatProduction(280).durationTicks(1500).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:einsteinium_254_nugget").outputKey("gtceu:depleted_einsteinium_254_nugget").texture("kubejs:block/fission/einsteinium_254_fuel_rod");

    event.create("fermium_255_fuel_rod", "fission_fuel_rod")
        .displayName("Fm-255 Fuel Rod").tier(5).baseHeatProduction(330).durationTicks(600).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:fermium_255_nugget").outputKey("gtceu:depleted_fermium_255_nugget").texture("kubejs:block/fission/fermium_255_fuel_rod");

    event.create("mendelevium_259_fuel_rod", "fission_fuel_rod")
        .displayName("Md-259 Fuel Rod").tier(6).baseHeatProduction(420).durationTicks(1200).amountPerCycle(1).neutronBias(1)
        .fuelKey("gtceu:mendelevium_nugget").outputKey("gtceu:depleted_mendelevium_259_nugget").texture("kubejs:block/fission/mendelevium_259_fuel_rod");

    event.create("trinium_fuel_rod", "fission_fuel_rod")
        .displayName("Trinium Fuel Rod").tier(6).baseHeatProduction(210).durationTicks(3600).amountPerCycle(1).neutronBias(3)
        .fuelKey("gtceu:trinium_nugget").outputKey("gtceu:depleted_trinium_nugget").texture("kubejs:block/fission/trinium_fuel_rod");

    event.create("tiberium_fuel_rod", "fission_fuel_rod")
        .displayName("Tiberium Fuel Rod").tier(7).baseHeatProduction(600).durationTicks(1400).amountPerCycle(1).neutronBias(5)
        .fuelKey("gtceu:tiberium_nugget").outputKey("gtceu:depleted_tiberium_nugget").texture("kubejs:block/fission/tiberium_fuel_rod");

    // MODERATORS
    event.create("graphite_moderator", "fission_moderator") // TODO: figure out calls for other properties (e.g. parallels)
        .displayName("Graphite Moderator").euBoost(10).fuelDiscount(5)
        .texture("kubejs:block/fission/graphite_moderator");

    event.create("beryllium_moderator", "fission_moderator")
        .displayName("Beryllium Moderator").euBoost(20).fuelDiscount(0)
        .texture("kubejs:block/fission/beryllium_moderator");

    event.create("zirconium_moderator", "fission_moderator")
        .displayName("Zirconium Moderator").euBoost(15).fuelDiscount(10)
        .texture("kubejs:block/fission/zirconium_moderator");

    event.create("hafnium_moderator", "fission_moderator")
        .displayName("Hafnium Moderator").euBoost(35).fuelDiscount(5)
        .texture("kubejs:block/fission/hafnium_moderator");

    // BREEDER BLANKETS
    event.create("thorium_232_blanket_rod", "fission_blanket")
        .displayName("Th-232 Blanket Rod").durationTicks(3000).amountPerCycle(1)
        .inputKey("gtceu:thorium_232_nugget")
        .texture("kubejs:block/fission/thorium_232_blanket_rod");

    event.create("protactinium_233_blanket_rod", "fission_blanket")
        .displayName("Pa-233 Blanket Rod").durationTicks(1200).amountPerCycle(1)
        .inputKey("gtceu:tiny_protactinium_dust")
        .texture("kubejs:block/fission/protactinium_233_blanket_rod");

    event.create("uranium_238_blanket_rod", "fission_blanket")
        .displayName("U-238 Blanket Rod").durationTicks(2400).amountPerCycle(1)
        .inputKey("gtceu:uranium_nugget") // TODO: figure out item output call (evidently not .outputKey or .addOutput, those throw errors)
        //.outputKey("gtceu:plutonium_nugget")  // Output material registry entry
        // Dynamic Outputs: .addOutput(RegistryKey, Weight, Instability)
        // .addOutput("gtceu:plutonium_nugget", 70, 1)    
        // .addOutput("gtceu:plutonium_241_nugget", 20, 3) 
        // .addOutput("gtceu:plutonium_238_nugget", 10, 4) // High instability means higher output if neutronBias matches
        .texture("kubejs:block/fission/uranium_238_blanket_rod"); // No active texture?

    event.create("neptunium_237_blanket_rod", "fission_blanket")
        .displayName("Np-237 Blanket Rod").durationTicks(2000).amountPerCycle(1)
        .inputKey("gtceu:neptunium_nugget")
        .texture("kubejs:block/fission/neptunium_237_blanket_rod");

    event.create("plutonium_242_blanket_rod", "fission_blanket")
        .displayName("Pu-242 Blanket Rod").durationTicks(1500).amountPerCycle(1)
        .inputKey("gtceu:plutonium_242_nugget")
        .texture("kubejs:block/fission/plutonium_242_blanket_rod");

    event.create("americium_243_blanket_rod", "fission_blanket")
        .displayName("Am-243 Blanket Rod").durationTicks(2300).amountPerCycle(1)
        .inputKey("gtceu:americium_nugget")
        .texture("kubejs:block/fission/americium_243_blanket_rod");

    event.create("curium_246_blanket_rod", "fission_blanket")
        .displayName("Cm-246 Blanket Rod").durationTicks(3000).amountPerCycle(1)
        .inputKey("gtceu:curium_nugget")
        .texture("kubejs:block/fission/curium_246_blanket_rod");

    event.create("berkelium_247_blanket_rod", "fission_blanket")
        .displayName("Bk-247 Blanket Rod").durationTicks(1100).amountPerCycle(1)
        .inputKey("gtceu:berkelium_nugget")
        .texture("kubejs:block/fission/berkelium_247_blanket_rod");

    event.create("californium_249_blanket_rod", "fission_blanket")
        .displayName("Cf-249 Blanket Rod").durationTicks(900).amountPerCycle(1)
        .inputKey("gtceu:californium_249_nugget")
        .texture("kubejs:block/fission/californium_249_blanket_rod");

    event.create("einsteinium_252_blanket_rod", "fission_blanket")
        .displayName("Es-252 Blanket Rod").durationTicks(1800).amountPerCycle(1)
        .inputKey("gtceu:einsteinium_nugget")
        .texture("kubejs:block/fission/einsteinium_252_blanket_rod");

    event.create("fermium_257_blanket_rod", "fission_blanket")
        .displayName("Fm-257 Blanket Rod").durationTicks(800).amountPerCycle(1)
        .inputKey("gtceu:fermium_nugget")
        .texture("kubejs:block/fission/fermium_257_blanket_rod");

    event.create("naquadah_blanket_rod", "fission_blanket")
        .displayName("Naquadah Blanket Rod").durationTicks(2600).amountPerCycle(1)
        .inputKey("gtceu:naquadah_nugget")
        .texture("kubejs:block/fission/naquadah_blanket_rod");

    

    // SALT LINERS (TODO: proper output fluids)
    event.create("thorium_230_msr_liner", "msr_core_liner")
        .displayName("Th-230 MSR Core Liner").tier(1).fluidFlowRate(20).heatPerMb(6.0)
        .inputFluidId("gtceu:thorium").outputFluidId("gtceu:thorium").texture("phoenix_fission:block/fission/thorium_230_liner");

    event.create("plutonium_238_msr_liner", "msr_core_liner")
        .displayName("Pu-238 MSR Core Liner").tier(2).fluidFlowRate(35).heatPerMb(12.0)
        .inputFluidId("gtceu:plutonium_238").outputFluidId("gtceu:plutonium_238").texture("phoenix_fission:block/fission/plutonium_238_liner");

    event.create("americium_241_msr_liner", "msr_core_liner")
        .displayName("Am-241 MSR Core Liner").tier(3).fluidFlowRate(15).heatPerMb(20.0)
        .inputFluidId("gtceu:americium_241").outputFluidId("gtceu:americium_241").texture("phoenix_fission:block/fission/americium_241_liner");

    event.create("curium_243_msr_liner", "msr_core_liner")
        .displayName("Cm-243 MSR Core Liner").tier(3).fluidFlowRate(50).heatPerMb(10.0)
        .inputFluidId("gtceu:curium_243").outputFluidId("gtceu:curium_243").texture("phoenix_fission:block/fission/curium_243_liner");

    event.create("curium_247_msr_liner", "msr_core_liner")
        .displayName("Cm-247 MSR Core Liner").tier(3).fluidFlowRate(28).heatPerMb(22.0)
        .inputFluidId("gtceu:curium_247").outputFluidId("gtceu:curium_247").texture("phoenix_fission:block/fission/curium_247_liner");

    event.create("berkelium_248_msr_liner", "msr_core_liner")
        .displayName("Bk-248 MSR Core Liner").tier(4).fluidFlowRate(30).heatPerMb(21.0)
        .inputFluidId("gtceu:berkelium_248").outputFluidId("gtceu:berkelium_248").texture("phoenix_fission:block/fission/berkelium_248_liner");

    event.create("californium_250_msr_liner", "msr_core_liner")
        .displayName("Cf-250 MSR Core Liner").tier(4).fluidFlowRate(70).heatPerMb(26.0)
        .inputFluidId("gtceu:californium_250").outputFluidId("gtceu:californium_250").texture("phoenix_fission:block/fission/californium_250_liner");

    event.create("californium_251_msr_liner", "msr_core_liner")
        .displayName("Cf-251 MSR Core Liner").tier(4).fluidFlowRate(45).heatPerMb(24.0)
        .inputFluidId("gtceu:californium").outputFluidId("gtceu:californium").texture("phoenix_fission:block/fission/californium_251_liner");

    event.create("einsteinium_253_msr_liner", "msr_core_liner")
        .displayName("Es-253 MSR Core Liner").tier(5).fluidFlowRate(60).heatPerMb(14.5)
        .inputFluidId("gtceu:einsteinium_253").outputFluidId("gtceu:einsteinium_253").texture("phoenix_fission:block/fission/einsteinium_253_liner");

    event.create("nobelium_259_msr_liner", "msr_core_liner")
        .displayName("No-259 MSR Core Liner").tier(6).fluidFlowRate(40).heatPerMb(45.0)
        .inputFluidId("gtceu:nobelium").outputFluidId("gtceu:nobelium").texture("phoenix_fission:block/fission/nobelium_259_liner");

    event.create("enriched_naquadah_msr_liner", "msr_core_liner")
        .displayName("Nq+ MSR Core Liner").tier(6).fluidFlowRate(50).heatPerMb(30.5)
        .inputFluidId("gtceu:enriched_naquadah").outputFluidId("gtceu:naquadah").texture("phoenix_fission:block/fission/enriched_naquadah_liner");

    event.create("naquadria_msr_liner", "msr_core_liner")
        .displayName("Naquadria MSR Core Liner").tier(6).fluidFlowRate(100).heatPerMb(60.0)
        .inputFluidId("gtceu:naquadria").outputFluidId("gtceu:naquadria").texture("phoenix_fission:block/fission/naquadria_liner");
})