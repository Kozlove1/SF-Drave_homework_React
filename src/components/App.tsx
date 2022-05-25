import * as React from "react";


import Header from './Header';
import Footer from './Footer';
import Main from "./Main";
import Contacts_board from "./Contacts_board";
import Team from "./Team";
import MainAboutUs from "./MainAboutUs";
import MainQuestions from "./MainQuestions";



function App() {
 
        return (
            <>
            <Header>
                <MainAboutUs/>
                <MainQuestions/>
            </Header>
            <Contacts_board/>
            <Team></Team>
            <Footer/>
            </>
        );
}

export default App;