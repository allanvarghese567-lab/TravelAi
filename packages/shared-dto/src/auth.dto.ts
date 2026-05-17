import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {

  @ApiProperty({
    example: 'Allan Varghese',
    description: 'Full name of the user'
  })
  name: string;

  @ApiProperty({
    example: 'allan@example.com',
    description: 'User email address'
  })
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',
    description: 'User account password'
  })
  password: string;

  @ApiProperty({
    example: '+919876543210',
    required: false,
    description: 'User phone number'
  })
  phone?: string;

}

export class LoginDto {

  @ApiProperty({
    example: 'allan@example.com',
    description: 'Registered email address'
  })
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',
    description: 'User password'
  })
  password: string;

}

export class RefreshTokenDto {

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    description:
      'JWT refresh token'
  })
  refreshToken: string;

}
