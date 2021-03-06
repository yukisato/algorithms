import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import getRow from "./getRow.ts";

Deno.test("0119. Pascal's Triangle II", () => {
  assertEquals(getRow(3), [1, 3, 3, 1]);
  assertEquals(getRow(4), [1, 4, 6, 4, 1]);
});
