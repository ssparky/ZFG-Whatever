ServerEvents.recipes(event => {
    event.remove({id: "computercraft:computer_normal"})
    event.shaped("1x computercraft:computer_normal", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:annealed_copper_double_cable",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/hv",
        E: "gtceu:blue_alloy_plate"
    }).id("kubejs:computercraft/computer_normal")

    event.remove({id: "computercraft:computer_advanced"})
    event.remove({id: "computercraft:computer_advanced_upgrade"})
    event.shaped("1x computercraft:computer_advanced", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:hv_machine_hull",
        B: "gtceu:electrum_double_cable",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/ev",
        E: "gtceu:molybdenum_plate"
    }).id("kubejs:computercraft/computer_advanced")

    event.remove({id: "computercraft:turtle_normal"})
    event.remove({id: "computercraft:turtle_normal_overlays/turtle_rainbow_overlay"})
    event.remove({id: "computercraft:turtle_normal_overlays/turtle_trans_overlay"})
    event.shaped("1x computercraft:turtle_normal", [
        "EDE",
        "EAE",
        "CBC"
    ], {
        A: "computercraft:computer_normal",
        B: "#forge:chests/wooden",
        C: "gtceu:mv_electric_motor",
        D: "gtceu:mv_sensor",
        E: "gtceu:double_steel_plate"
    }).id("kubejs:computercraft/turtle_normal")

    event.remove({id: "computercraft:turtle_advanced"})
    event.remove({id: "computercraft:turtle_advanced_upgrade"})
    event.shaped("1x computercraft:turtle_advanced", [
        "EDE",
        "EAE",
        "CBC"
    ], {
        A: "computercraft:computer_advanced",
        B: "#forge:chests/wooden",
        C: "gtceu:hv_electric_motor",
        D: "gtceu:hv_sensor",
        E: "gtceu:double_brass_plate"
    }).id("kubejs:computercraft/turtle_advanced")

    event.remove({id: "computercraft:pocket_computer_normal"})
    event.shaped("1x computercraft:pocket_computer_normal", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "#gtceu:batteries/mv",
        B: "gtceu:annealed_copper_single_wire",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/hv",
        E: "gtceu:aluminium_foil"
    }).id("kubejs:computercraft/pocket_computer_normal")

    event.remove({id: "computercraft:pocket_computer_advanced"})
    event.remove({id: "computercraft:pocket_computer_advanced_upgrade"})
    event.shaped("1x computercraft:pocket_computer_advanced", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "#gtceu:batteries/hv",
        B: "gtceu:electrum_single_wire",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/ev",
        E: "gtceu:molybdenum_foil"
    }).id("kubejs:computercraft/pocket_computer_advanced")

    event.remove({id: "computercraft:wireless_modem_normal"})
    event.shaped("1x computercraft:wireless_modem_normal", [
        "DBD",
        "CAC",
        "DED"
    ], {
        A: "gtceu:ender_redstone_link_cover",
        B: "gtceu:mv_emitter",
        C: "ae2:wireless_receiver",
        D: "gtceu:silicon_foil",
        E: "gtceu:ender_pearl_plate"
    }).id("kubejs:computercraft/wireless_modem_normal")

    event.remove({id: "computercraft:wireless_modem_advanced"})
    event.shaped("1x computercraft:wireless_modem_advanced", [
        "DBD",
        "CAC",
        "DED"
    ], {
        A: "gtceu:ender_redstone_link_cover",
        B: "gtceu:hv_emitter",
        C: "ae2:wireless_receiver",
        D: "gtceu:polytetrafluoroethylene_foil",
        E: "gtceu:ender_eye_plate"
    }).id("kubejs:computercraft/wireless_modem_advanced")

    event.remove({id: "computercraft:cable"})
    event.recipes.gtceu.assembler("kubejs:computercraft/cable")
        .itemInputs("4x gtceu:fine_borosilicate_glass_wire")
        .inputFluids("gtceu:polyvinyl_chloride 72")
        .itemOutputs("computercraft:cable")
        .EUt(32)
        .duration(40)

    event.remove({id: "computercraft:wired_modem"})
    event.shaped("1x computercraft:wired_modem_full", [
        "   ",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:annealed_copper_double_cable",
        C: "ae2:io_port",
        D: "#gtceu:circuits/lv"
    }).id("kubejs:computercraft/wired_modem_full")
    event.shaped("1x computercraft:wired_modem_full", [
        "DCD",
        "BAB",
        "   "
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:annealed_copper_double_cable",
        C: "ae2:io_port",
        D: "#gtceu:circuits/lv"
    }).id("kubejs:computercraft/wired_modem_full_alt")

    event.remove({id: "computercraft:redstone_relay"})
    event.shaped("1x computercraft:redstone_relay", [
        "   ",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:lv_machine_hull",
        B: "gtceu:red_alloy_double_cable",
        C: "#gtceu:circuits/ulv",
        D: "minecraft:repeater"
    }).id("kubejs:computercraft/redstone_relay")
    event.shaped("1x computercraft:redstone_relay", [
        "DCD",
        "BAB",
        "   "
    ], {
        A: "gtceu:lv_machine_hull",
        B: "gtceu:red_alloy_double_cable",
        C: "#gtceu:circuits/ulv",
        D: "minecraft:repeater"
    }).id("kubejs:computercraft/redstone_relay_alt")

    event.remove({id: "computercraft:monitor_normal"})
    event.shaped("1x computercraft:monitor_normal", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:annealed_copper_single_cable",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:aluminium_plate"
    }).id("kubejs:computercraft/monitor_normal")

    event.remove({id: "computercraft:monitor_advanced"})
    event.shaped("1x computercraft:monitor_advanced", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:hv_machine_hull",
        B: "gtceu:silver_single_cable",
        C: "gtceu:computer_monitor_cover",
        D: "#gtceu:circuits/lv",
        E: "gtceu:stainless_steel_plate"
    }).id("kubejs:computercraft/monitor_advanced")

    event.remove({id: "computercraft:speaker"})
    event.shaped("1x computercraft:speaker", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:silver_single_cable",
        C: "minecraft:note_block",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:aluminium_plate"
    }).id("kubejs:computercraft/speaker")

    event.remove({id: "computercraft:printer"})
    event.shaped("1x computercraft:printer", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:hv_machine_hull",
        B: "gtceu:electrum_single_cable",
        C: "gtceu:black_dye_spray_can",
        D: "#gtceu:circuits/mv",
        E: "gtceu:stainless_steel_plate"
    }).id("kubejs:computercraft/printer")

    event.remove({id: "computercraft:disk_drive"})
    event.shaped("1x computercraft:disk_drive", [
        "EEE",
        "DCD",
        "BAB"
    ], {
        A: "gtceu:mv_machine_hull",
        B: "gtceu:annealed_copper_single_cable",
        C: "#functionalstorage:drawer",
        D: "gtceu:storage_cover",
        E: "gtceu:aluminium_plate"
    }).id("kubejs:computercraft/disk_drive")

    const disks = [
        [1, "black", 1118481],
        [2, "red", 13388876],
        [3, "green", 5744206],
        [4, "brown", 8349260],
        [5, "blue", 3368652],
        [6, "purple", 11691749],
        [7, "cyan", 5020082],
        [8, "light_gray", 10066329],
        [9, "gray", 5000268],
        [10, "pink", 15905484],
        [11, "lime", 8375321],
        [12, "yellow", 14605932],
        [13, "light_blue", 10072818],
        [14, "magenta", 15040472],
        [15, "orange", 15905331],
        [16, "white", 15790320]
    ]
    for (const color of disks) {
        event.remove({id: `computercraft:disk_${color[0]}`})
        event.shapeless(Item.of('computercraft:disk', `{Color:${color[2]}}`), ["#gtceu:circuits/lv", "gtceu:polyethylene_foil", "gtceu:magnetic_iron_dust", `#forge:dyes/${color[1]}`]).id(`kubejs:computercraft/floppy_${color[1]}`)
    }
})