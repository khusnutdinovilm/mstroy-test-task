import { INode, MapChildNodeType, MapNodeType, NodeIdType } from "./types";

class TreeStore {
  private mapNodes: MapNodeType;
  private childeNodes: MapChildNodeType;

  constructor(nodeList: INode[]) {
    this.childeNodes = new Map();
    this.mapNodes = this._createNodes(nodeList);
  }

  private _createNodes(nodeList: INode[]): MapNodeType {
    const mapNodes = new Map(
      nodeList.map((item: INode) => {
        this._createChildNodes(item.parent, item);

        return [item.id, item];
      })
    );

    return mapNodes;
  }

  private _createChildNodes(parentId: NodeIdType, node: INode) {
    if (parentId === "root") {
      this.childeNodes.set(node.id, []);
    } else {
      const children = this.childeNodes.get(parentId) ?? [];
      this.childeNodes.set(parentId, [...children, node]);
    }
  }

  getAll(): INode[] {
    return [...this.mapNodes.values()];
  }

  getItem(id: NodeIdType): INode | undefined {
    return this.mapNodes.get(id);
  }

  getChildren(id: NodeIdType): INode[] {
    return this.childeNodes.get(id) ?? [];
  }

  getAllChildren(id: NodeIdType): INode[] {
    const allChildNodes: INode[] = [];

    const collectChildNode = (nodeId: NodeIdType) => {
      const childNodes = this.getChildren(nodeId);

      allChildNodes.push(...childNodes);

      childNodes.forEach((childNode) => collectChildNode(childNode.id));
    };

    collectChildNode(id);

    return allChildNodes;
  }

  getAllParents(id: NodeIdType): INode[] {
    let node: INode = this.getItem(id) as INode;
    const parentList: INode[] = [];

    while (node.parent !== "root") {
      const parentNode = this.getItem(node.parent) as INode;
      parentList.push(parentNode);
      node = parentNode;
    }

    return parentList;
  }
}

export default TreeStore;
