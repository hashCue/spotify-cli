const open = require('open')

module.exports = async toolbox => {
    toolbox.connect = async () => {
     const { http, print, system } = require('gluegun')
     const api = http.create({
         baseURL: 'https://spotify-cli.herokuapp.com'
     })

     const { data } = await api.get('/login') 
     console.log(data)
     print.info('opening a web browser for the log in flow')

    open(data)

    }
}