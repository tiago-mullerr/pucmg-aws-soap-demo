const numberToWord = (number: string) => {
    const body = `<?xml version="1.0" encoding="utf-8"?>
                    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                    <soap:Body>
                        <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                        <ubiNum>${number}</ubiNum>
                        </NumberToWords>
                    </soap:Body>
                    </soap:Envelope>`;
    return fetch(`https://www.dataaccess.com/webservicesserver/NumberConversion.wso`, {
        method: 'post',
        headers: {
            'Content-Type': 'text/xml'
        },
        body: body
    });
}

export { numberToWord };