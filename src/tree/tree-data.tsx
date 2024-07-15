const treeData = [
  {
    id: "components1",
    displayName: "components",
    type: "folder",
    children: [
      {
        id: "users1",
        displayName: "Users",
        type: "folder",
        children: [
          {
            id: "addUser1",
            displayName: "AddUsers",
            type: "folder",
            children: [
              {
                id: "addSingleUser",
                displayName: "AddSingleUser",
                type: "file",
              },
              {
                id: "addMultiUsers1",
                displayName: "AddMultiUsers",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        id: "settings1",
        displayName: "Settings",
        type: "folder",
        children: [
          {
            id: "addSetting1",
            displayName: "AddSettings",
            type: "folder",
            children: [
              {
                id: "addSingleSetting",
                displayName: "AddSingleSetting",
                type: "file",
              },
              {
                id: "addMultiSettings1",
                displayName: "AddMultisettings",
                type: "file",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hooks2",
    displayName: "hooks",
    type: "folder",
    children: [
      { id: "usePrevious21", displayName: "usePrevious", type: "file" },
      { id: "useThrottle21", displayName: "useThrotte", type: "file" },
    ],
  },
  {
    id: "provider1",
    displayName: "Providers",
    type: "folder",
    children: [
      { id: "provider31", displayName: "UserProvider", type: "file" },
      { id: "provider32", displayName: "SettingProvider", type: "file" },
    ],
  },
];

export default treeData;
