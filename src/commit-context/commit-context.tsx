import React, { useEffect, useRef, useState } from "react";
import { ICommitContext } from "./commit-context.types";
import { parseCommitsSTRtoCommits } from "./commit-context.utils";

const initialContextData: ICommitContext = {
  commits: {},
  commitsArray: [],
  releaseContent: `
    <h1>Release note</h1>
    <br/>
  `,
  updateRelease: () => { /* */ },
  setActive: () => { /* */ },
  setNote: () => { /* */ }
}

export const CommitContext = React.createContext<ICommitContext>(initialContextData);

interface Props {
  commitsSTR: Array<string>
  children: React.ReactElement
}

export const CommitContextProvider = ({ children, commitsSTR }: Props) => {
  const [loading, setLoading] = useState(true);
  const [releaseContent, setReleaseContent] = useState("");
  const commits = useRef<ICommitContext["commits"]>({});

  useEffect(() => {
    commits.current = parseCommitsSTRtoCommits(commitsSTR);
    setLoading(false);
  }, [commitsSTR]);

  const setActive = (hash: string, value: boolean) => {
    commits.current[hash].active = value;
  }

  const setNote = (hash: string, value: string) => {
    commits.current[hash].note = value;
  }

  const updateRelease = () => {
    const array = Object.values(commits.current);
    const content = array.reduce(
      (acc, cur) => {
        if (cur.active) {
          if (cur.note) return `${acc}<p>${cur.note}</p>`

          const content = `<p>${cur.subject}</p>${cur.body?.length > 0 ? "<p>" + cur.body + "</p>" : ""}`
          return `${acc}${content}`
        }
        return acc
      }
      , "");

    setReleaseContent(content);
  }

  if (loading) return null;

  return <CommitContext.Provider value={{ commits: commits.current, commitsArray: Object.values(commits.current), setActive, setNote, releaseContent, updateRelease }}>
    {children}
  </CommitContext.Provider>
}
