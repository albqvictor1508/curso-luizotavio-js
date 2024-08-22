
const capturarForm = () => {
    const forms = document.querySelectorAll('form');
    console.log(forms);
  }

  capturarForm();

  function validateEmail() {
    const email = document.querySelector('input[name="email"]');
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!re.test(email)) {
      return (
        msgDeErro(email, "Email inválido"),
        email.style.borderColor = 'red'
      )
    }
    email.style.borderColor = 'green';
  }
  validateEmail();

  const msgDeErro = (campo, msg) => {
    const div = document.createElement('div');
    div.innerHTML = msg;
    campo.insertAdjacentElement('afterend', div);
  }