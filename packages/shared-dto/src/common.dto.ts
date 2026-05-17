export class PaginationDto {
  page?: number;
  limit?: number;
}

export class CoordinatesDto {
  lat: number;
  lng: number;
}

export class AddressDto {
  country?: string;
  state?: string;
  city?: string;
  district?: string;
  postalCode?: string;
  formattedAddress?: string;
}
