import * as React from "react";


import Header from './Header';
import Footer from './Footer';
import Main from "./Main";

function App(props) {

    const [pages, setPage] = React.useState("aboutUs");
   
    function takePage () {
      
    }   
    console.log(props)
 
        return (
            <>
            <Header pages={["aboutUs", "questions"]}/>
            <Main/>
            <Footer/>
            </>
        );
};

export default App;