/*
  Warnings:

  - You are about to drop the `SurveysVoted` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SurveysVoted" DROP CONSTRAINT "SurveysVoted_optionId_fkey";

-- DropForeignKey
ALTER TABLE "SurveysVoted" DROP CONSTRAINT "SurveysVoted_surveyId_fkey";

-- DropForeignKey
ALTER TABLE "SurveysVoted" DROP CONSTRAINT "SurveysVoted_userId_fkey";

-- DropTable
DROP TABLE "SurveysVoted";

-- CreateTable
CREATE TABLE "_OptionToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OptionToUser_AB_unique" ON "_OptionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionToUser_B_index" ON "_OptionToUser"("B");

-- AddForeignKey
ALTER TABLE "_OptionToUser" ADD FOREIGN KEY ("A") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
