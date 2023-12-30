import { ConfigProvider, Empty, Flex } from 'antd';
import React from 'react';
import { CommitContextProvider } from './commit-context/commit-context';
import { CommitList } from './commit-list/commit-list';
import { TextEditor } from './text-editor/text-editor';
import { theme } from './theme';

export function App() {
  if (!window["gitLog"]) {
    return <Empty />
  }
  return <ConfigProvider theme={theme}>
    <CommitContextProvider commitsSTR={window["gitLog"]}>
      <Flex gap={12} >
        <CommitList />
        <TextEditor />
      </Flex>
    </ CommitContextProvider>
  </ConfigProvider>
}
