import React from "react";
import { CommitContext } from "./commit-context";

export const useCommitContext = () => {
  const context = React.useContext(CommitContext);
  if (!context)
    throw new Error("useCommitContext can only be used wrapped in <CommitContextProvider/>")
  return context;
}
