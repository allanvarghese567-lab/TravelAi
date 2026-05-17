// apps/shared/helpers/array.helper.ts

export class ArrayHelper {
  /**
   * Check if array is empty
   */
  static isEmpty<T>(arr: T[]): boolean {
    return !Array.isArray(arr) || arr.length === 0;
  }

  /**
   * Check if array is not empty
   */
  static isNotEmpty<T>(arr: T[]): boolean {
    return !this.isEmpty(arr);
  }

  /**
   * Get first element of array
   */
  static first<T>(arr: T[]): T | undefined {
    return arr?.[0];
  }

  /**
   * Get last element of array
   */
  static last<T>(arr: T[]): T | undefined {
    return arr?.[arr.length - 1];
  }

  /**
   * Get random element from array
   */
  static random<T>(arr: T[]): T | undefined {
    if (this.isEmpty(arr)) return undefined;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Shuffle array (returns new array)
   */
  static shuffle<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Remove duplicates from array
   */
  static unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  /**
   * Remove duplicates by property
   */
  static uniqueBy<T>(arr: T[], key: keyof T): T[] {
    const seen = new Set();
    return arr.filter((item) => {
      const k = item[key];
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

//   /**
//    * Flatten array by one level
//    */
//   static flatten<T>(arr: (T | T[])[]): T[] {
//     return arr.reduce((acc, val) => acc.concat(val), [] as T[]);
//   }

  /**
   * Flatten array completely
   */
  static flattenDeep<T>(arr: any[]): T[] {
    return arr.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) ? this.flattenDeep(val) : val);
    }, [] as T[]);
  }

  /**
   * Chunk array into smaller arrays
   */
  static chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Filter out falsy values
   */
  static compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[] {
    return arr.filter(Boolean) as T[];
  }

  /**
   * Find common elements in two arrays
   */
  static intersection<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter((item) => set2.has(item));
  }

  /**
   * Find elements in arr1 that are not in arr2
   */
  static difference<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter((item) => !set2.has(item));
  }

  /**
   * Merge multiple arrays
   */
  static merge<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, arr) => acc.concat(arr), [] as T[]);
  }

  /**
   * Sum all numbers in array
   */
  static sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  /**
   * Get average of numbers in array
   */
  static average(arr: number[]): number {
    if (this.isEmpty(arr)) return 0;
    return this.sum(arr) / arr.length;
  }

  /**
   * Get min value in array
   */
  static min(arr: number[]): number {
    return Math.min(...arr);
  }

  /**
   * Get max value in array
   */
  static max(arr: number[]): number {
    return Math.max(...arr);
  }

  /**
   * Sort array in ascending order
   */
  static sortAsc<T>(arr: T[], key?: keyof T): T[] {
    const sorted = [...arr];
    if (key) {
      return sorted.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    }
    return sorted.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  /**
   * Sort array in descending order
   */
  static sortDesc<T>(arr: T[], key?: keyof T): T[] {
    return this.sortAsc(arr, key).reverse();
  }

  /**
   * Group array by key
   */
  static groupBy<T>(arr: T[], key: keyof T): { [key: string]: T[] } {
    return arr.reduce(
      (groups, item) => {
        const groupKey = String(item[key]);
        if (!groups[groupKey]) {
          groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
      },
      {} as { [key: string]: T[] },
    );
  }

  /**
   * Count occurrences of values in array
   */
  static countBy<T>(arr: T[]): { [key: string]: number } {
    return arr.reduce(
      (counts, item) => {
        const key = String(item);
        counts[key] = (counts[key] || 0) + 1;
        return counts;
      },
      {} as { [key: string]: number },
    );
  }

  /**
   * Map over array and return new array
   */
  static map<T, U>(arr: T[], fn: (item: T, index: number) => U): U[] {
    return arr.map(fn);
  }

  /**
   * Filter array by predicate
   */
  static filter<T>(arr: T[], predicate: (item: T, index: number) => boolean): T[] {
    return arr.filter(predicate);
  }

  /**
   * Reduce array to single value
   */
  static reduce<T, U>(arr: T[], fn: (acc: U, item: T) => U, initial: U): U {
    return arr.reduce(fn, initial);
  }

  /**
   * Find index of element by predicate
   */
  static findIndex<T>(arr: T[], predicate: (item: T) => boolean): number {
    return arr.findIndex(predicate);
  }

  /**
   * Check if array includes value
   */
  static includes<T>(arr: T[], value: T): boolean {
    return arr.includes(value);
  }

  /**
   * Check if any element matches predicate
   */
  static some<T>(arr: T[], predicate: (item: T) => boolean): boolean {
    return arr.some(predicate);
  }

  /**
   * Check if all elements match predicate
   */
  static every<T>(arr: T[], predicate: (item: T) => boolean): boolean {
    return arr.every(predicate);
  }

  /**
   * Reverse array
   */
  static reverse<T>(arr: T[]): T[] {
    return [...arr].reverse();
  }

  /**
   * Repeat array n times
   */
  static repeat<T>(arr: T[], n: number): T[] {
    return Array(n).fill(null).reduce((acc) => acc.concat(arr), [] as T[]);
  }

  /**
   * Range of numbers
   */
  static range(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    if (step > 0) {
      for (let i = start; i < end; i += step) {
        result.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i > end; i += step) {
        result.push(i);
      }
    }
    return result;
  }

  /**
   * Create array of size filled with value
   */
  static fill<T>(size: number, value: T): T[] {
    return Array(size).fill(value);
  }

  /**
   * Zip multiple arrays together
   */
  static zip<T>(...arrays: T[][]): T[][] {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const result: T[][] = [];
    for (let i = 0; i < maxLength; i++) {
      const row: T[] = [];
      for (const arr of arrays) {
        row.push(arr[i]);
      }
      result.push(row);
    }
    return result;
  }

  /**
   * Unzip array of arrays
   */
  static unzip<T>(arr: T[][]): T[][] {
    return this.zip(...arr);
  }

  /**
   * Paginate array
   */
  static paginate<T>(arr: T[], page: number = 1, pageSize: number = 10): { data: T[]; total: number; pages: number } {
    const total = arr.length;
    const pages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
      data: arr.slice(start, end),
      total,
      pages,
    };
  }
}