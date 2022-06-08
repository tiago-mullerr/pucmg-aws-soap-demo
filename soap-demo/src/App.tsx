import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { celsiusToFahrenheit, lookupCity, parseXml } from './services/soap.service';

function App() {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const setQueryHandler = (e: any) => {
    setQuery(e.target.value);
  }

  const onParseComplete = (err: any, result: any) => {
    if (err) {
      throw err;
    }
    const json = JSON.stringify(result, null, 4);
    const obj = JSON.parse(json);
    setResult(json);
    return obj;
  }

  const requestCompleteHandler = (response: any) => {
    parseXml(response.response, onParseComplete);
  }

  const soapCallHandler = (type: any) => {
    switch (type) {
      case 'celsiustofahrenheit':
        celsiusToFahrenheit(query, '', requestCompleteHandler);
        break;
      case 'lookupCity':
        lookupCity(query, 'http://tempuri.org/SOAP.Demo.LookupCity', requestCompleteHandler);
        break;
      case 'getListByName':
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Web Services e APIs - SOAP Requester</h1>
        <div className="flex-container">
          <Input className="width-100" onChange={setQueryHandler}></Input>
          <Button onClick={soapCallHandler.bind(null, 'celsiustofahrenheit')} classes="width-100">Convert to Celsius</Button>
          <Button onClick={soapCallHandler.bind(null, 'lookupCity')} classes="width-100">Lookup City</Button>
          <div className='result-container'>{result}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
