import React from "react";
import {
  ConfigurableEditorWithAuth,
  EditorProvider,
} from "ct-rich-text-editor";
import "ct-rich-text-editor/style.css";

const RichTextEditor: React.FC = () => {
  // Replace with your actual API key
  // const API_KEY = import.meta.env.VITE_APP_API_KEY;

  // const apiKey = API_KEY;

  return (
    <div
    >
      <h1 style={{ marginBottom: "20px" }}>Rich Text Editor</h1>
      <EditorProvider>
        <ConfigurableEditorWithAuth apiKey="B5DQ-9FVH-W5CC-V8TK" />
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
