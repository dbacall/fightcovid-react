import validator from "validator";
import isEmpty from "is-empty";

export function validateLogin(email, password) {
  let errors = {};

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateLogin;
