import "./App.css";
import Floaty from "./components/Floaty/Floaty";
import Title from "./components/Title/Title";
import Body from "./components/Body/Body";
import Page from "./components/Page/Page";
import AboutBody from "./data/AboutBody";
import {phone, email, linkedin} from "./data/ContactDetails";
import React from "react";

const App = () => {
  // Home Page
  const title = "CATINELLA";
  const floaty_list = ["Design", "Create", "Maintain"];

  // About Page
  const about = "ABOUT";

  // Contact Page
  const contact = "CONTACT";


  return (
    <div className="App">
      <Page>
        <Title key="Title" text={title} align='Center'></Title>
        <Floaty key="Floaty-Bar" floaty_list={floaty_list}></Floaty>
      </Page>
      <Page>
        <Title key="Title" text={about} align='Right'></Title>
        <Body key="Body" align='Right' text={AboutBody}></Body>
      </Page>
      <Page>
        <Title key="Title" text={contact} align='Left'></Title>
        <Body key="Body" align='Left' text={phone + '\n' + email + '\n' + linkedin}></Body>
      </Page>
    </div>
  );
};

export default App;
