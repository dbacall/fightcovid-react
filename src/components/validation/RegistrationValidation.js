import validator from "validator";
import isEmpty from "is-empty";

export function validateRegistration(email, password) {
  let errors = {};

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateRegistration;
