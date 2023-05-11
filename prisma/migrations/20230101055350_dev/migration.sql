/*
  Warnings:

  - A unique constraint covering the columns `[settingId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `settingId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "settingId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "setting" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL DEFAULT 100.0,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setting_userId_key" ON "setting"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_settingId_key" ON "user"("settingId");

-- AddForeignKey
ALTER TABLE "setting" ADD CONSTRAINT "setting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
