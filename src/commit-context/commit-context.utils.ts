export const parseCommitsSTRtoCommits = (commitsSTR: string[]) => {
  return commitsSTR.reduce((acc, commit) => {

    const [commitHash, author, date, subject, body, footer] =
      commit.split("\n").filter(content => content.length > 0);

    const [_, hash] = commitHash.split("commit ");

    return {
      ...acc,
      [hash]: {
        hash,
        commitHash,
        author,
        date,
        subject,
        body,
        footer,
        active: true,
        note: ""
      }
    }
  }, {});
}
