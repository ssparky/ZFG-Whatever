// Modification of some blocks to make them easier to mine


ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", ["#forge:glass", "#forge:glass_panes"]);
    event.add("minecraft:mineable/pickaxe", /xtonesreworked:glaxx_block_/);
    event.add("minecraft:mineable/pickaxe", ["minecraft:glowstone", "minecraft:redstone_lamp", "minecraft:sea_lantern"]);

    // Bumblezone dimension
    event.add("minecraft:mineable/pickaxe", ["minecraft:honeycomb_block", "the_bumblezone:honeycomb_brood_block", "the_bumblezone:porous_honeycomb_block",
        "the_bumblezone:filled_porous_honeycomb_block", "the_bumblezone:empty_honeycomb_brood_block", "productivebees:configurable_comb"
    ])
})
