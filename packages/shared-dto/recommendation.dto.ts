export class RecommendationRequestDto {
  tripId: string;
  currentLat: number;
  currentLng: number;
  categories?: string[];
  limit?: number;
}

export class RecommendationResponseDto {
  places: any[];
}
