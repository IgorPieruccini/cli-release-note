import { Card } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-2";
import 'react-quill-2/dist/quill.snow.css'; // ES6
import { useCommitContext } from "../commit-context/use-commit-context";
import './text-editor.css'

const Editor = {
  modules: {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
}

export const TextEditor = () => {
  const { releaseContent } = useCommitContext();
  const [updateCount, setUpdateCount] = useState(0);
  const html = useRef(releaseContent.length > 0 ? releaseContent : "<h1>Release note</h1>");

  const handleChange = (_html: string) => {
    html.current = _html;
  }

  useEffect(() => {
    console.log(releaseContent);
    html.current = html.current + "\n" + releaseContent;
    setUpdateCount(updateCount + 1);
    console.log(html.current);
  }, [releaseContent]);


  return <Card size="small" className="w-50p">
    <ReactQuill
      onChange={handleChange}
      value={html.current}
      modules={Editor.modules}
    />
  </Card>
}
