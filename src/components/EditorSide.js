import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronLeft } from "react-icons/hi";
import TextEditor from "./TextEditor";

const useStyles = makeStyles({
  body: {
    background: "#F5F5F5",
    flex: 3,
    padding: "100px 0px",
    overflowY: 'scroll',
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  inner_body: {
    marginLeft: 94,
    // marginTop: 160,
  },
  header_text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    marginLeft: 26.75,
  },
  left: {
    color: "#737373",
    fontSize: 22,
  },
  project_name_box: {
    marginTop: 32,
  },
  project_name_title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
  input_box: {
    marginTop: 8,
  },
  input: {
    padding: "10px 20px",
    outline: "none",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    color: "#C0C0C0",
  },
  description_name_box: {
    marginTop: 16,
  },
  description_name_title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
  files_name_box: {
    marginTop: 16,
  },
  files_name_title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
  file_input: {
    padding: "10px 20px",
    border: "1px dashed rgba(0, 0, 0, 0.1)",
    color: "#C0C0C0",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  file_input_text: {
    fontSize: 14,
    fontWeight: "200",
    padding: "10px 20px",
  },
  inner_file_input: {
    textAlign: "center",
  },
  inner_file_btn: {
    padding: "10px 16px",
    background: "#F8F7F7",
    border: "none",
    color: "#7E7E7E",
    fontSize: 14,
    fontWeight: "500",
    cursor: "pointer",
  },
  btn_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },
  create_project_btn: {
    padding: "15px 30px",
    fontSize: 16,
    fontWeight: "700",
    background: "#FDA700",
    border: "none",
    cursor: "pointer",
  },
  go_back_btn: {
    padding: "15px 30px",
    background: "transparent",
    outline: "none",
    border: "1px solid #000",
    fontSize: 16,
    fontWeight: "500",
    cursor: "pointer",
  },
});

const EditorSide = () => {
  const classes = useStyles();
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
      className={classes.body}
      style={{ width: windowDimenion.winWidth * 0.625 }}
    >
      <div className={classes.inner_body}>
        <div className={classes.header}>
          <HiChevronLeft className={classes.left} />
          <p className={classes.header_text}>New project request</p>
        </div>

        <div className={classes.project_name_box}>
          <p className={classes.project_name_title}>Project name *</p>
          <div className={classes.input_box}>
            <input
              placeholder="Give your project a name"
              className={classes.input}
              style={{ width: windowDimenion.winWidth * 0.457 }}
            />
          </div>
        </div>

        <div className={classes.description_name_box}>
          <p className={classes.description_name_title}>Description *</p>
          <div className={classes.input_box}>
            <TextEditor />
          </div>
        </div>

        <div className={classes.files_name_box}>
          <p className={classes.files_name_title}>Files</p>
          <div className={classes.input_box}>
            <div
              className={classes.file_input}
              style={{ width: windowDimenion.winWidth * 0.457 }}
            >
              <div className={classes.inner_file_input}>
                <p className={classes.file_input_text}>
                  Drag files here to add them to this project, or
                </p>
                <button className={classes.inner_file_btn}>
                  Upload from computer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classes.btn_box}
          style={{ width: windowDimenion.winWidth * 0.488 }}
        >
          <button className={classes.go_back_btn}>Go back</button>
          <button className={classes.create_project_btn}>Create project</button>
        </div>
      </div>
    </div>
  );
};

export default EditorSide;
