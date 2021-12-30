/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initDate` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "initDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt";
