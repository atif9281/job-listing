/*
  Warnings:

  - The primary key for the `JobListing` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "JobListing_id_seq";
