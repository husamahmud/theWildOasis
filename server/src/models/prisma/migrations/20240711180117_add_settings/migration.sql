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
