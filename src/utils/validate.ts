var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
export function signInValidate(email: any) {
  let isEmailValid = emailRegex.test(email);
  if (!isEmailValid) return "Incorrect Email";

  return null;
}

export function signUpValidate(email: any, password: any) {
  let isEmailValid = emailRegex.test(email);
  if (!isEmailValid) return "Incorrect Email";

  let isPasswordValid = passwordRegex.test(password);
  if (!isPasswordValid) return "Incorrect Password";

  return null;
}
