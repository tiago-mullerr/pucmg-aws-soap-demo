const celsiusToFahrenheit = (number: string, soapAction: string, callBackFunction: any) => {
  const body = `<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
                    <soap12:Body>
                    <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
                        <Fahrenheit>${number}</Fahrenheit>
                    </FahrenheitToCelsius>
                    </soap12:Body>
                </soap12:Envelope>`;
  makeCORSRequest({
    method: 'POST',
    url: 'https://www.w3schools.com/xml/tempconvert.asmx',
    data: body
  }, soapAction, callBackFunction);
}

const lookupCity = (zip: string, soapAction: string, callBackFunction: any) => {
  const body = `<?xml version="1.0" encoding="utf-8"?>
                <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                  <soap:Body>
                    <LookupCity xmlns="http://tempuri.org">
                      <zip>${zip}</zip>
                    </LookupCity>
                  </soap:Body>
                </soap:Envelope>`;
  makeCORSRequest({
    method: 'POST',
    url: 'https://www.crcind.com:443/csp/samples/SOAP.Demo.cls',
    data: body
  }, soapAction, callBackFunction);
}

const makeCORSRequest = (options: any, soapAction: string, onComplete: any) => {
  var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function () {
    onComplete({ status: x.status, response: x.responseText });
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/soap+xml');
    if (soapAction !== '')
      x.setRequestHeader('SOAPAction', soapAction);
  }
  x.send(options.data);
}

const parseXml = (xml: string, onComplete: any) => {
  const xml2js = require('xml2js');
  const parsedObject = xml2js.parseString(xml, onComplete);
  return parsedObject;
}

export { celsiusToFahrenheit, lookupCity, parseXml };