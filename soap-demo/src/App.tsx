import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import { celsiusToFahrenheit, lookupCity, getListByName, parseXml } from './services/soap.service';

function App() {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const setQueryHandler = (e: any) => {
    setQuery(e.target.value);
  }

  const requestCompleteHandler = (response: any) => { 
  let resultado_json = parseXml(response.response);
  if(resultado_json != null) {
    setResult(resultado_json);
  }
 
  return resultado_json; 
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
        getListByName(query, 'http://tempuri.org/SOAP.Demo.GetListByName', requestCompleteHandler);
        break;
    }
  }
  console.log(requestCompleteHandler);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Web Services e APIs - SOAP Requester</h1>
        <div className="flex-container">
          <Input className="width-100" onChange={setQueryHandler}></Input>
          <Button onClick={soapCallHandler.bind(null, 'celsiustofahrenheit')} classes="width-100">Convert to Celsius</Button>
          <Button onClick={soapCallHandler.bind(null, 'lookupCity')} classes="width-100">Lookup City</Button>
          <Button onClick={soapCallHandler.bind(null, 'getListByName')} classes="width-100">Get List By Name</Button>
          <TextArea name="result" id="result" label="result:" value={ result } onChange= {(e) => {setResult(e.target.value)}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
// function parsedObject(response: any, onParseComplete: (err: any, result: any) => any) {
//   throw new Error('Function not implemented.');
// }

