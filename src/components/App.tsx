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
import VisibilitySensor from "react-visibility-sensor";
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
        <Route
          path=""
          element={
            <VisibilitySensor onChange={onChange}>
              <MainMain />
            </VisibilitySensor>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

/* <Routes>        
        <Route path="" element={<MainAboutUsAndTeam/>}/>
        <Route path="questions" element={<MainQuestions/>}/>
        </Routes> */

// <Routes>
// <Route path="" element={<MainMain></MainMain>}/>
// </Routes>

export default App;
