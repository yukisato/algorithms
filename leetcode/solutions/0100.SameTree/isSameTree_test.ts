import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSameTree from "./isSameTree.ts";
import { TreeNode } from "../../../data_structures/TreeNode.ts";

test("0100. Same Tree", () => {
  let tree1: TreeNode<number> = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  let tree2: TreeNode<number> = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  assertEquals(isSameTree(tree1, tree2), true);
  tree1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  }
  tree2 = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  }
  assertEquals(isSameTree(tree1, tree2), false);
});