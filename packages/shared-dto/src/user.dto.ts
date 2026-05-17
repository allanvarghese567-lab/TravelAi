import { ApiProperty } from '@nestjs/swagger';

export class UserPreferencesDto {

  @ApiProperty({
    example: [
      'vegetarian',
      'south indian'
    ],
    required: false,
    description:
      'Preferred food categories'
  })
  foodPreferences?: string[];

  @ApiProperty({
    example: 'luxury',
    required: false,
    description:
      'Preferred travel style'
  })
  travelStyle?: string;

  @ApiProperty({
    example: true,
    required: false,
    description:
      'Preference for scenic routes'
  })
  scenicPreference?: boolean;

  @ApiProperty({
    example: false,
    required: false,
    description:
      'Avoid toll roads during travel'
  })
  avoidTolls?: boolean;

  @ApiProperty({
    example: true,
    required: false,
    description:
      'Avoid crowded locations'
  })
  avoidCrowds?: boolean;

}

export class CreateUserProfileDto {

  @ApiProperty({
    example: 'Allan Varghese',
    description:
      'User full name'
  })
  fullName: string;

  @ApiProperty({
    example:
      'https://cdn.travelai.com/avatar.jpg',
    required: false,
    description:
      'User profile avatar URL'
  })
  avatar?: string;

  @ApiProperty({
    type: UserPreferencesDto,
    required: false,
    description:
      'User travel preferences'
  })
  preferences?: UserPreferencesDto;

}

export class UpdateUserProfileDto {

  @ApiProperty({
    example: 'Allan V',
    required: false,
    description:
      'Updated full name'
  })
  fullName?: string;

  @ApiProperty({
    example:
      'https://cdn.travelai.com/new-avatar.jpg',
    required: false,
    description:
      'Updated avatar URL'
  })
  avatar?: string;

}
