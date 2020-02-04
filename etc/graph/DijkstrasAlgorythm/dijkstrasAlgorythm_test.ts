import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import dijkstrasAlgorythm from "./dijkstrasAlgorythm.ts";

test("Graph: Dijkstra's Algorythm", () => {
  const routes = [
    [0, 1, 5],
    [0, 2, 4],
    [0, 3, 1],
    [1, 4, 2],
    [2, 4, 5],
    [2, 5, 6],
    [4, 6, 1],
    [4, 7, 3],
    [5, 7, 2],
    [6, 7, 4],
  ];

  assertEquals(dijkstrasAlgorythm(routes, 0, 7), [0, 1, 4, 7]);

  const routes2 = [
    [0, 1, 1],
    [0, 2, 2],
    [0, 3, 3],
    [0, 4, 5],
    [1, 2, 3],
    [2, 3, 2],
    [2, 5, 3],
    [3, 5, 1],
    [4, 5, 4],
    [4, 6, 4],
    [5, 7, 7],
    [5, 8, 5],
    [6, 8, 7],
    [7, 8, 2],
  ];

  assertEquals(dijkstrasAlgorythm(routes2, 0, 8), [0, 3, 5, 8]);
});
