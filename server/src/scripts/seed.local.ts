import prisma from '../models/prisma/prisma-client'
import { cabinsData, guestsData } from '../data/data'
import { generateBookingData } from '../data/data'

type Status = 'CHECKED_IN' | 'CHECKED_OUT' | 'UNCONFIRMED'


const bookingsData = generateBookingData(50)

const seedLocal = async () => {
  // Delete existing records
  console.log('Deleting existing records...')
  await prisma.$transaction([
    prisma.bookings.deleteMany(),
    prisma.guests.deleteMany(),
    prisma.cabins.deleteMany(),
  ])

  console.log('Seeding database...\n')

  // Seed Cabins
  const cabins = []
  for (let i = 0; i < cabinsData.length; i++) {
    const cabin = await prisma.cabins.create({ data: cabinsData[i] })
    console.log('Cabin seeded', cabin.id)
    cabins.push(cabin)
  }
  console.log('Cabins seeded\n')

  // Seed Guests
  const guests = []
  for (let i = 0; i < guestsData.length; i++) {
    const guest = await prisma.guests.create({
      data:
        {
          fullName: guestsData[i].fullName,
          email: `${i}${guestsData[i].email}`,
          nationalID: `${guestsData[i].nationalID}${i}`,
          nationality: guestsData[i].nationality,
          countryFlag: guestsData[i].countryFlag,
        },
    })
    console.log('Guest seeded', guest.id)
    guests.push(guest)
  }
  console.log('Guests seeded\n')

  // Seed Bookings
  for (let i = 0; i < bookingsData.length; i++) {
    const booking = await prisma.bookings.create({
      data: {
        ...bookingsData[i],
        startDate: new Date(bookingsData[i].startDate),
        endDate: new Date(bookingsData[i].endDate),
        status: bookingsData[i].status as Status,
        guest: {
          connect: { id: guests[i % guests.length].id },
        },
        cabin: {
          connect: { id: cabins[i % cabins.length].id },
        },
      },
    })
    console.log('Booking seeded', booking.id)
  }
  console.log('Booking seeded\n')

  // Seed Settings
  const settings = await prisma.settings.create({
    data: {
      minBookingLen: 1,
      maxBookingLen: 90,
      maxGuests: 9,
      breakfastCost: 15,
    },
  })
  console.log('Settings seeded', settings)
}

seedLocal()
  .catch((error) => {
    console.error(error)
  })
  .then(async () => {
    console.log('Seeding complete')
    await prisma.$disconnect()
  })
