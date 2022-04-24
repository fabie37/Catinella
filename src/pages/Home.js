import Floaty from "../components/Floaty/Floaty";
import Title from "../components/Title/Title";
import Body from "../components/Body/Body";
import Page from "../components/Page/Page";
import AboutBody from "../data/AboutBody";
import {contacts} from "../data/ContactDetails";

// Home Page
const title = "CATINELLA";
const floaty_list = ["Design", "Create", "Maintain"];

// About Page
const about = "ABOUT";

// Contact Page
const contact = "CONTACT";

const Home = () => 
        <div>
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


export default Home;