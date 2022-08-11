import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    console.log(windowDimenion);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div
      style={{
        background: "#fff",
        width: windowDimenion.winWidth * 0.488,
        height: 200,
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        toolbar={{
          options: ["inline", "list", "link"],
        }}
        placeholder="Tell us about your project"
        editorStyle={{
          padding: "10px 20px",
          fontSize: 14,
          fontWeight: "400",
          color: "#C0C0C0",
        }}
      />
    </div>
  );
};

export default TextEditor;