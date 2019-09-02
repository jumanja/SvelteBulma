<script>
	export let signClasses = "modal";
	let data = [];

	let signError = false;
	let user = { signedUp: false };

	function noSignupError() {
		signError = false;
	}

	function showSignup() {
		signClasses = "modal is-active";
	}

	function hideSignup() {
		signClasses = "modal";
	}

	function toggle() {
		user.signedUp = !user.signedUp;
	}

	function validateSignForm(event) {
			let textbox = event.target;

			if(textbox.id == 'usuario'){
			}
			if(textbox.id == 'password'){
			}
			return true;
	 }

	async function handleSubmit(event) {
/*
			 console.log(event);
			 console.log(event.target);
			 console.log(event.target.usuario.value);
			 console.log(event.target.password.value);
*/
			 var form_data = new FormData();
       form_data.append('usuario', event.target.usuario.value);
       form_data.append('password', event.target.password.value);
       form_data.append('lang', 'es');

			const request = new Request('https://www.servidebate.com/api/v1.5.3/index.php/login', {
					method: 'POST',
					mode: 'cors',
					body: form_data
			 });
			 const response = await fetch(request);
			 const json = await response.json();
			 data = json;

			 if(data && data[0] && data[0].acceso){
				loginError = true;
			} else {
				hideLogin();
			}
	 }
</script>

<strong class="button is-primary"
	on:click={showSignup}>Sign Up</strong>

<div id="modalSignDiv" class="modal {signClasses}">
  <div class="modal-background"></div>

	<form
			on:submit|preventDefault={handleSubmit}
			on:invalid={validateSignForm}
			on:changed={validateSignForm}
			on:input={validateSignForm}
	>

  <div class="modal-card">
		{#if signError}
		<div id="signError" class="notification is-danger">
			<button class="delete" on:click={noSignupError}></button>
			Could not sign up the user.
		</div>
		{/if}

    <header class="modal-card-head has-background-primary">
			<span class="icon is-left">
				<i class="fas fa-user-plus fa-2x has-text-light"></i>
			</span>
      <p class="modal-card-title has-text-centered has-text-light">Sign Up Screen</p>
      <button class="delete" on:click={hideSignup} aria-label="close"></button>
    </header>

    <section class="modal-card-body">
      <!-- Content ... -->

				<div class="field">
				  <div class="control has-icons-left has-icons-right">
				    <input required class="input" type="text"
						placeholder="User" id="usuario">
				    <span class="icon is-small is-left">
				      <i class="fas fa-user"></i>
				    </span>
						{#if !user.signedUp}
				    <span class="icon is-small is-right">
				      <i class="fas fa-check"></i>
				    </span>
						{/if}
				  </div>
					{#if user.signedUp}
				  	<p class="help is-danger">This user is invalid</p>
					{/if}

				</div>

				<div class="field">
				  <p class="control has-icons-left">
				    <input required class="input" type="password"
									 placeholder="Password" id="password">
				    <span class="icon is-small is-left">
				      <i class="fas fa-lock"></i>
				    </span>
				  </p>
				</div>

		</section>

    <footer class="modal-card-foot">
      <input type="submit" class="button is-success" value="Submit">
      <input class="button" on:click={hideSignup} value="Cancel">
    </footer>

  </div>
</form>

</div>
