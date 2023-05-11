/*
  Warnings:

  - You are about to drop the column `settingId` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_settingId_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "settingId";
