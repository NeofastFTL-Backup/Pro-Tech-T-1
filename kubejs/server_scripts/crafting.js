// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// ADDING KUBEJS RECIPES
	event.shaped('kubejs:1_hay_bale', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:hay_block'
        });

        event.shaped('kubejs:2_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_hay_bale'
            });
            event.shaped('kubejs:3_hay_bale', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_hay_bale'
                });

                event.shaped('kubejs:4_hay_bale', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_hay_bale'
                    });

                    event.shaped('kubejs:5_hay_bale', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_hay_bale'
                        });
    
        event.shaped('kubejs:6_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:5_hay_bale'
        })});