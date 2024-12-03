import validator from "validator";

(() => {
	const form = document.querySelector("#form") as HTMLFormElement;
	const usernameInput = document.querySelector(
		"#usernameInput",
	) as HTMLInputElement;
	const emailInput = document.querySelector("#emailInput") as HTMLInputElement;
	const passwordInput = document.querySelector(
		"#passwordInput",
	) as HTMLInputElement;
	const repeatPasswordInput = document.querySelector(
		"#password2Input",
	) as HTMLInputElement;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		hideErrorMessage();
		checkForEmptyFields(
			usernameInput,
			emailInput,
			passwordInput,
			repeatPasswordInput,
		);
		checkUsername(usernameInput);
		checkEmail(emailInput);
		checkPassword(passwordInput, repeatPasswordInput);

		if (sendForm()) form.submit();

		function checkUsername(input: HTMLInputElement) {
			if (input.value.length < 3 || input.value.length > 50) {
				showErrorMessage(
					input,
					"Username must to be between 3 and 50 characters",
				);
			}
		}

		function checkForEmptyFields(...inputs: HTMLInputElement[]) {
			inputs.forEach((input) => {
				if (!input.value) {
					showErrorMessage(input, "All fields must to be filled");
				}
			});
		}

		function checkEmail(input: HTMLInputElement) {
			if (!validator.isEmail(input.value)) {
				showErrorMessage(input, "Invalid email");
			}
		}

		function checkPassword(
			password: HTMLInputElement,
			repeatPassword: HTMLInputElement,
		) {
			if (password.value !== repeatPassword.value) {
				showErrorMessage(
					password,
					"password and repeat password must have the same value",
				);
			}
		}

		function showErrorMessage(input: HTMLInputElement, msg: string) {
			const formFields = input.parentElement as HTMLDivElement;
			const errorMessage = formFields.querySelector(
				".error-message",
			) as HTMLSpanElement;
			errorMessage.textContent = msg;
			formFields.classList.add("show-error-message");
		}

		function hideErrorMessage() {
			form.querySelectorAll("show-error-message").forEach((msg) => {
				msg.classList.remove("show-error-message");
			});
		}

		function sendForm() {
			let valid = true;

			form
				.querySelectorAll(".show-error-message")
				// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				.forEach(() => (valid = false));

			return valid;
		}
	});
})();
