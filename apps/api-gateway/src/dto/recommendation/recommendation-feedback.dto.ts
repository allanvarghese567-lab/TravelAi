import { IsString, IsNotEmpty } from 'class-validator';

export class RecommendationFeedbackDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  recId: string;

  liked: boolean;
}
