import { ApiProperty }
from '@nestjs/swagger';
export class AITripRequestDto {
  source: string;
  destination: string;
  interests: string[];
  budget?: number;
}

export class AITripResponseDto {
  summary: string;
  estimatedBudget: number;
  itinerary: any[];
}
