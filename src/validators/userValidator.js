import Joi from "joi";

export const LoginSchema = Joi.object({
  usernameOrEmail: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().alphanum().min(3).max(30).trim().required(),
  ]).label("credential"),
  password: Joi.string().required(),
});
export const RegisterAdminSchema = Joi.object({
  //Check Company profile data
  companyName: Joi.string().max(50).required(),
  companyLogo: Joi.string(),
  //Check Admin cridential
  firstName: Joi.string().max(50).required().label('Firstname'),
  lastName: Joi.string().max(50).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
});

export const validateLogin = (schema,input) => {
  const { value, error } = schema.validate(input, { abortEarly: false });
  const result = {value}
  if (error) {
    const newError = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    result.error = newError
    return result;
  }
  return result;
};

