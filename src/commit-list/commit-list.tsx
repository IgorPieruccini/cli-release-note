import { Button, Card, Flex } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { CommitCard } from "../commit-card/commit-card";
import React from "react";
import { useCommitContext } from "../commit-context/use-commit-context";

export const CommitList = () => {
  const { commitsArray, updateRelease } = useCommitContext();

  return <div className="w-50p">
    <Card size="small" className="marging-8-bottom">
      <Flex justify="end">
        <Button type="primary" onClick={updateRelease}>
          Adds commits to release note
          <FileTextOutlined />
        </Button>
      </Flex>
    </Card>
    <div className="h-95vh scroll-y padding-right-24">
      <Flex gap={12} vertical >
        {
          commitsArray.map(commit => <div key={commit.hash}><CommitCard commit={commit} /></div>)
        }
      </Flex>
    </div>
  </div>
};
