import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className='container'>
      <Accordion
        title='What is your return policy?'
        content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      />
      <Accordion
        title='What is your return policy?'
        content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <Accordion
        title='What is your return policy?'
        content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
    </div>
  );
}

export default App;
