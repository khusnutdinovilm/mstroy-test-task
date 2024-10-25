import TreeStore from "./TreeStore";
import { nodeList } from "./node-list";

const ts = new TreeStore(nodeList);

console.group("getAll");
console.log(ts.getAll());
console.groupEnd();
console.log();

console.group("getItem");
console.log("2", ts.getItem(2));
console.groupEnd();
console.log();

console.group("getChildren");
console.log("4", ts.getChildren(4));
console.log("5", ts.getChildren(5));
console.log("2", ts.getChildren(2));
console.groupEnd();
console.log();

console.group("getAllChildren");
console.log("4", ts.getAllChildren(4));
console.log("5", ts.getChildren(5));
console.log("2", ts.getAllChildren(2));
console.groupEnd();
console.log();

console.group("getAllParents");
console.log("7", ts.getAllParents(7));
console.groupEnd();
