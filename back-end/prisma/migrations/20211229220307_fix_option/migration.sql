-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_optionId_fkey";

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
