/*
  Warnings:

  - The `status` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CHECKED_IN', 'CHECKED_OUT', 'UNCONFIRMED');

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'UNCONFIRMED';
