export const getAllNodes = (treeData) => {
  const nodeSet = new Set([]);

  for (const item of treeData) {
    nodeSet.add(item.id);

    if (item.children) getChildNodesSet(item.children, nodeSet);
  }

  return nodeSet;
};

const getChildNodesSet = (arr, nodeSet) => {
  for (const item of arr) {
    nodeSet.add(item.id);
    if (item.children) getChildNodesSet(item.children, nodeSet);
  }
};
