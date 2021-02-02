const request = require('postman-request') 

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=249ce50ee5d24752850afb50015e51a7&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Het is nu ' + body.current.temperature + ' graden celcius. Het voelt als ' + body.current.feelslike + ' graden celcius')
        }
    })
}

module.exports = forecast