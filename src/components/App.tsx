import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Pages } from "./Pages";

function App(props: {}) {
  const [page, setPage] = React.useState(Pages.aboutUs);

  return (
    <>
      <Header currentPage={page} setCurrentPage={setPage} />
      <Main currentPage={page} />
      <Footer />
    </>
  );
}

export default App;
