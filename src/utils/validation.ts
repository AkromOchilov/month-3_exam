import Joi from 'joi'



export const LoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
}) 


export const RegisterSchema = Joi.object({
    username: Joi.string().required().min(2).max(32),
    password: Joi.string().required().min(6).max(32)
}) 