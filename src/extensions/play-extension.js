module.exports = async toolbox => {
    toolbox.play = async () => {
     const { http, api, print, parameters } = toolbox
     
     const param = parameters
    
     const result = await api()

     const { ok, problem, data } = await result.put('/me/player/play') 

    }
  }