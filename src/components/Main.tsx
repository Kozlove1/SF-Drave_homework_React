import * as React from "react";

import MainAboutUsAndTeam from "./MainAboutUsAndTeam";
import MainQuestions from "./MainQuestions";

import "../AboutUs/AboutUs.css";
import { Pages } from "./Pages";

function Main(props: { currentPage: Pages }) {
  return (
    <>
      {props.currentPage === Pages.aboutUs ? (
        <MainAboutUsAndTeam onChange={()=>{}}/>
      ) : (
        <MainQuestions onChange={()=>{}}/>
      )}
    </>
  );
}

export default Main;
