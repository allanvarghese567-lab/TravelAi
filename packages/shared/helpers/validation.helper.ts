// apps/shared/helpers/validation.helper.ts

export class ValidationHelper {
  /**
   * Check if value is null or undefined
   */
  static isNull(value: any): boolean {
    return value === null || value === undefined;
  }

  /**
   * Check if value is empty (null, undefined, empty string, empty array, empty object)
   */
  static isEmpty(value: any): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  }

  /**
   * Check if value is not empty
   */
  static isNotEmpty(value: any): boolean {
    return !this.isEmpty(value);
  }

  /**
   * Check if value is a string
   */
  static isString(value: any): boolean {
    return typeof value === 'string';
  }

  /**
   * Check if value is a number
   */
  static isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if value is a boolean
   */
  static isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  /**
   * Check if value is an array
   */
  static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * Check if value is an object
   */
  static isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Check if value is a function
   */
  static isFunction(value: any): boolean {
    return typeof value === 'function';
  }

  /**
   * Check if value is a Date object
   */
  static isDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
  }

  /**
   * Check if string is a valid email
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.isString(email) && emailRegex.test(email);
  }

  /**
   * Check if string is a valid phone number
   */
  static isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return this.isString(phone) && phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Check if string is a valid URL
   */
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if string is a valid UUID
   */
  static isValidUUID(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return this.isString(uuid) && uuidRegex.test(uuid);
  }

  /**
   * Check if value is within a range
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return this.isNumber(value) && value >= min && value <= max;
  }

  /**
   * Check if string has minimum length
   */
  static hasMinLength(str: string, minLength: number): boolean {
    return this.isString(str) && str.length >= minLength;
  }

  /**
   * Check if string has maximum length
   */
  static hasMaxLength(str: string, maxLength: number): boolean {
    return this.isString(str) && str.length <= maxLength;
  }

  /**
   * Check if string has exact length
   */
  static hasExactLength(str: string, length: number): boolean {
    return this.isString(str) && str.length === length;
  }

  /**
   * Check if value contains all required fields
   */
  static hasRequiredFields(obj: any, requiredFields: string[]): boolean {
    if (!this.isObject(obj)) return false;
    return requiredFields.every((field) => field in obj && !this.isEmpty(obj[field]));
  }

  /**
   * Check if string contains only numbers
   */
  static isNumericString(str: string): boolean {
    return this.isString(str) && /^\d+$/.test(str);
  }

  /**
   * Check if string contains only alphabetic characters
   */
  static isAlphabetic(str: string): boolean {
    return this.isString(str) && /^[a-zA-Z]+$/.test(str);
  }

  /**
   * Check if string contains only alphanumeric characters
   */
  static isAlphanumeric(str: string): boolean {
    return this.isString(str) && /^[a-zA-Z0-9]+$/.test(str);
  }

  /**
   * Check if number is positive
   */
  static isPositive(value: number): boolean {
    return this.isNumber(value) && value > 0;
  }

  /**
   * Check if number is negative
   */
  static isNegative(value: number): boolean {
    return this.isNumber(value) && value < 0;
  }

  /**
   * Check if number is even
   */
  static isEven(value: number): boolean {
    return this.isNumber(value) && value % 2 === 0;
  }

  /**
   * Check if number is odd
   */
  static isOdd(value: number): boolean {
    return this.isNumber(value) && value % 2 !== 0;
  }

  /**
   * Check if array contains duplicate values
   */
  static hasDuplicates<T>(arr: T[]): boolean {
    if (!this.isArray(arr)) return false;
    return new Set(arr).size !== arr.length;
  }

  /**
   * Check if all array elements are unique
   */
  static isUniqueArray<T>(arr: T[]): boolean {
    return !this.hasDuplicates(arr);
  }

  /**
   * Check if value is a valid color hex code
   */
  static isValidHexColor(hex: string): boolean {
    const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return this.isString(hex) && hexRegex.test(hex);
  }

  /**
   * Check if string is a valid JSON
   */
  static isValidJSON(str: string): boolean {
    if (!this.isString(str)) return false;
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if value matches a regex pattern
   */
  static matchesPattern(value: string, pattern: RegExp): boolean {
    return this.isString(value) && pattern.test(value);
  }

  /**
   * Check if date is in the past
   */
  static isPastDate(date: Date): boolean {
    return this.isDate(date) && date < new Date();
  }

  /**
   * Check if date is in the future
   */
  static isFutureDate(date: Date): boolean {
    return this.isDate(date) && date > new Date();
  }

  /**
   * Check if date is today
   */
  static isToday(date: Date): boolean {
    if (!this.isDate(date)) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}