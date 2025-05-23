export const validateStudentForm = (email, password) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const errors = {
    email: null,
    password: null,
  };

  if (!isEmail) errors.email = "Email is not valid!";
  if (!isPassword)
    errors.password =
      "Password is not valid! Needs Uppercase, Special Character, and 8+ Characters (e.g. Abc@1234)";

  return errors.email || errors.password ? errors : null;
};
