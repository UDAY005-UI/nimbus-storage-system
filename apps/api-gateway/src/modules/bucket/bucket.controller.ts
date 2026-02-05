import { Body, Controller, Post, Req } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import type { Request } from 'express';

@Controller('buckets')
export class BucketController {
  constructor(private readonly BucketService: BucketService) {}

  @Post('create-bucket')
  createBucket(@Body() dto: CreateBucketDto, @Req() req: Request) {
    const userId = req.user!.id;

    return this.BucketService.createBucket(userId, dto);
  }
}
