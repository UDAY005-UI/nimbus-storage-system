import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateBucketDto } from './dto/create-bucket.dto';
import axios from 'axios';
import { Bucket } from '@repo/database';

@Injectable()
export class BucketService {
  async createBucket(userId: string, dto: CreateBucketDto): Promise<Bucket> {
    try {
      const response = await axios.post<Bucket>(
        `${process.env.metadta_service_url}/create-bucket`,
        {
          name: dto.name,
          region: dto.region,
        },
        {
          headers: {
            'x-user-id': userId,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to create bucket via metadata service',
      );
    }
  }
}
