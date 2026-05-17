// apps/shared/helpers/string.helper.ts

export class StringHelper {
  /**
   * Convert string to lowercase
   */
  static toLowerCase(str: string): string {
    return str?.toLowerCase() ?? '';
  }

  /**
   * Convert string to uppercase
   */
  static toUpperCase(str: string): string {
    return str?.toUpperCase() ?? '';
  }

  /**
   * Capitalize first letter of string
   */
  static capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Convert string to title case
   */
  static toTitleCase(str: string): string {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  /**
   * Check if string is empty or whitespace
   */
  static isEmpty(str: string): boolean {
    return !str || str.trim().length === 0;
  }

  /**
   * Trim whitespace from string
   */
  static trim(str: string): string {
    return str?.trim() ?? '';
  }

  /**
   * Reverse a string
   */
  static reverse(str: string): string {
    return str?.split('').reverse().join('') ?? '';
  }

  /**
   * Check if string contains substring
   */
  static contains(str: string, substring: string): boolean {
    return str?.includes(substring) ?? false;
  }

  /**
   * Replace all occurrences of a substring
   */
  static replaceAll(str: string, search: string, replace: string): string {
    if (!str) return '';
    return str.split(search).join(replace);
  }

  /**
   * Split string by delimiter
   */
  static split(str: string, delimiter: string = ','): string[] {
    if (!str) return [];
    return str.split(delimiter).map((s) => s.trim());
  }

  /**
   * Check if string is a valid email
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
   * Check if string is a valid phone number (basic)
   */
  static isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Generate random string of specified length
   */
  static generateRandom(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Truncate string to specified length
   */
  static truncate(str: string, length: number = 50, suffix: string = '...'): string {
    if (!str) return '';
    if (str.length <= length) return str;
    return str.substring(0, length - suffix.length) + suffix;
  }

  /**
   * Convert snake_case to camelCase
   */
  static snakeToCamelCase(str: string): string {
    if (!str) return '';
    return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
  }

  /**
   * Convert camelCase to snake_case
   */
  static camelToSnakeCase(str: string): string {
    if (!str) return '';
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }

  /**
   * Convert camelCase to kebab-case
   */
  static camelToKebabCase(str: string): string {
    if (!str) return '';
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }

  /**
   * Repeat string n times
   */
  static repeat(str: string, count: number): string {
    if (!str || count <= 0) return '';
    return str.repeat(count);
  }

  /**
   * Count occurrences of substring in string
   */
  static countOccurrences(str: string, substring: string): number {
    if (!str || !substring) return 0;
    return str.split(substring).length - 1;
  }

  /**
   * Remove special characters from string
   */
  static removeSpecialCharacters(str: string): string {
    if (!str) return '';
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
  }

  /**
   * Pad string with character to specified length
   */
  static padStart(str: string, length: number, padChar: string = ' '): string {
    if (!str) return '';
    return str.padStart(length, padChar);
  }

  /**
   * Pad string with character at end to specified length
   */
  static padEnd(str: string, length: number, padChar: string = ' '): string {
    if (!str) return '';
    return str.padEnd(length, padChar);
  }
}