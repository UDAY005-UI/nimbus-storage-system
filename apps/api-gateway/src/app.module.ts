import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BucketModule } from './modules/bucket/bucket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    BucketModule,
  ],
})
export class AppModule {}
