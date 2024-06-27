import prisma from '../prisma/prisma-client'

import { CabinI } from '../../types/cabins.interface'
import { CabinsDto } from '../dto/cabins.dto'

export class CabinsDao {
  static async createCabin(cabin: CabinsDto): Promise<CabinI> {
    return prisma.cabins.create({ data: cabin })
  }

  static async updateCabin(
    cabinNumber: string,
    cabin: CabinsDto,
  ): Promise<CabinI> {
    return prisma.cabins.update({ where: { cabinNumber }, data: cabin })
  }

  static async getAllCabins(): Promise<CabinI[] | []> {
    return prisma.cabins.findMany()
  }

  static async getCabin(cabinNumber: string): Promise<CabinI | null> {
    return prisma.cabins.findUnique({ where: { cabinNumber } })
  }

  static async deleteCabin(cabinNumber: string): Promise<CabinI | null> {
    return prisma.cabins.delete({ where: { cabinNumber } })
  }
}
