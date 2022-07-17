import { log } from 'console';
import Joi from 'joi';

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
              .min(3)
              .max(30)
              .required(),
    email: Joi.string()
              .min(6)
              .max(255)
              .required()
              .email(),
    password: Joi.string()
                  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                  .required()
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
              .min(6)
              .max(255)
              .required()
              .email(),
    password: Joi.string()
                  .min(6)
                  .max(255)
                  .required()
  });
  return schema.validate(data);
};

const eventValidation = (data) => {
  console.log('enter eventValidation');
  const schema = Joi.object({
    title: Joi.string()
              .required()
              .min(3),
    description: Joi.string()
                    .required()
                    .min(3),
    location: Joi.string()
                .required()
                .min(3),
    userId: Joi.string()
              .required(),
    dateEvent: Joi.string()
              .required()
  });
  return schema.validate(data);
}

export { registerValidation, loginValidation, eventValidation };