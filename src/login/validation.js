export const emailValidator = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'login:invalidEmail'
    : undefined;

export const passwordValidator = value =>
  value &&
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}$/i.test(value)
    ? 'login:weakPassword'
    : undefined;

export const validateForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'login:required';
  }
  if (!values.password) {
    errors.password = 'login:required';
  }
  return errors;
};
