
<script>
	import './mystyles.scss';
	import { state } from './store/states.js';
	import Navbar from './main/Navbar.svelte';
	import Bread from './main/Bread.svelte';
	import Home from './main/Home.svelte';

	let usuario = 'webmaster';

	// state_value via suscribe from store
	let state_value = [
				{ id: 0, text: 'Home' }
		];
	const unsubscribe = state.subscribe(value => {
			state_value = value;
	});

	$: opcion = state_value[state_value.length - 1].text;

</script>

<Navbar />

<Bread current={state_value} />

<body class="container">

	{#if state_value[state_value.length - 1].text == 'Home'}
		<Home />
	{/if}
</body>
