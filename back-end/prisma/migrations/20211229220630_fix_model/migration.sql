/*
  Warnings:

  - You are about to drop the column `optionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_OptionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OptionToUser" DROP CONSTRAINT "_OptionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_OptionToUser" DROP CONSTRAINT "_OptionToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "optionId";

-- DropTable
DROP TABLE "_OptionToUser";

-- CreateTable
CREATE TABLE "SurveysVoted" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "surveyId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "SurveysVoted_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SurveysVoted" ADD CONSTRAINT "SurveysVoted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveysVoted" ADD CONSTRAINT "SurveysVoted_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveysVoted" ADD CONSTRAINT "SurveysVoted_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
