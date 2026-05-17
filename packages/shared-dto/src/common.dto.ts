import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {

  @ApiProperty({
    example: 1,
    required: false,
    description: 'Current page number'
  })
  page?: number;

  @ApiProperty({
    example: 10,
    required: false,
    description: 'Number of records per page'
  })
  limit?: number;

}

export class CoordinatesDto {

  @ApiProperty({
    example: 10.8505,
    description: 'Latitude coordinate'
  })
  lat: number;

  @ApiProperty({
    example: 76.2711,
    description: 'Longitude coordinate'
  })
  lng: number;

}

export class AddressDto {

  @ApiProperty({
    example: 'India',
    required: false,
    description: 'Country name'
  })
  country?: string;

  @ApiProperty({
    example: 'Kerala',
    required: false,
    description: 'State or province name'
  })
  state?: string;

  @ApiProperty({
    example: 'Kochi',
    required: false,
    description: 'City name'
  })
  city?: string;

  @ApiProperty({
    example: 'Ernakulam',
    required: false,
    description: 'District name'
  })
  district?: string;

  @ApiProperty({
    example: '682001',
    required: false,
    description: 'Postal or ZIP code'
  })
  postalCode?: string;

  @ApiProperty({
    example:
      'MG Road, Kochi, Kerala 682001, India',
    required: false,
    description:
      'Formatted complete address'
  })
  formattedAddress?: string;

}
