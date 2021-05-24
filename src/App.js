import "./App.css";
import Floaty from "./components/Floaty/Floaty";
import Title from "./components/Title/Title";
import Page from "./components/Page/Page";
import React from "react";

const App = () => {
  // Home Page
  const title = "CATINELLA";
  const floaty_list = ["Design", "Create", "Maintain"];

  // About Page
  const about = "ABOUT";

  return (
    <div className="App">
      <Page>
        <Title key="Title" text={title}></Title>
        <Floaty key="Floaty-Bar" floaty_list={floaty_list}></Floaty>
      </Page>
      <Page>
        <Title key="Title" text={about}></Title>
      </Page>
    </div>
  );
};

export default App;
