// apps/shared/helpers/response.helper.ts

export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: string;
  path?: string;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export class ResponseHelper {
  /**
   * Success response with data
   */
  static success<T>(
    data: T,
    message: string = 'Request successful',
    statusCode: number = 200,
  ): ApiResponse<T> {
    return {
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Success response with pagination
   */
  static successPaginated<T>(
    data: T[],
    page: number = 1,
    limit: number = 10,
    total: number = 0,
    message: string = 'Request successful',
    statusCode: number = 200,
  ): PaginatedResponse<T> {
    const totalPages = Math.ceil(total / limit);
    return {
      success: true,
      statusCode,
      message,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Error response
   */
  static error(
    message: string = 'An error occurred',
    errorCode: string = 'UNKNOWN_ERROR',
    statusCode: number = 500,
    path?: string,
  ): ApiResponse {
    return {
      success: false,
      statusCode,
      message,
      error: {
        code: errorCode,
        message,
      },
      timestamp: new Date().toISOString(),
      path,
    };
  }

  /**
   * Bad request error (400)
   */
  static badRequest(
    message: string = 'Bad request',
    errorCode: string = 'BAD_REQUEST',
  ): ApiResponse {
    return this.error(message, errorCode, 400);
  }

  /**
   * Unauthorized error (401)
   */
  static unauthorized(
    message: string = 'Unauthorized',
    errorCode: string = 'UNAUTHORIZED',
  ): ApiResponse {
    return this.error(message, errorCode, 401);
  }

  /**
   * Forbidden error (403)
   */
  static forbidden(
    message: string = 'Forbidden',
    errorCode: string = 'FORBIDDEN',
  ): ApiResponse {
    return this.error(message, errorCode, 403);
  }

  /**
   * Not found error (404)
   */
  static notFound(
    message: string = 'Not found',
    errorCode: string = 'NOT_FOUND',
  ): ApiResponse {
    return this.error(message, errorCode, 404);
  }

  /**
   * Conflict error (409)
   */
  static conflict(
    message: string = 'Conflict',
    errorCode: string = 'CONFLICT',
  ): ApiResponse {
    return this.error(message, errorCode, 409);
  }

  /**
   * Internal server error (500)
   */
  static internalError(
    message: string = 'Internal server error',
    errorCode: string = 'INTERNAL_ERROR',
  ): ApiResponse {
    return this.error(message, errorCode, 500);
  }

  /**
   * Service unavailable error (503)
   */
  static serviceUnavailable(
    message: string = 'Service unavailable',
    errorCode: string = 'SERVICE_UNAVAILABLE',
  ): ApiResponse {
    return this.error(message, errorCode, 503);
  }

  /**
   * Validation error (400)
   */
  static validationError(
    message: string = 'Validation failed',
    errors?: { [key: string]: string },
  ): ApiResponse {
    return {
      success: false,
      statusCode: 400,
      message,
      error: {
        code: 'VALIDATION_ERROR',
        message: JSON.stringify(errors || {}),
      },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Format response with custom details
   */
  static formatResponse(
    success: boolean,
    statusCode: number,
    message: string,
    data?: any,
    errorCode?: string,
  ): ApiResponse {
    return {
      success,
      statusCode,
      message,
      data: success ? data : undefined,
      error: !success
        ? {
            code: errorCode || 'UNKNOWN_ERROR',
            message,
          }
        : undefined,
      timestamp: new Date().toISOString(),
    };
  }
}