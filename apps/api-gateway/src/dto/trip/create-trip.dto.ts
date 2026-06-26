import { IsString, IsOptional, IsArray, IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateTripDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  title: string;

  @IsISO8601()
  startDate: string;

  @IsISO8601()
  endDate: string;

  @IsArray()
  @IsOptional()
  locations?: string[];
}
