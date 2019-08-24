<script>
	import { state } from '../store/states.js';
	import { createEventDispatcher } from 'svelte';

	function setContact(event) {
		state.update(n => [
				{ id: 0, text: 'Home' },
				{ id: 1, text: 'Contacto' },
				]
		 );
	}

	function setReport(event){
		state.update(n => [
				{ id: 0, text: 'Home' },
				{ id: 1, text: 'Report' },
				]
		 );
	}
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img alt="img" src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a href="javascript:void(0);" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="javascript:void(0);" class="navbar-item" >
        Home
      </a>

      <a href="javascript:void(0);" class="navbar-item" >
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable" >
        <a href="javascript:void(0);" class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a href="javascript:void(0);" class="navbar-item" >
            About
          </a>
          <a href="javascript:void(0);" alt="link" class="navbar-item" >
            Jobs
          </a>
          <a href="javascript:void(0);" alt="link" class="navbar-item"
						on:click={setContact}>
            Contact
          </a>
          <hr class="navbar-divider">
					<a href="#" alt="link" class="navbar-item"
						on:click={setReport}>
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
            <strong class="button is-primary" >Sign up</strong>
            <strong class="button is-primary" >Log in</strong>
        </div>
      </div>
    </div>
  </div>
</nav>
