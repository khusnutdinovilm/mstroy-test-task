import TreeStore from ".";

import { nodeList } from "../node-list";
import { INode } from "./types";

describe("Testing TreeStore class", () => {
  let ts: TreeStore;

  beforeEach(() => {
    ts = new TreeStore(nodeList);
  });

  describe("testing method getAll()", () => {
    test("should return all items in nodeList", () => {
      expect(ts.getAll()).toEqual(nodeList);
    });
  });

  describe("testing method getItem(id)", () => {
    console.log("testing method getItem(id)", ts);

    const expectedItems = [
      { id: 1, parent: "root" },
      { id: 4, parent: 2, type: "test" },
      { id: 7, parent: 4, type: null },
    ];

    expectedItems.forEach((expected) => {
      test(`should return item from nodeList with id = ${expected.id} with ts.getItem(${expected.id})`, () => {
        expect(ts.getItem(expected.id)).toEqual(expected);
      });
    });
  });

  describe("testing method getChildren(id)", () => {
    test(`should return children of item 2 with getChildren(2)`, () => {
      const expected = [
        { id: 4, parent: 2, type: "test" },
        { id: 5, parent: 2, type: "test" },
        { id: 6, parent: 2, type: "test" },
      ];
      expect(ts.getChildren(2)).toEqual(expected);
    });

    test(`should return children of item 4 with getChildren(4)`, () => {
      const expected = [
        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null },
      ];

      expect(ts.getChildren(4)).toEqual(expected);
    });

    test(`should return children of item 5 with getChildren(5)`, () => {
      const expected: INode[] = [];

      expect(ts.getChildren(5)).toEqual(expected);
    });
  });

  describe("Testing method getAllChildren(id)", () => {
    test("should return all children of item 2 with getAllChildren(2)", () => {
      const expected = [
        { id: 4, parent: 2, type: "test" },
        { id: 5, parent: 2, type: "test" },
        { id: 6, parent: 2, type: "test" },
        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null },
      ];
      expect(ts.getAllChildren(2)).toEqual(expected);
    });
  });

  describe("Testing method getAllParents(id)", () => {
    test("should return all parents of item 7 with getAllParents(7)", () => {
      const expected = [
        { id: 4, parent: 2, type: "test" },
        { id: 2, parent: 1, type: "test" },
        { id: 1, parent: "root" },
      ];
      expect(ts.getAllParents(7)).toEqual(expected);
    });
  });
});
