import Joi from 'joi'
import { CabinsDto } from '../models/dto/cabins.dto'

export class CabinsValidations {
  static createCabin(cabinDto: CabinsDto) {
    const createSchema = Joi.object({
      cabinNumber: Joi.string().required(),
      maxCapacity: Joi.number().required(),
      regularPrice: Joi.number().required(),
      discount: Joi.number().required(),
      description: Joi.string().required(),
      image: Joi.string().required(),
      Bookings: Joi.array().optional(),
    })

    return createSchema.validateAsync(cabinDto)
  }

  static updateCabin(cabinDto: CabinsDto) {
    const updateSchema = Joi.object({
      cabinNumber: Joi.string(),
      maxCapacity: Joi.number(),
      regularPrice: Joi.number(),
      discount: Joi.number(),
      description: Joi.string(),
      image: Joi.string(),
      Bookings: Joi.array(),
    }).min(1)

    return updateSchema.validateAsync(cabinDto)
  }
}
