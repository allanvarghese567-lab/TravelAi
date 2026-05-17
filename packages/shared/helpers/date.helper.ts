// apps/shared/helpers/date.helper.ts

export class DateHelper {
  /**
   * Get current date
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Get current timestamp (milliseconds)
   */
  static timestamp(): number {
    return Date.now();
  }

  /**
   * Get current timestamp (seconds)
   */
  static timestampSeconds(): number {
    return Math.floor(Date.now() / 1000);
  }

  /**
   * Format date to ISO string
   */
  static toISO(date: Date = new Date()): string {
    return date.toISOString();
  }

  /**
   * Format date to string (YYYY-MM-DD)
   */
  static toDateString(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
  }

  /**
   * Format date to time string (HH:MM:SS)
   */
  static toTimeString(date: Date = new Date()): string {
    return date.toTimeString().split(' ')[0];
  }

  /**
   * Format date to datetime string (YYYY-MM-DD HH:MM:SS)
   */
  static toDateTimeString(date: Date = new Date()): string {
    const dateStr = this.toDateString(date);
    const timeStr = this.toTimeString(date);
    return `${dateStr} ${timeStr}`;
  }

  /**
   * Format date using Intl API
   */
  static format(date: Date = new Date(), locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  /**
   * Add days to a date
   */
  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Subtract days from a date
   */
  static subtractDays(date: Date, days: number): Date {
    return this.addDays(date, -days);
  }

  /**
   * Add hours to a date
   */
  static addHours(date: Date, hours: number): Date {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
  }

  /**
   * Add minutes to a date
   */
  static addMinutes(date: Date, minutes: number): Date {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

  /**
   * Add seconds to a date
   */
  static addSeconds(date: Date, seconds: number): Date {
    const result = new Date(date);
    result.setSeconds(result.getSeconds() + seconds);
    return result;
  }

  /**
   * Add months to a date
   */
  static addMonths(date: Date, months: number): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  /**
   * Add years to a date
   */
  static addYears(date: Date, years: number): Date {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  }

  /**
   * Get the difference between two dates in milliseconds
   */
  static getDifferenceInMs(date1: Date, date2: Date): number {
    return Math.abs(date1.getTime() - date2.getTime());
  }

  /**
   * Get the difference between two dates in seconds
   */
  static getDifferenceInSeconds(date1: Date, date2: Date): number {
    return Math.floor(this.getDifferenceInMs(date1, date2) / 1000);
  }

  /**
   * Get the difference between two dates in minutes
   */
  static getDifferenceInMinutes(date1: Date, date2: Date): number {
    return Math.floor(this.getDifferenceInSeconds(date1, date2) / 60);
  }

  /**
   * Get the difference between two dates in hours
   */
  static getDifferenceInHours(date1: Date, date2: Date): number {
    return Math.floor(this.getDifferenceInMinutes(date1, date2) / 60);
  }

  /**
   * Get the difference between two dates in days
   */
  static getDifferenceInDays(date1: Date, date2: Date): number {
    return Math.floor(this.getDifferenceInHours(date1, date2) / 24);
  }

  /**
   * Check if date is today
   */
  static isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  /**
   * Check if date is yesterday
   */
  static isYesterday(date: Date): boolean {
    const yesterday = this.subtractDays(new Date(), 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  }

  /**
   * Check if date is tomorrow
   */
  static isTomorrow(date: Date): boolean {
    const tomorrow = this.addDays(new Date(), 1);
    return (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    );
  }

  /**
   * Check if date is in the past
   */
  static isPast(date: Date): boolean {
    return date < new Date();
  }

  /**
   * Check if date is in the future
   */
  static isFuture(date: Date): boolean {
    return date > new Date();
  }

  /**
   * Get the start of the day (00:00:00)
   */
  static getStartOfDay(date: Date = new Date()): Date {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
  }

  /**
   * Get the end of the day (23:59:59)
   */
  static getEndOfDay(date: Date = new Date()): Date {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
  }

  /**
   * Get the start of the month
   */
  static getStartOfMonth(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  /**
   * Get the end of the month
   */
  static getEndOfMonth(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
  }

  /**
   * Get the start of the year
   */
  static getStartOfYear(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), 0, 1);
  }

  /**
   * Get the end of the year
   */
  static getEndOfYear(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);
  }

  /**
   * Get day name (Monday, Tuesday, etc.)
   */
  static getDayName(date: Date = new Date(), locale: string = 'en-US'): string {
    return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
  }

  /**
   * Get month name (January, February, etc.)
   */
  static getMonthName(date: Date = new Date(), locale: string = 'en-US'): string {
    return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  }

  /**
   * Get week number of the year
   */
  static getWeekNumber(date: Date = new Date()): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  }

  /**
   * Check if year is leap year
   */
  static isLeapYear(year: number = new Date().getFullYear()): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Parse date string (ISO format)
   */
  static parse(dateString: string): Date {
    return new Date(dateString);
  }

  /**
   * Create date from components
   */
  static create(
    year: number,
    month: number,
    day: number,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
  ): Date {
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

  /**
   * Get age from birthdate
   */
  static getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  /**
   * Get time remaining until a date (human readable)
   */
  static getTimeRemaining(targetDate: Date): string {
    const now = new Date();
    if (targetDate <= now) return 'Time has passed';

    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} remaining`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
    return 'Less than a minute remaining';
  }
}