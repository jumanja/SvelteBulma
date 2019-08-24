<script>
	export let current;
</script>

<nav class="breadcrumb is-centered has-succeeds-separator" aria-label="breadcrumbs">
  <ul>
		{#each current as crumb}
			<li><a href="#{crumb.text}">{crumb.text}</a></li>
		{/each}
</ul>
</nav>
