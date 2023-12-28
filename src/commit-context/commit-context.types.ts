export interface ICommit {
  hash: string,
  commitHash: string,
  author: string,
  date: string,
  subject: string,
  body: string,
  footer: string,
  active: boolean,
  note: string
}

export type CommitsType = Record<string, ICommit>;

export interface ICommitContext {
  commits: Record<string, ICommit>
  commitsArray: Array<ICommit>
  releaseContent: string
  updateRelease: () => void,
  setActive: (hash: string, value: boolean) => void
  setNote: (hash: string, value: string) => void
}
