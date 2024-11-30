(() => {
  const form: HTMLFormElement | null = document.querySelector("#form");
  const usernameInput: HTMLInputElement | null = document.querySelector("#usernameInput");
  const emailInput: HTMLInputElement | null = document.querySelector("#emailInput");
  const PasswordInput: HTMLInputElement | null = document.querySelector("#passwordInput");
  const repeatPasswordInput: HTMLInputElement | null = document.querySelector("#password2Input");

  form?.addEventListener("click", e => {
    e.preventDefault();
    if(handleSubmit()) {
      form.submit();
    }

    function handleSubmit(): boolean {
      let valid = true;



      return valid
    }
  })
})()
