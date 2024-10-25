type NodeIdType = number | string;

export interface INode {
  id: Readonly<NodeIdType>;
  parent: NodeIdType;
  type?: any;
}
