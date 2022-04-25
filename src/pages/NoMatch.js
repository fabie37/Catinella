import Title from '../components/Title/Title';
import Body from '../components/Body/Body';
import Page from '../components/Page/Page';

// 404 Error Page
const title = '404';
const body = 'This page does not exist.';

const NoMatch = () => (
    <div>
        <Page name="404">
            <Title key="Title" text={title} align="Right"></Title>
            <Body key="Body" align="Right" text={body}></Body>
            <Body></Body>
        </Page>
    </div>
);

export default NoMatch;
