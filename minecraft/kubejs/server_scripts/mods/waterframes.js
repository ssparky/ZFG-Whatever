ServerEvents.recipes(event => {
    // Remote
    event.replaceInput({id:"waterframes:remote"}, "minecraft:copper_block", "ae2:fluix_pearl")
    event.replaceInput({id:"waterframes:remote"}, "minecraft:iron_ingot", "gtceu:polyvinyl_chloride_foil")
    event.replaceInput({id:"waterframes:remote"}, "minecraft:redstone", "#gtceu:batteries/lv")

    // Frame
    event.replaceInput({id:"waterframes:frame"}, "minecraft:glowstone", "gtceu:lv_emitter")
    event.replaceInput({id:"waterframes:frame"}, "minecraft:iron_ingot", "gtceu:polyvinyl_chloride_plate")

    // Projector
    event.replaceInput({id:"waterframes:projector"}, "minecraft:glowstone", "gtceu:lv_emitter")
    event.replaceInput({id:"waterframes:projector"}, "minecraft:amethyst_shard", "ae2:quartz_glass")
    event.replaceInput({id:"waterframes:projector"}, "minecraft:iron_block", "gtceu:double_steel_plate")

    // Television
    event.replaceInput({id:"waterframes:tv"}, "minecraft:iron_ingot", "gtceu:polyvinyl_chloride_plate")
    event.replaceInput({id:"waterframes:tv"}, "minecraft:tinted_glass", "ae2:quartz_vibrant_glass")

    // Big Television
    event.replaceInput({id:"waterframes:big_tv"}, "minecraft:iron_ingot", "gtceu:polyvinyl_chloride_plate")
    event.replaceInput({id:"waterframes:big_tv"}, "minecraft:tinted_glass", "ae2:quartz_vibrant_glass")
    event.replaceInput({id:"waterframes:big_tv"}, "minecraft:iron_block", "gtceu:steel_frame")
})