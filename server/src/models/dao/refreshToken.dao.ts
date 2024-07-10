import prisma from '../prisma/prisma-client'

/**
 * Data Access Object (DAO) for interacting with the RefreshToken table in the database
 **/
export class RefreshTokenDao {
  /**
   * Create a new refresh token
   * @param userId - User id
   * @param token - Refresh token
   * @param expiresAt - Token expiration date
   * @returns The refresh token created
   **/
  static async createRefreshToken(userId: string, token: string, expiresAt: Date) {
    try {
      return prisma.refreshToken.create({
        data: {
          token,
          userId,
          expiresAt,
        },
      })
    } catch (error: any) {
      console.error('Error in RefreshTokenDao -> createRefreshToken', error)
      throw new Error(error)
    }
  }

  /**
   * Get a refresh token
   * @param token - Refresh token
   * @returns The refresh token found or null if the token is not found
   **/
  static async getRefreshToken(token: string) {
    try {
      return prisma.refreshToken.findUnique({ where: { token } })
    } catch (error: any) {
      console.error('Error in RefreshTokenDao -> getRefreshToken', error)
      throw new Error(error)
    }
  }

  /**
   * Revoke a refresh token
   * @param token - Refresh token
   * @returns The refresh token revoked
   **/
  static async revokeRefreshToken(token: string) {
    try {
      return prisma.refreshToken.update({
        where: { token },
        data: { expiresAt: new Date() },
      })
    } catch (error: any) {
      console.error('Error in RefreshTokenDao -> deleteRefreshToken', error)
      throw new Error(error)
    }
  }
}
