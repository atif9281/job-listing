import { Module } from '@nestjs/common';
import { JobsService } from './job-listing.service';
import { JobsController } from './job-listing.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [JobsController],
  providers: [JobsService, PrismaService],
})
export class JobsModule {}
