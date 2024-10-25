export type NodeIdType = number | "root";

export interface INode {
  id: Readonly<NodeIdType>;
  parent: NodeIdType;
  type?: any;
}

export type MapNodeType = Map<NodeIdType, INode>;
// export type MapChildNodeType = Map<NodeIdType, NodeIdType[]>;
export type MapChildNodeType = Map<NodeIdType, INode[]>;
