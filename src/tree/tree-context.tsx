import { createContext, useCallback, useState, useContext } from "react";

interface ITreeContextProviderProps {
  children?: any[];
}

const TreeContext = createContext(null);

export const TreeContextProvider = ({
  children,
}: ITreeContextProviderProps) => {
  const [open, setOpen] = useState(new Set([]));

  const toggleIdToPath = useCallback((id) => {
    setOpen((open) => {
      const ind = open.has(id);

      if (!!ind) {
        // close
        let newOpen = new Set([...open]);
        newOpen.delete(id);
        return newOpen;
      } else {
        //open
        let newOpen = new Set([...open, id]);
        return newOpen;
      }
    });
  });

  const updatePath = useCallback((path) => {
    setOpen(path);
  });

  return (
    <TreeContext.Provider value={{ open, updatePath, toggleIdToPath }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeContext = () => {
  const context = useContext(TreeContext);

  if (context === null) {
    throw new Error("TreeContext should be used inside Provider only");
  }

  return context;
};
