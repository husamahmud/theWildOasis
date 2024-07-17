import prisma from '../models/prisma/prisma-client'

type Status = 'CHECKED_IN' | 'CHECKED_OUT' | 'UNCONFIRMED'

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
  {
    'fullName': 'Jonas Mueller',
    'email': 'jonas@example.eu',
    'nationality': 'Germany',
    'nationalID': '1233212288',
    'countryFlag': 'https://flagcdn.com/de.svg',
  },
  {
    'fullName': 'Jonas Anderson',
    'email': 'anderson@example.com',
    'nationality': 'Bolivia (Plurinational State of)',
    'nationalID': '0988520146',
    'countryFlag': 'https://flagcdn.com/bo.svg',
  },
  {
    'fullName': 'Jonathan Williams',
    'email': 'jowi@gmail.com',
    'nationality': 'United States of America',
    'nationalID': '633678543',
    'countryFlag': 'https://flagcdn.com/us.svg',
  },
  {
    'fullName': 'Emma Watson',
    'email': 'emma@gmail.com',
    'nationality': 'United Kingdom',
    'nationalID': '1234578901',
    'countryFlag': 'https://flagcdn.com/gb.svg',
  },
  {
    'fullName': 'Mohammed Ali',
    'email': 'mohammedali@yahoo.com',
    'nationality': 'Egypt',
    'nationalID': '987543210',
    'countryFlag': 'https://flagcdn.com/eg.svg',
  },
  {
    'fullName': 'Maria Rodriguez',
    'email': 'maria@gmail.com',
    'nationality': 'Spain',
    'nationalID': '1098765321',
    'countryFlag': 'https://flagcdn.com/es.svg',
  },
  {
    'fullName': 'Li Mei',
    'email': 'li.mei@hotmail.com',
    'nationality': 'China',
    'nationalID': '102934756',
    'countryFlag': 'https://flagcdn.com/cn.svg',
  },
  {
    'fullName': 'Khadija Ahmed',
    'email': 'khadija@gmail.com',
    'nationality': 'Sudan',
    'nationalID': '1023457890',
    'countryFlag': 'https://flagcdn.com/sd.svg',
  },
  {
    'fullName': 'Gabriel Silva',
    'email': 'gabriel@gmail.com',
    'nationality': 'Brazil',
    'nationalID': '109283465',
    'countryFlag': 'https://flagcdn.com/br.svg',
  },
  {
    'fullName': 'Maria Gomez',
    'email': 'maria@example.com',
    'nationality': 'Mexico',
    'nationalID': '108765421',
    'countryFlag': 'https://flagcdn.com/mx.svg',
  },
  {
    'fullName': 'Ahmed Hassan',
    'email': 'ahmed@gmail.com',
    'nationality': 'Egypt',
    'nationalID': '1077777777',
    'countryFlag': 'https://flagcdn.com/eg.svg',
  },
  {
    'fullName': 'John Doe',
    'email': 'johndoe@gmail.com',
    'nationality': 'United States',
    'nationalID': '3245908744',
    'countryFlag': 'https://flagcdn.com/us.svg',
  },
  {
    'fullName': 'Fatima Ahmed',
    'email': 'fatima@example.com',
    'nationality': 'Pakistan',
    'nationalID': '1089999363',
    'countryFlag': 'https://flagcdn.com/pk.svg',
  },
  {
    'fullName': 'David Smith',
    'email': 'david@gmail.com',
    'nationality': 'Australia',
    'nationalID': '44450960283',
    'countryFlag': 'https://flagcdn.com/au.svg',
  },
  {
    'fullName': 'Marie Dupont',
    'email': 'marie@gmail.com',
    'nationality': 'France',
    'nationalID': '06934233728',
    'countryFlag': 'https://flagcdn.com/fr.svg',
  },
  {
    'fullName': 'Ramesh Patel',
    'email': 'ramesh@gmail.com',
    'nationality': 'India',
    'nationalID': '9875412303',
    'countryFlag': 'https://flagcdn.com/in.svg',
  },
  {
    'fullName': 'Fatimah Al-Sayed',
    'email': 'fatimah@gmail.com',
    'nationality': 'Kuwait',
    'nationalID': '0123456789',
    'countryFlag': 'https://flagcdn.com/kw.svg',
  },
  {
    'fullName': 'Nina Williams',
    'email': 'nina@hotmail.com',
    'nationality': 'South Africa',
    'nationalID': '2345678901',
    'countryFlag': 'https://flagcdn.com/za.svg',
  },
  {
    'fullName': 'Taro Tanaka',
    'email': 'taro@gmail.com',
    'nationality': 'Japan',
    'nationalID': '3456789012',
    'countryFlag': 'https://flagcdn.com/jp.svg',
  },
  {
    'fullName': 'Abdul Rahman',
    'email': 'abdul@gmail.com',
    'nationality': 'Saudi Arabia',
    'nationalID': '4567890123',
    'countryFlag': 'https://flagcdn.com/sa.svg',
  },
  {
    'fullName': 'Julie Nguyen',
    'email': 'julie@gmail.com',
    'nationality': 'Vietnam',
    'nationalID': '5678901234',
    'countryFlag': 'https://flagcdn.com/vn.svg',
  },
  {
    'fullName': 'Sara Lee',
    'email': 'sara@gmail.com',
    'nationality': 'South Korea',
    'nationalID': '6789012345',
    'countryFlag': 'https://flagcdn.com/kr.svg',
  },
  {
    'fullName': 'Carlos Gomez',
    'email': 'carlos@yahoo.com',
    'nationality': 'Colombia',
    'nationalID': '7890123456',
    'countryFlag': 'https://flagcdn.com/co.svg',
  },
  {
    'fullName': 'Emma Brown',
    'email': 'emma@gmail.com',
    'nationality': 'Canada',
    'nationalID': '8901234567',
    'countryFlag': 'https://flagcdn.com/ca.svg',
  },
  {
    'fullName': 'Juan Hernandez',
    'email': 'juan@yahoo.com',
    'nationality': 'Argentina',
    'nationalID': '4343433333',
    'countryFlag': 'https://flagcdn.com/ar.svg',
  },
  {
    'fullName': 'Ibrahim Ahmed',
    'email': 'ibrahim@yahoo.com',
    'nationality': 'Nigeria',
    'nationalID': '2345678009',
    'countryFlag': 'https://flagcdn.com/ng.svg',
  },
  {
    'fullName': 'Mei Chen',
    'email': 'mei@gmail.com',
    'nationality': 'Taiwan',
    'nationalID': '3456117890',
    'countryFlag': 'https://flagcdn.com/tw.svg',
  },
]

function generateBookingData(numEntries: number) {
  const bookingData = []
  const basePrice = 250
  const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
  const statuses = ['CHECKED_IN', 'CHECKED_OUT', 'UNCONFIRMED']
  const observations = [
    'Special anniversary celebration',
    'Family vacation',
    'Business trip',
    'Honeymoon',
    'Friends reunion',
    'Birthday celebration',
    'Romantic getaway',
    'Relaxation retreat',
    'Adventure trip',
    'Cultural exploration',
  ]

  for (let i = 0; i < numEntries; i++) {
    const numNights = getRandomInt(1, 14)
    const startDate = new Date(2024, getRandomInt(0, 11), getRandomInt(1, 28))
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + numNights)

    const startDateStr = startDate.toISOString().split('T')[0]
    const endDateStr = endDate.toISOString().split('T')[0]

    const numGuests = getRandomInt(1, 4)
    const totalPrice = basePrice * numNights * numGuests
    const status = statuses[getRandomInt(0, statuses.length - 1)]
    const observation = observations[getRandomInt(0, observations.length - 1)]

    bookingData.push({
      startDate: startDateStr,
      endDate: endDateStr,
      numNight: numNights,
      numGuest: numGuests,
      cabinPrice: basePrice,
      totalPrice: totalPrice,
      status: status,
      hasBreakfast: Math.random() < 0.5,
      isPaid: Math.random() < 0.7,
      observation: observation,
    })
  }

  return bookingData
}

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
