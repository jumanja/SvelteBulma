<script>
	import { state } from '../store/states.js';
	import { createEventDispatcher } from 'svelte';
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';

	let loginClasses = 'modal';
	let signClasses = 'modal';

	function showLogin(event) {
		loginClasses = 'modal is-active';
	}

	function showSignup(event) {
		signupClasses = 'modal is-active';
	}

	function setHome(event) {
		state.update(n => [
				{ id: 0, text: 'Home' }
				]
		 );
	}

	function setDocs(event) {
		state.update(n => [
				{ id: 0, text: 'Home' },
				{ id: 1, text: 'Documentation' },
				]
		 );
	}

	function setCollapsed(event) {
		state.update(n => [
				{ id: 0, text: 'Collapsed' }
				]
		 );
	}

	function setJobs(event) {
		state.update(n => [
				{ id: 0, text: 'Home' },
				{ id: 1, text: 'Jobs' },
				]
		 );
	}

	function setAbout(event) {
		state.update(n => [
				{ id: 0, text: 'Home' },
				{ id: 1, text: 'About' },
				]
		 );
	}

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
		<a class="navbar-item" href="https://svelte.dev">
      <img alt="img" src="https://svelte.dev/svelte-logo-horizontal.svg" width="112" height="28">
    </a>
    <a class="navbar-item" href="https://bulma.io">
      <img alt="img" src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a href="javascript:void(0);"
			role="button"
			class="navbar-burger burger"
			aria-label="menu" aria-expanded="false"
			data-target="navbarBasicExample"
			on:click={setCollapsed}
			>
			<span></span>
			<span></span>
			<span></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="javascript:void(0);" class="navbar-item"
				on:click={setHome}>
        Home
      </a>

      <a href="javascript:void(0);" class="navbar-item"
				on:click={setDocs}>
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable" >
        <a href="javascript:void(0);" class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a href="javascript:void(0);" class="navbar-item"
						on:click={setAbout}>
            About
          </a>
          <a href="javascript:void(0);" alt="link" class="navbar-item"
						on:click={setJobs}>
            Jobs
          </a>
          <a href="javascript:void(0);" alt="link" class="navbar-item"
						on:click={setContact}>
            Contact
          </a>
          <hr class="navbar-divider">
					<a href="javascript:void(0);" alt="link" class="navbar-item"
						on:click={setReport}>
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
						<Signup signClasses/>
						<Login loginClasses/>
        </div>
      </div>
    </div>
  </div>
</nav>
