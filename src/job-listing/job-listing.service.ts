import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJobDto: CreateJobDto) {
    return await this.prisma.jobListing.create({
      data: createJobDto,
    });
  }

  async findAll() {
    return await this.prisma.jobListing.findMany();
  }

  async findOne(id: string) {
    const job = await this.prisma.jobListing.findUnique({
      where: { id },
    });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async update(id: string, updateJobDto: UpdateJobDto) {
    const job = await this.prisma.jobListing.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return await this.prisma.jobListing.update({
      where: { id },
      data: updateJobDto,
    });
  }

  async remove(id: string) {
    const job = await this.prisma.jobListing.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return await this.prisma.jobListing.delete({
      where: { id },
    });
  }
}
