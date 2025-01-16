import { describe, test, expect } from "vitest";
import { isPerfectNumber } from "./main";

describe("Perfect Numbers Kata", () => {
  test("should return true for known perfect numbers", () => {
    expect(isPerfectNumber(6)).toBe(true); // 1 + 2 + 3 = 6
    expect(isPerfectNumber(28)).toBe(true); // 1 + 2 + 4 + 7 + 14 = 28
    expect(isPerfectNumber(496)).toBe(true); // 1 + divisors = 496
  });

  test("should return false for non-perfect numbers", () => {
    expect(isPerfectNumber(12)).toBe(false); // 1 + 2 + 3 + 4 + 6 ≠ 12
    expect(isPerfectNumber(20)).toBe(false); // 1 + 2 + 4 + 5 + 10 ≠ 20
    expect(isPerfectNumber(99)).toBe(false);
  });

  test("should return false for edge cases that are not perfect numbers", () => {
    expect(isPerfectNumber(1)).toBe(false); // Proper divisors of 1 = []
    expect(isPerfectNumber(2)).toBe(false); // Proper divisors of 2 = [1]
  });
});
