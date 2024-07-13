-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CHECKED_IN', 'CHECKED_OUT', 'UNCONFIRMED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guests" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationalID" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "countryFlag" TEXT NOT NULL,

    CONSTRAINT "Guests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cabins" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cabinNumber" TEXT NOT NULL,
    "maxCapacity" INTEGER NOT NULL,
    "regularPrice" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Cabins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "numNight" INTEGER NOT NULL,
    "numGuest" INTEGER NOT NULL,
    "cabinPrice" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'UNCONFIRMED',
    "hasBreakfast" BOOLEAN NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "observation" TEXT NOT NULL,
    "cabinId" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "minBookingLen" INTEGER NOT NULL,
    "maxBookingLen" INTEGER NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "breakfastCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Guests_email_key" ON "Guests"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Guests_nationalID_key" ON "Guests"("nationalID");

-- CreateIndex
CREATE UNIQUE INDEX "Cabins_cabinNumber_key" ON "Cabins"("cabinNumber");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_cabinId_fkey" FOREIGN KEY ("cabinId") REFERENCES "Cabins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
