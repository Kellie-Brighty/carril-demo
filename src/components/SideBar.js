import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FiChevronDown } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  logo: {
    width: 35,
    height: 24,
    marginLeft: 8,
  },
  body: {
    background: "#1A243F",
  },
  help_circle: {
    width: 24,
    height: 24,
    cursor: "pointer",
  },
  right_header: {
    display: "flex",
    alignItems: "center",
  },
  initials_circle: {
    width: 22,
    height: 22,
    border: "0.8px solid #fff",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 26,
  },
  initials: {
    fontWeight: "400",
    fontSize: 11.2,
    color: "#fff",
  },
  header_name: {
    fontSize: 12,
    color: "#fff",
    marginLeft: 14,
  },
  drop_down: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 12.5,
    cursor: "pointer",
  },
  name_drop: {
    display: "flex",
    alignItems: "center",
  },
  sidebar_text: {
    marginLeft: 60,
  },
  sidebar_welcome: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D9D9D9",
  },
  sidebar_text_header_box: {
    marginTop: 20,
    padding: "5px 0px",
  },
  sidebar_text_header: {
    fontSize: 28,
    fontWeight: 500,
    color: "#fff",
  },
  sidebar_options_box: {
    marginTop: 20,
  },
  sidebar_option: {
    display: "flex",
    alignItems: "center",
  },
  sidebar_option_text: {
    marginLeft: 17.5,
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  right: {
    color: "#FDA700",
    fontSize: 18,
  },
  sidebar_paragraph: {
    marginTop: 20,
  },
  sidebar_paragraph_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "lighter",
    width: 329,
  },
  sidebar_footer: {
    // marginTop: 422,
  },
  sidebar_footer_text: {
    textAlign: "right",
    color: "#FDA700",
    fontSize: 16,
    fontWeight: "500",
    cursor: "pointer",
    marginRight: 28,
    marginBottom: 20
  },
});

const SideBar = () => {
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
      style={{
        width: windowDimenion.winWidth * 0.375,
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className={classes.header}>
        <img src="carril_logo.png" className={classes.logo} />

        <div className={classes.right_header}>
          <img src="help-circle.png" className={classes.help_circle} />
          <div className={classes.initials_circle}>
            <p className={classes.initials}>AD</p>
          </div>
          <div className={classes.name_drop}>
            <p className={classes.header_name}>Anthony Davis</p>
            <FiChevronDown className={classes.drop_down} />
          </div>
        </div>
      </div>

      <div
        className={classes.sidebar_text}
        // style={{ marginTop: windowDimenion.winHeight * 0.254 }}
      >
        <p className={classes.sidebar_welcome}>Welcome to Carril, Anthony!</p>
        <div className={classes.sidebar_text_header_box}>
          <p className={classes.sidebar_text_header}>
            Build your first project
          </p>
        </div>
        <div className={classes.sidebar_options_box}>
          <div className={classes.sidebar_option}>
            <HiChevronRight style={{ visibility: "hidden" }} />
            <p className={classes.sidebar_option_text}>Set up your project</p>
          </div>
          <div className={classes.sidebar_option} style={{ marginTop: 10 }}>
            <HiChevronRight className={classes.right} />
            <p className={classes.sidebar_option_text}>Set up your project</p>
          </div>
          <div className={classes.sidebar_paragraph}>
            <p className={classes.sidebar_paragraph_text}>
              Get started by creating a new project - it only takes a minute.
              Once finished, we will save it to your drafts where you can edit whenever you want or review
            </p>
          </div>
        </div>
      </div>
      <div className={classes.sidebar_footer}>
        <p className={classes.sidebar_footer_text}>Skip this step</p>
      </div>
    </div>
  );
};

export default SideBar;
