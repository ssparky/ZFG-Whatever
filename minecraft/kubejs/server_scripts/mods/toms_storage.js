ServerEvents.recipes(event => {
    // Inventory connector
    event.replaceInput({id:"toms_storage:inventory_connector"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:inventory_connector"}, "#c:diamonds", "gtceu:treated_wood_frame")
    event.replaceInput({id:"toms_storage:inventory_connector"}, "minecraft:ender_pearl", "gtceu:small_red_alloy_spring")
    event.replaceInput({id:"toms_storage:inventory_connector"}, "minecraft:comparator", "#gtceu:circuits/ulv")

    // Storage terminal
    event.replaceInput({id:"toms_storage:storage_terminal"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:storage_terminal"}, "minecraft:comparator", "#gtceu:circuits/lv")
    event.replaceInput({id:"toms_storage:storage_terminal"}, "#forge:glass", "gtceu:steel_rod")
    event.replaceInput({id:"toms_storage:storage_terminal"}, "#forge:chests/wooden", "gtceu:steel_rod")
    event.replaceInput({id:"toms_storage:storage_terminal"}, "minecraft:glowstone", "gtceu:double_electrum_plate")

    // Inventory trim
    event.replaceInput({id:"toms_storage:trim"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:trim"}, "#forge:chests/wooden", "gtceu:brass_normal_item_pipe")

    // Open Crate
    event.replaceInput({id:"toms_storage:open_crate"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:open_crate"}, "#forge:chests/wooden", "#gtceu:circuits/ulv")

    // Inventory Cable
    event.replaceInput({id:"toms_storage:inventory_cable"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:inventory_cable"}, "#forge:chests/wooden", "gtceu:brass_small_item_pipe")

    // Inventory cable connector
    event.replaceInput({id:"toms_storage:inventory_cable_connector"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:inventory_cable_connector"}, "minecraft:ender_pearl", "gtceu:small_red_alloy_spring")
    event.replaceInput({id:"toms_storage:inventory_cable_connector"}, "#c:diamonds", "#gtceu:circuits/ulv")
    event.replaceInput({id:"toms_storage:inventory_cable_connector"}, "minecraft:quartz", "#forge:gems/quartz_like")

    // Filtered inventory cable connector
    event.replaceInput({id:"toms_storage:inventory_cable_connector_filtered"}, "minecraft:quartz", "#forge:gems/quartz_like")

    // Inventory proxy
    event.replaceInput({id:"toms_storage:inventory_proxy"}, "#minecraft:planks", "gtceu:treated_wood_plate")

    // Crafting terminal
    event.replaceInput({id:"toms_storage:crafting_terminal"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:inventory_proxy"}, "#c:diamonds", "#gtceu:circuits/lv")

    // Inventory hopper
    event.replaceInput({id:"toms_storage:inventory_hopper_basic"}, "#minecraft:planks", "gtceu:treated_wood_plate")

    // Level emitter
    event.replaceInput({id:"toms_storage:level_emitter"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:level_emitter"}, "minecraft:comparator", "#gtceu:circuits/ulv")

    // Wireless terminal
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "#minecraft:planks", "gtceu:treated_wood_plate")
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "minecraft:comparator", "gtceu:lv_emitter")
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "minecraft:ender_pearl", "gtceu:lv_sensor")
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "minecraft:glowstone", "gtceu:computer_monitor_cover")
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "#forge:glass", "#forge:glass_panes/silica")
    event.replaceInput({id:"toms_storage:wireless_terminal"}, "minecraft:spyglass", "gtceu:tantalum_capacitor")

    // Filters
    event.replaceInput({id:"toms_storage:poly_item_filter"}, "minecraft:comparator", "#gtceu:circuits/ulv")
    event.replaceInput({id:"toms_storage:tag_item_filter"}, "minecraft:comparator", "#gtceu:circuits/ulv")
})