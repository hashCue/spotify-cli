const open = require('open')

module.exports = async toolbox => {
    toolbox.connect = async () => {
     const { http, print, system } = require('gluegun')
     const api = http.create({
         baseURL: 'http://localhost:8888'
     })

     const { ok, problem, data } = await api.get('/login') 
     await open(data)

    }
  }