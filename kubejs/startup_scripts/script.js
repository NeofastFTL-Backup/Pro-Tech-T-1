// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('1_hay_bale').displayName('Compressed Hay Bale');
	event.create('2_hay_bale').displayName('Double Compressed Hay Bale');
	event.create('3_hay_bale').displayName('Triple Compressed Hay Bale');
	event.create('4_hay_bale').displayName('Quadruple Compressed Hay Bale');
	event.create('5_hay_bale').displayName('Quintuple Compressed Hay Bale');
	event.create('6_hay_bale').displayName('Sextuple Compressed Hay Bale')});