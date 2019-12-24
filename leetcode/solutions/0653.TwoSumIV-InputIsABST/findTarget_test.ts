import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findTarget from "./findTarget.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0653. Two Sum IV - Input is a BST", () => {
  assertEquals(
    findTarget(createBinaryTreeNode([5, 3, 6, 2, 4, null, 7]),
    9
  ), true);
  assertEquals(
    findTarget(createBinaryTreeNode([5, 3, 6, 2, 4, null, 7]),
    28
  ), false);
});
