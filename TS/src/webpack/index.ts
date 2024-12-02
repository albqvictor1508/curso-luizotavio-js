(() => {
	const form: HTMLFormElement | null = document.querySelector("#form");
	if (!form) return;

	const usernameInput = form.querySelector("#usernameInput");
	const emailInput: HTMLInputElement | null = form.querySelector("#emailInput");
	const passwordInput: HTMLInputElement | null =
		form.querySelector("#passwordInput");
	const repeatPasswordInput: HTMLInputElement | null =
		form.querySelector("#password2Input");
	if (!form) return;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (handleSubmit()) {
			form.submit();
		}

		function handleSubmit(): boolean {
			let valid = true;
			refreshErrorMessage();

			if (
				!usernameInput ||
				!emailInput ||
				!passwordInput ||
				!repeatPasswordInput
			)
				return false;

			const inputs = [
				usernameInput,
				emailInput,
				passwordInput,
				repeatPasswordInput,
			];

			for (const input of inputs) {
				if (!input.value) {
					errorMessage(input, "All fields must be filled");
					valid = false;
				}
			}

			const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

			if (!emailRegex.test(emailInput.value)) {
				errorMessage(emailInput, "Invalid email.");

				valid = false;
			}

			if (passwordInput.value !== repeatPasswordInput.value) {
				const msg = "Password and Repeat Password must be the same";
				errorMessage(passwordInput, msg);
				errorMessage(repeatPasswordInput, msg);
				valid = false;
			}

			if (usernameInput.value.length < 3 || usernameInput.value.length > 50) {
				errorMessage(
					usernameInput,
					"Name must to be between 3 and 50 characters long",
				);
				valid = false;
			}

			if (
				(passwordInput.value.length < 6 &&
					repeatPasswordInput.value.length < 6) ||
				(passwordInput.value.length > 50 &&
					repeatPasswordInput.value.length > 50)
			) {
				const msg =
					"Password and Repeat Password must be between 6 and 50 characters long";
				errorMessage(passwordInput, msg);
				errorMessage(repeatPasswordInput, msg);

				valid = false;
			}

			return valid;
		}

		function errorMessage(field: HTMLInputElement, msg: string) {
			field.style.borderColor = "red";
			const div: HTMLDivElement = document.createElement("div");
			div.classList.add("error-message");
			div.textContent = msg;

			field.insertAdjacentElement("afterend", div);
		}

		function refreshErrorMessage() {
			// biome-ignore lint/complexity/noForEach: <explanation>
			document.querySelectorAll(".error-message").forEach((msg) => {
				msg.remove();
			});
			// biome-ignore lint/complexity/noForEach: <explanation>
			document.querySelectorAll("input").forEach((input) => {
				input.style.borderColor = "#e9e8e8";
			});
		}
	});
})();
