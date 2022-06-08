import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { numberToWord } from './services/soap.service';

function App() {

  const [query, setQuery] = useState('');

  const setUserNameHandler = (e: any) => {
    setQuery(e.target.value);
  }

  const numberToWordHandler = (number: string) => {
    numberToWord(number).then((response: any) => console.log(response));
  }

  const soapCallHandler = (type: any) => {
    console.log(type);
    switch (type) {
      case 'findByPerson':
        numberToWordHandler(query);
        break;
      case 'getByName':
        break;
      case 'getListByName':
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-container">
          <Input className="width-100" onChange={setUserNameHandler}></Input>
          <Button onClick={soapCallHandler.bind(null, 'findByPerson')} classes="width-100">Get by Name</Button>
          <Button onClick={soapCallHandler.bind(null, 'getByName')} classes="width-100">Get DataSet by Name</Button>
          <Button onClick={soapCallHandler.bind(null, 'getListByName')} classes="width-100">Lookup City</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
