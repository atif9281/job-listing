// src/job-listing/dto/create-job.dto.ts
import { IsString, IsOptional, IsInt, IsArray, IsEnum, IsDate, IsEmail } from 'class-validator';
import { JobCategory, JobLevel, JobLocation, EmploymentType, JobSkills } from '../../common/enums'; // Adjust the import path if necessary

export class CreateJobDto {
  @IsString()
  jobTitle: string;

  @IsOptional()
  @IsString()
  jobReferenceNumber?: string;

  @IsEnum(JobCategory)
  jobCategory: JobCategory;

  @IsEnum(JobLevel)
  jobLevel: JobLevel;

  @IsEnum(JobLocation)
  jobLocation: JobLocation;

  @IsEnum(EmploymentType)
  employmentType: EmploymentType;

  @IsInt()
  vacancies: number;

  @IsArray()
  @IsEnum(JobSkills, { each: true })
  jobSkills: JobSkills[];

  @IsString()
  jobDescription: string;

  @IsOptional()
  @IsDate()
  applicationDeadline?: Date;

  @IsOptional()
  @IsString()
  applicationInstructions?: string;

  @IsEmail()
  contactEmail: string;

  @IsArray()
  @IsString({ each: true })
  requiredDocuments: string[];

  @IsArray()
  @IsString({ each: true })
  candidateQuestions: string[];
}
