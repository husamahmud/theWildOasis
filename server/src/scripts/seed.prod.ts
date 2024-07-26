import { CabinI } from '../types/cabins.interface'
import { GuestsI } from '../types/guests.interface'
import { BookingsI } from '../types/bookings.interface'
import { cabinsData, guestsData } from '../data/data'
import { generateBookingData } from '../data/data'
import { Status } from '@prisma/client'

const SERVER_URL = 'https://thewildoasis.onrender.com/api/v1'

const bookingsData = generateBookingData(50)

const CABINS: CabinI[] = []
const GUESTS: GuestsI[] = []

const clearData = async () => {
  console.log('Clearing existing data...')
  await fetch(`${SERVER_URL}/cabins/all`, {
    method: 'DELETE',
  })
  await fetch(`${SERVER_URL}/guests/all`, {
    method: 'DELETE',
  })
  await fetch(`${SERVER_URL}/bookings/all`, {
    method: 'DELETE',
  })
}

const seedProd = async () => {
  try {
    // clear existing data
    await clearData()

    // Seed cabins
    for (let i = 0; i < cabinsData.length; i++) {
      const response = await fetch(`${SERVER_URL}/cabins`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cabinsData[i]),
      })
      const data = await response.json()
      if (data.data && data.data.id) {
        console.log('Cabin created:', data.data.id)
        CABINS.push(data.data)
      } else {
        console.error('Failed to create cabin:', data)
      }
    }

    // Seed guests
    for (let i = 0; i < guestsData.length; i++) {
      const response = await fetch(`${SERVER_URL}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: guestsData[i].fullName,
          email: guestsData[i].email,
          nationalID: `${guestsData[i].nationalID}${i}`,
          nationality: guestsData[i].nationality,
          countryFlag: guestsData[i].countryFlag,
        }),
      })
      const data = await response.json()
      if (data.data && data.data.id) {
        console.log('Guest created:', data.data.id)
        GUESTS.push(data.data)
      } else {
        console.error('Failed to create guest:', data)
      }
    }

    // Seed bookings
    for (let i = 0; i < bookingsData.length; i++) {
      const cabin = CABINS[i % CABINS.length]
      const guest = GUESTS[i % GUESTS.length]

      const bookingData: Partial<BookingsI> = {
        ...bookingsData[i],
        startDate: new Date(bookingsData[i].startDate),
        endDate: new Date(bookingsData[i].endDate),
        status: bookingsData[i].status as Status,
        guest: guest,
        cabin: cabin,
      }

      const response = await fetch(`${SERVER_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })
      const data = await response.json()
      if (data.data) {
        console.log('Booking created:', data.data)
      } else {
        console.error('Failed to create booking:', data)
      }
    }

    const settings = {
      minBookingLen: 1,
      maxBookingLen: 90,
      maxGuests: 9,
      breakfastCost: 15,
    }
    const response = await fetch(`${SERVER_URL}/settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
    const data = await response.json()
    if (data.data) {
      console.log('Settings created:', data.data)
    } else {
      console.error('Failed to create settings:', data)
    }

    console.log('Data seeding completed. 🪄')
  } catch (error) {
    console.error('An error occurred during seeding:', error)
  }
}

seedProd()
