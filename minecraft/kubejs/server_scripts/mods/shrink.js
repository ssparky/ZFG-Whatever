ServerEvents.recipes(event => {
    event.replaceInput({id: "shrink:shrinking_device"}, "minecraft:iron_ingot", "gtceu:blue_alloy_plate")
    event.replaceInput({id: "shrink:shrinking_device"}, "minecraft:ender_pearl", "gtceu:mv_emitter")
    event.replaceInput({id: "shrink:shrinking_device"}, "minecraft:stone_button", "gtceu:tantalum_capacitor")
    event.replaceInput({id: "shrink:shrinking_device"}, "#forge:glass", "#gtceu:circuits/hv")
})