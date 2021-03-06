import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import removePalindromeSub from "./removePalindromeSub.ts";

Deno.test("1332. Remove Palindromic Subsequences", () => {
  assertEquals(removePalindromeSub("ababa"), 1);
  assertEquals(removePalindromeSub("abb"), 2);
  assertEquals(removePalindromeSub("baabb"), 2);
  assertEquals(removePalindromeSub(""), 0);
});
