const validateEmail = (email) => {
  const regExp = /\w+\.?@[a-zA-Z]+\.com/;

  if(!email.match(regExp)) return "invalid email!";

  return "valid email!";
}

console.log(validateEmail("albqvictor@gmail.com"));