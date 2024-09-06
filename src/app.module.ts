import { Module } from '@nestjs/common';
import { JobsModule } from './job-listing/job-listing.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [JobsModule],
  providers: [PrismaService],
})
export class AppModule {}
