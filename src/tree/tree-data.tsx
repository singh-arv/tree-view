const treeData = [
  {
    id: "1",
    displayName: "1",
    type: "folder",
    children: [
      {
        id: "11",
        displayName: "11",
        type: "folder",
        children: [
          {
            id: "111",
            displayName: "111",
            type: "folder",
            children: [{ id: "1111", displayName: "1111", type: "file" }],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    displayName: "2",
    type: "folder",
    children: [{ id: "21", displayName: "21", type: "file" }],
  },
  {
    id: "3",
    displayName: "3",
    type: "folder",
    children: [{ id: "31", displayName: "31", type: "file" }],
  },
];

export default treeData;
