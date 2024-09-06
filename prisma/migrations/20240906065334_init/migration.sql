-- CreateEnum
CREATE TYPE "JobCategory" AS ENUM ('WEB_DEVELOPER', 'MOBILE_APP_DEVELOPER', 'HUMAN_RESOURCE_DEVELOPER', 'QUALITY_ASSURANCE', 'OTHER');

-- CreateEnum
CREATE TYPE "JobLevel" AS ENUM ('INTERN', 'JUNIOR', 'MID_LEVEL', 'SENIOR', 'LEAD');

-- CreateEnum
CREATE TYPE "JobLocation" AS ENUM ('ONSITE', 'REMOTE', 'HYBRID');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'INTERNSHIP', 'CONTRACT', 'REMOTE', 'ONSITE', 'HYBRID');

-- CreateEnum
CREATE TYPE "JobSkills" AS ENUM ('REACT_NATIVE', 'REACT_JS', 'NODE_JS');

-- CreateTable
CREATE TABLE "JobListing" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobReferenceNumber" TEXT,
    "jobCategory" "JobCategory" NOT NULL,
    "jobLevel" "JobLevel" NOT NULL,
    "jobLocation" "JobLocation" NOT NULL,
    "employmentType" "EmploymentType" NOT NULL,
    "vacancies" INTEGER NOT NULL,
    "jobSkills" "JobSkills"[],
    "jobDescription" TEXT NOT NULL,
    "applicationDeadline" TIMESTAMP(3),
    "applicationInstructions" TEXT,
    "contactEmail" TEXT NOT NULL,
    "requiredDocuments" TEXT[],
    "candidateQuestions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);
