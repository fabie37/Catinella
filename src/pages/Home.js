import Floaty from '../components/Floaty/Floaty';
import Title from '../components/Title/Title';
import Body from '../components/Body/Body';
import Page from '../components/Page/Page';
import AboutBody from '../data/AboutBody';
import { phone, email, linkedin, github } from '../data/ContactDetails';

// Home Page
const title = 'CATINELLA';
const floaty_list = ['Design', 'Create', 'Maintain'];

// About Page
const about = 'ABOUT';

// Contact Page
const contact = 'CONTACT';

const Home = ({ page }) => {
    return (
        <div>
            <Page currentPage={page}>
                <Title key='Title' text={title} align='Center'></Title>
                <Floaty key='Floaty-Bar' floaty_list={floaty_list}></Floaty>
            </Page>
            <Page name='about' currentPage={page}>
                <Title key='Title' text={about} align='Right'></Title>
                <Body key='Body' align='Right' text={AboutBody}></Body>
            </Page>
            <Page name='contact' currentPage={page}>
                <Title key='Title' text={contact} align='Left'></Title>
                <Body
                    key='Body'
                    align='Left'
                    elements={[phone, email, linkedin, github]}
                ></Body>
            </Page>
        </div>
    );
};

export default Home;
