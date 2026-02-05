import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateBucketDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(63)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  region?: string;
}
