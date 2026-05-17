export class UserPreferencesDto {
  foodPreferences?: string[];
  travelStyle?: string;
  scenicPreference?: boolean;
  avoidTolls?: boolean;
  avoidCrowds?: boolean;
}

export class CreateUserProfileDto {
  fullName: string;
  avatar?: string;
  preferences?: UserPreferencesDto;
}

export class UpdateUserProfileDto {
  fullName?: string;
  avatar?: string;
}
