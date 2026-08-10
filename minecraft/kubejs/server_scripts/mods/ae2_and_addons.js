ServerEvents.recipes(event => {
    // Disabling recipes
    event.remove({type: "ae2:inscriber"})
    event.remove({type: "ae2:charger"})
    event.remove({type: "expatternprovider:circuit_cutter"})
    event.remove({type: "advanced_ae:reaction_chamber"})
    event.remove({output: "megacells:sky_steel_ingot"})
    event.remove({type: "crazyae2addons:research"})
    event.remove({type: "crazyae2addons:research_recipes"})
    event.remove({type: "crazyae2addons:fabrication_recipes"})
    event.remove({type: "crazyae2addons:fabrication"})
    event.remove({type: "crazyae2addons:cradle_recipes"})
    event.remove({type: "crazyae2addons:cradle"})
    event.remove({type: "crazyae2addons:entropy_cradle"})

    // Basic materials
    // Charged Certus
    event.recipes.gtceu.polarizer("kubejs:ae2/charged_certus_quartz_charging")
        .itemInputs("ae2:certus_quartz_crystal")
        .itemOutputs("gtceu:charged_certus_quartz_gem")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)
    // Fluix
    event.remove({output: "ae2:fluix_crystal"})
    event.recipes.gtceu.mixer("kubejs:ae2/fluix_mixing")
        .itemInputs("gtceu:charged_certus_quartz_gem", "minecraft:redstone", "minecraft:quartz")
        .inputFluids("minecraft:water 100")
        .itemOutputs("2x ae2:fluix_crystal")
        .circuit(3)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(80)
    // Sky stone
    event.recipes.gtceu.autoclave("kubejs:ae2/skystone_dust_autoclave")
        .itemInputs("gtceu:basalt_dust", "gtceu:tiny_certus_quartz_dust")
        .inputFluids("gtceu:carbon 288")
        .itemOutputs("ae2:sky_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    // Sky steels Mixing
    event.recipes.gtceu.mixer("kubejs:ae2/skysteel_dust_mixing")
        .itemInputs("gtceu:manganese_dust", "3x #forge:dusts/sky_stone")
        .itemOutputs("4x gtceu:sky_steel_dust")
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)
    event.recipes.gtceu.mixer("kubejs:ae2/diamond_skysteel_dust_mixing")
        .itemInputs("gtceu:sky_steel_dust", "1x #forge:dusts/diamond")
        .itemOutputs("2x gtceu:diamond_sky_steel_dust")
        .circuit(3)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(160)
    event.recipes.gtceu.mixer("kubejs:ae2/gold_skysteel_dust_mixing")
        .itemInputs("gtceu:sky_steel_dust", "1x #forge:dusts/gold")
        .itemOutputs("2x gtceu:gold_sky_steel_dust")
        .circuit(3)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(160)
    event.recipes.gtceu.mixer("kubejs:ae2/certus_skysteel_dust_mixing")
        .itemInputs("gtceu:sky_steel_dust", "1x #forge:dusts/certus_quartz")
        .itemOutputs("2x gtceu:certus_sky_steel_dust")
        .circuit(3)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(160)
    event.recipes.gtceu.mixer("kubejs:ae2/dark_steel_dust_mixing")
        .itemInputs("2x gtceu:steel_dust", "1x #forge:dusts/zinc", "4x #forge:dusts/obsidian")
        .itemOutputs("7x gtceu:dark_steel_dust")
        .circuit(4)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.mixer("kubejs:ae2/fluix_darksteel_dust_mixing")
        .itemInputs("2x gtceu:dark_steel_dust", "1x gtceu:thulium_dust", "4x #forge:dusts/fluix")
        .itemOutputs("7x gtceu:fluix_dark_steel_dust")
        .circuit(2)
        .EUt(GTValues.VA[GTValues.IV])
        .duration(240)

    // Sky steels cooling
    event.recipes.gtceu.chemical_bath("kubejs:ae2/diamond_skysteel_cooling_bath")
        .itemInputs("gtceu:hot_diamond_sky_steel_ingot")
        .inputFluids("minecraft:water 100")
        .itemOutputs("gtceu:diamond_sky_steel_ingot")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/diamond_skysteel_cooling_bath_distilled")
        .itemInputs("gtceu:hot_diamond_sky_steel_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("gtceu:diamond_sky_steel_ingot")
        .duration(250)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/gold_skysteel_cooling_bath")
        .itemInputs("gtceu:hot_gold_sky_steel_ingot")
        .inputFluids("minecraft:water 100")
        .itemOutputs("gtceu:gold_sky_steel_ingot")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/gold_skysteel_cooling_bath_distilled")
        .itemInputs("gtceu:hot_gold_sky_steel_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("gtceu:gold_sky_steel_ingot")
        .duration(250)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/certus_skysteel_cooling_bath")
        .itemInputs("gtceu:hot_certus_sky_steel_ingot")
        .inputFluids("minecraft:water 100")
        .itemOutputs("gtceu:certus_sky_steel_ingot")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/certus_skysteel_cooling_bath_distilled")
        .itemInputs("gtceu:hot_certus_sky_steel_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("gtceu:certus_sky_steel_ingot")
        .duration(250)
        .EUt(GTValues.VA[GTValues.MV])

    // Forming press circuits
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_calculation_processor_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("gtceu:certus_sky_steel_ingot")
        .itemOutputs("ae2:printed_calculation_processor")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_logic_processor_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("gtceu:gold_sky_steel_ingot")
        .itemOutputs("ae2:printed_logic_processor")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_engineering_processor_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_sky_steel_ingot")
        .itemOutputs("ae2:printed_engineering_processor")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_silicon_press")
        .notConsumable("ae2:silicon_press")
        .itemInputs("gtceu:silicon_wafer")
        .itemOutputs("ae2:printed_silicon")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_silicon_press_alt")
        .notConsumable("ae2:silicon_press")
        .itemInputs("gtceu:silicon_ingot")
        .itemOutputs("ae2:printed_silicon")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_accumulation_processor_press")
        .notConsumable("megacells:accumulation_processor_press")
        .itemInputs("gtceu:fluix_dark_steel_ingot")
        .itemOutputs("megacells:printed_accumulation_processor")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.forming_press("kubejs:ae2/printed_quantum_processor_press")
        .notConsumable("advanced_ae:quantum_processor_press")
        .itemInputs("advanced_ae:quantum_alloy")
        .itemOutputs("advanced_ae:printed_quantum_processor")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.IV])

    // Inscriber (circuit assembler) full circuits
    event.remove({id:"advanced_ae:quantum_processor_chamber"})

    event.recipes.gtceu.circuit_assembler("kubejs:ae2/calculation_processor_assembler")
        .itemInputs("1x ae2:printed_calculation_processor", "1x #gtceu:circuits/lv", "1x ae2:printed_silicon")
        .inputFluids("gtceu:redstone 72")
        .itemOutputs("ae2:calculation_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/logic_processor_assembler")
        .itemInputs("1x ae2:printed_logic_processor", "1x #gtceu:circuits/lv", "1x ae2:printed_silicon")
        .inputFluids("gtceu:redstone 72")
        .itemOutputs("ae2:logic_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/engineering_processor_assembler")
        .itemInputs("1x ae2:printed_engineering_processor", "1x #gtceu:circuits/lv", "1x ae2:printed_silicon")
        .inputFluids("gtceu:redstone 72")
        .itemOutputs("ae2:engineering_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/accumulation_processor_assembler")
        .itemInputs("1x megacells:printed_accumulation_processor", "1x #gtceu:circuits/ev", "1x ae2:printed_silicon")
        .inputFluids("gtceu:niobium 72")
        .itemOutputs("megacells:accumulation_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/quantum_processor_assembler")
        .itemInputs("1x advanced_ae:printed_quantum_processor", "1x #gtceu:circuits/iv", "1x gtceu:qbit_cpu_chip", "1x ae2:printed_silicon")
        .inputFluids("gtceu:rhodium 72")
        .itemOutputs("advanced_ae:quantum_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/calculation_processor_assembler_improved")
        .itemInputs("4x ae2:printed_calculation_processor", "1x #gtceu:circuits/ev", "4x ae2:printed_silicon")
        .inputFluids("gtceu:magnesium 144")
        .itemOutputs("8x ae2:calculation_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/logic_processor_assembler_improved")
        .itemInputs("4x ae2:printed_logic_processor", "1x #gtceu:circuits/ev", "4x ae2:printed_silicon")
        .inputFluids("gtceu:tantalum_carbide 144")
        .itemOutputs("8x ae2:logic_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/engineering_processor_assembler_improved")
        .itemInputs("4x ae2:printed_engineering_processor", "1x #gtceu:circuits/ev", "4x ae2:printed_silicon")
        .inputFluids("gtceu:ruthenium 144")
        .itemOutputs("8x ae2:engineering_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/accumulation_processor_assembler_improved")
        .itemInputs("4x megacells:printed_accumulation_processor", "1x #gtceu:circuits/zpm", "4x ae2:printed_silicon")
        .inputFluids("gtceu:hsss 144")
        .itemOutputs("8x megacells:accumulation_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/quantum_processor_assembler_improved")
        .itemInputs("4x advanced_ae:printed_quantum_processor", "1x #gtceu:circuits/uv", "4x gtceu:qbit_cpu_chip", "4x ae2:printed_silicon")
        .inputFluids("gtceu:samarium_iron_arsenic_oxide 144")
        .itemOutputs("8x advanced_ae:quantum_processor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.UV])
    // Empty cells
    event.remove({id: "ae2:network/cells/item_cell_housing"})
    event.remove({id: "ae2:network/cells/fluid_cell_housing"})
    event.remove({id: "megacells:cells/mega_item_cell_housing"})
    event.remove({id: "megacells:cells/mega_fluid_cell_housing"})

    event.shaped("ae2:item_cell_housing", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "gtceu:sky_steel_plate",
        B: "ae2:quartz_glass"
    }).id("kubejs:ae2/item_cell_housing")
    event.shaped("ae2:fluid_cell_housing", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "gtceu:polyvinyl_chloride_plate",
        B: "ae2:quartz_glass"
    }).id("kubejs:ae2/fluid_cell_housing")
    event.shaped("crazyae2addons:mob_cell_housing", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "gtceu:blue_alloy_plate",
        B: "mae2:cloud_chamber"
    }).id("kubejs:ae2/mob_cell_housing")
    event.shaped("megacells:mega_item_cell_housing", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "gtceu:double_naquadah_plate",
        B: "gtceu:laminated_glass"
    }).id("kubejs:ae2/mega_item_cell_housing")
    event.shaped("megacells:mega_fluid_cell_housing", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "gtceu:double_ruridit_plate",
        B: "gtceu:laminated_glass"
    }).id("kubejs:ae2/mega_fluid_cell_housing")

    // Storage components
    event.remove({id: "ae2:network/cells/item_storage_components_cell_1k_part"})
    event.remove({id: "ae2:network/cells/item_storage_components_cell_4k_part"})
    event.remove({id: "ae2:network/cells/item_storage_components_cell_16k_part"})
    event.remove({id: "ae2:network/cells/item_storage_components_cell_64k_part"})
    event.remove({id: "ae2:network/cells/item_storage_components_cell_256k_part"})
    event.remove({id: "megacells:cells/cell_component_1m"})
    event.remove({id: "megacells:cells/cell_component_4m"})
    event.remove({id: "megacells:cells/cell_component_16m"})
    event.remove({id: "megacells:cells/cell_component_64m"})
    event.remove({id: "megacells:cells/cell_component_256m"})
    event.remove({id: "advanced_ae:quantum_storage_component"})
    event.remove({id: "extendedae_plus:core/compat/storage_core"})
    event.remove({id: "extendedae_plus:core/quantum_storage_core"})
    event.remove({id: "extendedae_plus:core/spatial_core"})
    event.remove({id: "extendedae_plus:core/compat/infinity_core_2"})
    event.remove({id: "megacells:crafting/bulk_cell_component"})
    event.remove({id: "ae2:network/cells/spatial_components"})
    event.remove({id: "ae2:network/cells/spatial_components_0"})
    event.remove({id: "ae2:network/cells/spatial_components_1"})

    event.shaped("ae2:cell_component_1k", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "#gtceu:circuits/lv",
        B: "gtceu:gold_sky_steel_ring",
        C: "gtceu:fine_silver_wire"
    }).id("kubejs:ae2/1k_cell_component")
    event.shaped("ae2:cell_component_4k", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/mv",
        B: "ae2:cell_component_1k",
        C: "gtceu:fine_silver_wire",
        D: "gtceu:diamond_sky_steel_rod"
    }).id("kubejs:ae2/4k_cell_component")
    event.shaped("ae2:cell_component_16k", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/mv",
        B: "ae2:cell_component_4k",
        C: "gtceu:fine_platinum_wire",
        D: "gtceu:certus_sky_steel_plate"
    }).id("kubejs:ae2/16k_cell_component")
    event.shaped("ae2:cell_component_64k", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/hv",
        B: "ae2:cell_component_16k",
        C: "gtceu:fine_palladium_wire",
        D: "gtceu:sky_steel_foil"
    }).id("kubejs:ae2/64k_cell_component")
    event.shaped("ae2:cell_component_256k", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/ev",
        B: "ae2:cell_component_64k",
        C: "gtceu:fine_rhodium_wire",
        D: "gtceu:double_gold_sky_steel_plate"
    }).id("kubejs:ae2/256k_cell_component")
    event.shaped("megacells:cell_component_1m", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/ev",
        B: "ae2:cell_component_256k",
        C: "gtceu:fine_iridium_wire",
        D: "gtceu:fluix_dark_steel_bolt"
    }).id("kubejs:ae2/1m_cell_component")
    event.shaped("megacells:cell_component_4m", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/iv",
        B: "megacells:cell_component_1m",
        C: "gtceu:fine_osmiridium_wire",
        D: "gtceu:fluix_dark_steel_gear"
    }).id("kubejs:ae2/4m_cell_component")
    event.shaped("megacells:cell_component_16m", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/iv",
        B: "megacells:cell_component_4m",
        C: "gtceu:fine_osmiridium_wire",
        D: "gtceu:fluix_dark_steel_gear"
    }).id("kubejs:ae2/16m_cell_component")
    event.shaped("megacells:cell_component_64m", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/luv",
        B: "megacells:cell_component_16m",
        C: "gtceu:fine_niobium_titanium_wire",
        D: "gtceu:double_fluix_dark_steel_plate"
    }).id("kubejs:ae2/64m_cell_component")
    event.shaped("megacells:cell_component_256m", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "#gtceu:circuits/luv",
        B: "megacells:cell_component_64m",
        C: "gtceu:fine_europium_wire",
        D: "gtceu:double_molybdenum_disilicide_plate"
    }).id("kubejs:ae2/256m_cell_component")

    event.recipes.gtceu.circuit_assembler("kubejs:ae2/spatial_cell_component_2")
        .itemInputs("3x ae2:cell_component_4k", "8x ae2:fluix_pearl", "1x #gtceu:circuits/ev")
        .itemOutputs("ae2:spatial_cell_component_2")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/spatial_cell_component_16")
        .itemInputs("3x ae2:cell_component_16k", "12x ae2:fluix_pearl", "1x #gtceu:circuits/iv")
        .itemOutputs("ae2:spatial_cell_component_16")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.circuit_assembler("kubejs:ae2/spatial_cell_component_128")
        .itemInputs("3x ae2:cell_component_64k", "16x ae2:fluix_pearl", "1x #gtceu:circuits/luv")
        .itemOutputs("ae2:spatial_cell_component_128")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler("kubejs:ae2/quantum_storage_component")
        .itemInputs("1x ae2:cell_component_256k", "4x advanced_ae:quantum_alloy_plate", "1x #gtceu:circuits/zpm")
        .inputFluids("gtceu:radon 1500")
        .itemOutputs("advanced_ae:quantum_storage_component")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.circuit_assembler("kubejs:ae2/bulk_cell_component")
        .itemInputs("1x megacells:cell_component_4m", "2x megacells:accumulation_processor", "1x gtceu:quantum_star", "8x gtceu:fine_yttrium_barium_cuprate_wire")
        .inputFluids("gtceu:osmium 288")
        .itemOutputs("megacells:bulk_cell_component")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.assembler("kubejs:ae2/storage_core")
        .itemInputs("1x megacells:cell_component_256m", "1x megacells:bulk_cell_component", "1x advanced_ae:quantum_storage_component",
            "1x extendedae_plus:oblivion_singularity", "4x #forge:ingots/netherite", "2x gtceu:quantum_star"
        )
        .inputFluids("gtceu:osmium 1024")
        .itemOutputs("extendedae_plus:storage_core")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.assembler("kubejs:ae2/quantum_storage_core")
        .itemInputs("1x megacells:256m_crafting_storage", "1x expandedae:exp_crafting_accelerator_1m", "1x advanced_ae:quantum_storage_256",
            "1x extendedae_plus:oblivion_singularity", "4x #forge:ingots/netherite", "2x gtceu:quantum_star"
        )
        .inputFluids("gtceu:pcb_coolant 1024")
        .itemOutputs("extendedae_plus:quantum_storage_core")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.assembler("kubejs:ae2/spatial_core")
        .itemInputs("1x ae2:spatial_cell_component_128", "1x crazyae2addons:portable_spatial_storage", "1x gtceu:uv_field_generator",
            "1x extendedae_plus:oblivion_singularity", "4x #forge:ingots/netherite", "2x gtceu:quantum_star"
        )
        .inputFluids("gtceu:neutronium 1024")
        .itemOutputs("extendedae_plus:spatial_core")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.assembly_line("kubejs:ae2/infinity_core")
        .itemInputs("extendedae_plus:storage_core", "extendedae_plus:quantum_storage_core", "extendedae_plus:spatial_core", 
            "4x gtceu:gravi_star", "4x gtceu:fluix_dark_steel_rotor", "6x #gtceu:circuits/uv", 
            "24x gtceu:small_sky_steel_gear", "8x advanced_ae:shattered_singularity", "4x gtceu:uv_field_generator")
        .inputFluids("gtceu:gold_sky_steel 2880", "gtceu:certus_sky_steel 2880", "gtceu:diamond_sky_steel 2880", "gtceu:purple_dye 576")
        .itemOutputs("extendedae_plus:infinity_core")
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("megacells:bulk_cell_component")
            .CWUt(64, 384000)
            .EUt(GTValues.VA[GTValues.UV])
        )

    // Remove alternate filled cell recipes
    event.remove({id: "ae2:network/cells/item_storage_cell_1k"})
    event.remove({id: "ae2:network/cells/item_storage_cell_4k"})
    event.remove({id: "ae2:network/cells/item_storage_cell_16k"})
    event.remove({id: "ae2:network/cells/item_storage_cell_64k"})
    event.remove({id: "ae2:network/cells/item_storage_cell_256k"})
    event.remove({id: "ae2:network/cells/fluid_storage_cell_1k"})
    event.remove({id: "ae2:network/cells/fluid_storage_cell_4k"})
    event.remove({id: "ae2:network/cells/fluid_storage_cell_16k"})
    event.remove({id: "ae2:network/cells/fluid_storage_cell_64k"})
    event.remove({id: "ae2:network/cells/fluid_storage_cell_256k"})
    event.remove({id: "ae2:network/cells/spatial_storage_cell_2_cubed"})
    event.remove({id: "ae2:network/cells/spatial_storage_cell_16_cubed"})
    event.remove({id: "ae2:network/cells/spatial_storage_cell_128_cubed"})
    event.remove({id: "megacells:cells/standard/item_storage_cell_1m"})
    event.remove({id: "megacells:cells/standard/item_storage_cell_4m"})
    event.remove({id: "megacells:cells/standard/item_storage_cell_16m"})
    event.remove({id: "megacells:cells/standard/item_storage_cell_64m"})
    event.remove({id: "megacells:cells/standard/item_storage_cell_256m"})
    event.remove({id: "megacells:cells/standard/fluid_storage_cell_1m"})
    event.remove({id: "megacells:cells/standard/fluid_storage_cell_4m"})
    event.remove({id: "megacells:cells/standard/fluid_storage_cell_16m"})
    event.remove({id: "megacells:cells/standard/fluid_storage_cell_64m"})
    event.remove({id: "megacells:cells/standard/fluid_storage_cell_256m"})

    // Presses
    event.recipes.gtceu.forming_press("kubejs:ae2/calculation_processor_press")
        .itemInputs("1x gtceu:vanadium_steel_block", "1x #forge:gems/certus_quartz")
        .itemOutputs("1x ae2:calculation_processor_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/engineering_processor_press")
        .itemInputs("1x gtceu:vanadium_steel_block", "1x #forge:gems/diamond")
        .itemOutputs("1x ae2:engineering_processor_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/logic_processor_press")
        .itemInputs("1x gtceu:vanadium_steel_block", "1x #forge:ingots/gold")
        .itemOutputs("1x ae2:logic_processor_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/silicon_press")
        .itemInputs("1x gtceu:vanadium_steel_block", "1x gtceu:silicon_boule")
        .itemOutputs("1x ae2:silicon_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/name_press")
        .itemInputs("1x gtceu:vanadium_steel_block", "1x minecraft:name_tag")
        .itemOutputs("1x ae2:name_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.forming_press("kubejs:ae2/accumulation_processor_press")
        .itemInputs("1x gtceu:molybdenum_block", "1x gtceu:exquisite_fluix_gem")
        .itemOutputs("1x megacells:accumulation_processor_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.forming_press("kubejs:ae2/quantum_processor_press")
        .itemInputs("1x gtceu:molybdenum_block", "1x gtceu:quantum_eye")
        .itemOutputs("1x advanced_ae:quantum_processor_press")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV])

    // Pattern Providers
    event.remove({id:"ae2:network/blocks/pattern_providers_interface"})
    event.remove({id:"advanced_ae:smalladvpatpro"})
    event.remove({id:"megacells:network/mega_pattern_provider"})
    event.remove({id:"expatternprovider:epp"})
    event.remove({id:"advanced_ae:eaeadvpatpro"})
    event.remove({id:"expandedae:crafting/exp_pattern_provider"})

    event.remove({id:"expatternprovider:epp_upgrade"})
    event.remove({id:"advanced_ae:smallappupgrade"})
    event.remove({id:"advanced_ae:largeappupgrade"})
    event.remove({id:"expandedae:exp_pattern_provider_upgrade"})
    event.remove({id:"crazyae2addons:crazy_upgrade"})

    event.shaped("ae2:pattern_provider", [
        "AEA",
        "BDC",
        "AEA"
    ], {
        A: "gtceu:sky_steel_plate",
        B: "ae2:annihilation_core",
        C: "ae2:formation_core",
        D: "gtceu:mv_machine_hull",
        E: "gtceu:mv_robot_arm"
    }).id("kubejs:ae2/pattern_provider")

    event.recipes.gtceu.assembler("kubejs:ae2/advanced_pattern_provider")
        .itemInputs("1x ae2:pattern_provider", "2x ae2:logic_processor", "1x functionalstorage:pusher_upgrade", "4x gtceu:ender_pearl_plate")
        .itemOutputs("1x advanced_ae:small_adv_pattern_provider")
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(5)
        
    event.recipes.gtceu.assembler("kubejs:ae2/mega_pattern_provider")
        .itemInputs("2x ae2:pattern_provider", "2x ae2:capacity_card", "2x #gtceu:circuits/hv", "4x gtceu:gold_sky_steel_plate")
        .itemOutputs("1x megacells:mega_pattern_provider")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/extended_pattern_provider")
        .itemInputs("2x megacells:mega_pattern_provider", "2x ae2:capacity_card", "4x ae2:engineering_processor", "4x gtceu:double_gold_sky_steel_plate")
        .itemOutputs("1x expatternprovider:ex_pattern_provider")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/advanced_extended_pattern_provider")
        .itemInputs("1x expatternprovider:ex_pattern_provider", "2x ae2:logic_processor", "1x functionalstorage:pusher_upgrade", "4x gtceu:ender_pearl_plate")
        .itemOutputs("1x advanced_ae:adv_pattern_provider")
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/expanded_pattern_provider")
        .itemInputs("2x expatternprovider:ex_pattern_provider", "4x ae2:capacity_card", "2x #gtceu:circuits/ev", "4x gtceu:double_certus_sky_steel_plate")
        .itemOutputs("1x expandedae:exp_pattern_provider")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/crazy_pattern_provider")
        .itemInputs("2x expandedae:exp_pattern_provider", "8x ae2:capacity_card", "1x #gtceu:circuits/iv", "6x gtceu:double_diamond_sky_steel_plate")
        .itemOutputs("1x crazyae2addons:crazy_pattern_provider")
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/crazy_upgrade")
        .itemInputs("1x megacells:bulk_cell_component", "4x ae2:capacity_card", "4x ae2:calculation_processor", "4x gtceu:diamond_sky_steel_ring")
        .itemOutputs("1x crazyae2addons:crazy_upgrade")
        .duration(320)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(5)

    // Interfaces
    event.remove({id: "ae2:network/blocks/inferfaces_interface"})
    event.remove({not: {id: "ae2:network/blocks/inferfaces_interface_alt"}, output: "ae2:interface" })
    event.remove({id: "megacells:network/mega_interface"})
    event.remove({id: "expatternprovider:ei"})
    event.remove({id: "expatternprovider:oversize_interface"})

    event.shaped("ae2:interface", [
        "AAA",
        "BDC",
        "AEA"
    ], {
        A: "gtceu:sky_steel_plate",
        B: "ae2:annihilation_core",
        C: "ae2:formation_core",
        D: "gtceu:lv_machine_hull",
        E: "gtceu:mv_robot_arm"
    }).id("kubejs:ae2/interface")

    event.recipes.gtceu.assembler("kubejs:ae2/mega_interface")
        .itemInputs("2x ae2:interface", "2x ae2:capacity_card", "2x #gtceu:circuits/hv", "4x gtceu:diamond_sky_steel_plate")
        .itemOutputs("1x megacells:mega_interface")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/extended_interface")
        .itemInputs("2x megacells:mega_interface", "2x ae2:capacity_card", "4x ae2:engineering_processor", "4x gtceu:double_certus_sky_steel_plate")
        .itemOutputs("1x expatternprovider:ex_interface")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)

    event.recipes.gtceu.assembler("kubejs:ae2/oversize_interface")
        .itemInputs("2x expatternprovider:ex_interface", "4x ae2:capacity_card", "2x #gtceu:circuits/ev", "1x expatternprovider:ingredient_buffer",
            "4x gtceu:double_uranium_plate", "8x gtceu:fluix_dark_steel_screw")
        .itemOutputs("1x expatternprovider:oversize_interface")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(5)

    // IO Buses
    event.remove({id: "ae2:network/parts/import_bus"})
    event.remove({id: "ae2:network/parts/export_bus"})
    event.remove({id: "expatternprovider:ebus_in"})
    event.remove({id: "expatternprovider:ebus_out"})
    event.remove({id: "advanced_ae:import_export_bus"})
    event.remove({id: "expatternprovider:tag_export_bus"})
    event.remove({id: "expatternprovider:mod_export_bus"})
    event.remove({id: "expatternprovider:pre_bus"})
    event.remove({id: "expatternprovider:threshold_export_bus"})
    event.remove({id: "advanced_ae:stock_export_bus"})
    event.remove({id: "crazyae2addons:nbt_export_bus"})
    event.remove({id: "crazyae2addons:mob_export_bus"})

    event.shaped("ae2:import_bus", [
        " C ",
        "ABA",
        "   "
    ], {
        A: "gtceu:sky_steel_plate",
        B: "gtceu:mv_input_bus",
        C: "ae2:annihilation_core"
    }).id("kubejs:ae2/import_bus")

    event.recipes.gtceu.assembler("kubejs:ae2/extended_import_bus")
        .itemInputs("1x ae2:import_bus", "4x ae2:speed_card", "2x ae2:calculation_processor", "4x gtceu:sky_steel_ring")
        .itemOutputs("1x expatternprovider:ex_import_bus_part")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)

    event.shaped("ae2:export_bus", [
        "ACA",
        " B ",
        "   "
    ], {
        A: "gtceu:sky_steel_plate",
        B: "gtceu:mv_output_bus",
        C: "ae2:formation_core"
    }).id("kubejs:ae2/export_bus")

    event.recipes.gtceu.assembler("kubejs:ae2/extended_export_bus")
        .itemInputs("1x ae2:export_bus", "4x ae2:speed_card", "2x ae2:calculation_processor", "4x gtceu:sky_steel_ring")
        .itemOutputs("1x expatternprovider:ex_export_bus_part")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)

    event.recipes.gtceu.forming_press("kubejs:ae2/import_export_bus")
        .itemInputs("1x ae2:import_bus", "1x ae2:export_bus", "1x ae2:fluix_pearl", "2x ae2:logic_processor", "4x gtceu:sky_steel_foil")
        .itemOutputs("1x advanced_ae:import_export_bus_part")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/tag_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/orange")
        .itemOutputs("expatternprovider:tag_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/mod_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/green")
        .itemOutputs("expatternprovider:mod_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/precise_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/light_blue")
        .itemOutputs("expatternprovider:precise_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/threshold_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/red")
        .itemOutputs("expatternprovider:threshold_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/stock_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/purple")
        .itemOutputs("advanced_ae:stock_export_bus_part")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/nbt_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/light_gray")
        .itemOutputs("crazyae2addons:nbt_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.laser_engraver("kubejs:ae2/mob_export_bus")
        .itemInputs("ae2:export_bus")
        .notConsumable("#forge:lenses/cyan")
        .itemOutputs("crazyae2addons:mob_export_bus")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV])

    // Energy cells
    event.remove({id:"ae2:network/blocks/energy_energy_cell"})

    event.shaped("ae2:energy_cell", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:battery_alloy_plate",
        B: "ae2:quartz_vibrant_glass",
        C: "gtceu:charged_certus_quartz_block"
    }).id("kubejs:ae2/energy_cell")

    const energyCells = [
        ["4k_energy_cell", "megacells:mega_energy_cell", "gtceu:flawless_topaz_gem", "gtceu:double_electrum_plate", "crazyae2addons:energy_storage_4k"],
        ["16k_energy_cell", "crazyae2addons:energy_storage_4k", "gtceu:flawless_emerald_gem", "gtceu:double_uranium_235_plate", "crazyae2addons:energy_storage_16k"],
        ["64k_energy_cell", "crazyae2addons:energy_storage_16k", "gtceu:flawless_charged_certus_quartz_gem", "gtceu:double_ruthenium_plate", "crazyae2addons:energy_storage_64k"],
        ["256k_energy_cell", "crazyae2addons:energy_storage_64k", "gtceu:flawless_fluix_gem", "gtceu:double_molybdenum_disilicide_plate", "crazyae2addons:energy_storage_256k"],
        ["1m_energy_cell", "crazyae2addons:energy_storage_256k", "gtceu:exquisite_spessartine_gem", "gtceu:double_annealed_copper_plate", "crazyae2addons:energy_storage_1m"],
        ["4m_energy_cell", "crazyae2addons:energy_storage_1m", "gtceu:exquisite_andradite_gem", "gtceu:double_gold_plate", "crazyae2addons:energy_storage_4m"],
        ["16m_energy_cell", "crazyae2addons:energy_storage_4m", "gtceu:exquisite_uvarovite_gem", "gtceu:double_incoloy_ma_956_plate", "crazyae2addons:energy_storage_16m"],
        ["64m_energy_cell", "crazyae2addons:energy_storage_16m", "gtceu:exquisite_blue_topaz_gem", "gtceu:double_blue_alloy_plate", "crazyae2addons:energy_storage_64m"],
        ["256m_energy_cell", "crazyae2addons:energy_storage_64m", "gtceu:exquisite_amethyst_gem", "gtceu:double_indium_gallium_phosphide_plate", "crazyae2addons:energy_storage_256m"],
        ["creative_energy_cell", "crazyae2addons:energy_storage_256m", "ae2:singularity", "gtceu:dense_naquadah_alloy_plate", "ae2:creative_energy_cell"]
    ]

    for (const ingredients of energyCells) {
        event.shaped(ingredients[4], [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: ingredients[3],
            B: ingredients[1],
            C: ingredients[2]
        }).id(`kubejs:ae2/${ingredients[0]}`)
    }

    // Crafting cores
    event.remove({id:"ae2:network/crafting/cpu_crafting_unit"})
    event.remove({id:"megacells:crafting/mega_crafting_unit"})
    event.remove({id:"expandedae:crafting/exp_crafting_unit_mega"})

    event.shaped("ae2:crafting_unit", [
        "ABA",
        "DCD",
        "ABA"
    ], {
        A: "gtceu:double_certus_sky_steel_plate",
        B: "ae2:calculation_processor",
        C: "#gtceu:circuits/hv",
        D: "#ae2:glass_cable"
    }).id("kubejs:ae2/crafting_unit")

    event.shaped("megacells:mega_crafting_unit", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "ae2:crafting_unit",
        B: "gtceu:double_dark_steel_plate",
        C: "#gtceu:circuits/iv",
        D: "#ae2:smart_cable"
    }).id("kubejs:ae2/mega_crafting_unit")

    event.shaped("expandedae:exp_crafting_unit", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "megacells:mega_crafting_unit",
        B: "gtceu:double_fluix_dark_steel_plate",
        C: "#gtceu:circuits/zpm",
        D: "#ae2:smart_dense_cable"
    }).id("kubejs:ae2/expanded_crafting_unit")

    event.recipes.gtceu.assembler("kubejs:ae2/4x_coprocessor")
        .itemInputs("1x ae2:crafting_unit", "2x ae2:crafting_accelerator", "6x ae2:engineering_processor", 
            "#gtceu:circuits/hv", "16x gtceu:fine_lead_wire")
        .itemOutputs("1x mae2:4x_crafting_accelerator")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/16x_coprocessor")
        .itemInputs("1x ae2:crafting_unit", "2x mae2:4x_crafting_accelerator", "9x ae2:engineering_processor", 
            "#gtceu:circuits/ev", "16x gtceu:fine_rhodium_wire")
        .itemOutputs("1x mae2:16x_crafting_accelerator")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/64x_coprocessor")
        .itemInputs("1x megacells:mega_crafting_unit", "2x mae2:16x_crafting_accelerator", "6x megacells:accumulation_processor", 
            "#gtceu:circuits/ev", "16x gtceu:fine_red_alloy_wire")
        .itemOutputs("1x mae2:64x_crafting_accelerator")
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/256x_coprocessor")
        .itemInputs("1x megacells:mega_crafting_unit", "2x mae2:64x_crafting_accelerator", "9x megacells:accumulation_processor", 
            "#gtceu:circuits/iv", "16x gtceu:fine_annealed_copper_wire")
        .itemOutputs("1x mae2:256x_crafting_accelerator")
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/1024x_coprocessor")
        .itemInputs("1x megacells:mega_crafting_unit", "2x mae2:256x_crafting_accelerator", "12x megacells:accumulation_processor", 
            "#gtceu:circuits/iv", "16x gtceu:fine_iridium_wire")
        .itemOutputs("1x extendedae_plus:1024x_crafting_accelerator")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/4kx_coprocessor")
        .itemInputs("1x expandedae:exp_crafting_unit", "2x extendedae_plus:1024x_crafting_accelerator", "6x advanced_ae:quantum_processor", 
            "#gtceu:circuits/luv", "16x gtceu:fine_iridium_wire")
        .itemOutputs("1x expandedae:exp_crafting_accelerator_4k")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/16kx_coprocessor")
        .itemInputs("1x expandedae:exp_crafting_unit", "2x expandedae:exp_crafting_accelerator_4k", "9x advanced_ae:quantum_processor", 
            "#gtceu:circuits/luv", "16x gtceu:fine_europium_wire")
        .itemOutputs("1x expandedae:exp_crafting_accelerator_16k")
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/64kx_coprocessor")
        .itemInputs("1x expandedae:exp_crafting_unit", "2x expandedae:exp_crafting_accelerator_16k", "12x advanced_ae:quantum_processor", 
            "#gtceu:circuits/zpm", "16x gtceu:fine_osmiridium_wire")
        .itemOutputs("1x expandedae:exp_crafting_accelerator_64k")
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/256kx_coprocessor")
        .itemInputs("1x expandedae:exp_crafting_unit", "2x expandedae:exp_crafting_accelerator_64k", "16x megacells:bulk_cell_component", 
            "#gtceu:circuits/zpm", "16x gtceu:trinium_single_wire")
        .itemOutputs("1x expandedae:exp_crafting_accelerator_256k")
        .duration(240)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(5)
    event.recipes.gtceu.assembler("kubejs:ae2/1mx_coprocessor")
        .itemInputs("1x expandedae:exp_crafting_unit", "2x expandedae:exp_crafting_accelerator_256k", "32x megacells:bulk_cell_component", 
            "#gtceu:circuits/uv", "16x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .itemOutputs("1x expandedae:exp_crafting_accelerator_1m")
        .duration(240)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(5)

    // Cards
    event.remove({id:"ae2:materials/basiccard"})
    event.remove({id:"ae2:materials/advancedcard"})
    event.remove({id:"ae2wtlib:quantum_bridge_card"})
    event.remove({id:"ae2wtlib:magnet_card"})
    event.remove({id:"crazyae2addons:looting_upgrade_card"})
    event.remove({id:"crazyae2addons:experience_upgrade_card"})
    event.remove({id:"advanced_ae:quantum_base_card"})
    event.remove({id:"extendedae_plus:entity_speed_card_8x"})
    event.remove({id:"extendedae_plus:entity_speed_card_16x"})
    event.remove({id:"advanced_ae:auto_feed_card"}) // Only this one has a recipe id that doesnt match the item id.

    event.shaped("2x ae2:basic_card", [
        "AB ",
        "CDB",
        "AB "
    ], {
        A: "gtceu:fine_gold_wire",
        B: "gtceu:steel_plate",
        C: "#gtceu:circuits/lv",
        D: "ae2:logic_processor"
    }).id("kubejs:ae2/basic_card")

    event.shaped("2x ae2:advanced_card", [
        "AB ",
        "CDB",
        "AB "
    ], {
        A: "gtceu:fine_aluminium_wire",
        B: "gtceu:steel_plate",
        C: "#gtceu:circuits/mv",
        D: "ae2:engineering_processor"
    }).id("kubejs:ae2/advanced_card")

    event.shaped("ae2wtlib:quantum_bridge_card", [
        "BCB",
        "BAB",
        "BDB"
    ], {
        A: "ae2:advanced_card",
        B: "ae2:quantum_ring",
        C: "ae2:wireless_receiver",
        D: "ae2:fluix_pearl"
    }).id("kubejs:ae2/quantum_bridge_card")

    event.shapeless("ae2wtlib:magnet_card", ["ae2:advanced_card", "ae2:annihilation_plane", "gtceu:lv_item_magnet"]).id("kubejs:ae2/magnet_card")
    event.shapeless(Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":2}'), ["ae2:advanced_card", "gtceu:mv_world_accelerator", "gtceu:quantum_star"]).id("kubejs:ae2/entity_speed_card")
    event.shapeless(Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":4}'), ["ae2:advanced_card", "gtceu:ev_world_accelerator", "gtceu:quantum_star"]).id("kubejs:ae2/entity_speed_card_4")
    event.shapeless(Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":8}'), ["ae2:advanced_card", "gtceu:luv_world_accelerator", "gtceu:gravi_star"]).id("kubejs:ae2/entity_speed_card_8")
    event.shapeless(Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":16}'), ["ae2:advanced_card", "gtceu:uv_world_accelerator", "gtceu:gravi_star"]).id("kubejs:ae2/entity_speed_card_16")
    event.shapeless("crazyae2addons:looting_upgrade_card", [
        "ae2:advanced_card", 
        Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4).strongNBT(), 
        Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 4).strongNBT()
    ]).id("kubejs:ae2/looting_upgrade_card")
    event.shapeless("crazyae2addons:experience_upgrade_card", [
        "ae2:advanced_card", 
        Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 2).strongNBT(), 
        Item.of('minecraft:enchanted_book').enchant('infinite_abyss:crystal_affinity', 4).strongNBT()
    ]).id("kubejs:ae2/experience_upgrade_card")

    event.shaped("2x advanced_ae:quantum_upgrade_base", [
        " B ",
        "BDB",
        "ACA"
    ], {
        A: "gtceu:fine_palladium_wire",
        B: "advanced_ae:quantum_alloy_plate",
        C: "#gtceu:circuits/iv",
        D: "advanced_ae:quantum_processor"
    }).id("kubejs:ae2/quantum_card")

    const quantumUpgrades = [
        ["walk_speed_card", "advanced_ae:quantum_upgrade_base", "2x expandedae:greater_accel_card", "4x gtceu:fine_electrum_wire", "2x gtceu:carbon_fiber_plate", "4x gtceu:gold_sky_steel_ring", GTValues.VA[GTValues.IV]],
        ["sprint_speed_card", "advanced_ae:quantum_upgrade_base", "4x expandedae:greater_accel_card", "4x gtceu:fine_ruridit_wire", "3x gtceu:double_graphene_plate", "6x gtceu:diamond_sky_steel_ring", GTValues.VA[GTValues.IV]],
        ["step_assist_card", "advanced_ae:quantum_upgrade_base", "4x advanced_ae:quantum_alloy_stairs", "4x gtceu:ev_electric_piston", "2x gtceu:carbon_fiber_plate", "4x gtceu:small_sky_steel_gear", GTValues.VA[GTValues.IV]],
        ["jump_height_card", "advanced_ae:quantum_upgrade_base", "2x tconstruct:earth_congealed_slime", "2x gtceu:iv_electric_piston", "2x gtceu:industrial_tnt", "4x gtceu:double_diamond_sky_steel_plate", GTValues.VA[GTValues.IV]],
        ["lava_immunity_card", "advanced_ae:quantum_upgrade_base", "1x gtceu:platinum_lighter", "8x gtceu:rhenium_dust", "4x gtceu:dense_obsidian_plate", "4x gtceu:certus_sky_steel_ring", GTValues.VA[GTValues.LuV]],
        ["flight_card", "advanced_ae:quantum_upgrade_base", "1x gtceu:advanced_quarktech_chestplate", "1x deeperdarker:soul_elytra", "16x gtceu:naquadria_foil", "12x gtceu:fluix_dark_steel_ring", GTValues.VA[GTValues.ZPM]],
        ["water_breathing_card", "advanced_ae:quantum_upgrade_base", "2x minecraft:heart_of_the_sea", Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}').strongNBT(), "2x gtceu:watertight_steel_plate", "8x gtceu:dark_steel_screw", GTValues.VA[GTValues.IV]],
        ["auto_feeding_card", "advanced_ae:quantum_upgrade_base", "2x ae2:wireless_access_point", "1x minecraft:enchanted_golden_apple", "2x #gtceu:circuits/ev", "6x gtceu:small_sky_steel_gear", GTValues.VA[GTValues.IV]],
        ["auto_stock_card", "advanced_ae:quantum_upgrade_base", "2x ae2:wireless_access_point", "3x gtceu:ev_conveyor_module", "2x #gtceu:circuits/ev", "4x gtceu:sky_steel_gear", GTValues.VA[GTValues.IV]],
        ["hp_buffer_card", "advanced_ae:quantum_upgrade_base", "1x artifacts:crystal_heart", Item.of('tconstruct:large_plate', '{Material:"tconstruct:nahuatl"}').strongNBT(), "32x gtceu:rad_away_pill", "6x gtceu:fluix_dark_steel_bolt", GTValues.VA[GTValues.ZPM]],
        ["evasion_card", "advanced_ae:quantum_upgrade_base", "3x gtceu:ev_electric_motor", "16x gtceu:graphene_foil", "4x minecraft:rabbit_hide", "2x advanced_ae:quantum_alloy_plate", GTValues.VA[GTValues.LuV]],
        ["regeneration_card", "advanced_ae:quantum_upgrade_base", Item.of('minecraft:potion', '{Potion:"minecraft:long_regeneration"}').strongNBT(), "4x minecraft:golden_apple", "4x gtceu:dense_rhodium_plated_palladium_plate", "8x gtceu:gold_sky_steel_ring", GTValues.VA[GTValues.LuV]],
        ["strength_card", "advanced_ae:quantum_upgrade_base", Item.of('minecraft:potion', '{Potion:"minecraft:long_strength"}').strongNBT(), "1x twilightforest:giant_sword", "4x gtceu:dense_tungsten_steel_plate", "8x gtceu:diamond_sky_steel_ring", GTValues.VA[GTValues.LuV]],
        ["attack_speed_card", "advanced_ae:quantum_upgrade_base", Item.of('minecraft:potion', '{Potion:"minecraft:long_haste"}').strongNBT(), "8x gtceu:purple_drink", "4x gtceu:double_hastelloy_x_plate", "8x gtceu:certus_sky_steel_ring", GTValues.VA[GTValues.LuV]],
        ["luck_card", "advanced_ae:quantum_upgrade_base", Item.of('minecraft:potion', '{Potion:"minecraft:long_luck"}').strongNBT(), "4x gtceu:lutetium_dust", "4x gtceu:double_beryllium_plate", "8x gtceu:fluix_dark_steel_ring", GTValues.VA[GTValues.LuV]],
        ["reach_card", "advanced_ae:quantum_upgrade_base", "1x effortlessbuilding:elastic_hand", "2x gtceu:iv_robot_arm", "4x gtceu:double_invar_plate", "8x gtceu:dark_steel_spring", GTValues.VA[GTValues.IV]],
        ["swim_speed_card", "advanced_ae:quantum_upgrade_base", "1x minecraft:turtle_helmet", "4x gtceu:iv_electric_pump", "4x gtceu:double_zinc_plate", "6x gtceu:certus_sky_steel_rod", GTValues.VA[GTValues.IV]],
        ["night_vision_card", "advanced_ae:quantum_upgrade_base", Item.of('minecraft:potion', '{Potion:"minecraft:long_night_vision"}').strongNBT(), "1x gtceu:quarktech_helmet", "4x gtceu:double_uranium_235_plate", "4x gtceu:blacklight", GTValues.VA[GTValues.LuV]],
        ["flight_drift_card", "advanced_ae:quantum_upgrade_base", "4x gtceu:gravitation_engine_unit", "2x gtceu:zpm_field_generator", "4x gtceu:double_naquadah_alloy_plate", "3x #gtceu:circuits/uv", GTValues.VA[GTValues.ZPM]],
        ["recharging_card", "advanced_ae:quantum_upgrade_base", "2x ae2:wireless_access_point", "1x crazyae2addons:energy_storage_256m", "4x megacells:greater_energy_card", "8x gtceu:advanced_smd_capacitor", GTValues.VA[GTValues.ZPM]],
        ["portable_workbench_card", "advanced_ae:quantum_upgrade_base", "1x ae2:wireless_access_point", "1x ae2:cell_workbench", "4x gtceu:double_stellite_100_plate", "4x advanced_ae:quantum_alloy_plate", GTValues.VA[GTValues.IV]],
        ["pick_craft_card", "advanced_ae:quantum_upgrade_base", "1x ae2:wireless_access_point", "1x ae2peat:pattern_encoding_access_terminal", "4x gtceu:double_hsse_plate", "4x advanced_ae:quantum_alloy_plate", GTValues.VA[GTValues.LuV]]
    ]

    for (const upgrade of quantumUpgrades) {
        event.remove({id: `advanced_ae:${upgrade[0]}`})
        event.recipes.gtceu.assembler(`kubejs:ae2/${upgrade[0]}`)
            // Need to do this stupid method since the spread operator doesnt work and neither do any alternatives
            .itemInputs(upgrade[1], upgrade[2], upgrade[3], upgrade[4], upgrade[5])
            .itemOutputs(`advanced_ae:${upgrade[0]}`)
            .duration(300)
            .EUt(upgrade[6])
            .circuit(5)
    }

    // TODO: advanced card variants (many!)

    // Terminals (only the basic panel, the rest are honestly fine)
    event.replaceInput({id:"ae2:network/parts/panels_semi_dark_monitor"}, "minecraft:iron_ingot", "gtceu:sky_steel_plate")

    // Drive docks
    event.replaceInput({id:"ae2:network/blocks/storage_drive"}, "minecraft:iron_ingot", "gtceu:double_certus_sky_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/storage_drive"}, "ae2:engineering_processor", "#gtceu:circuits/mv")
    event.replaceInput({id:"expatternprovider:ex_drive"}, "#forge:dusts/fluix", "gtceu:double_fluix_dark_steel_plate")

    // Molecular Assemblers
    event.replaceInput({id:"ae2:network/crafting/molecular_assembler"}, "minecraft:iron_ingot", "gtceu:double_certus_sky_steel_plate")
    event.replaceInput({id:"expatternprovider:ex_molecular_assembler"}, "#forge:gems/fluix", "gtceu:double_fluix_dark_steel_plate")

    // Storage buses
    event.replaceInput({id:"ae2:network/parts/storage_bus"}, "minecraft:sticky_piston", "gtceu:mv_electric_piston")
    event.replaceInput({id:"ae2:network/parts/storage_bus"}, "minecraft:piston", "gtceu:lv_buffer")
    event.replaceInput({id:"expatternprovider:tag_storage_bus"}, "minecraft:redstone", "gtceu:red_alloy_foil")
    event.replaceInput({id:"expatternprovider:mod_storage_bus"}, "minecraft:redstone", "gtceu:manganese_foil")
    event.replaceInput({id:"expatternprovider:precise_storage_bus"}, "ae2:calculation_processor", "#gtceu:circuits/ulv")
    event.replaceInput({id:"crazyae2addons:nbt_storage_bus"}, "ae2:logic_processor", "gtceu:niobium_nitride_foil")

    // IO Ports
    event.replaceInput({id:"ae2:network/blocks/io_port"}, "minecraft:iron_ingot", "gtceu:double_certus_sky_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/io_port"}, "#forge:glass", "ae2:quartz_vibrant_glass")
    event.replaceInput({id:"expatternprovider:ex_io_port"}, "ae2:logic_processor", "gtceu:double_fluix_dark_steel_plate")
    event.replaceInput({id:"expatternprovider:ex_io_port"}, "ae2:engineering_processor", "gtceu:double_fluix_dark_steel_plate")
    event.replaceInput({id:"expandedae:crafting/exp_io_port_ext"}, "ae2:speed_card", "expandedae:greater_accel_card")

    // Cables
    event.remove({id:"ae2:network/parts/quartz_fiber_part"})
    event.remove({id:"ae2:network/cables/glass_fluix"})
    event.remove({id:"ae2:network/cables/covered_fluix"})
    event.remove({id:"ae2:network/cables/smart_fluix"})
    event.remove({id:"ae2:network/cables/dense_smart_fluix"})

    const Colors = [
        "black",
        "red",
        "green",
        "brown",
        "blue",
        "purple",
        "cyan",
        "light_gray",
        "gray",
        "pink",
        "lime",
        "yellow",
        "light_blue",
        "magenta",
        "orange",
        "white"
    ]

    event.recipes.gtceu.wiremill("kubejs:ae2/quartz_fiber")
        .itemInputs("#ae2:all_quartz")
        .itemOutputs("3x ae2:quartz_fiber")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter("kubejs:ae2/fluix_cable")
        .itemInputs("4x ae2:quartz_fiber", "#forge:gems/fluix")
        .itemOutputs("4x ae2:fluix_glass_cable")
        .duration(120)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.assembler("kubejs:ae2/covered_cable_rubber")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:rubber 144")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(60)
        .EUt(8)
    event.recipes.gtceu.assembler("kubejs:ae2/covered_cable_silicone_rubber")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:silicone_rubber 72")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(60)
        .EUt(8)
    event.recipes.gtceu.assembler("kubejs:ae2/covered_cable_styrene_butadiene_rubber")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 36")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(60)
        .EUt(8)

    event.recipes.gtceu.assembler("kubejs:ae2/smart_cable")
        .itemInputs("8x ae2:fluix_covered_cable", "#gtceu:circuits/ulv")
        .itemOutputs("8x ae2:fluix_smart_cable")
        .duration(60)
        .EUt(8)
    event.recipes.gtceu.assembler("kubejs:ae2/dense_smart_cable")
        .itemInputs("2x ae2:fluix_covered_dense_cable", "#gtceu:circuits/ulv")
        .itemOutputs("2x ae2:fluix_smart_dense_cable")
        .duration(60)
        .EUt(8)

    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_fluix_cable")
        .itemInputs("#ae2:glass_cable")
        .itemOutputs("ae2:fluix_glass_cable")
        .inputFluids("minecraft:water 125")
        .duration(100)
        .EUt(8)
    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_covered_cable")
        .itemInputs("#ae2:covered_cable")
        .itemOutputs("ae2:fluix_covered_cable")
        .inputFluids("minecraft:water 125")
        .duration(100)
        .EUt(8)
    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_smart_cable")
        .itemInputs("#ae2:smart_cable")
        .itemOutputs("ae2:fluix_smart_cable")
        .inputFluids("minecraft:water 125")
        .duration(100)
        .EUt(8)
    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_covered_dense_cable")
        .itemInputs("#ae2:covered_dense_cable")
        .itemOutputs("ae2:fluix_covered_dense_cable")
        .inputFluids("minecraft:water 125")
        .duration(100)
        .EUt(8)
    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_smart_dense_cable")
        .itemInputs("#ae2:smart_dense_cable")
        .itemOutputs("ae2:fluix_smart_dense_cable")
        .inputFluids("minecraft:water 125")
        .duration(100)
        .EUt(8)

    Colors.forEach(c => {
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/chembath_dye_fluix_cable_${c}`)
            .itemInputs("#ae2:glass_cable")
            .itemOutputs(`ae2:${c}_glass_cable`)
            .inputFluids(`gtceu:${c}_dye 18`)
            .duration(100)
            .EUt(8)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/chembath_dye_covered_cable_${c}`)
            .itemInputs("#ae2:covered_cable")
            .itemOutputs(`ae2:${c}_covered_cable`)
            .inputFluids(`gtceu:${c}_dye 18`)
            .duration(100)
            .EUt(8)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/chembath_dye_smart_cable_${c}`)
            .itemInputs("#ae2:smart_cable")
            .itemOutputs(`ae2:${c}_smart_cable`)
            .inputFluids(`gtceu:${c}_dye 18`)
            .duration(100)
            .EUt(8)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/chembath_dye_covered_dense_cable_${c}`)
            .itemInputs("#ae2:covered_dense_cable")
            .itemOutputs(`ae2:${c}_covered_dense_cable`)
            .inputFluids(`gtceu:${c}_dye 18`)
            .duration(100)
            .EUt(8)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/chembath_dye_covered_smart_cable_${c}`)
            .itemInputs("#ae2:smart_dense_cable")
            .itemOutputs(`ae2:${c}_smart_dense_cable`)
            .inputFluids(`gtceu:${c}_dye 18`)
            .duration(100)
            .EUt(8)
    })

    // Level emitters
    event.remove({id:"ae2:network/parts/level_emitter"})
    event.remove({id:"ae2:network/parts/energy_level_emitter"})
    event.remove({id:"crazyae2addons:redstone_emitter"})

    event.shapeless("ae2:level_emitter", ["minecraft:redstone_torch", "gtceu:stainless_steel_plate", "ae2:calculation_processor"]).id("kubejs:ae2/level_emitter")
    event.shapeless("ae2:energy_level_emitter", ["minecraft:redstone_torch", "gtceu:stainless_steel_plate", "ae2:calculation_processor", "#forge:gems/certus_quartz"]).id("kubejs:ae2/energy_level_emitter")
    event.shapeless("crazyae2addons:multi_level_emitter", ["ae2:level_emitter", "#gtceu:circuits/iv", "ae2:logic_processor"]).id("kubejs:ae2/multi_level_emitter")
    event.shapeless("crazyae2addons:tag_level_emitter", ["ae2:level_emitter", "minecraft:book", "ae2:logic_processor"]).id("kubejs:ae2/tag_level_emitter")
    event.shapeless("crazyae2addons:redstone_emitter", ["ae2:level_emitter", "gtceu:small_red_alloy_spring"]).id("kubejs:ae2/redstone_emitter")

    // AE2 remaining
    event.replaceInput({id:"ae2:tools/network_memory_card"}, "minecraft:iron_ingot", "gtceu:sky_steel_plate")
    event.replaceInput({id:"ae2:tools/network_memory_card"}, "minecraft:gold_ingot", "gtceu:fine_gold_wire")
    event.replaceInput({id:"ae2:tools/network_memory_card"}, "minecraft:redstone", "#gtceu:circuits/lv")

    event.remove({id:"ae2:network/crafting/patterns_blank"})
    const blankPatterns = [
        ["#gtceu:circuits/hv", "gtceu:fine_silver_wire", "gtceu:polyethylene_plate", 4],
        ["#gtceu:circuits/ev", "gtceu:fine_palladium_wire", "gtceu:polytetrafluoroethylene_plate", 8],
        ["#gtceu:circuits/iv", "gtceu:fine_ruridit_wire", "gtceu:polybenzimidazole_plate", 16]
    ]
    for (const pattern of blankPatterns) {
        event.shaped(`${pattern[3]}x ae2:blank_pattern`, [
            "ABA",
            "BCB",
            "DDD"
        ], {
            A: "ae2:quartz_glass",
            B: pattern[1],
            C: pattern[0],
            D: pattern[2]
        }).id(`kubejs:ae2/blank_pattern_${pattern[3]}x`)
    }

    event.recipes.gtceu.assembler("kubejs:ae2/meteorite_compass")
        .itemInputs("4x gtceu:steel_plate", "1x #forge:gems/charged_certus_quartz", "1x gtceu:magnetic_iron_rod")
        .itemOutputs("1x ae2:meteorite_compass")
        .duration(360)
        .EUt(GTValues.VA[GTValues.ULV])

    event.replaceInput({id:"ae2:network/wireless_part"}, "minecraft:iron_ingot", "gtceu:certus_sky_steel_plate")
    event.replaceInput({id:"ae2:network/wireless_booster"}, "minecraft:iron_ingot", "gtceu:double_certus_sky_steel_plate")
    event.replaceInput({id:"ae2:network/wireless_booster"}, "#forge:gems/certus_quartz", "gtceu:fine_hssg_wire")

    event.remove({id:"ae2:network/cells/view_cell"})

    event.shapeless("ae2:guide", ["minecraft:book", "#forge:gems/certus_quartz"]).id("kubejs:ae2/guide")

    event.recipes.gtceu.chemical_bath("kubejs:ae2/repair_damaged_budding_quartz")
        .itemInputs("#forge:storage_blocks/certus_quartz", "#forge:gems/certus_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("1x ae2:damaged_budding_quartz")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/repair_chipped_budding_quartz")
        .itemInputs("1x ae2:damaged_budding_quartz", "#forge:gems/certus_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("1x ae2:chipped_budding_quartz")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/repair_flawed_budding_quartz")
        .itemInputs("1x ae2:chipped_budding_quartz", "#forge:gems/certus_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("1x ae2:flawed_budding_quartz")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.chemical_bath("kubejs:ae2/repair_flawless_budding_quartz")
        .itemInputs("1x ae2:flawed_budding_quartz", "#forge:gems/certus_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("1x ae2:flawless_budding_quartz")
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    event.replaceInput({id:"ae2:decorative/quartz_vibrant_glass"}, "minecraft:glowstone_dust", "gtceu:vibrant_alloy_foil")
    event.remove({id:"ae2:decorative/quartz_fixture"})
    event.replaceInput({id:"ae2:misc/tiny_tnt"}, "minecraft:gunpowder", "gtceu:gelled_toluene")
    event.replaceInput({id:"ae2:network/crystal_resonance_generator"}, "minecraft:copper_ingot", "gtceu:copper_single_wire")
    event.replaceInput({id:"ae2:network/crystal_resonance_generator"}, "minecraft:iron_ingot", "gtceu:steel_plate")
    event.replaceInput({id:"ae2:network/blocks/energy_energy_acceptor"}, "minecraft:copper_ingot", "gtceu:lv_machine_hull")
    event.replaceInput({id:"ae2:network/blocks/energy_energy_acceptor"}, "minecraft:iron_ingot", "gtceu:double_battery_alloy_plate")
    event.replaceInput({id:"ae2:network/blocks/controller"}, "minecraft:engineering_processor", "ae2:energy_acceptor")
    event.replaceInput({id:"ae2:network/blocks/controller"}, "#forge:gems/fluix", "#gtceu:circuits/lv")
    event.replaceInput({id:"ae2:network/blocks/cell_workbench"}, "#minecraft:wool", "#forge:gems/certus_quartz")
    event.replaceInput({id:"ae2:network/blocks/cell_workbench"}, "minecraft:iron_ingot", "gtceu:steel_plate")
    event.replaceInput({id:"ae2:network/parts/annihilation_plane_alt2"}, "ae2:fluix_crystal", "gtceu:fluix_plate")
    event.replaceInput({id:"ae2:network/parts/annihilation_plane_alt"}, "ae2:fluix_crystal", "gtceu:fluix_plate")
    event.replaceInput({id:"ae2:network/parts/formation_plane"}, "ae2:fluix_crystal", "gtceu:fluix_plate")
    event.replaceInput({id:"ae2:network/parts/formation_plane_alt"}, "ae2:fluix_crystal", "gtceu:fluix_plate")
    event.replaceInput({id:"crazyae2addons:mob_annihilation_plane"}, "minecraft:echo_shard", "gtceu:echo_shard_plate")
    event.replaceInput({id:"crazyae2addons:mob_formation_plane"}, "minecraft:echo_shard", "gtceu:echo_shard_plate")

    event.replaceInput({id:"ae2:network/blocks/quantum_link"}, "ae2:quartz_glass", "mae2:cloud_chamber")
    event.replaceInput({id:"ae2:network/blocks/quantum_ring"}, "ae2:logic_processor", "#gtceu:circuits/iv")
    event.replaceInput({id:"ae2:network/blocks/quantum_ring"}, "ae2:engineering_processor", "gtceu:quantum_star")
    event.replaceInput({id:"ae2:network/blocks/quantum_ring"}, "ae2:energy_cell", "megacells:mega_energy_cell")
    event.replaceInput({id:"ae2:network/blocks/quantum_ring"}, "minecraft:iron_ingot", "gtceu:yttrium_barium_cuprate_plate")
    event.replaceInput({id:"ae2:network/blocks/spatial_io_port"}, "minecraft:iron_ingot", "gtceu:double_fluix_dark_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/spatial_io_port"}, "#forge:glass", "mae2:cloud_chamber")
    event.replaceInput({id:"ae2:network/blocks/storage_chest"}, "minecraft:iron_ingot", "gtceu:sky_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/storage_chest"}, "minecraft:copper_ingot", "gtceu:copper_single_cable")
    event.replaceInput({id:"ae2:network/blocks/storage_chest"}, "#forge:glass", "ae2:quartz_glass")
    event.replaceInput({id:"ae2:network/blocks/io_condenser"}, "minecraft:iron_ingot", "gtceu:diamond_sky_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/io_condenser"}, "#forge:glass", "mae2:cloud_chamber")
    event.replaceInput({id:"ae2:network/blocks/crystal_processing_growth_accelerator"}, "minecraft:iron_ingot", "gtceu:double_dark_steel_plate")
    event.replaceInput({id:"ae2:network/blocks/crystal_processing_growth_accelerator"}, "ae2:quartz_glass", "ae2:quartz_vibrant_glass")
    event.replaceInput({id:"ae2:network/blocks/spatial_anchor"}, "minecraft:iron_ingot", "gtceu:double_fluix_dark_steel_plate")

    event.replaceInput({id:"ae2:network/parts/tunnels_me"}, "minecraft:iron_ingot", "gtceu:polytetrafluoroethylene_plate")
    event.replaceInput({id:"ae2:network/parts/tunnels_me"}, "ae2:engineering_processor", "#gtceu:circuits/ev")
    event.remove({id:"crazyae2addons:chunky_fluid_p2p_tunnel"})
    event.remove({id:"crazyae2addons:round_robin_item_p2p_tunnel"})
    event.remove({id:"crazyae2addons:wormhole_tunnel"})

    const Tunnels = [
        "ae2:me_p2p_tunnel",
        "ae2:redstone_p2p_tunnel",
        "ae2:item_p2p_tunnel",
        "ae2:fluid_p2p_tunnel",
        "ae2:fe_p2p_tunnel",
        "ae2:light_p2p_tunnel",
        "mae2:pattern_p2p_tunnel",
        "mae2:pattern_multi_p2p_tunnel",
        "mae2:redstone_multi_p2p_tunnel",
        "mae2:fe_multi_p2p_tunnel",
        "mae2:fluid_multi_p2p_tunnel",
        "mae2:item_multi_p2p_tunnel",
        "crazyae2addons:round_robin_item_p2p_tunnel",
        "crazyae2addons:round_robin_fluid_p2p_tunnel",
        "crazyae2addons:chunky_fluid_p2p_tunnel",
        "crazyae2addons:extracting_fe_p2p_tunnel",
        "crazyae2addons:extracting_item_p2p_tunnel",
        "crazyae2addons:extracting_fluid_p2p_tunnel",
        "crazyae2addons:wormhole_tunnel"
    ]

    Tunnels.forEach(i => {
        Tunnels.forEach(j => {
            if (i != j) {
                event.stonecutting(i, j)
            }
        })
    })

    // MEGA CELLS
    event.remove({id:"megacells:cells/standard/bulk_item_cell"})
    event.shaped("megacells:bulk_item_cell", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:double_naquadria_plate",
        B: "gtceu:fusion_glass",
        C: "megacells:bulk_cell_component"
    }).id("kubejs:ae2/bulk_item_cell")

    event.replaceInput({id:"megacells:crafting/decompression_module"}, "minecraft:iron_ingot", "gtceu:double_dark_steel_plate")
    event.replaceInput({id:"megacells:network/cell_dock"}, "minecraft:iron_ingot", "gtceu:dense_dark_steel_plate")
    event.replaceInput({id:"megacells:network/cell_dock"}, "minecraft:copper_ingot", "gtceu:fine_copper_wire")

    // Advanced AE
    event.remove({id:"advanced_ae:quantum_infusion"})
    event.recipes.gtceu.mixer("kubejs:ae2/quantum_dust")
        .itemInputs("2x gtceu:holmium_dust", "1x gtceu:indium_gallium_phosphide_dust", "1x gtceu:cadmium_dust", "4x gtceu:praseodymium_dust")
        .inputFluids("gtceu:radon 500")
        .itemOutputs("8x advanced_ae:quantum_infused_dust")
        .duration(280)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(2)

    event.remove({id:"advanced_ae:quantum_alloy"})
    event.recipes.gtceu.forming_press("kubejs:ae2/quantum_alloy")
        .notConsumable("gtceu:ingot_casting_mold")
        .itemInputs("1x advanced_ae:quantum_infused_dust", "1x minecraft:netherite_ingot", "2x advanced_ae:shattered_singularity") // TODO: GT Netherite recipes
        .itemOutputs("1x advanced_ae:quantum_alloy")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.remove({id:"advanced_ae:quantum_alloy_plate"})
    event.recipes.gtceu.forge_hammer("kubejs:ae2/quantum_alloy_plate_hammer")
        .itemInputs("3x advanced_ae:quantum_alloy").itemOutputs("2x advanced_ae:quantum_alloy_plate")
        .duration(300)
        .EUt(16)
    event.recipes.gtceu.bender("kubejs:ae2/quantum_alloy_plate_bender")
        .circuit(1)
        .itemInputs("1x advanced_ae:quantum_alloy").itemOutputs("1x advanced_ae:quantum_alloy_plate")
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.extruder("kubejs:ae2/quantum_alloy_plate_extruder")
        .notConsumable("gtceu:plate_extruder_mold")
        .itemInputs("1x advanced_ae:quantum_alloy").itemOutputs("1x advanced_ae:quantum_alloy_plate")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.MV])
    event.recipes.gtceu.cutter("kubejs:ae2/quantum_alloy_plate_cutter")
        .itemInputs("1x advanced_ae:quantum_alloy_block").itemOutputs("9x advanced_ae:quantum_alloy_plate")
        .duration(2700)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({id:"advanced_ae:shatteredsingularity"})
    event.recipes.gtceu.implosion_compressor("kubejs:ae2/shattered_singularity")
        .itemInputs("1x ae2:singularity", "16x gtceu:industrial_tnt", "2x gtceu:quantum_star")
        .itemOutputs("2x advanced_ae:shattered_singularity")
        .duration(80)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.replaceInput({id:"advanced_ae:throughput_monitor_configurator"}, "minecraft:iron_ingot", "gtceu:certus_sky_steel_rod")

    event.replaceInput({id:"advanced_ae:quantum_helmet"}, "minecraft:netherite_helmet", "gtceu:quarktech_helmet")
    event.replaceInput({id:"advanced_ae:quantum_chest"}, "minecraft:netherite_chestplate", "gtceu:quarktech_chestplate")
    event.replaceInput({id:"advanced_ae:quantum_leggings"}, "minecraft:netherite_leggings", "gtceu:quarktech_leggings")
    event.replaceInput({id:"advanced_ae:quantum_boots"}, "minecraft:netherite_boots", "gtceu:quarktech_boots")

    event.remove({id:"advanced_ae:quantumunit"})
    event.shaped("advanced_ae:quantum_unit", [
        "ABA",
        "DCD",
        "ABA"
    ], {
        A: "gtceu:tungsten_carbide_plate",
        B: "ae2:singularity",
        C: "expandedae:exp_crafting_unit",
        D: "advanced_ae:quantum_processor"
    }).id("kubejs:ae2/quantum_unit")

    event.replaceInput({id:"advanced_ae:quantumcore"}, "ae2:singularity", "#gtceu:circuits/zpm")

    event.remove({id:"advanced_ae:quantumstorage128"})
    event.shaped("advanced_ae:quantum_storage_128", [
        "ABA",
        "DCD",
        "ABA"
    ], {
        A: "gtceu:fine_yttrium_barium_cuprate_wire",
        B: "advanced_ae:shattered_singularity",
        C: "advanced_ae:quantum_storage_component",
        D: "megacells:64m_crafting_storage"
    }).id("kubejs:ae2/quantum_storage_128")

    event.remove({id:"advanced_ae:quantumstorage256"})
    event.shaped("advanced_ae:quantum_storage_256", [
        "ABA",
        "DCD",
        "ABA"
    ], {
        A: "gtceu:fine_uranium_rhodium_dinaquadide_wire",
        B: "advanced_ae:shattered_singularity",
        D: "advanced_ae:quantum_storage_component",
        C: "megacells:256m_crafting_storage"
    }).id("kubejs:ae2/quantum_storage_256")

    event.replaceInput({id:"advanced_ae:advpartenc"}, "minecraft:redstone", "ae2:fluix_dust")
    event.replaceInput({id:"advanced_ae:advpartenc"}, "#forge:gems/certus_quartz", "gtceu:certus_quartz_plate")

    // Extended AE
    event.replaceInput({id:"expatternprovider:water_cell"}, "minecraft:diamond", "gtceu:double_osmium_plate")
    event.replaceInput({id:"expatternprovider:water_cell"}, "ae2:cell_component_16k", "advanced_ae:quantum_storage_component")
    event.replaceInput({id:"expatternprovider:water_cell"}, "ae2:quartz_glass", "mae2:cloud_chamber")

    event.replaceInput({id:"expatternprovider:cobblestone_cell"}, "minecraft:diamond", "gtceu:double_osmium_plate")
    event.replaceInput({id:"expatternprovider:cobblestone_cell"}, "ae2:cell_component_16k", "advanced_ae:quantum_storage_component")
    event.replaceInput({id:"expatternprovider:cobblestone_cell"}, "ae2:quartz_glass", "mae2:cloud_chamber")

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobbled_deepslate"}}'), [
        "ABA",
        "CDC",
        "EEE"
    ], {
        A: "mae2:cloud_chamber",
        B: "minecraft:lava_bucket",
        C: "minecraft:blue_ice",
        D: "advanced_ae:quantum_storage_component",
        E: "gtceu:double_osmium_plate"
    }).id("kubejs:ae2/deepslate_cell").replaceIngredient("minecraft:lava_bucket", "minecraft:bucket")

    event.remove({id:"expatternprovider:pattern_modifier"})
    event.shaped("expatternprovider:pattern_modifier", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:certus_sky_steel_plate",
        B: "gtceu:fine_vibrant_alloy_wire",
        C: "ae2:logic_processor"
    }).id("kubejs:ae2/pattern_modifier")

    event.replaceInput({id:"expatternprovider:ingredient_buffer"}, "minecraft:iron_ingot", "gtceu:steel_plate")
    event.replaceInput({id:"expatternprovider:crystal_fixer"}, "minecraft:iron_ingot", "gtceu:certus_sky_steel_rod")
    event.replaceInput({id:"expatternprovider:crystal_fixer"}, "#forge:gems/certus_quartz", "#forge:gems/charged_certus_quartz")
    event.replaceInput({id:"expatternprovider:crystal_fixer"}, "#forge:gems/fluix", "gtceu:exquisite_fluix_gem")
    event.replaceInput({id:"expatternprovider:wireless_tool"}, "minecraft:iron_ingot", "gtceu:diamond_sky_steel_plate")
    event.replaceInput({id:"expatternprovider:wireless_connector"}, "ae2:sky_dust", "gtceu:neodymium_plate")

    event.remove({id:"expatternprovider:assembler_matrix_wall"})
    event.remove({id:"expatternprovider:assembler_matrix_frame"})
    event.remove({id:"expatternprovider:assembler_matrix_glass"})
    event.remove({id:"expatternprovider:assembler_matrix_pattern"})
    event.remove({id:"expatternprovider:assembler_matrix_crafter"})
    event.remove({id:"expatternprovider:assembler_matrix_speed"})

    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_wall")
        .itemInputs("gtceu:stainless_steel_frame", "4x #ae2:smart_cable", "4x ae2:logic_processor")
        .inputFluids("gtceu:polyethylene 1440")
        .itemOutputs("2x expatternprovider:assembler_matrix_wall")
        .circuit(5)
        .duration(110)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_frame")
        .itemInputs("gtceu:blue_steel_frame", "2x #ae2:covered_cable", "4x ae2:engineering_processor", "8x gtceu:certus_sky_steel_rod")
        .inputFluids("gtceu:polyethylene 1440")
        .itemOutputs("2x expatternprovider:assembler_matrix_frame")
        .circuit(5)
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_glass")
        .itemInputs("ae2:quartz_vibrant_glass", "4x #ae2:glass_cable", "4x ae2:logic_processor")
        .inputFluids("gtceu:polyethylene 720")
        .itemOutputs("2x expatternprovider:assembler_matrix_glass")
        .circuit(5)
        .duration(90)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_pattern")
        .itemInputs("expatternprovider:assembler_matrix_wall", "2x expandedae:exp_pattern_provider", "8x gtceu:fine_cobalt_wire")
        .itemOutputs("1x expatternprovider:assembler_matrix_pattern")
        .circuit(5)
        .duration(130)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_crafter")
        .itemInputs("expatternprovider:assembler_matrix_wall", "2x expatternprovider:ex_molecular_assembler", "8x gtceu:fine_lead_wire")
        .itemOutputs("1x expatternprovider:assembler_matrix_crafter")
        .circuit(5)
        .duration(130)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_speed")
        .itemInputs("expatternprovider:assembler_matrix_wall", "2x expandedae:greater_accel_card", "8x gtceu:fine_red_alloy_wire")
        .itemOutputs("1x expatternprovider:assembler_matrix_speed")
        .circuit(5)
        .duration(130)
        .EUt(GTValues.VA[GTValues.EV])

    // Extended AE Plus
    event.replaceInput({id:"extendedae_plus:infinity_biginteger_cell"}, "ae2:quartz_vibrant_glass", "mae2:cloud_chamber")
    event.replaceInput({id:"extendedae_plus:infinity_biginteger_cell"}, "minecraft:netherite_block", "gtceu:dense_netherite_plate")
    event.replaceInput({id:"extendedae_plus:infinity_biginteger_cell"}, "minecraft:nether_star", "gtceu:gravi_star")

    event.remove({id:"extendedae_plus:assembler_matrix_upload_core"})
    event.remove({id:"extendedae_plus:assembler_matrix_speed_plus"})
    event.remove({id:"extendedae_plus:assembler_matrix_crafter_plus"})
    event.remove({id:"extendedae_plus:assembler_matrix_pattern_plus"})

    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_upload")
        .itemInputs("expatternprovider:assembler_matrix_wall", "2x ae2:wireless_booster", "8x gtceu:fine_vibrant_alloy_wire")
        .itemOutputs("1x extendedae_plus:assembler_matrix_upload_core")
        .circuit(5)
        .duration(130)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_speed_plus")
        .itemInputs("expatternprovider:assembler_matrix_frame", "4x expatternprovider:assembler_matrix_speed", "1x gtceu:zpm_field_generator", 
            Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":8}'), "24x gtceu:fine_rhodium_wire")
        .itemOutputs("1x extendedae_plus:assembler_matrix_speed_plus")
        .circuit(5)
        .duration(190)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_crafter_plus")
        .itemInputs("expatternprovider:assembler_matrix_frame", "4x expatternprovider:assembler_matrix_crafter", "1x gtceu:zpm_field_generator", 
            "2x advanced_ae:quantum_unit", "24x gtceu:fine_yttrium_barium_cuprate_wire")
        .itemOutputs("1x extendedae_plus:assembler_matrix_crafter_plus")
        .circuit(5)
        .duration(190)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.assembler("kubejs:ae2/assembler_matrix_pattern_plus")
        .itemInputs("expatternprovider:assembler_matrix_frame", "4x expatternprovider:assembler_matrix_pattern", "1x gtceu:zpm_field_generator", 
            "2x crazyae2addons:crazy_pattern_provider", "24x gtceu:fine_osmiridium_wire")
        .itemOutputs("1x extendedae_plus:assembler_matrix_pattern_plus")
        .circuit(5)
        .duration(190)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.remove({id:"extendedae_plus:wireless_transceiver"})
    event.recipes.gtceu.assembler("kubejs:ae2/wireless_transceiver")
        .itemInputs("1x ae2:quantum_link", "8x ae2:quantum_ring", "1x expatternprovider:wireless_connect", "16x gtceu:fine_energetic_alloy_wire", "16x gtceu:fine_europium_wire")
        .itemOutputs("1x extendedae_plus:wireless_transceiver")
        .circuit(5)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.replaceInput({id:"extendedae_plus:network_pattern_controller"}, "#ae2:illuminated_panel", "gtceu:hv_machine_hull")
    event.replaceInput({id:"extendedae_plus:mirror_pattern_binding_tool"}, "minecraft:iron_ingot", "gtceu:polyethylene_plate")

    event.recipes.gtceu.assembler("kubejs:ae2/entity_speed_ticker")
        .itemInputs("1x gtceu:lv_world_accelerator", "2x gtceu:ev_field_generator", "8x gtceu:vibrant_alloy_foil", "4x gtceu:double_diamond_sky_steel_plate")
        .itemOutputs("1x extendedae_plus:entity_speed_ticker")
        .circuit(5)
        .duration(320)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.remove({id:"extendedae_plus:transform/oblivion_singularity"})
    event.remove({id:"advanced_ae:oblivion_singularity"})
    event.recipes.gtceu.implosion_compressor("kubejs:ae2/oblivion_singularity")
        .itemInputs("4x advanced_ae:shattered_singularity", "4x gtceu:gravi_star", "8x gtceu:oganesson_dust")
        .itemOutputs("extendedae_plus:oblivion_singularity")
        .EUt(GTValues.VHA[GTValues.UHV])
        .duration(600)

    // Expanded AE

    // Modern AE2 Additions
    event.recipes.gtceu.forming_press("kubejs:ae2/cloud_chamber")
        .itemInputs("ae2:quartz_vibrant_glass", "4x gtceu:polyvinyl_butyral_plate", "3x gtceu:yttrium_dust", "1x gtceu:holmium_dust")
        .itemOutputs("mae2:cloud_chamber")
        .duration(130)
        .EUt(GTValues.VHA[GTValues.IV])

    event.smelting("mae2:faulty_card", "ae2:memory_card").id("kubejs:ae2/faulty_memory_card")

    // Crazy AE2 additions
    event.remove({id:"crazyae2addons:crazy_pattern_multiplier"})
    event.shaped("crazyae2addons:crazy_pattern_multiplier", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:silicone_rubber_plate",
        B: "gtceu:fine_iridium_wire",
        C: "expatternprovider:pattern_modifier"
    }).id("kubejs:ae2/crazy_pattern_multiplier")

    event.shaped("crazyae2addons:builder_pattern", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:ender_eye_plate",
        B: "gtceu:fine_borosilicate_glass_wire",
        C: "ae2:calculation_processor"
    }).id("kubejs:ae2/builder_pattern")

    event.recipes.gtceu.assembler("kubejs:ae2/ejector")
        .itemInputs("minecraft:dropper", "2x ae2:formation_plane", "1x megacells:mega_interface")
        .itemOutputs("1x crazyae2addons:ejector")
        .circuit(5)
        .duration(120)
        .EUt(GTValues.VHA[GTValues.HV])

    event.replaceInput({id:"crazyae2addons:mob_key_selector"}, "ae2:engineering_processor", "gtceu:flawless_echo_shard_gem")

    event.recipes.gtceu.extractor("kubejs:ae2/extract_xp_shard")
        .itemInputs("1x crazyae2addons:xp_shard")
        .outputFluids("sophisticatedcore:xp_still 125")
        .duration(10)
        .EUt(8)
    event.recipes.gtceu.extractor("kubejs:misc/extract_xp_bottle")
        .itemInputs("1x minecraft:experience_bottle")
        .outputFluids("sophisticatedcore:xp_still 250")
        .itemOutputs("1x minecraft:glass_bottle")
        .duration(10)
        .EUt(8)
    event.recipes.gtceu.canner("kubejs:misc/can_xp_bottle")
        .itemOutputs("1x minecraft:experience_bottle")
        .inputFluids("sophisticatedcore:xp_still 250")
        .itemInputs("1x minecraft:glass_bottle")
        .duration(40)
        .EUt(8)

    event.shaped("crazyae2addons:cpu_prio_tuner", [
        "A A",
        " A ",
        "A A"
    ], {
        A: "#forge:plates/sky_steel"
    }).id("kubejs:ae2/cpu_prio_tuner")

    event.shaped("crazyae2addons:ampere_meter", [
        "DCD",
        "BAB",
        "DED"
    ], {
        A: "gtceu:hv_machine_hull",
        B: "gtceu:lead_octal_cable",
        C: "gtceu:computer_monitor_cover",
        D: "gtceu:silicone_rubber_plate",
        E: "#gtceu:circuits/ulv"
    }).id("kubejs:ae2/ampere_meter")

    event.remove({id:"crazyae2addons:mob_farm_wall_alt5"})
    event.remove({id:"crazyae2addons:mob_farm_collector_alt15"})
    event.remove({id:"crazyae2addons:mob_farm_damage_alt11"})
    event.remove({id:"crazyae2addons:mob_farm_input_alt1"})
    event.remove({id:"crazyae2addons:mob_farm_controller_alt22"})
    event.remove({id:"crazyae2addons:spawner_extractor_wall_alt3"})
    event.remove({id:"crazyae2addons:spawner_extractor_controller_alt7"})
    event.recipes.gtceu.assembler("kubejs:ae2/mob_farm_wall")
        .itemInputs("gtceu:tungsten_frame", "4x gtceu:dense_obsidian_plate", "8x gtceu:zinc_rod")
        .inputFluids("gtceu:black_steel 576")
        .itemOutputs("2x crazyae2addons:mob_farm_wall")
        .circuit(5)
        .duration(210)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/mob_farm_collector")
        .itemInputs("crazyae2addons:mob_farm_wall", "2x gtceu:ev_item_collector", "6x ae2:annihilation_plane", "3x ae2:fluix_pearl")
        .itemOutputs("1x crazyae2addons:mob_farm_collector")
        .circuit(5)
        .duration(210)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/mob_farm_damage")
        .itemInputs("crazyae2addons:mob_farm_wall", "2x megacells:mega_energy_cell", "4x gtceu:tungsten_carbide_buzz_saw_blade", "3x minecraft:echo_shard")
        .itemOutputs("1x crazyae2addons:mob_farm_damage")
        .circuit(5)
        .duration(210)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/mob_farm_input")
        .itemInputs("crazyae2addons:mob_farm_wall", "2x gtceu:mob_spawner_hazard_sign_block", "2x crazyae2addons:mob_formation_plane", "3x ae2:fluix_pearl")
        .itemOutputs("1x crazyae2addons:mob_farm_input")
        .circuit(5)
        .duration(210)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/mob_farm_controller")
        .itemInputs("crazyae2addons:mob_farm_wall", "2x #gtceu:circuits/iv", "1x gtceu:quantum_star", "3x gtceu:ev_emitter", "2x gtceu:ev_sensor")
        .inputFluids("sophisticatedcore:xp_still 2000")
        .itemOutputs("1x crazyae2addons:mob_farm_controller")
        .circuit(5)
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/spawner_extractor_wall")
        .itemInputs("gtceu:ultimet_frame", "4x gtceu:dense_energetic_alloy_plate", "8x minecraft:blaze_rod")
        .inputFluids("gtceu:blue_steel 576")
        .itemOutputs("2x crazyae2addons:spawner_extractor_wall")
        .circuit(5)
        .duration(210)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.assembler("kubejs:ae2/spawner_extractor_controller")
        .itemInputs("crazyae2addons:spawner_extractor_wall", "2x #gtceu:circuits/iv", "1x gtceu:quantum_star", "3x gtceu:ev_field_generator")
        .inputFluids("gtceu:polyvinyl_butyral 1440")
        .itemOutputs("1x crazyae2addons:spawner_extractor_controller")
        .circuit(5)
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])

    // ME Requester
    event.replaceInput({id:"merequester:requester"}, "ae2:engineering_processor", "#gtceu:circuits/iv")
    event.replaceInput({id:"merequester:requester"}, "minecraft:iron_ingot", "gtceu:certus_sky_steel_plate")
    event.replaceInput({id:"merequester:requester"}, "minecraft:copper_ingot", "gtceu:annealed_copper_single_cable")
    event.replaceInput({id:"merequester:requester"}, "minecraft:amethyst_shard", "gtceu:double_fluix_dark_steel_plate")
    event.replaceInput({id:"merequester:requester"}, "ae2:crafting_accelerator", "mae2:64x_crafting_accelerator")

    // ME Beam Former
    event.replaceInput({id:"me_beam_former:beam_former_part"}, "ae2:fluix_glass_cable", "#ae2:covered_cable")
    event.replaceInput({id:"me_beam_former:beam_former_part"}, "ae2:wireless_receiver", "gtceu:ev_emitter")

    event.remove({id:"me_beam_former:beam_former_block"})
    event.shaped("me_beam_former:beam_former_block", [
        " A ",
        " B ",
        " C "
    ], {
        A: "gtceu:iv_emitter",
        B: "megacells:accumulation_processor",
        C: "#ae2:covered_dense_cable"
    }).id("kubejs:ae2/mega_beam_former")

    event.remove({id:"me_beam_former:omni_beam_former_block"})
    event.shaped("me_beam_former:omni_beam_former_block", [
        "EAE",
        "DBD",
        " C "
    ], {
        A: "gtceu:luv_emitter",
        B: "gtceu:ultimet_frame",
        C: "#ae2:covered_cable",
        D: "gtceu:ev_electric_motor",
        E: "gtceu:ev_sensor"
    }).id("kubejs:ae2/omni_beam_former")

    event.replaceInput({id:"me_beam_former:laser_binding_tool"}, "minecraft:iron_ingot", "gtceu:polyethylene_plate")
    event.replaceInput({id:"me_beam_former:laser_binding_tool"}, "minecraft:glass", "mae2:cloud_chamber")

    // AE Infinity Booster
    event.replaceInput({id:"aeinfinitybooster:infinity_card"}, "minecraft:nether_star", "ae2wtlib:quantum_bridge_card")
    event.replaceInput({id:"aeinfinitybooster:infinity_card"}, "minecraft:ender_eye", "gtceu:quantum_eye")
    event.replaceInput({id:"aeinfinitybooster:infinity_card"}, "minecraft:netherite_ingot", "gtceu:netherite_foil")
 
})