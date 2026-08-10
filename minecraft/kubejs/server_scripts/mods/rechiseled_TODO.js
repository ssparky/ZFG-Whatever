ServerEvents.recipes(event => {
    // Chisel itself
    event.remove({id:"rechiseled:chisel"})
    event.shaped("rechiseled:chisel", [
        " HP",
        " RF",
        "S  "
    ], {
        H: "#gtceu:tools/crafting_hammers",
        P: "#forge:plates/iron",
        R: "#forge:rods/iron",
        F: "#gtceu:tools/crafting_files",
        S: "minecraft:stick"
    })
})