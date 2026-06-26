import { IsOptional, IsString, IsArray, IsISO8601 } from 'class-validator';

export class UpdateTripDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsISO8601()
  startDate?: string;

  @IsOptional()
  @IsISO8601()
  endDate?: string;

  @IsOptional()
  @IsArray()
  locations?: string[];
}
