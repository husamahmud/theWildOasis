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
      // image: Joi.string().required(),
      image: Joi.string(),
      Bookings: Joi.array().optional(),
    })

    return createSchema.validateAsync(cabinDto)
  }
}
