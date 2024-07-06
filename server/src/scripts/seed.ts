import prisma from '../models/prisma/prisma-client'
import { Status } from '@prisma/client'

const cabinsData = [
  {
    'cabinNumber': '001',
    'maxCapacity': 2,
    'regularPrice': 250,
    'discount': 10,
    'description': 'Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwMS5qcGciLCJpYXQiOjE3MjAxOTIzMzEsImV4cCI6MTc1MTcyODMzMX0.KqVGvgZT9yU_9vgwG40ypzreC2iyiV0GTYM9Ta5yxgA&t=2024-07-05T15%3A12%3A11.869Z',
  },
  {
    'cabinNumber': '002',
    'maxCapacity': 2,
    'regularPrice': 350,
    'discount': 25,
    'description': 'Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-002.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwMi5qcGciLCJpYXQiOjE3MjAxOTIzNDQsImV4cCI6MTc1MTcyODM0NH0.KcbgxCLhmQDPwhNMV3dX2DQbJMQ8c9fAXThBAIY8tO0&t=2024-07-05T15%3A12%3A24.235Z',
  },
  {
    'cabinNumber': '003',
    'maxCapacity': 4,
    'regularPrice': 300,
    'discount': 0,
    'description': 'Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-003.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwMy5qcGciLCJpYXQiOjE3MjAxOTI0MjksImV4cCI6MTc1MTcyODQyOX0.4DYzcdTyCrNpKhHWDLcWW3uA8BRTuA3_dRNZMJhzkG8&t=2024-07-05T15%3A13%3A49.591Z',
  },
  {
    'cabinNumber': '004',
    'maxCapacity': 4,
    'regularPrice': 500,
    'discount': 50,
    'description': 'Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-003.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwMy5qcGciLCJpYXQiOjE3MjAxOTI0MjksImV4cCI6MTc1MTcyODQyOX0.4DYzcdTyCrNpKhHWDLcWW3uA8BRTuA3_dRNZMJhzkG8&t=2024-07-05T15%3A13%3A49.591Z',
  },
  {
    'cabinNumber': '005',
    'maxCapacity': 6,
    'regularPrice': 350,
    'discount': 0,
    'description': 'Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-005.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwNS5qcGciLCJpYXQiOjE3MjAxOTIzOTksImV4cCI6MTc1MTcyODM5OX0.NRLUekJoyOn2r7yhOb-lkhn6t5gsfbc9FfqCYFY_KUo&t=2024-07-05T15%3A13%3A19.224Z',
  },
  {
    'cabinNumber': '006',
    'maxCapacity': 6,
    'regularPrice': 800,
    'discount': 100,
    'description': 'Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-006.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwNi5qcGciLCJpYXQiOjE3MjAxOTIzOTAsImV4cCI6MTc1MTcyODM5MH0.rvkhlmTz7T3pZi9D3xBhrZYwH2OxUQebYBAPN7gyGVc&t=2024-07-05T15%3A13%3A10.932Z',
  },
  {
    'cabinNumber': '007',
    'maxCapacity': 8,
    'regularPrice': 600,
    'discount': 100,
    'description': 'Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-003.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwMy5qcGciLCJpYXQiOjE3MjAxOTI0MjksImV4cCI6MTc1MTcyODQyOX0.4DYzcdTyCrNpKhHWDLcWW3uA8BRTuA3_dRNZMJhzkG8&t=2024-07-05T15%3A13%3A49.591Z',
  },
  {
    'cabinNumber': '008',
    'maxCapacity': 10,
    'regularPrice': 1400,
    'discount': 0,
    'description': 'Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef\'s dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.',
    'image': 'https://jypetjaadblrxnxsuxoz.supabase.co/storage/v1/object/sign/theWildOasis-cabin_images/cabin-008.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aGVXaWxkT2FzaXMtY2FiaW5faW1hZ2VzL2NhYmluLTAwOC5qcGciLCJpYXQiOjE3MjAxOTIzNzAsImV4cCI6MTc1MTcyODM3MH0.3UDswTlB0ZaW6i_yAW19BAOcI-3eqMDsj7JPOxdDYYc&t=2024-07-05T15%3A12%3A50.760Z',
  },
]
const guestsData = [
  {
    'fullName': 'Jonathan Smith',
    'email': 'johnsmith@test.eu',
    'nationalID': '4534593454',
    'nationality': 'Great Britain',
    'countryFlag': 'https://flagcdn.com/gb.svg',
  },
  {
    'fullName': 'Jonatan Johansson',
    'email': 'jonatan@example.com',
    'nationalID': '9374074454',
    'nationality': 'Finland',
    'countryFlag': 'https://flagcdn.com/fi.svg',
  },
  {
    'fullName': 'Jonas Mueller',
    'email': 'jonas@example.eu',
    'nationalID': '1233212288',
    'nationality': 'Germany',
    'countryFlag': 'https://flagcdn.com/de.svg',
  },
  {
    'fullName': 'Jonas Anderson',
    'email': 'anderson@example.com',
    'nationalID': '0988520146',
    'nationality': 'Bolivia (Plurinational State of)',
    'countryFlag': 'https://flagcdn.com/bo.svg',
  },
  {
    'fullName': 'Jonathan Williams',
    'email': 'jowi@gmail.com',
    'nationalID': '633678543',
    'nationality': 'United States of America',
    'countryFlag': 'https://flagcdn.com/us.svg',
  },
  {
    'fullName': 'Emma Watson',
    'email': 'emma@gmail.com',
    'nationalID': '1234578901',
    'nationality': 'United Kingdom',
    'countryFlag': 'https://flagcdn.com/gb.svg',
  },
  {
    'fullName': 'Mohammed Ali',
    'email': 'mohammedali@yahoo.com',
    'nationalID': '987543210',
    'nationality': 'Egypt',
    'countryFlag': 'https://flagcdn.com/eg.svg',
  },
  {
    'fullName': 'Maria Rodriguez',
    'email': 'maria@gmail.com',
    'nationalID': '1098765321',
    'nationality': 'Spain',
    'countryFlag': 'https://flagcdn.com/es.svg',
  },
  {
    'fullName': 'Li Mei',
    'email': 'li.mei@hotmail.com',
    'nationalID': '102934756',
    'nationality': 'China',
    'countryFlag': 'https://flagcdn.com/cn.svg',
  },
  {
    'fullName': 'Khadija Ahmed',
    'email': 'khadija@gmail.com',
    'nationalID': '1023457890',
    'nationality': 'Sudan',
    'countryFlag': 'https://flagcdn.com/sd.svg',
  },
  {
    'fullName': 'Jonas Schmedtmann',
    'email': 'hello@jonas',
    'nationalID': '3525436345',
    'nationality': 'Portugal',
    'countryFlag': 'https://flagcdn.com/pt.svg',
  },
]
const bookingsData = [
  {
    'startDate': '2024-08-01',
    'endDate': '2024-08-07',
    'numNight': 6,
    'numGuest': 2,
    'cabinPrice': 250,
    'totalPrice': 1500,
    'status': 'CHECKED_IN',
    'hasBreakfast': true,
    'isPaid': true,
    'observation': 'Special anniversary celebration',
  },
  {
    'startDate': '2024-09-10',
    'endDate': '2024-09-15',
    'numNight': 5,
    'numGuest': 4,
    'cabinPrice': 300,
    'totalPrice': 1500,
    'status': 'UNCONFIRMED',
    'hasBreakfast': false,
    'isPaid': false,
    'observation': 'Pending confirmation of vacation dates',
  },
  {
    'startDate': '2024-08-20',
    'endDate': '2024-08-25',
    'numNight': 5,
    'numGuest': 6,
    'cabinPrice': 800,
    'totalPrice': 4000,
    'status': 'CHECKED_OUT',
    'hasBreakfast': true,
    'isPaid': true,
    'observation': 'Family reunion',
  },
  {
    'startDate': '2024-08-10',
    'endDate': '2024-08-15',
    'numNight': 5,
    'numGuest': 2,
    'cabinPrice': 350,
    'totalPrice': 1750,
    'status': 'UNCONFIRMED',
    'hasBreakfast': false,
    'isPaid': false,
    'observation': 'Planning a quiet retreat',
  },
  {
    'startDate': '2024-08-05',
    'endDate': '2024-08-12',
    'numNight': 7,
    'numGuest': 4,
    'cabinPrice': 500,
    'totalPrice': 3500,
    'status': 'CHECKED_OUT',
    'hasBreakfast': true,
    'isPaid': true,
    'observation': 'Annual family vacation',
  },
  {
    'startDate': '2024-09-01',
    'endDate': '2024-09-08',
    'numNight': 7,
    'numGuest': 6,
    'cabinPrice': 350,
    'totalPrice': 2450,
    'status': 'UNCONFIRMED',
    'hasBreakfast': false,
    'isPaid': false,
    'observation': 'Group getaway',
  },
  {
    'startDate': '2024-08-15',
    'endDate': '2024-08-22',
    'numNight': 7,
    'numGuest': 8,
    'cabinPrice': 600,
    'totalPrice': 4200,
    'status': 'CHECKED_IN',
    'hasBreakfast': true,
    'isPaid': true,
    'observation': 'Large family gathering',
  },
  {
    'startDate': '2024-08-25',
    'endDate': '2024-08-28',
    'numNight': 3,
    'numGuest': 10,
    'cabinPrice': 1400,
    'totalPrice': 4200,
    'status': 'UNCONFIRMED',
    'hasBreakfast': false,
    'isPaid': false,
    'observation': 'Team building retreat',
  },
]

const seed = async () => {
  // Delete existing records
  console.log('Deleting existing records...')
  await prisma.$transaction([
    prisma.bookings.deleteMany(),
    prisma.guests.deleteMany(),
    prisma.cabins.deleteMany(),
  ])

  console.log('Seeding database...')

  // Seed Cabins
  const cabins = []
  for (let i = 0; i < cabinsData.length; i++) {
    const cabin = await prisma.cabins.create({ data: cabinsData[i] })
    console.log('Cabin seeded', cabin.id)
    cabins.push(cabin)
  }
  console.log('Cabins seeded')

  // Seed Guests
  const guests = []
  for (let i = 0; i < guestsData.length; i++) {
    const guest = await prisma.guests.create({ data: guestsData[i] })
    console.log('Guest seeded', guest.id)
    guests.push(guest)
  }
  console.log('Guests seeded')

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
}

seed()
  .catch((error) => {
    console.error(error)
  })
  .then(async () => {
    console.log('Seeding complete')
    await prisma.$disconnect()
  })
