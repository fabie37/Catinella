import "./App.css";
import Floaty from "./components/Floaty/Floaty";
import Title from "./components/Title/Title";
import Body from "./components/Body/Body";
import Page from "./components/Page/Page";
import AboutBody from "./data/AboutBody";
import {contacts} from "./data/ContactDetails";
import {meta_title, meta_description, meta_keywords} from "./data/metadata";
import {Helmet, HelmetProvider} from 'react-helmet-async';
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
    <HelmetProvider>

      {/* SEO Stuff */}
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description}></meta>
        <meta name="keywords" content={meta_keywords}></meta>
      </Helmet>

      {/* The Application */}
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
          <Body key="Body" align='Left' text={contacts}></Body>
        </Page>
      </div>
    </HelmetProvider>
  );
};

export default App;
