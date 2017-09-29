const http = require('http');

var callService = function(serviceName, n1, n2, type) {
    const SERVICES = {
        add: 'ADDITION_SERVICE',
        div: 'DIVISION_SERVICE',
        mul: 'MULTIPLICATION_SERVICE',
        sub: 'SUBTRACTION_SERVICE'
    };

    const SERVICE = SERVICES[serviceName];
    const SERVICE_PORT = process.env[`${SERVICE}_SERVICE_PORT`];
    const SERVICE_HOST = process.env[`${SERVICE}_SERVICE_HOST`];

    var options = {
        host: SERVICE_HOST,
        port: SERVICE_PORT,
        path: '/' + serviceName + '?a=' + n1+'&b='+n2,
        method: type
    };

    return new Promise(function(resolve, reject){
        var httpreq = http.request(options, function (response) {
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                return resolve(chunk);
            });
            response.on('end', function () {
                console.log('ok');
            })
        });

        httpreq.end();
    });
}

module.exports = {
    callService: callService
};
