
<script>
	import './mystyles.scss';
	import { state } from './store/states.js';
	import Navbar from './main/Navbar.svelte';
	import Bread from './main/Bread.svelte';

	function handleState(event) {
		alert(event.detail.state);
	}

	let usuario = 'webmaster';
	let state_value = [
			{ id: 0, text: 'Home' }
	];
	const unsubscribe = state.subscribe(value => {
			state_value = value;
	});
</script>

<Navbar />

<Bread current={state_value}/>

<body class="container">
	<div class="columns">
		<div class="column">
			<h1 class="title">Hello {usuario}!</h1>
			<h1 class="subtitle">First Day isn't easy</h1>
		</div>
		<div class="column">
			<input type="text" class="text" bind:value={usuario}>
			<button class="button is-info">
				Bulma?
			</button>
		</div>
	</div>
</body>
