import { Response } from 'express'

/**
 * Send a standardized HTTP response.
 * @param res - The Express response object.
 * @param statusCode - The HTTP status code to send.
 * @param data - The payload to send in the response body, typically an object or array.
 * @param message - An optional message to include in the response body.
 */
export function sendResponse(res: Response, statusCode: number, data: any = null, message: string | Error): void {
  res.status(statusCode).json({ message, data })
}
