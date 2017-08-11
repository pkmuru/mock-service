var mockserver = require('mockserver-grunt');
var mockServerClient = require('mockserver-client').mockServerClient;

mockserver.start_mockserver({
    serverPort: 1080,

    verbose: true
}).then(function () {

    mockServerClient("localhost", 1080).mockAnyResponse(
        {
            'httpRequest': {
                'method': 'POST',
                'path': '/MYSERVICE',

                'body': {
                    'type': "STRING",
                    "string": "{\n\t'ID':'8086',\n\t'USERID':'123'\n}"
                }
            },
            'httpResponse': {
                'statusCode': 200,
                'body': '100',
                'delay': {
                    'timeUnit': 'MILLISECONDS',
                    'value': 250
                }
            }
        }
    );

    mockServerClient("localhost", 1080).mockAnyResponse(
        {
            'httpRequest': {
                'method': 'POST',
                'path': '/servicescore',

                'body': {
                    'type': "STRING",
                    "string": "{\n\t'ID':'9999',\n\t'USERID':'abc'\n}"
                }
            },
            'httpResponse': {
                'statusCode': 200,
                'body': '200',
                'delay': {
                    'timeUnit': 'MILLISECONDS',
                    'value': 250
                }
            }
        }
    );

});