ServerEvents.recipes(event => {
    // Upgrades
    event.replaceInput({id:"functionalstorage:copper_upgrade"}, "minecraft:copper_ingot", "gtceu:bronze_plate")
    event.replaceInput({id:"functionalstorage:gold_upgrade"}, "minecraft:gold_ingot", "gtceu:energetic_alloy_plate")
    event.replaceInput({id:"functionalstorage:diamond_upgrade"}, "minecraft:diamond", "gtceu:osmium_plate")
    event.remove({id:"functionalstorage:netherite_upgrade"})
    event.shaped("functionalstorage:netherite_upgrade", [
        "ABA",
        "CDC",
        "BAB"
    ], {
        A: "gtceu:netherite_plate",
        B: "gtceu:enriched_naquadah_block",
        C: "#forge:chests/wooden",
        D: "functionalstorage:diamond_upgrade"
    }).id("kubejs:functionalstorage/netherite_upgrade")
    event.shaped("functionalstorage:max_storage_upgrade", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:oganesson_ingot",
        B: "gtceu:neutronium_block",
        C: "gtceu:uhv_quantum_chest",
        D: "functionalstorage:netherite_upgrade"
    }).id("kubejs:functionalstorage/max_storage_upgrade")
    event.replaceInput({id:"functionalstorage:iron_downgrade"}, "minecraft:iron_ingot", "gtceu:iron_plate")

    // Fluid Drawers
    event.replaceInput({id:"functionalstorage:fluid_1"}, "#minecraft:planks", "gtceu:polyethylene_plate")
    event.replaceInput({id:"functionalstorage:fluid_2"}, "#minecraft:planks", "gtceu:polyethylene_plate")
    event.replaceInput({id:"functionalstorage:fluid_4"}, "#minecraft:planks", "gtceu:polyethylene_plate")
    event.replaceInput({id:"functionalstorage:fluid_1"}, "minecraft:bucket", "gtceu:lv_hermetic_casing")
    event.replaceInput({id:"functionalstorage:fluid_2"}, "minecraft:bucket", "gtceu:lv_hermetic_casing")
    event.replaceInput({id:"functionalstorage:fluid_4"}, "minecraft:bucket", "gtceu:lv_hermetic_casing")

    // Compacting Drawers
    event.replaceInput({id:"functionalstorage:compacting_drawer"}, "minecraft:stone", "gtceu:wrought_iron_plate")
    event.replaceInput({id:"functionalstorage:compacting_drawer"}, "minecraft:iron_ingot", "#gtceu:circuits/ulv")
    event.replaceInput({id:"functionalstorage:compacting_framed_drawer"}, "minecraft:iron_nugget", "gtceu:zinc_plate")
    event.replaceInput({id:"functionalstorage:compacting_framed_drawer"}, "minecraft:iron_ingot", "#gtceu:circuits/ulv")
    event.replaceInput({id:"functionalstorage:simple_compacting_drawer"}, "minecraft:stone", "gtceu:wrought_iron_plate")
    event.replaceInput({id:"functionalstorage:simple_compacting_drawer"}, "minecraft:iron_ingot", "#gtceu:circuits/ulv")
    event.replaceInput({id:"functionalstorage:framed_simple_compacting_drawer"}, "minecraft:iron_nugget", "gtceu:zinc_plate")
    event.replaceInput({id:"functionalstorage:framed_simple_compacting_drawer"}, "minecraft:iron_ingot", "#gtceu:circuits/ulv")

    // Controllers
    event.replaceInput({id:"functionalstorage:storage_controller"}, "minecraft:stone", "gtceu:wrought_iron_plate")
    event.replaceInput({id:"functionalstorage:storage_controller"}, "minecraft:quartz_block", "gtceu:charged_certus_quartz_block")
    event.replaceInput({id:"functionalstorage:storage_controller"}, "minecraft:comparator", "#gtceu:circuits/lv")
    event.replaceInput({id:"functionalstorage:framed_storage_controller"}, "minecraft:iron_nugget", "gtceu:zinc_plate")
    event.replaceInput({id:"functionalstorage:framed_storage_controller"}, "minecraft:quartz_block", "gtceu:charged_certus_quartz_block")
    event.replaceInput({id:"functionalstorage:framed_storage_controller"}, "minecraft:comparator", "#gtceu:circuits/lv")

    event.replaceInput({id:"functionalstorage:controller_extension"}, "minecraft:stone", "gtceu:wrought_iron_plate")
    event.replaceInput({id:"functionalstorage:controller_extension"}, "minecraft:quartz_block", "gtceu:charged_certus_quartz_block")
    event.replaceInput({id:"functionalstorage:controller_extension"}, "minecraft:repeater", "#gtceu:circuits/ulv")
    event.replaceInput({id:"functionalstorage:framed_controller_extension"}, "minecraft:iron_nugget", "gtceu:zinc_plate")
    event.replaceInput({id:"functionalstorage:framed_controller_extension"}, "minecraft:quartz_block", "gtceu:charged_certus_quartz_block")
    event.replaceInput({id:"functionalstorage:framed_controller_extension"}, "minecraft:repeater", "#gtceu:circuits/ulv")

    // Misc
    event.replaceInput({id:"functionalstorage:armory_cabinet"}, "minecraft:stone", "gtceu:wrought_iron_plate")
    event.replaceInput({id:"functionalstorage:armory_cabinet"}, "minecraft:netherite_ingot", "gtceu:netherite_gear")
    event.replaceInput({id:"functionalstorage:armory_cabinet"}, "minecraft:comparator", "#gtceu:circuits/lv")

    event.replaceInput({id:"functionalstorage:ender_drawer"}, "#functionalstorage:drawer", "gtceu:lv_field_generator")
    event.replaceInput({id:"functionalstorage:ender_drawer"}, "#minecraft:planks", "minecraft:warped_planks")
})