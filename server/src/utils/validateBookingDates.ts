export default function validateBookingDates(
  startDate: Date | string,
  endDate: Date | string,
  numNights: number,
): {
  isValid: boolean;
  error: string;
} {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const now = new Date()

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { isValid: false, error: 'Invalid date format' }
  }

  if (start < now) {
    return { isValid: false, error: 'Start date cannot be in the past' }
  }

  if (end <= start) {
    return { isValid: false, error: 'End date must be after start date' }
  }

  const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  if (nights !== numNights) {
    return {
      isValid: false,
      error: 'Number of nights does not match the date range',
    }
  }

  return { isValid: true, error: '' }
}
