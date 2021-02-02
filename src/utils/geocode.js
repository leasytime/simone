const request = require('postman-request')

const geocode = (encodeURIComponent, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent + '.json?access_token=pk.eyJ1IjoiamVyb2Vuc3dhcnQiLCJhIjoiY2tranQ4MXUwMjA4ZDJ1bW52cW9jc2JpaSJ9.HkMUbZB1v7AVdkkhIRYXQA&limit=1'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode