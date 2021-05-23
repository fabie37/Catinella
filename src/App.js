import './App.css';
import Floaty from './components/Floaty/Floaty';
import Title from './components/Title/Title';

const App = () => {
    const title = 'CATINELLA';
    const floaty_list = ['Design', 'Create', 'Maintain'];

    return (
        <div className='App'>
            <Title text={title}></Title>
            <Floaty floaty_list={floaty_list}></Floaty>
        </div>
    );
};

export default App;
