import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import MainMain from "./MainMain";
import { Pages } from "./Pages";
import MainAboutUsAndTeam from "./MainAboutUsAndTeam";
import MainQuestions from "./MainQuestions";
import { Routes } from "react-router-dom";
import { Route } from "react-router";

import { ClassLists } from "./ClassLists";

function App(props: {}) {
  const [page, setPage] = React.useState(Pages.aboutUs);

  const [classNameHedeNoOpacity, setClassNameHedeNoOpacity] = React.useState(
    ClassLists.head
  );

  function onChange(isVisible: Boolean) {
    isVisible
      ? setClassNameHedeNoOpacity(ClassLists.head)
      : setClassNameHedeNoOpacity(ClassLists.headNoOpacity);
  }

  return (
    <div>
      <Header
        classNameHedeNoOpacity={classNameHedeNoOpacity}
        currentPage={page}
        setCurrentPage={setPage}
      />
      <Routes>
            <Route path="" element={<MainMain onChange={onChange}></MainMain>}/>
            <Route path="aboutUs" element={<MainAboutUsAndTeam onChange={onChange}/>}/>
            <Route path="questions" element={<MainQuestions onChange={onChange}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
