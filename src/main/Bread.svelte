<script>
	export let current;
</script>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
		{#each current as crumb}
			<li><a href="#">{crumb.text}</a></li>
		{/each}
</ul>
</nav>
