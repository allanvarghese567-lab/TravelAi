// apps/shared/constants/error.constants.ts

export class ErrorConstants {
  // HTTP Status Codes
  static readonly HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
  };

  // Error Codes
  static readonly ERROR_CODES = {
    // Auth errors
    INVALID_CREDENTIALS: 'AUTH_001',
    USER_NOT_FOUND: 'AUTH_002',
    USER_ALREADY_EXISTS: 'AUTH_003',
    TOKEN_EXPIRED: 'AUTH_004',
    TOKEN_INVALID: 'AUTH_005',
    UNAUTHORIZED_ACCESS: 'AUTH_006',

    // Location errors
    LOCATION_NOT_FOUND: 'LOC_001',
    INVALID_LOCATION: 'LOC_002',
    LOCATION_ALREADY_EXISTS: 'LOC_003',

    // Itinerary errors
    ITINERARY_NOT_FOUND: 'ITIN_001',
    INVALID_ITINERARY: 'ITIN_002',
    ITINERARY_CONFLICT: 'ITIN_003',

    // Recommendation errors
    RECOMMENDATION_FAILED: 'REC_001',
    INVALID_PREFERENCES: 'REC_002',

    // General errors
    VALIDATION_FAILED: 'GENERAL_001',
    INTERNAL_ERROR: 'GENERAL_002',
    SERVICE_UNAVAILABLE: 'GENERAL_003',
    TIMEOUT: 'GENERAL_004',
  };

  // Error Messages
  static readonly ERROR_MESSAGES = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    USER_NOT_FOUND: 'User not found',
    USER_ALREADY_EXISTS: 'User already exists with this email',
    TOKEN_EXPIRED: 'Token has expired',
    TOKEN_INVALID: 'Invalid token',
    UNAUTHORIZED_ACCESS: 'You do not have permission to access this resource',

    LOCATION_NOT_FOUND: 'Location not found',
    INVALID_LOCATION: 'Invalid location data',
    LOCATION_ALREADY_EXISTS: 'Location already exists',

    ITINERARY_NOT_FOUND: 'Itinerary not found',
    INVALID_ITINERARY: 'Invalid itinerary data',
    ITINERARY_CONFLICT: 'Itinerary conflict detected',

    RECOMMENDATION_FAILED: 'Failed to generate recommendations',
    INVALID_PREFERENCES: 'Invalid preference data',

    VALIDATION_FAILED: 'Validation failed',
    INTERNAL_ERROR: 'An internal error occurred',
    SERVICE_UNAVAILABLE: 'Service is temporarily unavailable',
    TIMEOUT: 'Request timeout',
  };

  // Success Messages
  static readonly SUCCESS_MESSAGES = {
    USER_CREATED: 'User created successfully',
    LOGIN_SUCCESSFUL: 'Login successful',
    LOGOUT_SUCCESSFUL: 'Logout successful',
    LOCATION_CREATED: 'Location created successfully',
    LOCATION_UPDATED: 'Location updated successfully',
    LOCATION_DELETED: 'Location deleted successfully',
    ITINERARY_CREATED: 'Itinerary created successfully',
    ITINERARY_UPDATED: 'Itinerary updated successfully',
    ITINERARY_DELETED: 'Itinerary deleted successfully',
  };
}