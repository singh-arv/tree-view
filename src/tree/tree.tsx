import React, { useRef, useCallback, useEffect } from "react";
import treeData from "./tree-data";
import { TreeContextProvider, useTreeContext } from "./tree-context";
import { getAllNodes } from "./tree-utils";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { PiDotOutlineFill } from "react-icons/pi";
import { VscExpandAll, VscCollapseAll } from "react-icons/vsc";

import "./tree.css";

interface IFolderProps {
  displayName: string;
  path: any;
  key?: any;
  id: string;
  children: any;
}

interface IFileProps {
  displayName: string;
  path: any;
  key?: any;
  id: string;
}

const Tree = () => {
  console.log(treeData);
  const nodeRef = useRef(new Set());

  useEffect(() => {
    nodeRef.current = getAllNodes(treeData);
  }, []);

  return (
    <TreeContextProvider>
      <div className="mainWrapper">
        <TreeActionButtons allNodeRef={nodeRef} />
        <ul className="tree-wrapper">
          {treeData.map((item) =>
            item.type === "folder" ? (
              <Folder
                displayName={item.displayName}
                id={item.id}
                path={new Set([item.id])}
                children={item.children}
              />
            ) : (
              <File
                displayName={item.displayName}
                id={item.id}
                path={new Set([item.id])}
              />
            )
          )}
        </ul>
      </div>
    </TreeContextProvider>
  );
};

const TreeActionButtons = ({ allNodeRef }) => {
  const { updatePath } = useTreeContext();
  const handleExpandAllClick = useCallback(() => {
    updatePath(allNodeRef.current);
  }, [updatePath]);

  const handleCollapseAllClick = useCallback(() => {
    updatePath(new Set());
  });

  return (
    <div className="actionButtonsWrapper">
      <button onClick={handleExpandAllClick}>
        <VscExpandAll />
      </button>
      <button onClick={handleCollapseAllClick}>
        <VscCollapseAll />
      </button>
    </div>
  );
};

const File = ({ displayName, id, path }: IFileProps) => {
  const { updatePath } = useTreeContext();

  const onFileClick = React.useCallback(() => {
    updatePath(path);
  }, [updatePath, path]);

  return (
    <li onClick={onFileClick}>
      <div className="itemTitle">
        <span className="openCloseIcon">
          <PiDotOutlineFill />
        </span>
        <span>{displayName}</span>
      </div>
    </li>
  );
};

const Folder = ({ displayName, children, id, path }: IFolderProps) => {
  const { toggleIdToPath, open } = useTreeContext();
  const isOpen = open?.has(id) || false;

  const clickHandler = useCallback(() => {
    toggleIdToPath(id);
  }, [toggleIdToPath, id]);

  return (
    <li>
      <div className="itemTitle" onClick={clickHandler}>
        <span className="openCloseIcon">
          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        </span>
        <span>{displayName}</span>
      </div>
      {isOpen && children.length ? (
        <ul className="tree-wrapper">
          {children.map((item) =>
            item.type === "folder" ? (
              <Folder
                key={item.id}
                displayName={item.displayName}
                id={item.id}
                children={item.children}
                path={new Set([...path, item.id])}
              />
            ) : (
              <File
                key={item.id}
                displayName={item.displayName}
                id={item.id}
                path={new Set([...path, item.id])}
              />
            )
          )}
        </ul>
      ) : null}
    </li>
  );
};

export default Tree;
