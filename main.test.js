import { describe, test, expect } from "vitest";
import { isPerfectNumber } from "./main";

//wrapped in a describe function for grouping

describe("Perfect Numbers Kata", () => {
  // Test case for known perfect numbers
  // A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).
  test("should return true for known perfect numbers", () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
  });

  // Test case for non-perfect numbers
  // These are numbers that are not equal to the sum of their proper divisors.

  test("should return false for non-perfect numbers", () => {
    expect(isPerfectNumber(12)).toBe(false);
    expect(isPerfectNumber(20)).toBe(false);
    expect(isPerfectNumber(99)).toBe(false);
  });

  // Test case for numbers less than 3
  // Numbers like 1 and 2 are not perfect numbers as they only have themselves and/or the number 1 as divisors.

  test("should return false for numbers less than 3", () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(2)).toBe(false);
  });
});
