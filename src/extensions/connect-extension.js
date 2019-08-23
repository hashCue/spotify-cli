const open = require('open')

module.exports = async toolbox => {
    toolbox.connect = async () => {
     const { http, print, system } = require('gluegun')
     const api = http.create({
         baseURL: 'https://spotify-cli.herokuapp.com'
     })

     print.info('opening a web browser for the log in flow')
     const { data } = await api.get('/login') 

     open(data)
     
    }
}