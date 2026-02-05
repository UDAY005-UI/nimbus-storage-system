import { Body, Controller, Headers, Post } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';

@Controller('metadata-service/create-bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Post()
  createBucket(
    @Headers('x-user-id') userId: string,
    @Body() dto: CreateBucketDto,
  ) {
    return this.bucketService.createBucket(userId, dto);
  }
}
