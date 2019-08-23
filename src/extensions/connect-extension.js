const open = require('open')

module.exports = async toolbox => {
    toolbox.connect = async () => {
     const { http, print, system } = require('gluegun')
     const api = http.create({
         baseURL: 'https://spotify-cli.herokuapp.com'
     })

     const test = await api.get('/login') 
     console.log(test.data)
     print.info('opening a web browser for the log in flow')

     if (test.data) {
         open(test.data)
     } else {
         console.log(`we're in the elsegame now`)
         setTimeout(open(test.data), 3000)
     }

    }
}