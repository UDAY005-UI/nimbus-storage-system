import { Module } from '@nestjs/common';
import { BucketModule } from './modules/bucket/bucket.module';

@Module({
  imports: [BucketModule],
})
export class AppModule {}
