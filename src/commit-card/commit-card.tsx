import React, { useState } from "react";
import { Button, Card, Flex, Input, Switch, Typography } from "antd"
import { ICommit } from "../commit-context/commit-context.types";
import { useCommitContext } from "../commit-context/use-commit-context";

const { TextArea } = Input;

const { Text } = Typography;

interface Props {
  commit: ICommit
}

export const CommitCard = ({ commit }: Props) => {
  const [state, setState] = useState({ note: '', active: true, showDetails: false });
  const { setNote, setActive } = useCommitContext();

  const onChangeReleaseNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((old) => ({ ...old, note: e.target.value }));
    setNote(commit.hash, e.target.value);
  }

  const onActive = (value: boolean) => {
    setActive(commit.hash, value);
    setState(old => ({ ...old, active: value }));
  }

  const onSetShowDetails = () => {
    setState((old) => ({ ...old, showDetails: !old.showDetails }));
  }

  return <Card size="small" title={
    <Flex justify="space-between" align="center">
      {commit.active ?
        <Button className="no-padding" onClick={onSetShowDetails} type="link">{state.showDetails ? "Show less" : "Show more"}</Button> : <div />
      }
      <Switch
        defaultChecked
        onChange={onActive}
        checkedChildren="added"
        unCheckedChildren="hidden"
      />
    </Flex>
  }>
    <Flex vertical>
      {commit.active && state.showDetails && <React.Fragment>
        <Text className="small-text" italic type="secondary" >{commit.commitHash}</Text>
        <Text className="small-text" type="secondary" >{commit.author}</Text>
        <Text className="small-text" italic type="secondary">{commit.date}</Text>
      </React.Fragment>
      }

      {commit.active && <React.Fragment>
        <Text>{commit.subject}</Text>
        <Text>{commit.body}</Text>
        <Text italic type="secondary" >{commit.footer}</Text>
      </React.Fragment>
      }

      {!commit.active && <React.Fragment>
        <Text italic type="secondary" >{commit.subject}</Text>
        <Text italic type="secondary" >{commit.body}</Text>
      </React.Fragment>
      }
    </Flex>

    {commit.active &&
      <React.Fragment>
        <br />
        <TextArea
          value={commit.note}
          placeholder={`release node message: \n ${commit.subject}${commit.body || ""}`}
          onChange={onChangeReleaseNote} />
      </React.Fragment>
    }
  </Card>
}
