// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

console.log("Loading up our custom Game Phases script!");

// Register phases when the game starts using the initialize event.
onEvent('gamephases.initialize', event => {

    // Register a simple phase named 'one'
    event.phase('create');
    event.phase('botany_pots_tiering');
})
console.log("Loading up our custom Game Phases script!");

// Register our phases when Game Phases says so (this is when the server starts up).
onEvent('gamephases.initialize', event => {

    // Phase 1 - players can't find or use Iron until they have obtained stone.
    event.phase('create')
        // No using Iron.
        // These items will have a hidden title and be invisible in REI.
        // If a player manages to stick one in their inventory, it will be unusable in recipes.
        // By default, all items which depend on this item for crafting are also disabled.
        // This means all Iron tools will be disabled by default!
        // If you want to disable this, you can pass 'false' in the item method.
        .item('create:andesite_alloy')

        event.phase('botany_pots_tiering')
        .itemTag('botanypots:all_botany_pots')
})

// You can interact with the Game Phases API in KubeJS to get information on what Phases the player has.
// This can be used to create unique interactions with other mechanics in your mod-pack!
onEvent('player.chat', event => {
    var hasCreate = event.player.hasPhase('create');
    if(hasCreate) {
        event.player.tell('You have unlocked Create to start!.')
    }});
    onEvent('player.chat', event => {
        var hasBotanyTiers = event.player.hasPhase('botany_pots_tiering');
        if(hasBotanyTiers) {
            event.player.tell('You have unlocked Botany Pot Tiers to start!.')
    }
});

console.log("Done loading!");