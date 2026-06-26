import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateItineraryDto {
  @IsString()
  @IsNotEmpty()
  tripId: string;

  @IsArray()
  items: any[];
}
