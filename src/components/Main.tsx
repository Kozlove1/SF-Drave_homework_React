import * as React from "react";

import MainAboutUsAndTeam from "./MainAboutUsAndTeam";
import MainQuestions from "./MainQuestions";

function Main (props) {

  const [page, setPage] = React.useState(true);

  return(
    <>
       {page ? 
        <MainAboutUsAndTeam/> : 
        <MainQuestions/>
        }
    </>
  );
};

export default Main;