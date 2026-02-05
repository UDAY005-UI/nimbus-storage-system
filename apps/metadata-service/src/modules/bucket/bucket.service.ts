import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { prisma } from '@repo/database';

@Injectable()
export class BucketService {
  async createBucket(userId: string, dto: CreateBucketDto) {
    try {
      const existing = await prisma.bucket.findFirst({
        where: {
          ownerId: userId,
          name: dto.name,
        },
      });

      if (existing) {
        throw new ConflictException('Bucket already exists');
      }

      return prisma.bucket.create({
        data: {
          ownerId: userId,
          name: dto.name,
          region: dto.region ?? 'ap-south-1',
        },
      });
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }
      throw new InternalServerErrorException('Unable to create bucket');
    }
  }
}
