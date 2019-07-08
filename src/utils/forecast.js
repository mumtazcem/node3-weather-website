const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/50af494e261886daf5b110e210c994cd/'+ latitude + ',' + longitude +'?units=si'

    request({url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' ' + body.currently.precipProbability + ' chance.')
        }
    })
}

module.exports = forecast