import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import MainMain from "./MainMain";
import { Pages } from "./Pages";
import MainAboutUsAndTeam from "./MainAboutUsAndTeam";
import MainQuestions from "./MainQuestions";
import { Routes } from "react-router-dom";
import { Route } from "react-router"


function App(props: {}) {
  const [page, setPage] = React.useState(Pages.aboutUs);

  return (
    <div>
      <Header currentPage={page} setCurrentPage={setPage}/>
      <Routes>
        <Route path="" element={<MainMain></MainMain>}/>
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
